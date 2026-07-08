import React, { useState } from "react";
import AccordionChevron from "./AccordionChevron";

type AccordionProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export default function Accordion({
  header,
  children,
  defaultOpen = false,
  className = "",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`bg-white rounded-[5px] overflow-hidden font-poppins w-full flex flex-col
        ${isOpen
          ? "gap-[6px] md:gap-[12px] pb-[30px] md:pb-[60px]"
          : ""
        }
        ${className}`}
    >
      {/* Header row — always visible */}
      <div 
        className={`flex items-center justify-between w-full hover:bg-gray-50 
          ${isOpen 
            ? 'p-[18px] md:pt-[24px] md:px-[36px] ' 
            : 'p-[18px] md:px-[36px] md:py-[24px]'}`
          }
          onClick={() => setIsOpen((prev) => !prev)}>
        <span
          className="text-bp-black font-medium leading-[1.3]
            text-[18px] tracking-[-0.36px]
            md:text-[24px] md:tracking-normal"
        >
          {header}
        </span>
        <AccordionChevron
          isOpen={isOpen}
        />
      </div>

      {/* Body — shown when open */}
      {isOpen && (
        <div className="w-full shrink-0 md:pr-[90px] md:px-[36px] px-[18px]">
          <div className="text-bp-black font-normal leading-normal text-[14px] md:text-[16px]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
