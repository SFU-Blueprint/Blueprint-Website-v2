import { useEffect, useRef, useState } from "react";

export type ExpandableContentCard = {
  title: string;
  body: string;
  image: string;
  imageAlt?: string;
  imageClassName: string;
  imageHoverClassName?: string;
  accentColor: string;
};

type ExpandableContentCardsProps = {
  cards: readonly ExpandableContentCard[];
  showMobileIndicators?: boolean;
};

export default function ExpandableContentCards({
  cards,
  showMobileIndicators = true,
}: ExpandableContentCardsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateActiveIndex = () => {
      const cardEls = Array.from(scroller.children) as HTMLElement[];
      if (cardEls.length === 0) return;

      const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardEls.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - scrollerCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveIndex();
    scroller.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      scroller.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [cards.length]);

  return (
    <div className="mx-auto w-full max-lg:w-[351px]">
      <div
        ref={scrollerRef}
        className="flex justify-center gap-[23px] max-lg:snap-x max-lg:justify-start max-lg:overflow-x-auto max-lg:scrollbar-hide-custom"
      >
        {cards.map((card) => (
          <article
            key={card.title}
            className="group/expandable-card relative h-[470px] w-[351px] shrink-0 overflow-hidden rounded-[10px] bg-white px-9 pt-9 transition-[width] duration-300 ease-out lg:hover:w-[429px] max-lg:snap-center motion-reduce:transition-none"
          >
            <div className="flex items-center gap-0 transition-[gap] duration-300 ease-out lg:group-hover/expandable-card:gap-[10px] motion-reduce:transition-none">
              <span
                className="h-[19px] w-0 shrink-0 rounded-[4px] opacity-0 transition-[width,opacity] duration-300 ease-out lg:group-hover/expandable-card:w-[19px] lg:group-hover/expandable-card:opacity-100 motion-reduce:transition-none"
                style={{ backgroundColor: card.accentColor }}
                aria-hidden
              />
              <h3 className="whitespace-nowrap font-caveat text-[32px] font-normal leading-[1.3] tracking-[-0.64px] text-black">
                {card.title}
              </h3>
            </div>
            <p className="mt-[10px] w-[282px] max-w-[282px] shrink-0 font-poppins text-[16px] font-normal leading-normal text-black">
              {card.body}
            </p>
            <div className="absolute left-5 top-[199px] h-[252px] w-[312px] overflow-hidden rounded-[10px] transition-[left,width] duration-300 ease-out lg:group-hover/expandable-card:left-[20.5px] lg:group-hover/expandable-card:w-[392px] motion-reduce:transition-none">
              <img
                src={card.image}
                alt={card.imageAlt ?? ""}
                className={`absolute max-w-none transition-[left,width] duration-300 ease-out motion-reduce:transition-none ${card.imageClassName} ${card.imageHoverClassName ?? ""}`}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
      {showMobileIndicators && (
        <div
          className="mt-[22px] hidden justify-center gap-[8px] max-lg:flex"
          role="tablist"
          aria-label="Card position"
        >
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <span
                key={card.title}
                className={
                  isActive
                    ? "h-[11px] w-[30px] rounded-full bg-bp-blue transition-[width,background-color] duration-200"
                    : "size-[11px] rounded-full bg-bp-grey transition-[width,background-color] duration-200"
                }
                aria-current={isActive ? "true" : undefined}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
