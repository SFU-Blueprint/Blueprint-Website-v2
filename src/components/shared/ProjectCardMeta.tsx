type ProjectCardMetaProps = {
  client: string;
  service: string;
  sector: string;
  /** Desktop group gap only — mobile stack gap is shared. */
  className?: string;
};

function MetaGroup({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-w-0 flex-col items-start justify-start gap-0.5 md:w-36 md:max-w-[150px] md:gap-3">
      <div className="font-['Poppins'] text-[10px] font-medium uppercase leading-none text-neutral-500 md:text-sm">
        {label}
      </div>
      <div className="font-['Poppins'] text-sm font-normal leading-none text-zinc-800 md:text-base md:leading-normal">
        {value}
      </div>
    </div>
  );
}

export default function ProjectCardMeta({
  client,
  service,
  sector,
  className = "md:gap-6",
}: ProjectCardMetaProps) {
  return (
    <div
      className={`flex w-full max-w-[552px] flex-col items-start justify-start gap-4 md:flex-row ${className}`}
    >
      <MetaGroup label="CLIENT" value={client} />
      <MetaGroup label="SERVICE" value={service} />
      <MetaGroup label="SECTOR" value={sector} />
    </div>
  );
}
