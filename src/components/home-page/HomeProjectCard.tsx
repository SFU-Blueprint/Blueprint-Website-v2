import React from 'react';
// import { ParagraphTitle, ParagraphText } from "../Common";
// import { useTranslation } from "react-i18next";

/**
 * ProjectCard component to display a card representing a project.
 * @param {string} project - Project key.
 * @returns {JSX.Element} JSX representation of the ProjectCard component.
 */

const ProjectInfo = { // put project key infor here.
  LOGO_PLACEHOLDER: "https://placehold.co/76x76",
  COVER_PLACEHOLDER: "https://placehold.co/517x354",
  TITLE_PLACEHOLDER: "reducing volunteer management time by 4 hours per month with a digital volunteer hour logbook",
  CLIENT_PLACEHOLDER: "Our Community Bikes",  
  SERVICE_PLACEHOLDER: "Web-app",
  SECTOR_PLACEHOLDER: "Sustainable Transportation"
}

const ProjectCard = ({project=ProjectInfo}) => { // Change Placeholder Project Info to actual project info once routing is implemented.
    // if (!project || !project.tags) {
    //   return null; 
    // }
    // Placeholders for images and text
    
    return (
    <div className="w-80 md:max-w-[865px] min-w-72 md:w-auto md:min-w-[624px] px-6 pt-6 pb-9 md:px-9 md:pt-9 md:pb-12 bg-white rounded-[5px] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden [@media(hover:hover)]:hover:ring-1 [@media(hover:hover)]:hover:ring-blueprint-neutral-mutedAlt [@media(hover:hover)]:hover:bg-blueprint-gray-light group">
        <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-5">
           {/*  Hero Image  */}
            <div className="self-stretch h-40 flex flex-col justify-end items-center bg-amber-500 rounded-[5px] overflow-hidden pt-[37px] md:h-80">
                {/* max height of image calculated as (h_container - pt)*/}
                <img className='transition-transform duration-150 [@media(hover:hover)]:group-hover:scale-105 md:max-h-[283px] max-[767px]:max-h-[126px]' src={project.COVER_PLACEHOLDER} alt="Placeholder"/>
            </div>
            
            {/*  Title and Icons */}
            <div className="self-stretch inline-flex justify-start items-start gap-3 md:gap-16">
                <div className="flex-1 max-w-96 md:max-w-none justify-start text-zinc-800 text-lg md:text-2xl font-normal font-['Poppins'] leading-6 md:leading-8">
                    {project.TITLE_PLACEHOLDER}
                    </div>
                <div className="hidden md:block w-20 h-20 bg-zinc-800 rounded-full"></div>
                <img className="hidden md:block w-20 h-20" src={project.LOGO_PLACEHOLDER} alt="Placeholder"/>
            </div>
            
            {/*  Divider */}
            <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-300"></div>
            
            {/* Info Section */}
            <div className="w-full max-w-[552px] md:inline-flex md:flex-row justify-start items-start gap-3 md:gap-6">
                <div className="w-28 md:w-36 flex flex-col justify-start items-start gap-1.5 md:gap-3">
                    <div className="w-36 justify-start text-neutral-500 text-[10px] md:text-sm font-medium font-['Poppins'] uppercase">
                        CLIENT
                    </div>
                    <div className="justify-start md:self-stretch md:inline-flex text-zinc-800 text-sm md:text-base font-normal font-['Poppins']">
                        {project.CLIENT_PLACEHOLDER}
                    </div>
                    </div>
                <div className="w-28 md:w-36 flex flex-col justify-start items-start gap-1.5 md:gap-3">
                    <div className="self-stretch justify-start text-neutral-500 text-[10px] md:text-sm font-medium font-['Poppins'] uppercase">
                        SERVICE
                    </div>
                    <div className="self-stretch justify-start md:inline-flex text-zinc-800 text-sm md:text-base font-normal font-['Poppins']">
                        {project.SERVICE_PLACEHOLDER}
                    </div>
                </div>
                <div className="w-28 md:w-36 flex flex-col justify-start items-start gap-1.5 md:gap-3">
                    <div className="self-stretch justify-start text-neutral-500 text-[10px] md:text-sm font-medium font-['Poppins'] uppercase">
                        SECTOR
                    </div>
                    <div className="justify-start md:self-stretch md:inline-flex text-zinc-800 text-sm md:text-base font-normal font-['Poppins']">
                        {project.SECTOR_PLACEHOLDER}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProjectCard;
