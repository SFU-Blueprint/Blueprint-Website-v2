import React, { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import ProjectCard from "../components/projects-page/ProjectProjectCard";
import ProjectsCTA from "../components/shared/ProjectsCTA";
import HeroCrosspoint from "../components/shared/HeroCrosspoint";
import { Projects } from "../constants/projects";

const COVER_BG_BY_SLUG: Record<string, string> = {
  mosaic: "#5386E4",
  "our-community-bikes": "#E5E5EB",
  "reel-youth": "#F49F00",
  raps: "#FFC3E8",
  "blueprint-website": "#0146BE",
};

const ProjectsPage = () => {
  const [selectedFilter] = useState("All");

  const filteredProjects = Projects.filter((project) => {
    if (selectedFilter === "All") return true;
    return true;
  });

  return (
    <div className="relative overflow-x-clip bg-bp-lightest-grey">
      <HeroCrosspoint videoSrc="/videos/crosspoints/dotted-path-3.webm" />
      <PageContainer className="relative z-10">
        <div className="relative z-10 flex flex-col gap-4 items-center justify-center pb-ppcard-bottom pt-main-desktop-top max-md:pt-main-mobile-top">
          <h1 className="text-left self-start justify-start desktop:mb-[74px] md:mb-[50px] mb-[30px] font-poppins text-[72px] font-normal leading-none tracking-[-1.44px] text-bp-black max-md:text-[46px] max-md:tracking-[-0.92px]">
            <span className="max-md:hidden">
              <strong>our</strong> projects
            </span>
            <span className="md:hidden">all our projects</span>
          </h1>

          <section className="relative w-full max-w-[1280px]">
            <div className="grid grid-cols-1 min-[962px]:grid-cols-2 gap-x-[42px] gap-y-9 w-full">
              {filteredProjects.map((project) => {
                return (
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
                    coverBg={COVER_BG_BY_SLUG[project.slug]}
                    coverScale={project.slug === "mosaic" ? 1.28 : undefined}
                    coverMockup={
                      project.slug === "blueprint-website" ? "macbook" : undefined
                    }
                  />
                );
              })}
            </div>
            <div className="pointer-events-none sticky bottom-3 z-20 flex flex-col items-center pt-4 tablet:bottom-10 md:mt-[15px] mt-[10px]">
              <div className="pointer-events-auto">
                <ProjectsCTA />
              </div>
            </div>
          </section>
        </div>
      </PageContainer>
    </div>
  );
};

export default ProjectsPage;
