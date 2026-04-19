// Filters component — dark-context pills (wireframes) + light-context pills (white-background pages).

import type { ButtonHTMLAttributes } from "react";

/** Original wireframe variant: translucent or solid white on dark/diagonal backgrounds */
export type FiltersDarkProps = {
  title: string;
  state: "outlined" | "filled";
  variant?: "dark";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "children">;

/** White-background pages: gray default pill + light-blue selected pill */
export type FiltersLightProps = {
  title: string;
  state: "default" | "selected";
  variant: "light";
  onClick?: () => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "children">;

export type FiltersProps = FiltersDarkProps | FiltersLightProps;

const baseTypography =
  "font-poppins text-center font-semibold uppercase text-xs leading-[125%]";

/**
 * Shared shell for both variants so dark and light pills match Figma (same size, radius, gap, padding).
 * Previously dark omitted `min-h-[42px]` below desktop, so it looked shorter than light on tablet/mobile.
 */
const pillLayout =
  `inline-flex min-h-[42px] justify-center items-center gap-[10px] rounded-[10px] px-[18px] py-3 desktop:h-[42px] desktop:min-h-0 desktop:px-[30px] desktop:py-[10px] 
    hover:bg-bp-light-grey hover:border-bp-grey`;

function Filters(props: FiltersProps) {
  if (props.variant === "light") {
    const { title, state, className, variant: _v, ...rest } = props;
    const isSelected = state === "selected";

    return (
      <button
        type="button"
        className={[
          pillLayout,
          baseTypography,
          "border",
          isSelected
            ? "border-bp-accent-light-blue bg-bp-accent-very-light-blue text-bp-black"
            : "border-bp-grey bg-bp-light-grey/30 text-bp-black",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        {title}
      </button>
    );
  }

  const { title, state, className, ...rest } = props;

  return (
    <button
      type="button"
      className={[
        pillLayout,
        baseTypography,
          state === "outlined"
          ? "border border-bp-white bg-bp-white/20 text-bp-white"
          : "border border-transparent bg-bp-white text-bp-black",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {title}
    </button>
  );
}

export default Filters;
