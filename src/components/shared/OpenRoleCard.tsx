import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowUpRightIcon } from "../../assets/icons/ArrowUpRight.svg";

function useMinWidth(minWidthPx: number): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(`(min-width: ${minWidthPx}px)`);
    setMatches(m.matches);
    const listener = () => setMatches(m.matches);
    m.addEventListener("change", listener);
    return () => m.removeEventListener("change", listener);
  }, [minWidthPx]);
  return matches;
}

export type OpenRoleCardProps = {
  title: string;
  count?: number;
  href?: string;
  roleType?: "dev" | "pm" | "designer" | "executive";
  accentColor?: string;
  selected?: boolean;
  onClick?: () => void;
};

const ROLE_ACCENT: Record<NonNullable<OpenRoleCardProps["roleType"]>, string> = {
  dev: "#71EC59", // green
  pm: "#F49F00", // orange
  designer: "#D2A6FB", // purple
  executive: "#9CC0FF", // blue
};

const ACCENT_SQUARE_SIZE_MOBILE_PX = 12;
const ACCENT_SQUARE_SIZE_DESKTOP_PX = 20;
const BORDER_WIDTH_PX = 2;

export default function OpenRoleCard({
  title,
  count,
  href,
  roleType = "dev",
  accentColor,
  selected = false,
  onClick,
}: OpenRoleCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const isDesktopOrTablet = useMinWidth(520);
  const accentSquareSizePx = isDesktopOrTablet
    ? ACCENT_SQUARE_SIZE_DESKTOP_PX
    : ACCENT_SQUARE_SIZE_MOBILE_PX;

  const effectiveAccent = accentColor ?? ROLE_ACCENT[roleType];
  const showAccentBorder = selected || isPressed || (isHovered && isDesktopOrTablet);
  const usePressedFill = selected || isPressed;

  // Desktop (default): horizontal flow, fill width min 520px, fixed height 100px, radius 10px, justify space-between
  // Desktop padding: 30 top, 36 right, 30 bottom, 36 left. Gap 12px between accent and title.
  // Mobile: padding 24 (left 16 to accent); gap 6px APPLY to icon. Background: bp-darkest-grey (default/hover), bp-black (pressed).

  const content = (
    <>
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div
          className="shrink-0 rounded-sm"
          style={{
            width: accentSquareSizePx,
            height: accentSquareSizePx,
            backgroundColor: effectiveAccent,
          }}
          aria-hidden
        />
        <span className="min-w-0 truncate font-poppins text-body-l-reg font-light text-white">
          {title}
          {count != null && (
            <span className="text-white ml-1">({count})</span>
          )}
        </span>
      </div>
      <span className="shrink-0 flex items-center font-poppins font-medium text-base text-white uppercase gap-1.5">
        APPLY
        <ArrowUpRightIcon className="w-4 h-4 shrink-0" aria-hidden />
      </span>
    </>
  );

  const className = [
    "w-full min-w-0 flex items-center rounded-[10px] border-2 transition-colors duration-150 font-poppins cursor-pointer",
    "min-[520px]:flex-1 min-[520px]:h-[100px] min-[520px]:justify-between",
    "p-6 pl-4 gap-3 min-[520px]:py-[30px] min-[520px]:px-9 min-[520px]:gap-0",
    usePressedFill ? "bg-black" : "bg-blueprint-darkestGrey",
    showAccentBorder ? "" : "border-transparent",
  ].join(" ");

  const style: React.CSSProperties = showAccentBorder
    ? { borderColor: effectiveAccent, borderWidth: BORDER_WIDTH_PX }
    : { borderColor: "transparent", borderWidth: BORDER_WIDTH_PX };

  const handlePointerDown = () => setIsPressed(true);
  const handlePointerUp = () => setIsPressed(false);
  const handlePointerLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };
  const handlePointerEnter = () => setIsHovered(true);

  const handlers = {
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onPointerLeave: handlePointerLeave,
    onPointerEnter: handlePointerEnter,
    onClick: href ? undefined : onClick,
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        aria-label={`${title}${count != null ? ` (${count} position)` : ""} — Apply`}
        {...handlers}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={className}
      style={style}
      aria-label={`${title}${count != null ? ` (${count})` : ""} — Apply`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      {...handlers}
    >
      {content}
    </div>
  );
}
