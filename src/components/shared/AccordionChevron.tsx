import { useState } from "react";

type AccordionChevronProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

export default function AccordionChevron({
  isOpen,
  onClick,
  className = "",
}: AccordionChevronProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const bgClass = pressed
    ? "bg-blueprint-gray-dark"
    : hovered
      ? "bg-blueprint-neutral-muted"
      : "bg-blueprint-gray-light";

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      aria-label={isOpen ? "Collapse section" : "Expand section"}
      aria-expanded={isOpen}
      className={`relative flex items-center justify-center rounded-[5px] transition-colors shrink-0 cursor-pointer border-0 p-0
        w-[28px] h-[28px] md:w-[48px] md:h-[48px]
        ${bgClass} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={`transition-transform duration-300 ease-in-out
          w-[18px] h-[18px] md:w-[30px] md:h-[30px]
          ${isOpen ? "rotate-180" : "rotate-0"}`}
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="#2A2A2A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
