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
  SECTOR_PLACEHOLDER: "Sustainable Transportation",
}

const ProjectCard = ({project=ProjectInfo}) => { // Change Placeholder Project Info to actual project info once routing is implemented.
    // if (!project || !project.tags) {
    //   return null; 
    // }
    // Placeholders for images and text
    
    return (
    <div className="px-9 pt-9 pb-12 bg-white rounded-[5px] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden 
                    [@media(hover:hover)]:hover:ring-1 [@media(hover:hover)]:hover:ring-bp-grey [@media(hover:hover)]:hover:bg-bp-lightest-grey group
                    md:w-auto md:max-w-[865px] md:min-w-[460px] md:px-9 md:pt-9 md:pb-12 md:h-[640px]
                    max-[767px]:min-w-[276px] max-[767px]:max-w-[623px]">
        <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-5 ">
            {/*  Hero Image  */}
            <div className="self-stretch h-40 flex flex-col justify-end items-center bg-amber-500 rounded-[5px] overflow-hidden pt-[37px] md:h-80">
                {/* max height calculated as (h - pt)*/}
                <img className='transition-transform duration-150 [@media(hover:hover)]:group-hover:scale-105 md:max-h-[283px] max-[767px]:max-h-[126px]' src={project.COVER_PLACEHOLDER} alt="Placeholder"/>
            </div>
            
            {/*  Title and Icons */}
            <div className="self-stretch inline-flex justify-start items-start gap-3
                            md:gap-[40px]">
                <div className="flex-1 max-w-96  justify-start text-black text-lg  font-normal font-['Poppins'] leading-6 
                                md:max-w-none md:text-[18px]/[140%] ">
                    {project.TITLE_PLACEHOLDER}
                </div>
                { /* Left over from ProjectCard component. Not in design sheet so not sure why its here. Commented out in case it's important.
                <div className="hidden w-20 h-20 bg-zinc-800 rounded-full md:block"></div> */}
                <img className="max-[767px]:hidden w-[76px] h-[76px] md:block" src={project.LOGO_PLACEHOLDER} alt="Placeholder"/>
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
                        {project.CLIENT_PLACEHOLDER}
                    </div>
                    </div>
                <div className="flex flex-col justify-start items-start gap-1.5 
                                md:max-w-[150px] md:gap-3
                                max-[767px]:w-28">
                    <div className="self-stretch justify-start text-neutral-500 text-[10px] md:text-sm font-medium font-['Poppins'] uppercase">
                        SERVICE
                    </div>
                    <div className="self-stretch justify-start md:inline-flex text-zinc-800 text-sm md:text-base font-normal font-['Poppins']">
                        {project.SERVICE_PLACEHOLDER}
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1.5 
                                md:max-w-[150px] md:gap-3 
                                max-[767px]:w-28">
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
