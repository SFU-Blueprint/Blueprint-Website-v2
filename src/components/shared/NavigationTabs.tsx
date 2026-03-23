import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface NavigationTabsProps {
  tabs: { label: string; href: string }[];
  activeHref?: string;
}

const UNDERLINE_EXTRA_PX = 8;

export default function NavigationTabs({ tabs, activeHref }: NavigationTabsProps) {
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  const activeIndex = activeHref != null ? tabs.findIndex((t) => t.href === activeHref) : -1;
  const effectiveIndex = activeIndex >= 0 ? activeIndex : 0;

  useEffect(() => {
    const textEl = textRefs.current[effectiveIndex];
    const container = containerRef.current;
    if (textEl && container) {
      const containerRect = container.getBoundingClientRect();
      const textRect = textEl.getBoundingClientRect();
      setUnderlineLeft(textRect.left - containerRect.left - UNDERLINE_EXTRA_PX);
      setUnderlineWidth(textRect.width + UNDERLINE_EXTRA_PX * 2);
    }
  }, [effectiveIndex, tabs]);

  return (
    <nav className="w-full font-poppins" aria-label="Section navigation">
      <div
        ref={containerRef}
        className="relative flex flex-nowrap gap-x-6 overflow-x-auto border-b border-blueprint-neutral-mutedAlt [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab, i) => {
          const isActive = activeHref != null && tab.href === activeHref;
          return (
            <Link
              key={tab.href}
              to={tab.href}
              className={`group relative block shrink-0 py-3 px-4 text-sm leading-[100%] tracking-normal whitespace-nowrap transition-colors duration-150 ${
                isActive ? "text-blueprint-linkHover" : "text-blueprint-neutral-dark"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span
                className="relative inline-block"
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
              >
                <span className="font-semibold invisible select-none" aria-hidden>
                  {tab.label}
                </span>
                <span
                  className={`absolute inset-0 flex items-center ${isActive ? "font-semibold" : "font-normal group-hover:font-semibold"}`}
                >
                  {tab.label}
                </span>
              </span>
            </Link>
          );
        })}
        {activeIndex >= 0 && (
          <span
            className="absolute left-0 bottom-0 -mb-px h-[4px] bg-blueprint-linkHover rounded-t-full shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-150 ease-out"
            style={{ left: underlineLeft, width: underlineWidth }}
            aria-hidden
          />
        )}
      </div>
    </nav>
  );
}
