import React, { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import ProjectCard from "../components/projects-page/ProjectProjectCard";
import Filters from "../components/shared/Filters";
import ProjectsCTA from "../components/shared/ProjectsCTA";
import { Projects } from "../constants/projects";

// Map filter button labels to project tags they should match
const FILTER_TO_TAGS: Record<string, string[]> = {
  "Web App": ["Admin", "AI / Bot"],
  Website: ["Website"],
  "Plug-in": ["Innovation"],
};

const ProjectsPage = () => {
  // const filterNames = ["Web App", "Website", "Plug-in"];
  const [selectedFilter, setSelectedFilter] = useState("All");

  /*
  const handleFilterClick = (filterName: string) => {
    setSelectedFilter((prev) => (prev === filterName ? "All" : filterName));
  };
  */

  const filteredProjects = Projects.filter((project) => {
    if (selectedFilter === "All") return true;

    const matchTags = FILTER_TO_TAGS[selectedFilter] ?? [];

    return project.tags?.some((tag) =>
      matchTags.some((t) => t.toLowerCase() === tag.toLowerCase())
    );
  });

  return (
     <PageContainer className="bg-bp-lightest-grey relative z-0">
      <div className="w-full h-0 xl:ml-[-144px] max-[1279.9px]:ml-[-40px]">
        <div className="bg-[url('/images/crosspoint.png')] bg-no-repeat
                    min-[1600px]:bg-[calc(50%+270px)_-390px]
                    max-[1599.9px]:bg-[calc(100%+610px)_-390px]
                    max-[1279.9px]:bg-[calc(100%+715px)_-390px]
                    max-[767.9px]:bg-[calc(100%+715px)_-500px] max-[767.9px]:w-[calc(100%+17px)]
                    max-[580px]:bg-[calc(100%)_-500px]
                    overflow-clip w-full h-full mt-[-110px] absolute ">
        </div>
        <video
            autoPlay
            muted
            loop
            className="
                      min-[1600px]:right-[calc(50%-918px)] min-[1340px]:top-[-40px]
                      max-[1599.9px]:right-[-127px] max-[1599.9px]:top-[-40px]
                      max-[1279.9px]:right-[-233px]
                      min-[768px]:w-[500px]
                      max-[767.9px]:right-[-110px] max-[767.9px]:top-[-20px] max-[767.9px]:w-[250px]
                      max-[580px]:right-[-150px] max-[580px]:top-[-20px]
                      absolute  z-[-1]">
          <source src="videos/crosspoints/dotted-path-3.webm" type="video/webm"/>
        </video>
      </div>
      <div className="flex relative z-10 flex-col gap-4 items-center justify-center pb-ppcard-bottom pt-main-desktop-top max-md:pt-main-mobile-top">
        <h1 className="text-center justify-start text-zinc-800 max-md:text-3xl text-5xl font-normal font-['Poppins'] desktop:mb-[74px] md:mb-[50px] mb-[30px]">
          <span className="max-md:hidden">our projects</span>
          <span className="md:hidden">all our projects</span>
        </h1>

        {/* Filter component
        <div
          className="flex flex-row flex-wrap gap-[10px] items-center justify-center pt-10 pb-16 max-md:gap-[6px] max-md:pb-6 max-md:pt-8"
          role="group"
          aria-label="Project type filters"
        >
          {filterNames.map((name) => (
            <Filters
              key={name}
              variant="light"
              title={name}
              state={selectedFilter === name ? "selected" : "default"}
              onClick={() => handleFilterClick(name)}
              aria-pressed={selectedFilter === name}
            />
          ))}
        </div>
        */}

        <section className="max-w-[1280px]">
          <div className="grid grid-cols-1 min-[962px]:grid-cols-2 gap-x-[42px] gap-y-9 w-full ">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                logo_url={project.image ? project.image : "https://placehold.co/76x76"}
                card_cover_url={
                  project.popupimage ? project.popupimage : "https://placehold.co/517x354"
                }
                description={project.description}
                client_name={project.name}
                service={project.tags?.[0] ?? "Web App"}
                sector={project.tags?.[1] ?? project.tags?.[0] ?? "Web-app"}
                href={`/projects/${project.slug}`}
              />
            ))}
          </div>
          <div className="flex flex-col items-center pt-4 std-max md:mt-[15px] mt-[10px]">
            <ProjectsCTA />
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;
