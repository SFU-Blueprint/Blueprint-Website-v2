type ProjectCardCoverProps = {
  src: string;
  alt?: string;
  backgroundColor?: string;
  /** Uniform scale from the panel bottom. Mosaic uses a lower value. */
  scale?: number;
};

const DEFAULT_COVER_SCALE = 1.58;

/**
 * Same crop on every viewport: the mockup’s bottom edge sits on the panel
 * bottom (`object-contain` + `object-bottom`). Extra brand color shows above.
 */
export default function ProjectCardCover({
  src,
  alt = "",
  backgroundColor = "#F3F3F3",
  scale = DEFAULT_COVER_SCALE,
}: ProjectCardCoverProps) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[5px] aspect-[16/10]"
      style={{ backgroundColor }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full origin-bottom object-contain object-bottom"
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
}
