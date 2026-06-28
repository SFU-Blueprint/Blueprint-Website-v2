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
  return (
    <div className="w-full max-md:w-[351px]">
      <div className="flex justify-center gap-[23px] max-md:snap-x max-md:justify-start max-md:overflow-x-auto max-md:scrollbar-hide-custom">
        {cards.map((card) => (
          <article
            key={card.title}
            className="group/expandable-card relative h-[470px] w-[351px] shrink-0 overflow-hidden rounded-[10px] bg-white px-9 pt-9 transition-[width] duration-300 ease-out md:hover:w-[429px] max-md:h-[418px] max-md:snap-center motion-reduce:transition-none"
          >
            <div className="flex items-center gap-0 transition-[gap] duration-300 ease-out md:group-hover/expandable-card:gap-[10px] motion-reduce:transition-none">
              <span
                className="h-[19px] w-0 shrink-0 rounded-[4px] opacity-0 transition-[width,opacity] duration-300 ease-out md:group-hover/expandable-card:w-[19px] md:group-hover/expandable-card:opacity-100 motion-reduce:transition-none"
                style={{ backgroundColor: card.accentColor }}
                aria-hidden
              />
              <h3 className="whitespace-nowrap font-caveat text-[32px] font-normal leading-[1.3] tracking-[-0.64px] text-black max-md:text-[28px] max-md:tracking-[-0.56px]">
                {card.title}
              </h3>
            </div>
            <p className="mt-[10px] w-[282px] font-poppins text-[16px] font-normal leading-normal text-black transition-[width] duration-300 ease-out md:group-hover/expandable-card:w-[275px] max-md:w-[290px] max-md:text-[14px] motion-reduce:transition-none">
              {card.body}
            </p>
            <div className="absolute left-5 top-[199px] h-[252px] w-[312px] overflow-hidden rounded-[10px] transition-[left,width] duration-300 ease-out md:group-hover/expandable-card:left-[20.5px] md:group-hover/expandable-card:w-[392px] max-md:top-[145px] motion-reduce:transition-none">
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
        <div className="mt-[22px] hidden justify-center gap-[8px] max-md:flex" aria-hidden>
          <span className="h-[11px] w-[30px] rounded-full bg-bp-blue" />
          <span className="size-[11px] rounded-full bg-bp-grey" />
          <span className="size-[11px] rounded-full bg-bp-grey" />
        </div>
      )}
    </div>
  );
}
