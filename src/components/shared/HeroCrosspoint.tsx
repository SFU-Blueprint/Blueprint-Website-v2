/**
 * Shared hero crosspoint for landing pages (Students, Projects, Sponsor, Nonprofits).
 * PNG crosshair + dotted-path video share one anchor so the (+) stays centered in the video.
 *
 * Place as a sibling OUTSIDE PageContainer (inside a full-width relative wrapper)
 * so horizontal page padding cannot clip the graphic.
 *
 * Desktop: horizontal crosshair line rests under the page title.
 * Mobile: horizontal crosshair line rests above the page title.
 *
 * Safari (macOS, iPad, iPhone) cannot mix-blend or CSS-mask <video> — it paints
 * a black plate. Every viewport draws the same video onto a canvas with multiply
 * so the animation plays without that black rectangle.
 */

import { useEffect, useRef, useState } from "react";

const CROSSPOINT_IMG = "/images/crosspoint.png";
/** Crosshair location inside crosspoint.png (2260 × 1496) */
const CROSS_X_RATIO = 1529 / 2260;
const CROSS_Y_RATIO = 607 / 1496;
/** Matches `bp-lightest-grey` — baked under multiply so the video fill never shows as black. */
const PAGE_BG = "#F3F3F3";

type HeroCrosspointProps = {
  videoSrc: string;
  /** Outer wrapper classes — only for non-hero placements (e.g. Stay Updated). */
  className?: string;
  /** Override anchor — only for non-hero placements. */
  anchorClassName?: string;
  videoClassName?: string;
  imageClassName?: string;
  /** Set false when layering extra colored path videos on the same anchor. */
  showImage?: boolean;
};

/**
 * From page top: nav pad 108 + title pad 40 + 72px title → just under baseline.
 */
export const HERO_CROSSPOINT_ANCHOR = [
  "absolute",
  "md:top-[248px] md:right-[clamp(48px,8vw,120px)]",
  "max-md:top-[120px] max-md:right-[24px]",
].join(" ");

export const HERO_CROSSPOINT_VIDEO =
  "w-[620px] md:w-[790px] max-md:w-[260px]";
export const HERO_CROSSPOINT_IMAGE =
  "w-[2260px] max-md:w-[1200px]";

/** Soften hard-cut line ends on the crosshair PNG (intersected axis fades). */
const LINE_END_FADE_MASK = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
  WebkitMaskComposite: "source-in" as const,
  maskImage:
    "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
  maskComposite: "intersect" as const,
};

export default function HeroCrosspoint({
  videoSrc,
  className = "h-[820px]",
  anchorClassName = HERO_CROSSPOINT_ANCHOR,
  videoClassName = HERO_CROSSPOINT_VIDEO,
  imageClassName = HERO_CROSSPOINT_IMAGE,
  showImage = true,
}: HeroCrosspointProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let raf = 0;
    let alive = true;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    const draw = () => {
      if (!alive) return;
      const w = video.videoWidth;
      const h = video.videoHeight;
      if (w > 0 && h > 0) {
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = PAGE_BG;
        ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = "multiply";
        ctx.drawImage(video, 0, 0, w, h);
      }
      raf = requestAnimationFrame(draw);
    };

    const onReady = () => {
      setVideoReady(true);
      tryPlay();
      cancelAnimationFrame(raf);
      draw();
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    if (video.readyState >= 2) onReady();
    else video.addEventListener("loadeddata", onReady);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", onReady);
    };
  }, [videoSrc]);

  const mediaStyle = { transform: "translate(-50%, -50%)" } as const;

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 z-0 ${className}`}
      aria-hidden
    >
      <div className={anchorClassName}>
        {showImage && (
          <img
            src={CROSSPOINT_IMG}
            alt=""
            className={`absolute left-0 top-0 max-w-none h-auto ${imageClassName}`}
            style={{
              transform: `translate(-${CROSS_X_RATIO * 100}%, -${CROSS_Y_RATIO * 100}%)`,
              ...LINE_END_FADE_MASK,
            }}
          />
        )}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className={`absolute left-0 top-0 max-w-none bg-transparent opacity-0 ${videoClassName}`}
          style={mediaStyle}
        >
          <source src={videoSrc} type="video/webm" />
        </video>
        <canvas
          ref={canvasRef}
          className={`absolute left-0 top-0 max-w-none h-auto ${videoClassName} transition-opacity duration-200 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          style={mediaStyle}
        />
      </div>
    </div>
  );
}
