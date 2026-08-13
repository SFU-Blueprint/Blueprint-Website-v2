import React from 'react';
// import { ParagraphTitle, ParagraphText } from "../Common";
// import { useTranslation } from "react-i18next";

/**
 * ProjectCard component to display a card representing a project.
 * @param {string} project - Project key.
 * @returns {JSX.Element} JSX representation of the ProjectCard component.
 */
import { Link } from "react-router-dom";
import ProjectCardCover from "../shared/ProjectCardCover";
import ProjectCardMeta from "../shared/ProjectCardMeta";

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
    coverBg?: string;
    coverScale?: number;
    coverMockup?: "macbook";
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
    coverBg = "#F3F3F3",
    coverScale,
    coverMockup,
}: ProjectCardProps) => {
    const cardClassName = `w-full px-9 pt-9 pb-12 bg-white rounded-[5px] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden 
                        md:w-full md:max-w-[865px] md:min-w-[460px] md:px-9 md:pt-9 md:pb-12
                        max-[767px]:min-w-[276px] max-[767px]:max-w-[623px]
                        [@media(hover:hover)]:hover:ring-1 [@media(hover:hover)]:hover:ring-bp-grey [@media(hover:hover)]:hover:bg-bp-lightest-grey group cursor-pointer`;

    const cardBody = (
        <div className={cardClassName}>
            <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-5 ">
                <ProjectCardCover
                  src={card_cover_url}
                  alt={card_cover_alt}
                  backgroundColor={coverBg}
                  scale={coverScale}
                  mockup={coverMockup}
                />
                
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
                
                <ProjectCardMeta
                  client={client_name}
                  service={service}
                  sector={sector}
                  className="md:gap-9"
                />
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
