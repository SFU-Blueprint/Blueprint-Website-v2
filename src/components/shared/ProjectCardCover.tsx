type ProjectCardCoverProps = {
  src: string;
  alt?: string;

  backgroundColor?: string;

  /**
   * Uniform scale.
   */
  scale?: number;

  /**
   * Optional MacBook bezel.
   */
  mockup?: "macbook";

  /**
   * How the image should fit inside the panel.
   */
  fit?: "cover" | "contain";

  /**
   * Vertical image offset.
   *
   * Positive = move down
   * Negative = move up
   */
  offsetY?: number;
};

const DEFAULT_COVER_SCALE = 1.58;

function MacbookScreen({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
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

export default function ProjectCardCover({
  src,
  alt = "",
  backgroundColor = "#F3F3F3",
  scale = DEFAULT_COVER_SCALE,
  mockup,
  fit = "contain",
  offsetY = 0,
}: ProjectCardCoverProps) {
  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-[5px]"
      style={{
        backgroundColor,
      }}
    >
      {mockup === "macbook" ? (
        <MacbookScreen
          src={src}
          alt={alt}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={`
            absolute
            inset-0
            h-full
            w-full
            origin-bottom
            ${
              fit === "cover"
                ? "object-cover"
                : "object-contain"
            }
            object-bottom
          `}
          style={{
            transform: `translateY(${offsetY}px) scale(${scale})`,
          }}
        />
      )}
    </div>
  );
}