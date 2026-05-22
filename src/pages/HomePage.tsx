import React, { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/shared/Button";
import Carousel from "../components/shared/Carousel";
import InteractiveCarousel from "../components/shared/Carousel-Interactive";
import { blueprintTestimonials, bpLogos } from "../constants/homepage-media";
import TestimonialCard from "../components/shared/TestimonialCard.tsx";
import { Link } from "react-router-dom";
import ProjectCard from "../components/home-page/HomeProjectCard";
import { Projects } from "../constants/projects";
import { ReactComponent as WindmillIcon } from "../assets/home/windmill.svg";
import { ReactComponent as HandshakeIcon } from "../assets/home/handshake.svg";
import { ReactComponent as GiftIcon } from "../assets/home/gift.svg";
import { createPortal } from "react-dom";

const HERO_SCROLLBAR_BG = "#2A2A2A";
const impactPoints = [
  {color: "bp-blue", text: "Reducing administrative workflows"},
  {color: "bp-accent-medium-blue", text: "Improving access to help and resources"},
  {color: "bp-accent-light-blue", text: "Increasing volunteer engagement"},
];
const WHO_WE_ARE_VIDEO_SRC = "/videos/who-we-are.mp4";
const WHO_WE_ARE_TEASER_SRC = "/videos/who-we-are-teaser.mp4";

const TFG_SCALE_STYLE = {
  // Desktop / tablet reference: 1440px — scales linearly between 780-1440,
  // clamped at 1 above 1440 so nothing grows past the design size.
  "--tfg-scale": "min(1px, calc(100vw / 1440))",
  // Tighter scale used by the card stack + big headline so they shrink faster
  // between 780-1440 (otherwise they crowd / overflow the right edge at the
  // lower end). Shifted formula: at 1440+ it caps at 1px, at 780 it's ~0.45
  // (vs. ~0.54 for --tfg-scale). This keeps the headline + cards inside the
  // section at narrow desktop widths while leaving the left text column
  // untouched.
  "--tfg-scale-tight":
    "min(1px, calc(max(100vw - 240px, 0px) / 1200))",
  // Mobile reference: 390px — scales linearly below 390, clamped at 1 above
  // so at 390-779 the design renders at its Figma-spec size.
  "--tfg-mscale": "min(1px, calc(100vw / 390))",
} as React.CSSProperties;

// Helper to turn a 1440-base design pixel value into a scaled CSS length.
const s = (designPx: number) => `calc(${designPx} * var(--tfg-scale))`;
// Tight-scale variant for the card stack + big headline (shrinks faster
// between 780-1440 than s() does, see --tfg-scale-tight above).
const st = (designPx: number) => `calc(${designPx} * var(--tfg-scale-tight))`;
// Mobile equivalent: 390-base design pixel → scaled CSS length.
const ms = (designPx: number) => `calc(${designPx} * var(--tfg-mscale))`;

// Hero feature cards (windmill / handshake / gift). Figma: 378×407px on a
// 1457px-wide desktop frame → normalized to the 1440 reference used by `s()`
// so dimensions scale with `--tfg-scale` like the rest of this section.
const HERO_FEATURE_CARD_W_DESIGN = (378 * 1440) / 1457;
const HERO_FEATURE_CARD_H_DESIGN = (407 * 1440) / 1457;

const PlayIcon = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 10 12"
    className={className}
    fill="currentColor"
  >
    <path d="M0 0.75v10.5a.75.75 0 0 0 1.166.624l8.25-5.25a.75.75 0 0 0 0-1.248L1.166.126A.75.75 0 0 0 0 .75Z" />
  </svg>
);

// "Who we are" pill. Only two sizes (desktop / mobile); switch at 780.
// Desktop spec (Figma):
//   padding: 12px 18px 12px 12px, gap 10px, radius 10px
//   default:  bg #1F1F1F at 90% opacity,       text white
//   hover:    bg bp-white,                      text bp-black
//   pressed:  bg bp-light-grey (#D9D9D9),       text bp-black
// Mobile / tablet-small spec (Figma):
//   padding: 8px 16px 8px 12px, gap 10px, radius 5px, 12px text
//   color state transitions follow the desktop pattern.
const WhoWeArePill = () => (
  <span
    aria-hidden="true"
    className={[
      "inline-flex items-center font-poppins font-medium whitespace-nowrap",
      "transition-colors duration-150 select-none",
      // Mobile: padding 8/16/8/12, gap 10, 12px text, radius 5
      "max-[779px]:rounded-[5px] max-[779px]:pt-2 max-[779px]:pr-4 max-[779px]:pb-2 max-[779px]:pl-3 max-[779px]:gap-[10px] max-[779px]:text-[12px]",
      "max-[779px]:bg-[#1F1F1F]/90 max-[779px]:text-bp-white",
      "group-hover:max-[779px]:bg-bp-white group-hover:max-[779px]:text-bp-black",
      "group-active:max-[779px]:bg-bp-light-grey group-active:max-[779px]:text-bp-black",
      // Desktop
      "min-[780px]:rounded-[10px] min-[780px]:pt-3 min-[780px]:pr-[18px] min-[780px]:pb-3 min-[780px]:pl-3 min-[780px]:gap-[10px] min-[780px]:text-[14px]",
      "min-[780px]:bg-[#1F1F1F]/90 min-[780px]:text-bp-white",
      "group-hover:min-[780px]:bg-bp-white group-hover:min-[780px]:text-bp-black",
      "group-active:min-[780px]:bg-bp-light-grey group-active:min-[780px]:text-bp-black",
    ].join(" ")}
  >
    <PlayIcon className="max-[779px]:h-3 max-[779px]:w-2.5 min-[780px]:h-[14px] min-[780px]:w-[12px]" />
    Who we are
  </span>
);

