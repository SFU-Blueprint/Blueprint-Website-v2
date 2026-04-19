import React from 'react';

/**
 * OutlineButton component renders a button with outlined style.
 * @param {Object} props - The props object.
 * @param {function} props.onClick - The function to be executed when the button is clicked.
 * @param {*} props.children - The content to be displayed inside the button.
 * @returns {JSX.Element} - The rendered button component.
 */
const OutlineButton = (
  {
    className,
    onClick = ()=>console.log("On click not defined"),
    children
  }
) => {
    return (
      <button
        className={`${className} btn flex-nowrap hover:bg-bp-blue hover:text-white text-bp-blue outline-bp-blue p-4 rounded-md border-2 font-poppins font-bold tracking-tight
        sm:w-[50] md:w-200 md:min-w-[200px] `}
        onClick={onClick}
      >
        {children}
      </button>
    );
};

export default OutlineButton;
