import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";

  // Optional link
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

const Button = ({
  variant = "primary",
  children,
  onClick,
  className = "",
  type = "button",
  href,
  target,
  rel,
}: ButtonProps) => {
  const base =
    "flex items-center justify-center rounded-[5px] font-poppins font-semibold leading-none px-[44px] h-[52px] text-[14px] md:h-[60px] md:text-[16px] transition-colors duration-150 cursor-pointer select-none whitespace-nowrap";

  const variants = {
    primary:
      "bg-bp-blue text-white hover:bg-bp-hover-blue active:bg-bp-pressed-blue",

    secondary:
      "bg-white text-bp-blue hover:bg-bp-light-grey active:bg-bp-grey",

    tertiary:
      "bg-bp-black text-white hover:bg-bp-dark-grey active:bg-bp-pressed-blue",
  };

  const styles = `${base} ${variants[variant]} ${className}`;

  // If href exists, render as a link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={styles}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as a normal button
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
    >
      {children}
    </button>
  );
};

export default Button;