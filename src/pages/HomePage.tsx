import React, { useEffect } from "react";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/shared/Button";
import { ReactComponent as WindmillIcon } from "../assets/home/windmill.svg";
import { ReactComponent as HandshakeIcon } from "../assets/home/handshake.svg";
import { ReactComponent as GiftIcon } from "../assets/home/gift.svg";

const HERO_SCROLLBAR_BG = "#2A2A2A";

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
  <button
    type="button"
    aria-label="Play: who we are"
    className={[
      "inline-flex items-center font-poppins font-medium whitespace-nowrap",
      "transition-colors duration-150 select-none cursor-pointer",
      // Mobile: padding 8/16/8/12, gap 10, 12px text, radius 5
      "max-[779px]:rounded-[5px] max-[779px]:pt-2 max-[779px]:pr-4 max-[779px]:pb-2 max-[779px]:pl-3 max-[779px]:gap-[10px] max-[779px]:text-[12px]",
      // Mobile color states (same pattern as desktop)
      "max-[779px]:bg-[#1F1F1F]/90 max-[779px]:text-bp-white",
      "max-[779px]:hover:bg-bp-white max-[779px]:hover:text-bp-black",
      "max-[779px]:active:bg-bp-light-grey max-[779px]:active:text-bp-black",
      // Desktop: padding 12/18/12/12, gap 10, 14px text, radius 10
      "min-[780px]:rounded-[10px] min-[780px]:pt-3 min-[780px]:pr-[18px] min-[780px]:pb-3 min-[780px]:pl-3 min-[780px]:gap-[10px] min-[780px]:text-[14px]",
      // Desktop states
      "min-[780px]:bg-[#1F1F1F]/90 min-[780px]:text-bp-white",
      "min-[780px]:hover:bg-bp-white min-[780px]:hover:text-bp-black",
      "min-[780px]:active:bg-bp-light-grey min-[780px]:active:text-bp-black",
    ].join(" ")}
  >
    <PlayIcon className="max-[779px]:h-3 max-[779px]:w-2.5 min-[780px]:h-[14px] min-[780px]:w-[12px]" />
    Who we are
  </button>
);

const VideoCardStack = () => (
  // Shared hover group so every layer (and the pill) rotates together.
  // Mobile: default only (no hover transforms).
  <div
    className={[
      "relative group",
      // Mobile: 85% of the column width (was w-full) — explicit 15% reduction
      // per design. aspect-square keeps it a square so the height shrinks too.
      "max-[779px]:w-[85%] max-[779px]:aspect-square",
    ].join(" ")}
  >
    {/* Desktop sizing wrapper: picks up the scaled width/height from CSS vars.
        Uses the TIGHT scale (st) so the card stack shrinks faster between
        780-1440 than the rest of the section, preventing crowding/overflow
        at narrow desktop widths. */}
    <div
      className="relative w-full h-full min-[780px]:w-[var(--tfg-card-w)] min-[780px]:h-[var(--tfg-card-h)]"
      style={
        {
          "--tfg-card-w": st(634),
          "--tfg-card-h": st(646),
        } as React.CSSProperties
      }
    >
      {/* Purple backing card — 634x634 square, rounded 10px, rotate 4.704deg.
          Offset up-and-right so it pokes out from behind the blue card. The
          nudge uses translate (doesn't affect the card's angle). */}
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
      {/* Blue backing card — 634x634 square, rounded 10px, rotate 4.704deg */}
      <div
        aria-hidden="true"
        className={[
          "absolute top-0 left-0 w-full aspect-square rounded-[10px] bg-bp-accent-blue",
          "origin-center rotate-[4.704deg]",
          "min-[780px]:transition-transform min-[780px]:duration-300 min-[780px]:ease-out",
          "min-[780px]:group-hover:-rotate-[2.277deg]",
        ].join(" ")}
      />
      {/* Main video card (front) */}
      <div
        className={[
          "relative h-full w-full rounded-[10px] bg-bp-darkest-grey overflow-hidden",
          "origin-center rotate-0",
          "min-[780px]:transition-transform min-[780px]:duration-300 min-[780px]:ease-out",
          "min-[780px]:group-hover:rotate-[3.5deg]",
        ].join(" ")}
      >
        {/* Video placeholder surface (swap in a real <video> later). Rendered
            first and at z-0 so it sits behind the pill. */}
        <div aria-hidden="true" className="absolute inset-0 z-0 bg-bp-darkest-grey" />
        {/* Pill lives on the card so it rotates with it. z-10 keeps it above
            the video/placeholder surface. */}
        <div
          className="absolute z-10 max-[779px]:top-3 max-[779px]:left-3 min-[780px]:top-[var(--tfg-pill-inset)] min-[780px]:left-[var(--tfg-pill-inset)]"
          style={{ "--tfg-pill-inset": st(20) } as React.CSSProperties}
        >
          <WhoWeArePill />
        </div>
      </div>
    </div>
  </div>
);

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
            className="font-poppins font-semibold leading-[1.2] text-bp-lightest-grey text-[length:var(--tfg-h1-m)] tracking-[var(--tfg-h1-m-ls)] min-[780px]:font-medium min-[780px]:leading-none min-[780px]:text-[length:var(--tfg-h1)] min-[780px]:tracking-[var(--tfg-h1-ls)] min-[780px]:mt-[var(--tfg-h1-mt)]"
            style={
              {
                "--tfg-h1-m": ms(28),
                "--tfg-h1-m-ls": ms(-0.56),
                "--tfg-h1": s(50),
                "--tfg-h1-ls": s(-1),
                "--tfg-h1-mt": s(4),
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

      {/* Mission Statement */}
      <section className="m-4">
        <p>Introduction paragraph placeholder</p>
        <hr />
      </section>

      {/* Projects preview */}
      <section className="m-4">
        <h2>our partnerships</h2>
        <ul>
          <li>partnership card placeholder</li>
          <li>partnership card placeholder</li>
        </ul>
        <p>See all our projects placeholder</p>
      </section>

      {/* Partner info */}
      <section className="m-4">
        <h2>launch a project for your non profit</h2>
        <p>Blueprint partner description placeholder</p>
        <button>Learn more placeholder</button>
        <hr />
      </section>

      {/* Blueprint Events */}
      <section className="m-4">
        <h2>for students: turn real projects into real opportunities.</h2>
        <p>blueprinters internship stats placeholder</p>
        <button>Join us placeholder</button>
        <p>upcoming events placeholder</p>
      </section>
    </PageContainer>
  );
};

export default HomePage;
