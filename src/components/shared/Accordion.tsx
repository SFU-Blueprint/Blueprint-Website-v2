import React, { useState, useRef, useEffect } from "react";
import AccordionChevron from "./AccordionChevron";
import type { CSSProperties } from "react";

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
  const childRef = useRef(null)
  const [childSize, setChildSize] = useState(400)

  // Calculates child height and stores in state
  useEffect(() => {
    setChildSize(childRef.current.scrollHeight)
  }, [children])

  const SizeVarStyle: CSSProperties = {'--custSize': `${childSize}px` } as CSSProperties

  return (
    <div
      className={`bg-white rounded-[5px] overflow-hidden font-poppins w-full flex flex-col
        ${className}`}
    >
      {/* Header row — always visible */}
      <div 
        className={`flex items-center justify-between w-full hover:bg-gray-50 
          ${isOpen 
            ? 'p-[24px] md:pt-[24px] md:px-[36px] ' 
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
      <div 
        className={`w-full shrink-0 md:pr-[90px] md:px-[36px] px-[18px] overflow-hidden transition-all 
          duration-300 ease-in-out
          ${isOpen 
            ? `max-h-[var(--custSize)] opacity-100` 
            : 'max-h-0 opacity-0'}`
          }
        style={{...SizeVarStyle }}
          >
        <div className="text-bp-black font-normal leading-normal text-[14px] md:text-[16px] pb-[30px] md:pb-[60px] pt-[6px] md:pt-[12px]"
          ref={childRef}>
          {children}
        </div>
      </div>
      
    </div>
  );
}
