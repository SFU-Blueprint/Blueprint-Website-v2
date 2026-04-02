import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  variant = 'primary',
  children,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const base =
    'flex items-center justify-center rounded-[5px] font-poppins font-semibold leading-none px-[44px] h-[52px] text-[14px] md:h-[60px] md:text-[16px] transition-colors duration-150 cursor-pointer select-none whitespace-nowrap';
  const variants = {
    primary:
      'bg-blueprint-linkHover text-white hover:bg-blueprint-hoverBlue active:bg-blueprint-linkActive',
    secondary:
      'bg-white text-blueprint-linkHover hover:bg-blueprint-neutral-muted active:bg-blueprint-neutral-mutedAlt',
    tertiary:
      'bg-blueprint-black text-white hover:bg-blueprint-darkGrey active:bg-blueprint-linkActive font',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
