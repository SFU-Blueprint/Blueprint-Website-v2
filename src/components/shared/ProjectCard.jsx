import React from 'react';
// import { ParagraphTitle, ParagraphText } from "../Common";
// import { useTranslation } from "react-i18next";

/**
 * ProjectCard component to display a card representing a project.
 * @param {string} project - Project key.
 * @returns {JSX.Element} JSX representation of the ProjectCard component.
 */

const ProjectCard = ({project}) => {
    // if (!project || !project.tags) {
    //   return null; 
    // }
    // Placeholders for images and text
    const IMAGE_PLACEHOLDER = "https://placehold.co/80x78";
    const TITLE_PLACEHOLDER = "reducing volunteer management time by 4 hours per month with a digital volunteer hour logbook";
    const CLIENT_PLACEHOLDER = "Our Community Bikes";   
    const SERVICE_PLACEHOLDER = "Web-app";
    const SECTOR_PLACEHOLDER = "Sustainable Transportation";
    return (
    <div class="w-80 md:max-w-[865px] min-w-72 md:w-auto md:min-w-[624px] px-6 pt-6 pb-9 md:px-9 md:pt-9 md:pb-12 bg-white rounded-[5px] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div class="self-stretch flex flex-col justify-start items-start gap-4 md:gap-5">
            {/*  Hero Image  */}
            <div class="self-stretch h-40 md:h-80 relative bg-amber-500 rounded-[5px] overflow-hidden">
                <div class="w-[543.57px] h-96 left-[-123px] md:left-[125px] top-[37px] absolute"></div>
            </div>
            
            {/*  Title and Icons */}
            <div class="self-stretch inline-flex justify-start items-start gap-3 md:gap-16">
                <div class="flex-1 max-w-96 md:max-w-none justify-start text-zinc-800 text-lg md:text-2xl font-normal font-['Poppins'] leading-6 md:leading-8">
                    {TITLE_PLACEHOLDER}
                    </div>
                <div class="hidden md:block w-20 h-20 bg-zinc-800 rounded-full"></div>
                <img class="hidden md:block w-20 h-20" src={IMAGE_PLACEHOLDER} alt="Placeholder"/>
            </div>
            
            {/*  Divider */}
            <div class="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-300"></div>
            
            {/* Info Section */}
            <div class="w-full max-w-[552px] md:inline-flex md:flex-row justify-start items-start gap-3 md:gap-6">
                <div class="w-28 md:w-36 flex flex-col justify-start items-start gap-1.5 md:gap-3">
                    <div class="w-36 justify-start text-neutral-500 text-[10px] md:text-sm font-medium font-['Poppins'] uppercase">
                        CLIENT
                    </div>
                    <div class="justify-start md:self-stretch md:inline-flex text-zinc-800 text-sm md:text-base font-normal font-['Poppins']">
                        {CLIENT_PLACEHOLDER}
                    </div>
                    </div>
                <div class="w-28 md:w-36 flex flex-col justify-start items-start gap-1.5 md:gap-3">
                    <div class="self-stretch justify-start text-neutral-500 text-[10px] md:text-sm font-medium font-['Poppins'] uppercase">
                        SERVICE
                    </div>
                    <div class="self-stretch justify-start md:inline-flex text-zinc-800 text-sm md:text-base font-normal font-['Poppins']">
                        {SERVICE_PLACEHOLDER}
                    </div>
                </div>
                <div class="w-28 md:w-36 flex flex-col justify-start items-start gap-1.5 md:gap-3">
                    <div class="self-stretch justify-start text-neutral-500 text-[10px] md:text-sm font-medium font-['Poppins'] uppercase">
                        SECTOR
                    </div>
                    <div class="justify-start md:self-stretch md:inline-flex text-zinc-800 text-sm md:text-base font-normal font-['Poppins']">
                        {SECTOR_PLACEHOLDER}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProjectCard;
