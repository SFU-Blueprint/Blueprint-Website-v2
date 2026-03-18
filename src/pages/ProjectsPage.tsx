import React from "react";
import PageContainer from "../components/layout/PageContainer";
import ProjectCard from "../components/projects-page/ProjectProjectCard";
import Filters from "../components/shared/Filters";
import ProjectsCTA from "../components/shared/ProjectsCTA";
const ProjectsPage = () => {
  const filterNames = ["Web App", "Website", "Plugin"];
  return (
    <PageContainer className="bg-[url('/images/non-profit/desktop_partner_crosspoint.svg')] bg-no-repeat bg-blueprint-gray-light 
                              min-[1280px]:bg-[calc(100%+585px)_-500px]
                              max-[1279px]:bg-[calc(100%+689px)_-500px]
                              max-md:bg-[url('/images/non-profit/mobile_partner_crosspoint.svg')] max-md:bg-[calc(100%+130px)_-132px]">

      {/* Main Container Flex Column */}
      <div className="flex flex-col gap-4 items-center justify-center pb-ppcard-bottom pt-main-top">
          {/* Title */}
          <h1 className="text-center justify-start text-zinc-800 text-5xl font-normal font-['Poppins']">
              our projects
          </h1>
          
          {/* Filters Flex Row (Web app, Website, Plugin)*/}
          <div className="flex flex-row gap-4 items-center justify-center pt-[42px] pb-[84px]">
            {filterNames.map((name) => (
              <Filters state="outlined" title={name} />
            ))}
          </div>
          
          {/* Projects Grid: 1 column on mobile, 2 per row on larger screens */}
          <div className="grid grid-cols-1 min-[962px]:grid-cols-2 gap-x-[42px] gap-y-9 w-full max-w-[1280px]">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
          </div>

      </div>
      {/* CTA - Sticky at bottom until footer, no extra white space */}
      <div className="sticky bottom-0 left-0 right-0 z-20 flex justify-center pt-4 pb-4">
        <ProjectsCTA />
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;