const VideoCardStack = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openVideo();
    }
  };

  return (
    <>
      {/* Shared hover group so every layer and the pill rotate together. */}
      <div
        className={[
          "relative group",
          "max-[779px]:w-[85%] max-[779px]:aspect-square",
        ].join(" ")}
      >
        <div
          className="relative w-full h-full min-[780px]:w-[var(--tfg-card-w)] min-[780px]:h-[var(--tfg-card-h)]"
          style={
            {
              "--tfg-card-w": st(634),
              "--tfg-card-h": st(646),
            } as React.CSSProperties
          }
        >
          {/* Purple backing card */}
          <div
            aria-hidden="true"
            className={[
              "absolute top-0 left-0 w-full aspect-square rounded-[10px] bg-bp-accent-purple",
              "origin-center rotate-[4.704deg] translate-x-[var(--tfg-purple-tx)] translate-y-[var(--tfg-purple-ty)]",
              "min-[780px]:transition-transform min-[780px]:duration-300 min-[780px]:ease-out",
              "min-[780px]:group-hover:rotate-[6.417deg]",
            ].join(" ")}
            style={
              {
                "--tfg-purple-tx": `calc(16 * var(--tfg-scale-tight))`,
                "--tfg-purple-ty": `calc(-4 * var(--tfg-scale-tight))`,
              } as React.CSSProperties
            }
          />

          {/* Blue backing card */}
          <div
            aria-hidden="true"
            className={[
              "absolute top-0 left-0 w-full aspect-square rounded-[10px] bg-bp-accent-blue",
              "origin-center rotate-[4.704deg]",
              "min-[780px]:transition-transform min-[780px]:duration-300 min-[780px]:ease-out",
              "min-[780px]:group-hover:-rotate-[2.277deg]",
            ].join(" ")}
          />

          {/* Main video card */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Play Who we are video"
            onClick={openVideo}
            onKeyDown={handleCardKeyDown}
            className={[
              "relative h-full w-full rounded-[10px] bg-bp-darkest-grey overflow-hidden cursor-pointer",
              "origin-center rotate-0",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bp-white",
              "min-[780px]:transition-transform min-[780px]:duration-300 min-[780px]:ease-out",
              "min-[780px]:group-hover:rotate-[3.5deg]",
            ].join(" ")}
          >
            <video
              aria-hidden="true"
              className="absolute inset-0 z-0 h-full w-full object-cover"
              src={WHO_WE_ARE_TEASER_SRC}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />          
            {/* Pill lives on the card so it rotates with it. */}
            <div
              className="absolute z-10 max-[779px]:top-3 max-[779px]:left-3 min-[780px]:top-[var(--tfg-pill-inset)] min-[780px]:left-[var(--tfg-pill-inset)]"
              style={{ "--tfg-pill-inset": st(20) } as React.CSSProperties}
            >
              <WhoWeArePill />
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen &&
  createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-label="Who we are video"
      onClick={closeVideo}
    >
      <div
        className="relative w-full max-w-[1000px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close video"
          onClick={closeVideo}
          className="absolute right-0 top-[-48px] rounded-[5px] bg-bp-white px-4 py-2 font-poppins text-sm font-medium text-bp-black hover:bg-bp-light-grey"
        >
          Close
        </button>

        <video
          className="w-full rounded-[10px] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          src={WHO_WE_ARE_VIDEO_SRC}
          controls
          autoPlay
          playsInline
        >
          Sorry, your browser does not support embedded videos.
        </video>
      </div>
    </div>,
    document.body
  )}
    </>
  );
};

