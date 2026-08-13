type ProjectCardCoverProps = {
  src: string;
  alt?: string;
  backgroundColor?: string;
  /** Uniform scale from the panel bottom. Mosaic uses a lower value. */
  scale?: number;
  /** Wrap the still in a MacBook bezel (Blueprint Website). */
  mockup?: "macbook";
};

const DEFAULT_COVER_SCALE = 1.58;

function MacbookScreen({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute bottom-0 left-1/2 w-[86%] -translate-x-1/2">
      <div className="rounded-t-[12px] bg-neutral-950 p-[7px] pb-0 max-md:rounded-t-[9px] max-md:p-[5px] max-md:pb-0">
        <div className="relative overflow-hidden rounded-t-[7px] bg-neutral-950 max-md:rounded-t-[5px]">
          <span
            className="absolute left-1/2 top-0 z-10 h-[8px] w-[18%] -translate-x-1/2 rounded-b-[6px] bg-neutral-950 max-md:h-[6px]"
            aria-hidden
          />
          <img
            src={src}
            alt={alt}
            className="block aspect-[16/10] w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Same crop on every viewport: the mockup’s bottom edge sits on the panel
 * bottom (`object-contain` + `object-bottom`). Extra brand color shows above.
 */
export default function ProjectCardCover({
  src,
  alt = "",
  backgroundColor = "#F3F3F3",
  scale = DEFAULT_COVER_SCALE,
  mockup,
}: ProjectCardCoverProps) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[5px] aspect-[16/10]"
      style={{ backgroundColor }}
    >
      {mockup === "macbook" ? (
        <MacbookScreen src={src} alt={alt} />
      ) : (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full origin-bottom object-contain object-bottom"
          style={{ transform: `scale(${scale})` }}
        />
      )}
    </div>
  );
}
