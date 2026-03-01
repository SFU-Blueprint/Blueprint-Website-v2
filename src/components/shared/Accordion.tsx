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
          ? "pt-[18px] px-[18px] pb-[30px] gap-[24px] md:pt-[24px] md:px-[36px] md:pb-[60px] md:gap-[30px]"
          : "p-[18px] md:px-[36px] md:py-[24px]"
        }
        ${className}`}
    >
      {/* Header row — always visible */}
      <div className="flex items-center justify-between w-full">
        <span
          className="text-blueprint-neutral-dark font-medium leading-[1.3]
            text-[18px] tracking-[-0.36px]
            md:text-[24px] md:tracking-normal"
        >
          {header}
        </span>
        <AccordionChevron
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>

      {/* Body — shown when open */}
      {isOpen && (
        <div className="w-full shrink-0 md:pr-[90px]">
          <div className="text-blueprint-neutral-dark font-normal leading-normal text-[14px] md:text-[16px]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
