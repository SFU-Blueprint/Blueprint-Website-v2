import React, { useState } from "react";
import linkedinIcon from "../../assets/icons/linkedin2.png";
import { ReactComponent as ArrowUpRightIcon } from "../../assets/icons/ArrowUpRight.svg";

export type MemberCardProps = {
  name: string;
  role: string;
  roleType?: "designer" | "pm" | "dev" | "exec";
  photoUrl?: string;
  linkedinUrl?: string;
};

// Role-based hover/click background (solid brand colors per palette)
const ROLE_HOVER_BG_CLASS: Record<NonNullable<MemberCardProps["roleType"]>, string> = {
  designer: "bg-blueprint-accent-purple",
  pm: "bg-blueprint-orange",
  dev: "bg-blueprint-accent-lightBlue",
  exec: "bg-blueprint-accent-veryLightBlue",
};

const BORDER_RADIUS = 10;
// Phone: 170×228, padding 10 9 10 8 (top right bottom left)
// Tablet: 224×308, padding 12 10 26 12
// Desktop: 273×309, padding 14 13 30 13

export default function MemberCard({
  name,
  role,
  roleType = "designer",
  photoUrl,
  linkedinUrl,
}: MemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverBgClass = ROLE_HOVER_BG_CLASS[roleType];
  const showHoverStyle = isHovered && linkedinUrl;

  const handleClick = () => {
    if (linkedinUrl) window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  const cardContent = (
    <div className="flex flex-col items-start w-full flex-1 min-h-0">
      {/* Photo placeholder or image: phone 153×127; tablet/desktop full width, aspect-square */}
      <div
        className="w-[153px] h-[127px] tablet:w-full tablet:aspect-square tablet:max-h-[180px] tablet:h-auto tablet:min-h-[120px] rounded-md bg-blueprint-gray-lightest overflow-hidden shrink-0"
      >
        {photoUrl ? (
          <img
            src={photoUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-blueprint-grey" aria-hidden />
        )}
      </div>

      {/* Lower section: fills space below photo; on desktop hover, centers LinkedIn vertically */}
      <div
        className={`flex flex-col items-start w-full flex-1 min-h-0 ${
          showHoverStyle ? "desktop:justify-center" : "desktop:justify-start"
        }`}
      >
        {/* Role: phone 10px; tablet/desktop 14px; hidden on desktop when hovered */}
        <span
          className={`font-poppins text-[10px] font-medium text-black uppercase leading-normal self-stretch mt-2 tablet:mt-[18px] tablet:text-[14px] ${
            showHoverStyle ? "desktop:hidden" : ""
          }`}
          style={{ minHeight: 18 }}
        >
          {role}
        </span>
        {/* Name: phone 18px, 130%, -0.36px; tablet/desktop 24px, 130%, -0.48px; hidden on desktop when hovered */}
        <span
          className={`font-poppins text-[18px] font-medium text-black leading-[130%] tracking-[-0.36px] self-stretch mt-0.5 tablet:mt-1.5 tablet:text-[24px] tablet:tracking-[-0.48px] ${
            showHoverStyle ? "desktop:hidden" : ""
          }`}
        >
          {name}
        </span>

        {/* LinkedIn: phone/tablet = icon only; desktop = full row when hovered */}
        {linkedinUrl && (
          <span
            className={`flex items-center gap-1.5 font-poppins text-[24px] font-normal leading-[130%] tracking-[-0.48px] text-black mt-1.5 tablet:mt-[12px] -ml-0.5 desktop:ml-0 ${
              showHoverStyle ? "desktop:flex desktop:mt-6" : "desktop:hidden"
            }`}
          >
            <img
              src={linkedinIcon}
              alt=""
              className={`w-[17px] h-[17px] shrink-0 tablet:w-[24px] tablet:h-[24px] ${showHoverStyle ? "desktop:w-[40px] desktop:h-[40px]" : ""}`}
              aria-hidden
            />
            <span className={`hidden ${showHoverStyle ? "desktop:inline" : ""}`}>linkedin</span>
            <ArrowUpRightIcon className={`w-6 h-6 shrink-0 [&_path]:fill-current hidden ${showHoverStyle ? "desktop:block" : ""}`} aria-hidden />
          </span>
        )}
      </div>
    </div>
  );

  const baseClassName =
    "flex flex-col items-start rounded-[10px] font-poppins cursor-pointer transition-transform duration-200 ease-out";
  // Phone: 170×228, padding 10 9 10 8 | Tablet: 224×308, padding 12 10 26 12 | Desktop: 273×309, padding 14 13 30 13
  const sizeClassName =
    "w-[170px] min-w-[170px] h-[228px] min-h-[228px] pt-[10px] pr-[9px] pb-[10px] pl-[8px] tablet:w-[224px] tablet:min-w-[224px] tablet:h-[308px] tablet:min-h-[308px] tablet:pt-3 tablet:pr-[10px] tablet:pb-[26px] tablet:pl-3 desktop:w-[273px] desktop:h-[309px] desktop:min-h-[309px] desktop:pt-[14px] desktop:pr-[13px] desktop:pb-[30px] desktop:pl-[13px]";
  const wrapperStyle: React.CSSProperties = { borderRadius: BORDER_RADIUS };
  const wrapperBgClass = showHoverStyle ? hoverBgClass : "bg-white";
  const rotationClass = showHoverStyle ? "desktop:rotate-[5deg]" : "";

  if (linkedinUrl) {
    return (
      <div
        role="button"
        tabIndex={0}
        className={`${baseClassName} ${sizeClassName} ${wrapperBgClass} ${rotationClass}`}
        style={wrapperStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-label={`${name}, ${role}. ${linkedinUrl ? "Open LinkedIn profile." : ""}`}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <div
      className={`${baseClassName} ${sizeClassName} bg-white`}
      style={{ borderRadius: BORDER_RADIUS }}
      aria-label={`${name}, ${role}`}
    >
      {cardContent}
    </div>
  );
}
