import React from 'react';
// import { ParagraphTitle, ParagraphText } from "../Common";
// import { useTranslation } from "react-i18next";

/**
 * ProjectCard component to display a card representing a project.
 * @param {string} project - Project key.
 * @returns {JSX.Element} JSX representation of the ProjectCard component.
 */
import { Link } from "react-router-dom";

export type ProjectCardProps = {
    logo_url: string;
    logo_url_alt?: string;
    card_cover_url: string;
    card_cover_alt?: string;
    description: string;
    client_name: string;
    service: string;
    sector: string;
    href: string;
    /** `contain` shows the full asset (less zoom); default `cover` fills the panel. */
    coverFit?: "cover" | "contain";
    coverBg?: string;
}

const ProjectCard = ({
    logo_url = "https://placehold.co/76x76",
    logo_url_alt = "placeholder_alt",
    card_cover_url = "https://placehold.co/517x354",
    card_cover_alt = "placeholder_alt",
    description = "reducing volunteer management time by 4 hours per month with a digital volunteer hour logbook",
    client_name = "Our Community Bikes",
    service = "Web-app",
    sector = "Web-app",
    href,
    coverFit = "cover",
    coverBg = "#F4F4F4",
}: ProjectCardProps) => {
    const cardClassName = `w-full px-9 pt-9 pb-12 bg-white rounded-[5px] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden 
                        md:w-full md:max-w-[865px] md:min-w-[460px] md:px-9 md:pt-9 md:pb-12 md:h-[640px]
                        max-[767px]:min-w-[276px] max-[767px]:max-w-[623px]
                        [@media(hover:hover)]:hover:ring-1 [@media(hover:hover)]:hover:ring-bp-grey [@media(hover:hover)]:hover:bg-bp-lightest-grey group cursor-pointer`;

    const cardBody = (
        <div className={cardClassName}>
            <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-5 ">
                {/*  Hero Image  */}
                <div
                  className={`self-stretch h-40 rounded-[5px] overflow-hidden md:h-80 ${
                    coverFit === "contain" ? "flex items-center justify-center" : ""
                  }`}
                  style={{ backgroundColor: coverBg }}
                >
                    <img
                      className={`transition-transform duration-150 group-hover:scale-105 ${
                        coverFit === "contain"
                          ? "h-full w-auto max-w-full object-contain"
                          : "h-full w-full object-cover object-center"
                      }`}
                      src={card_cover_url}
                      alt={card_cover_alt}
                    />
                </div>
                
                {/*  Title and Icons */}
                <div className="self-stretch inline-flex justify-start items-start gap-3
                                md:gap-[40px]">
                    <div className="flex-1 max-w-96  justify-start text-black text-lg  font-normal font-['Poppins'] leading-6 
                                    md:max-w-none md:text-[18px]/[140%] ">
                        {description}
                    </div>
                    { /* Left over from ProjectCard component. Not in design sheet so not sure why its here. Commented out in case it's important.
                    <div className="hidden w-20 h-20 bg-zinc-800 rounded-full md:block"></div> */}
                    <img className="max-[767px]:hidden w-[76px] h-[76px] md:block" src={logo_url} alt={logo_url_alt}/>
                </div>
                
                {/*  Divider */}
                <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-300"></div>
                
                {/* Info Section */}
                <div className="w-full max-w-[552px] md:inline-flex md:flex-row justify-start items-start gap-3 md:gap-9">
                    <div className="flex flex-col justify-start items-start gap-1.5 
                                    md:max-w-[150px] md:gap-3
                                    max-[767px]:w-28">
                        <div className="w-36 justify-start text-neutral-500 text-[10px] md:text-sm font-medium font-['Poppins'] uppercase">
                            CLIENT
                        </div>
                        <div className="self-stretch justify-start md:inline-flex text-zinc-800 text-sm md:text-base font-normal font-['Poppins']">
                            {client_name}
                        </div>
                        </div>
                    <div className="flex flex-col justify-start items-start gap-1.5 
                                    md:max-w-[150px] md:gap-3
                                    max-[767px]:w-28">
                        <div className="self-stretch justify-start text-neutral-500 text-[10px] md:text-sm font-medium font-['Poppins'] uppercase">
                            SERVICE
                        </div>
                        <div className="self-stretch justify-start md:inline-flex text-zinc-800 text-sm md:text-base font-normal font-['Poppins']">
                            {service}
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1.5 
                                    md:max-w-[150px] md:gap-3 
                                    max-[767px]:w-28">
                        <div className="self-stretch justify-start text-neutral-500 text-[10px] md:text-sm font-medium font-['Poppins'] uppercase">
                            SECTOR
                        </div>
                        <div className="justify-start md:self-stretch md:inline-flex text-zinc-800 text-sm md:text-base font-normal font-['Poppins']">
                            {sector}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
      <Link to={href} className="relative z-10 block w-full no-underline text-inherit">
        {cardBody}
      </Link>
    );
};

export default ProjectCard;
