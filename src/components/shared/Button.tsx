import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children?: React.ReactNode;
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
      'bg-bp-blue text-white hover:bg-bp-hover-blue active:bg-bp-pressed-blue',
    secondary:
      'bg-white text-bp-blue hover:bg-bp-light-grey active:bg-bp-grey',
    tertiary:
      'bg-bp-black text-white hover:bg-bp-dark-grey active:bg-bp-pressed-blue font',
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
