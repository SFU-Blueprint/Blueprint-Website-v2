import { useEffect, useRef, useState } from "react";

/** Crosshair intersection in the SVG viewBox (2259 × 2916) */
const CROSSPOINT_WIDTH = 2259;
const CROSSPOINT_X_RATIO = 1539.5 / CROSSPOINT_WIDTH;
const CROSSPOINT_Y_RATIO = 595 / 2916;
const CROSSPOINT_X_OFFSET = CROSSPOINT_X_RATIO * CROSSPOINT_WIDTH;
/** Space between title bottom and the horizontal crosspoint line */
const CROSSPOINT_GAP_BELOW_TITLE = 14;

type CrosspointTitleProps = {
  lines: [string, string];
};

export default function CrosspointTitle({ lines }: CrosspointTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [crossTop, setCrossTop] = useState<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (!titleRef.current) return;
      setCrossTop(
        titleRef.current.getBoundingClientRect().bottom + CROSSPOINT_GAP_BELOW_TITLE
      );
    };

    updatePosition();

    const observer = new ResizeObserver(updatePosition);
    if (titleRef.current) observer.observe(titleRef.current);

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [lines]);

  return (
    <>
      {crossTop !== null && (
        <img
          src="/images/legal/crosspoint.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none fixed z-[1] block h-auto max-w-none"
          style={{
            top: crossTop,
            width: CROSSPOINT_WIDTH,
            left: `calc(100vw - var(--legal-crosspoint-right, 24px) - ${CROSSPOINT_X_OFFSET}px)`,
            transform: `translateY(-${CROSSPOINT_Y_RATIO * 100}%)`,
          }}
        />
      )}

      <h1
        ref={titleRef}
        className="relative z-10 m-0 text-left font-poppins text-[58px] font-medium leading-[85%] tracking-[-1.16px] text-bp-black max-md:text-[34px] max-md:tracking-[-0.68px]"
      >
        <span className="block">
          {lines[0]}
        </span>
        <span className="block">{lines[1]}</span>
      </h1>
    </>
  );
}
