import React, { useState } from "react";

export type SocialMediaLinkCardProps = {
  icon: React.ReactNode;
  platform: string;
  description: string;
  href: string;
  accentColor?: string;
};

const DEFAULT_ACCENT = "#FFC3E8";

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M23.4375 7.5V19.6875C23.4375 19.9361 23.3388 20.1746 23.1629 20.3504C22.9871 20.5262 22.7487 20.625 22.5 20.625C22.2514 20.625 22.0129 20.5262 21.8371 20.3504C21.6613 20.1746 21.5625 19.9361 21.5625 19.6875V9.76289L8.16331 23.1633C7.9874 23.3392 7.74881 23.438 7.50003 23.438C7.25125 23.438 7.01266 23.3392 6.83675 23.1633C6.66084 22.9874 6.56201 22.7488 6.56201 22.5C6.56201 22.2512 6.66084 22.0126 6.83675 21.8367L20.2371 8.4375H10.3125C10.0639 8.4375 9.82544 8.33873 9.64962 8.16291C9.47381 7.9871 9.37503 7.74864 9.37503 7.5C9.37503 7.25136 9.47381 7.0129 9.64962 6.83709C9.82544 6.66127 10.0639 6.5625 10.3125 6.5625H22.5C22.7487 6.5625 22.9871 6.66127 23.1629 6.83709C23.3388 7.0129 23.4375 7.25136 23.4375 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SocialMediaLinkCard({
  icon,
  platform,
  description,
  href,
  accentColor = DEFAULT_ACCENT,
}: SocialMediaLinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const bgColor = isPressed
    ? "#D9D9D9"
    : isHovered
      ? "#F3F3F3"
      : "#FFFFFF";

  const showBorder = isHovered || isPressed;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center no-underline rounded-[5px] tablet:rounded-[10px] transition-colors duration-150 cursor-pointer"
      style={{
        backgroundColor: bgColor,
        border: showBorder ? "1px solid #AAAAAA" : "1px solid transparent",
      }}
      aria-label={`${platform} — opens in new tab`}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
    >
      {/* Accent stripe */}
      <div
        className="self-stretch shrink-0 rounded-l-[5px] tablet:rounded-l-[10px] w-[7px] tablet:w-[8px]"
        style={{ backgroundColor: accentColor }}
        aria-hidden
      />

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-[12px] tablet:gap-[18px] py-[24px] pl-[24px] pr-[24px] tablet:py-[40px] tablet:pl-[36px] tablet:pr-[36px]">
        {/* Top row: icon + name + arrow */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[12px] tablet:gap-[18px]">
            <span className="shrink-0 flex items-center justify-center w-[20px] h-[20px] tablet:w-[30px] tablet:h-[30px]" aria-hidden>
              {icon}
            </span>
            <span className="font-poppins font-normal text-blueprint-black text-[24px] leading-[1.4] tracking-[-0.48px] tablet:text-[36px] tablet:leading-[1.4] tablet:tracking-[-0.72px] whitespace-nowrap">
              {platform}
            </span>
          </div>
          <ArrowUpRight className="shrink-0 text-blueprint-black w-[35px] h-[35px] tablet:w-[46px] tablet:h-[46px]" />
        </div>

        {/* Description */}
        <p className="font-poppins font-normal text-blueprint-black text-[14px] tablet:text-[16px] leading-normal m-0 tablet:max-w-[400px]">
          {description}
        </p>
      </div>
    </a>
  );
}
