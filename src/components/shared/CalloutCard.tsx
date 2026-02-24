import React from "react";

export type CalloutCardProps = {
  title: string;
  body: string;
  stripeColor?: string;
  variant?: "default" | "white" | "dark";
  icon?: React.ReactNode;
  /** Show 1px border; when undefined, border is shown only for variant "white" */
  showBorder?: boolean;
  /** Border color when showBorder is true; defaults to stripeColor */
  borderColor?: string;
  /** Override card background (e.g. "#FFFFFF", "#353535"); when set, variant background is ignored */
  backgroundColor?: string;
  /** Override title text color (useful with custom backgroundColor) */
  titleColor?: string;
  /** Override body text color (useful with custom backgroundColor) */
  bodyColor?: string;
};

const STRIPE_WIDTH_PX = 8;
const defaultStripeColor = "#0177E8"; // blueprint-blue

export default function CalloutCard({
  title,
  body,
  stripeColor = defaultStripeColor,
  variant = "default",
  icon,
  showBorder,
  borderColor,
  backgroundColor,
  titleColor,
  bodyColor,
}: CalloutCardProps) {
  const isDark = variant === "dark";
  const isWhite = variant === "white";

  const defaultBgClass =
    isWhite
      ? "bg-white"
      : isDark
        ? "bg-blueprint-neutral-dark"
        : "bg-blueprint-gray-light";
  const useCustomBg = backgroundColor != null;
  const bgClass = useCustomBg ? "" : defaultBgClass;

  const defaultTitleClass = isDark
    ? "text-blueprint-neutral-muted font-bold text-[24px] uppercase tracking-tight"
    : "text-blueprint-black font-bold text-[24px] uppercase tracking-tight";
  const defaultBodyClass = isDark
    ? "text-blueprint-neutral-muted text-[16px] font-normal leading-relaxed m-0 whitespace-pre-line"
    : "text-blueprint-black text-[16px] font-normal leading-relaxed m-0";

  const effectiveShowBorder = showBorder ?? isWhite;
  const effectiveBorderColor = borderColor ?? stripeColor;

  const articleStyle: React.CSSProperties = {
    borderRadius: "3px 10px 10px 3px",
    ...(useCustomBg && { backgroundColor }),
    ...(effectiveShowBorder && {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: effectiveBorderColor,
    }),
  };

  return (
    <article
      className={`w-full min-w-0 flex overflow-hidden font-poppins ${bgClass}`}
      style={articleStyle}
      aria-labelledby="callout-card-title"
    >
      {/* Vertical stripe (left) */}
      <div
        className="shrink-0"
        style={{
          width: STRIPE_WIDTH_PX,
          backgroundColor: stripeColor,
        }}
        aria-hidden
      />

      {/* Content: padding 36 top, 24 right, 48 bottom, 48 left (spec); 12px gap */}
      <div className="flex flex-col flex-1 min-w-0 pt-6 pr-4 pb-8 pl-8 md:pt-[36px] md:pr-[24px] md:pb-[48px] md:pl-[48px] gap-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h2
            id="callout-card-title"
            className={titleColor == null ? defaultTitleClass : "font-bold text-[24px] uppercase tracking-tight"}
            style={titleColor != null ? { color: titleColor } : undefined}
          >
            {title}
          </h2>
          {icon != null && (
            <span className="flex items-center shrink-0" aria-hidden>
              {icon}
            </span>
          )}
        </div>
        <p
          className={bodyColor == null ? defaultBodyClass : "text-[16px] font-normal leading-relaxed m-0 whitespace-pre-line"}
          style={bodyColor != null ? { color: bodyColor } : undefined}
        >
          {body}
        </p>
      </div>
    </article>
  );
}