const HomeHeroFeatureCards = () => {
  const cards: Array<{
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    squareClass: string;
    /** Optional SVG-only tweaks (keeps asset markup unchanged). */
    iconExtraClass?: string;
  }> = [
    { Icon: WindmillIcon, label: "all NPO sectors", squareClass: "bg-bp-orange" },
    { Icon: HandshakeIcon, label: "local partnerships", squareClass: "bg-bp-pink" },
    {
      Icon: GiftIcon,
      label: "100% pro bono",
      squareClass: "bg-bp-green",
      // Gift: viewBox reads larger on mobile than windmill/handshake — cap size; nudge down on desktop.
      iconExtraClass:
        "max-[779px]:translate-y-1 max-[779px]:!max-h-[64px] max-[779px]:!max-w-[36%] min-[780px]:translate-y-[calc(12px*var(--tfg-scale))]",
    },
  ];

  return (
    <div
      className={[
        "mt-[58px] flex w-full flex-col gap-[28px]",
        "min-[780px]:flex-row min-[780px]:justify-center min-[780px]:gap-[28px]",
      ].join(" ")}
      style={
        {
          "--hero-fc-w": s(HERO_FEATURE_CARD_W_DESIGN),
          "--hero-fc-h": s(HERO_FEATURE_CARD_H_DESIGN),
        } as React.CSSProperties
      }
      aria-label="Blueprint highlights"
    >
      {cards.map(({ Icon, label, squareClass, iconExtraClass }) => (
        <div
          key={label}
          className={[
            "flex min-h-0 w-full min-w-0 rounded-[10px] bg-[#1F1F1F]",
            // Mobile: row, indicator+label vs icon, space-between (Figma).
            "max-[779px]:h-[124px] max-[779px]:flex-row max-[779px]:items-center max-[779px]:justify-between max-[779px]:gap-3 max-[779px]:px-5 max-[779px]:py-4",
            // Desktop: fixed size from Figma (scaled via `s()`). Less pt / more pb so the icon
            // + label sit higher; extra breathing room under the label (top felt too empty).
            "min-[780px]:h-[var(--hero-fc-h)] min-[780px]:w-[var(--hero-fc-w)] min-[780px]:shrink-0 min-[780px]:flex-col min-[780px]:items-stretch min-[780px]:gap-2 min-[780px]:px-6 min-[780px]:pt-2 min-[780px]:pb-14",
          ].join(" ")}
        >
          <div
            className={[
              "flex flex-wrap items-center gap-2",
              "max-[779px]:min-w-0 max-[779px]:flex-1 max-[779px]:justify-start max-[779px]:text-left",
              "min-[780px]:order-2 min-[780px]:shrink-0 min-[780px]:flex-nowrap min-[780px]:justify-center min-[780px]:text-center min-[780px]:-mt-2",
            ].join(" ")}
          >
            <span
              className={`size-3 shrink-0 rounded-[2px] ${squareClass}`}
              aria-hidden
            />
            <span className="font-caveat text-[24px] leading-none text-bp-lightest-grey min-[630px]:text-[30px] min-[780px]:whitespace-nowrap min-[780px]:text-[36px]">
              {label}
            </span>
          </div>
          <div
            className={[
              "max-[779px]:contents",
              "min-[780px]:flex min-[780px]:min-h-0 min-[780px]:flex-1 min-[780px]:items-center min-[780px]:justify-center min-[780px]:order-1",
            ].join(" ")}
          >
            <Icon
              aria-hidden
              className={[
                "h-auto shrink-0",
                "max-[779px]:max-h-[76px] max-[779px]:w-auto max-[779px]:max-w-[42%]",
                "min-[780px]:w-full min-[780px]:max-w-[186px]",
                iconExtraClass ?? "",
              ].join(" ")}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const TechForGoodSection = () => (
  // Full-bleed bp-black. We break out of PageContainer's padding by using the
  // `w-screen + left-1/2 + -translate-x-1/2` technique so the section always
  // spans the viewport width regardless of any parent padding/max-width.
  //
  // Horizontal padding mirrors the navbar's own inset (nav p-5 = 20 plus
  // inner px-2 / md:px-6 / xl:px-32 → 28 / 44 / 148 px) so the content's
  // left edge is flush with the left edge of the logo card up top.
  <section
    className="relative w-screen left-1/2 -translate-x-1/2 flex bg-bp-black -mt-[108px] pt-[108px] pb-24 px-[28px] md:px-[44px] xl:px-[148px] min-[780px]:justify-start"
    style={TFG_SCALE_STYLE}
  >
    <div className="flex w-full flex-col">
    <div
      className={[
        "relative flex flex-col gap-10 w-full",
        // Desktop layout: text pinned left, card column pushed flush to the
        // right edge of the section's padded content area via justify-between.
        "min-[780px]:flex-row min-[780px]:items-start min-[780px]:justify-between",
        "min-[780px]:min-h-[var(--tfg-h)] min-[780px]:gap-[var(--tfg-gap)]",
      ].join(" ")}
      style={
        {
          "--tfg-h": s(716),
          "--tfg-gap": s(40),
        } as React.CSSProperties
      }
    >
      {/* Left text column wrapper.
          On mobile (<780px) this is `display: contents`, so TopText, the card
          column, and BottomText become direct siblings of the outer flex-col
          and are re-ordered via `order-*` classes to produce the mobile flow:
             TopText (we are + blueprint)
             → card + headline
             → BottomText (body + button)
          On desktop (>=780px) it becomes a normal flex column that contains
          both TopText and BottomText stacked, sitting to the left of the
          card column. */}
      <div
        className="contents min-[780px]:flex min-[780px]:flex-col min-[780px]:items-start min-[780px]:max-w-[var(--tfg-text-w)] min-[780px]:pt-[var(--tfg-text-pt)]"
        style={
          {
            "--tfg-text-w": s(372),
            "--tfg-text-pt": s(32),
          } as React.CSSProperties
        }
      >
        {/* TopText: "we are" + "blueprint" */}
        <div className="flex flex-col items-start order-1 min-[780px]:order-none">
          {/* "we are"
              Mobile @390: Caveat 40/100%/-1.2/400
              Desktop @1440: Caveat 64/100%/-1.92/400 */}
          <p
            className="font-caveat font-normal text-bp-lightest-grey leading-none text-[length:var(--tfg-we-are-m)] tracking-[var(--tfg-we-are-m-ls)] min-[780px]:text-[length:var(--tfg-script)] min-[780px]:tracking-[var(--tfg-script-ls)]"
            style={
              {
                "--tfg-we-are-m": ms(40),
                "--tfg-we-are-m-ls": ms(-1.2),
                "--tfg-script": s(64),
                "--tfg-script-ls": s(-1.92),
              } as React.CSSProperties
            }
          >
            we are
          </p>
          {/* "blueprint"
              Mobile @390: Poppins 28/120%/-0.56/600
              Desktop @1440: Poppins 50/100%/-1/500 */}
          <h1
            className="font-poppins font-semibold leading-none text-bp-lightest-grey text-[length:var(--tfg-h1-m)] tracking-[var(--tfg-h1-m-ls)] max-[779px]:mt-[var(--tfg-h1-m-mt)] min-[780px]:font-medium min-[780px]:text-[length:var(--tfg-h1)] min-[780px]:tracking-[var(--tfg-h1-ls)] min-[780px]:mt-[var(--tfg-h1-mt)]"
            style={
              {
                "--tfg-h1-m": ms(28),
                "--tfg-h1-m-ls": ms(-0.56),
                "--tfg-h1-m-mt": ms(-4),
                "--tfg-h1": s(50),
                "--tfg-h1-ls": s(-1),
                "--tfg-h1-mt": s(-6),
              } as React.CSSProperties
            }
          >
            blueprint
          </h1>
        </div>

        {/* BottomText: body copy + "Learn about us" button.
            order-3 on mobile so it renders AFTER the card column (order-2).
            order-none on desktop so it sits directly below TopText inside
            the left text column. */}
        <div className="flex flex-col items-start order-3 min-[780px]:order-none">
          {/* Body — Poppins 16, weight 400, line-height normal, 351px wide.
              Mobile: no top margin, the outer flex-col's gap-10 handles the
              spacing between the card column and BottomText. Desktop: s(28)
              top margin for spacing below "blueprint" inside the left col. */}
          {/* Body copy.
              Mobile @390 (Figma): Poppins 14px, weight 400, line-height
                normal (CSS keyword), color bp-lightest-grey (#F3F3F3),
                stretched to fill the parent's cross-axis.
              Desktop (Figma @1150): Poppins 16px fixed, 284px fixed width,
                weight 400, line-height normal — does NOT vw-scale (matches
                the pill + CTA button policy of "two sizes only: desktop
                and mobile"). Top margin still vw-scales for vertical rhythm.
              max-[779px]:mt-[30px] + outer gap-10 (40px) = 70px gap between
              "social good" and body copy on mobile. */}
          <p
            className="font-poppins font-normal text-bp-lightest-grey leading-[normal] max-[779px]:text-[14px] max-[779px]:self-stretch max-[779px]:mt-[30px] min-[780px]:text-[16px] min-[780px]:w-[284px] min-[780px]:mt-[var(--tfg-body-mt)]"
            style={
              {
                "--tfg-body-mt": s(28),
              } as React.CSSProperties
            }
          >
            Our student teams have been committed to promoting public welfare
            since 2023. We build apps, websites, and digital products for
            impactful non profit organizations in BC, Canada, free of charge.
          </p>
          {/* Button — 200x60 fixed at desktop; full-width on mobile so it
              matches the body paragraph's visual alignment in the stacked
              layout. Gap above is a flat 40px at every breakpoint to match
              the fixed button size (no vw scaling). */}
          <Button
            variant="primary"
            className={[
              "mt-10 uppercase",
              // Force mobile sizing below the layout break (Button's built-in
              // md: kicks in at 768; we want the switch exactly at 780).
              // mt-[21px] overrides the base mt-10 so the body→button gap is
              // 21px on mobile per Figma.
              "max-[779px]:!mt-[21px] max-[779px]:!h-[52px] max-[779px]:!text-[14px] max-[779px]:!w-full",
              // Desktop: fixed 200x60 with 14px 44px padding per Figma.
              "min-[780px]:!w-[200px] min-[780px]:!h-[60px] min-[780px]:!px-[44px] min-[780px]:!py-[14px]",
            ].join(" ")}
          >
            Learn about us
          </Button>
        </div>
      </div>

      {/* Right / bottom stacked video card area. Width matches the card so
          the headline can be anchored to the same left edge as the card and
          layered on top via negative margin + z-index. */}
      {/* Right / card column.
          Mobile: order-2 so it slots between TopText (order-1) and BottomText
          (order-3) in the outer flex-col (the outer's gap-10 handles vertical
          spacing between all three). Desktop: order-none, pinned to the right
          of the row via justify-between. */}
      <div
        className="relative flex flex-col order-2 max-[779px]:items-center min-[780px]:items-start min-[780px]:order-none min-[780px]:w-[var(--tfg-right-w)] min-[780px]:shrink-0 min-[780px]:pt-[var(--tfg-right-pt)] min-[780px]:mr-[38px]"
        style={
          {
            // Right-column width follows the card (tight scale) so the column
            // shrinks alongside it instead of leaving a gap.
            "--tfg-right-w": st(634),
            "--tfg-right-pt": s(32),
          } as React.CSSProperties
        }
      >
        <VideoCardStack />

        {/* Headline. Desktop specs (20% smaller than original Figma):
            "we build tech for" — Poppins 96/weight 500/lh 90%/ls -2.88px
            "social good"       — Caveat 160/weight 700/lh 100%/ls -4.8px
            Both #F4F4F4 ≈ bp-lightest-grey. Sizes/tracking scale with vw via s().

            On desktop the headline sits ON TOP of the video card: relative +
            z-10 to render above the card, and a negative top margin to pull
            it back up so it overlaps the lower portion of the stack.
            whitespace-nowrap keeps each typographic line on its own row. */}
        {/* Headline typography specs:
              Mobile: unchanged (15%-shrunk-from-Figma ms() values).
              Desktop "we build tech for" / "social good": ×0.8 vs prior artboard.
              "we build tech for" — Poppins weight 500, line-height 90%
                 Mobile @390:  40.1455px / -1.20445px letter-spacing (ms)
                 Desktop@1440: 96px    / -2.88px   letter-spacing
              "social good"        — Caveat weight 700, line-height 100%
                 Mobile @390:  66.9086px / -2.00685px letter-spacing (ms)
                 Desktop@1440: 160px   / -4.8px    letter-spacing
            Color #F4F4F4 ≈ bp-lightest-grey.

            On desktop the headline sits ON TOP of the video card: relative +
            z-10 to render above the card, and a negative top margin to pull
            it back up so it overlaps the lower portion of the stack.
            whitespace-nowrap keeps each typographic line on its own row. */}
        <h2
          className="relative z-10 font-poppins font-medium text-bp-lightest-grey whitespace-nowrap leading-[0.9] text-[length:var(--tfg-h2-m)] tracking-[var(--tfg-h2-m-ls)] mt-[var(--tfg-h2-m-overlap)] max-[779px]:self-start min-[780px]:text-[length:var(--tfg-h2)] min-[780px]:tracking-[var(--tfg-h2-ls)] min-[780px]:mt-[var(--tfg-h2-overlap)] min-[780px]:ml-[var(--tfg-h2-ml)]"
          style={
            {
              // Mobile headline: original ms() sizing (not affected by desktop −20%).
              "--tfg-h2-m": ms(40.1455),
              "--tfg-h2-m-ls": ms(-1.20445),
              // Negative mobile margin-top so the headline overlays the lower
              // portion of the card stack (same idea as desktop).
              "--tfg-h2-m-overlap": `calc(-59.5 * var(--tfg-mscale))`,
              // Headline uses the tight scale so it shrinks in step with the
              // card stack (same scale → consistent overlay relationship)
              // and doesn't overflow the section at narrow desktop widths.
              "--tfg-h2": st(120 * 0.8),
              "--tfg-h2-ls": st(-3.6 * 0.8),
              // Negative desktop margin-top to pull the headline up so it
              // overlays the lower portion of the video card stack.
              "--tfg-h2-overlap": `calc(${-360 * 0.8} * var(--tfg-scale-tight))`,
              // Nudge the headline left of the card-frame's left edge.
              "--tfg-h2-ml": `calc(${-120 * 0.8} * var(--tfg-scale-tight))`,
            } as React.CSSProperties
          }
        >
          we build
          <br />
          tech for
          {/* "social good": rendered as a block so it gets its own line
              without needing a <br>. Caveat's built-in ascender space makes
              leading-none still look gappy next to the Poppins line above,
              so we pull it up with a scaled negative margin-top. */}
          <span
            className="block font-caveat font-bold leading-none text-[length:var(--tfg-sg-m)] tracking-[var(--tfg-sg-m-ls)] mt-[var(--tfg-sg-m-mt)] ml-[var(--tfg-sg-m-ml)] min-[780px]:text-[length:var(--tfg-sg)] min-[780px]:tracking-[var(--tfg-sg-ls)] min-[780px]:mt-[var(--tfg-sg-mt)] min-[780px]:ml-[var(--tfg-sg-ml)]"
            style={
              {
                // Mobile "social good": original ms() sizing (unchanged vs desktop −20%).
                "--tfg-sg-m": ms(66.9086),
                "--tfg-sg-m-ls": ms(-2.00685),
                "--tfg-sg-m-mt": `calc(-20.4 * var(--tfg-mscale))`,
                "--tfg-sg-m-ml": `calc(-4.25 * var(--tfg-mscale))`,
                // "social good" tracks the headline (tight scale) so the
                // two lines of the title shrink together.
                "--tfg-sg": st(200 * 0.8),
                "--tfg-sg-ls": st(-6 * 0.8),
                "--tfg-sg-mt": `calc(${-60 * 0.8} * var(--tfg-scale-tight))`,
                "--tfg-sg-ml": `calc(${-14 * 0.8} * var(--tfg-scale-tight))`,
              } as React.CSSProperties
            }
          >
            social good
          </span>
        </h2>
      </div>
    </div>
    <HomeHeroFeatureCards />
    </div>
  </section>
);

/** Mosaic + Our Community Bikes (was `Projects[5]` — out of range; only 0–4 exist). */
const featuredProjects = Projects.filter((p) =>
  ["mosaic", "our-community-bikes", "reel-youth"].includes(p.slug)
);

const PROJECTS_CARD_STICKY_TOP = 40;
const PROJECTS_CARD_GAP = 16;
/** Visible strip of each buried card above the card in front (2 strips = 2 cards behind the last). */
const PROJECTS_CARD_PEEK_HEIGHT = 20;

const getProjectsCardStickyTop = (index: number) =>
  PROJECTS_CARD_STICKY_TOP + index * PROJECTS_CARD_PEEK_HEIGHT;

const PROJECTS_CARD_SCROLL_ANIMATIONS = [
  { minScale: 0.7, minBrightness: 0.7 },
  { minScale: 0.8, minBrightness: 0.8 },
] as const;

const ProjectsCardStack = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateCardTransforms = useCallback(() => {
    const lastIndex = featuredProjects.length - 1;
    const lastCard = cardRefs.current[lastIndex];
    const lastStickyTop = getProjectsCardStickyTop(lastIndex);
    const isStackComplete =
      lastCard != null &&
      lastCard.getBoundingClientRect().top <= lastStickyTop + 1;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardStickyTop = getProjectsCardStickyTop(index);
      const config = PROJECTS_CARD_SCROLL_ANIMATIONS[index];

      if (!config) {
        card.style.transform = "scale3d(1, 1, 1)";
        card.style.filter = "brightness(1)";
        return;
      }

      const nextCard = cardRefs.current[index + 1];
      if (!nextCard) {
        card.style.transform = "scale3d(1, 1, 1)";
        card.style.filter = "brightness(1)";
        return;
      }

      const nextTop = nextCard.getBoundingClientRect().top;
      const scrollDistance = card.offsetHeight + PROJECTS_CARD_GAP;
      let progress = Math.min(
        Math.max(1 - (nextTop - cardStickyTop) / scrollDistance, 0),
        1
      );

      if (isStackComplete) {
        progress = 1;
      }

      const scale = 1 - progress * (1 - config.minScale);
      const brightness = 1 - progress * (1 - config.minBrightness);

      card.style.transform = `scale3d(${scale}, ${scale}, 1)`;
      card.style.filter = `brightness(${brightness})`;
    });
  }, []);

  useLayoutEffect(() => {
    updateCardTransforms();
    window.addEventListener("scroll", updateCardTransforms, { passive: true });
    window.addEventListener("resize", updateCardTransforms);
    return () => {
      window.removeEventListener("scroll", updateCardTransforms);
      window.removeEventListener("resize", updateCardTransforms);
    };
  }, [updateCardTransforms]);

  return (
    <section className="w-full min-w-0">
      <div className="flex w-full min-w-0 flex-col gap-4">
        {featuredProjects.map((project, index) => (
          <div
            key={project.slug}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`sticky z-[10 + ${index}] origin-top`}
            style={{
              top: getProjectsCardStickyTop(index),
              willChange:
                index < PROJECTS_CARD_SCROLL_ANIMATIONS.length
                  ? "transform, filter"
                  : undefined,
            }}
          >
            <ProjectCard
              project={{
                LOGO_PLACEHOLDER: project.image
                  ? project.image
                  : "https://placehold.co/76x76",
                COVER_PLACEHOLDER: project.popupimage
                  ? project.popupimage
                  : "https://placehold.co/517x354",
                TITLE_PLACEHOLDER: project.description,
                CLIENT_PLACEHOLDER: project.name,
                SERVICE_PLACEHOLDER: project.tags?.[0] ?? "Web App",
                SECTOR_PLACEHOLDER:
                  project.tags?.[1] ?? project.tags?.[0] ?? "NPO",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const HomePage = () => {
  // Only tint <html> (not <body>) so the scrollbar gutter matches the hero
  // while the rest of the page still renders on the light body background.
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.backgroundColor;
    html.style.backgroundColor = HERO_SCROLLBAR_BG;
    return () => {
      html.style.backgroundColor = prev;
    };
  }, []);
  return (
    <PageContainer>
      {/* Hero: "tech for good" section */}
      <TechForGoodSection />


      {/* Impact + projects: mx-auto wrapper so centering works at every breakpoint */}
      <section className="w-full pt-[120px] max-md:pt-[75px]">
        <div className="mx-auto flex w-full flex-col items-center gap-12 xl:gap-24 xl:flex-row xl:items-start 
        w-full justify-between"> {/* max-w-[1196px] xl:justify-center */}
        {/* Left side Heading and logos */}
        <div className="w-full max-w-[440px] shrink-0 max-md:max-w-[90vw] xl:sticky xl:top-[25%] z-[10] xl:pl-[1.5vw]">
          {/* Bullet points and logos */}
          <div className="flex w-full flex-col gap-9 md:gap-12">
            <span className="text-bp-black text-mobile-heading-m-reg font-normal font-['Poppins'] 
            md:w-72 justify-start md:text-heading-s-reg leading-8 md:leading-[50.40px]">
              <h2>
                impact that 
              </h2>
                <strong className="font-semibold">speaks for itself</strong>
            </span>
              {/* bullet points */}
              <div className="flex flex-col justify-start items-start gap-[9px]">

              {impactPoints.map((point) => (
                <div className="flex flex-row gap-[18px] justify-center items-center font-poppins 
                md:justify-start">
                  <div className={`w-4 h-4 bg-${point.color} rounded-[3px] shrink-0`}/>
                  {point.text}
                </div>
              ))}
              </div>

              {/* logos */}
              <div className="relative w-full">
                
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-36 bg-gradient-to-r from-bp-lightest-grey to-transparent" />
                
                <Carousel>
                {bpLogos.map((logo) => (
                  <img className="h-full w-full object-contain" key={logo.id} src={logo.image} alt={logo.id.toString()} />
                ))}
                </Carousel>
                
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-36 bg-gradient-to-l from-bp-lightest-grey to-transparent" />
              </div>
          </div>

          <div className="pt-10 w-full max-md:hidden">
            <Link to="/projectspage">
            <Button variant="tertiary" className="!font-light uppercase max-xl:!basis-auto max-xl:!w-full !w-52 max-md:!w-full !h-15">see all projects</Button>
            </Link>
          </div>

            
        </div>
          

        {/* Projects preview */}
        <div className="flex flex-1 w-full max-w-[708px] min-w-0 shrink-0 justify-center max-md:pt-[30px] xl:sticky xl:top-[40px]">
          <ProjectsCardStack />
        </div>
        </div>
        <div className="mx-auto w-full max-w-[440px] pt-[73px] max-md:max-w-[90vw] md:hidden">
            <Link to="/projectspage">
            <Button variant="tertiary" className="!font-normal uppercase !w-52 max-md:!w-full !h-15">see all projects</Button>
            </Link>
        </div>
      </section>

      {/* Students / testimonials */}
        {/* Students: turn real projects into real opportunities */}
        <div className="flex flex-row w-full min-w-0 justify-between pt-[73px] md:pt-[120px] md:pb-[60px] font-['Poppins'] justify-between gap-12">
              <div className="flex flex-1 w-full min-w-0 flex-col gap-6 max-w-[660px] text-zinc-800 max-md:min-w-[345px]">
                  <div className="text-heading-s-reg max-md:text-mobile-heading-m-reg md:min-w-[518px] max-w-[400px]">students: turn real projects into 
                  <span className="font-semibold "> real opportunities. </span>
                  </div>
                  <div className="flex flex-1 text-body-m-reg leading-8 max-md:text-mobile-body-m-reg">By working with a passionate interdisciplinary team and making a real impact in their community, our members have gained invaluable skills,
                    allowing them to pursue successful careers in tech. Join us to see the Blueprint difference. 
                   </div>
                </div>
              {/* button */}
              <div className="max-md:hidden justify-end shrink-0">
                <Button variant="tertiary" className="uppercase !font-light !w-48 !h-16">join us</Button>             
              </div>
        </div>

        {/* testimonials */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] h-[390px] w-screen pt-[60px] max-md:pt-[52px]">
              <InteractiveCarousel autoScrollSpeed={1}>
                {blueprintTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} name={testimonial.name} role={testimonial.role} picture={testimonial.image} caption={testimonial.caption} />
                ))}
              </InteractiveCarousel>
              
        </div>

        <div className="md:hidden pb-10">
          <Button variant="tertiary" className="uppercase !font-normal !w-full !h-16">join us</Button>          
        </div>


    {/* Upcoming Events Section*/}
    {/* Upcoming Events Image */}
    <div className="md:min-w-[82vw] h-full overflow-hidden rounded-[5px] max-md:pt-[54px] md:pt-[120px] max-md:pb-6 md:pr-[2vw] xl:pr-[6vw] 2xl:pr-[2vw]">
        <img
          className="w-full h-full"
          src="/images/home/photos/group.png"
          alt="Group Photo"
        />
    </div>

    {/* Upcoming Event Card */}
    {/* desktop height is 346 - 96 = 250px. the additional slant top is 96px.*/}
    <div className="flex justify-end max-md:justify-center justify-end items-end">


      <div className="bg-bp-blue rounded-[5px] text-bp-white relative flex w-full md:max-w-[737px] pl-12 pr-[50px] pb-[72px] h-[350px] 
      max-md:pl-[26px] pr-[22px] max-md:pb-[61px] max-md:pt-[34px] flex flex-col gap-[32px] min-w-[347px] max-md:h-[336px] md:translate-y-[-50%]"
      style={{ 
        clipPath: 'url(#clip-slant)',
        borderRadius: '5px'
      }}>
        
        <svg className="max-md:hidden" aria-hidden>
        <defs>
          <clipPath id="clip-slant" clipPathUnits="objectBoundingBox">
          <path d=" M 0,0 Q 0,0 0,0.13
          C 0.02,0.05 0.1,0.4 0.008,0.117
          L 1,0 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>
    
          {/* Top section */}
          <div className="flex flex-col gap-[25px]">
            <div className="flex justify-between items-end max-md:flex-col max-md:items-stretch max-md:gap-[26px]">
              <div className="flex flex-col gap-[16px] w-[366px] max-md:w-full ">
                <p className=" max-md:font-normal  
                md:text-body-s-reg  text-[10px] uppercase leading-normal ">
                  upcoming event: 
                </p>
                <p className="font-poppins max-md:font-normal max-md:leading-8 text-[36px] leading-8 tracking-[-0.72px] max-md:text-2xl">
                  blueprint info session
                </p>
              </div>
              
              <div>
                <Button
                  variant="secondary"
                  className="shrink-0 max-md:w-full w-[200px]"
                >
                  <span className="font-semibold text-sm !font-normal">RSVP</span>
                </Button>
              </div>

            </div>
            
            <div className="w-full h-px bg-white/30 " />
          </div>

          {/* Bottom section: date + location */}
          <div className="flex flex-row gap-[52px] max-md:gap-[24px] font-poppins w-full justify-start">
            <div className="flex flex-col max-md:w-full md:gap-[10px] gap-[6px] md:font-medium max-md:font-normal text-[10px] leading-normal">
              <p className=" md:text-[14px] uppercase leading-normal font-normal">
                DATE AND TIME:
              </p>
              <p className="flex flex-col md:flex-row gap-1 text-body-s-reg font-light">
                September 10, {/* date */}
                <span>2026, 7 PM</span> {/* time */}
                  
              </p>
            </div>
            <div className="flex flex-col max-md:w-full md:gap-[10px] gap-[6px] md:font-medium max-md:font-normal text-[10px] uppercase leading-normal ">
              <p className=" md:text-[14px] uppercase leading-normal font-normal">
                LOCATION:
              </p>
              <p className="font-poppins leading-normal flex flex-col md:flex-row gap-1 text-body-s-reg font-light">
                SFU Burnaby {/* location */}
                <span>Campus, ASB 9720</span> {/* location */}
              </p>
            </div>
          </div>
        </div>
      </div>

    </PageContainer>
  );
};

export default HomePage;
