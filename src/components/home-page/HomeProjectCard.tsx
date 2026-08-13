import React from 'react';
import ProjectCardCover from "../shared/ProjectCardCover";
import ProjectCardMeta from "../shared/ProjectCardMeta";

/**
 * ProjectCard component to display a card representing a project.
 * @param {string} project - Project key.
 * @returns {JSX.Element} JSX representation of the ProjectCard component.
 */

const ProjectInfo = { // put project key infor here.
  LOGO_PLACEHOLDER: "https://placehold.co/76x76",
  COVER_PLACEHOLDER: "https://placehold.co/517x354",
  COVER_BG: "#5387E3",
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
    <div className="w-full min-w-0 max-w-[865px] px-6 pt-6 pb-9 md:px-9 md:pt-9 md:pb-12 bg-white rounded-[5px] flex flex-col justify-start items-start gap-2.5 overflow-hidden [@media(hover:hover)]:hover:ring-1 [@media(hover:hover)]:hover:ring-bp-grey [@media(hover:hover)]:hover:bg-bp-lightest-grey group">
        <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-5">
           {/*  Hero Image  */}
            <ProjectCardCover
              src={project.COVER_PLACEHOLDER}
              backgroundColor={project.COVER_BG ?? "#5387E3"}
              scale={project.COVER_SCALE}
            />
            
            {/*  Title and Icons */}
            <div className="self-stretch inline-flex justify-start items-start gap-3 md:gap-16">
                <div className="flex-1 max-w-96 md:max-w-none justify-start text-zinc-800 text-lg md:text-2xl font-normal font-['Poppins'] leading-6 md:leading-8">
                    {project.TITLE_PLACEHOLDER}
                    </div>
                {/* <div className="hidden md:block w-20 h-20 bg-zinc-800 rounded-full"></div> */}
                <img className="hidden md:block w-20 h-20" src={project ? project.LOGO_PLACEHOLDER : "https://placehold.co/76x76"} alt="Placeholder"/>
            </div>
            
            {/*  Divider */}
            <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-300"></div>
            
            <ProjectCardMeta
              client={project.CLIENT_PLACEHOLDER}
              service={project.SERVICE_PLACEHOLDER}
              sector={project.SECTOR_PLACEHOLDER}
            />
        </div>
    </div>
    );
};

export default ProjectCard;
