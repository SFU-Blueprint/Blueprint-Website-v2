import React from "react";

export type CalloutCardProps = {
  title: string;
  body: string;
  stripeColor?: string;
  variant?: "default" | "white" | "dark";
  icon?: React.ReactNode;
};

const STRIPE_WIDTH_PX = 8;
const defaultStripeColor = "#0177E8"; // blueprint-blue

export default function CalloutCard({
  title,
  body,
  stripeColor = defaultStripeColor,
  variant = "default",
  icon,
}: CalloutCardProps) {
  const isDark = variant === "dark";
  const bgClass =
    variant === "white"
      ? "bg-white"
      : isDark
        ? "bg-blueprint-neutral-dark"
        : "bg-blueprint-gray-light";

  const titleClass = isDark
    ? "text-blueprint-neutral-muted font-bold text-[24px] uppercase tracking-tight"
    : "text-blueprint-black font-bold text-[24px] uppercase tracking-tight";
  const bodyClass = isDark
    ? "text-blueprint-neutral-muted text-[16px] font-normal leading-relaxed m-0 whitespace-pre-line"
    : "text-blueprint-black text-[16px] font-normal leading-relaxed m-0";

  const isWhite = variant === "white";

  return (
    <article
      className={`w-full min-w-0 flex overflow-hidden font-poppins ${bgClass} ${isWhite ? "border" : ""}`}
      style={
        isWhite
          ? { borderWidth: "1px", borderStyle: "solid", borderColor: stripeColor, borderRadius: "3px 10px 10px 3px" }
          : { borderRadius: "3px 10px 10px 3px" }
      }
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
          <h2 id="callout-card-title" className={titleClass}>
            {title}
          </h2>
          {icon != null && (
            <span className="flex items-center shrink-0" aria-hidden>
              {icon}
            </span>
          )}
        </div>
        <p className={bodyClass}>{body}</p>
      </div>
    </article>
  );
}
