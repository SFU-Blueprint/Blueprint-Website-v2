import React, { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import ProjectCard from "../components/projects-page/ProjectProjectCard";
import ProjectsCTA from "../components/shared/ProjectsCTA";
import HeroCrosspoint from "../components/shared/HeroCrosspoint";
import { Projects } from "../constants/projects";

/**
 * Projects whose full cover image should be visible
 * instead of using the normal/default project-card crop.
 */
const CONTAIN_COVER_SLUGS = new Set([
  "pedals",
  "original-blueprint-website",
  "website-revamp-2026",
]);

/**
 * Background colours for each project cover.
 *
 * The two Blueprint colours match the background
 * colours already present in their PNGs.
 */
const COVER_BG_BY_SLUG: Record<string, string> = {
  mosaic: "#5386E4",
  "our-community-bikes": "#E5E5EB",
  "reel-youth": "#F49F00",
  raps: "#FFC3E8",

  "original-blueprint-website": "#A5C6FF",
  "website-revamp-2026": "#D2A6FB",
};

/**
 * Custom scaling.
 *
 * Mosaic keeps its existing custom scale.
 * The two Blueprint projects stay at their natural
 * contained size instead of being enlarged.
 */
const COVER_SCALE_BY_SLUG: Record<string, number> = {
  mosaic: 1.28,
  "original-blueprint-website": 1,
  "website-revamp-2026": 1,
};

/**
 * Vertical cover positioning.
 *
 * The Blueprint screenshots are shifted downward so
 * the bottom edge of the laptop mockup sits against
 * the bottom of the image panel.
 */
const COVER_OFFSET_Y_BY_SLUG: Record<string, number> = {
  "original-blueprint-website": 22,
  "website-revamp-2026": 22,
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
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 pb-ppcard-bottom pt-main-desktop-top max-md:pt-main-mobile-top">
          {/* ====================================================== */}
          {/* PAGE TITLE                                             */}
          {/* ====================================================== */}

          <h1 className="mb-[30px] self-start text-left font-poppins text-[72px] font-normal leading-none tracking-[-1.44px] text-bp-black md:mb-[50px] desktop:mb-[74px] max-md:text-[46px] max-md:tracking-[-0.92px]">
            <span className="max-md:hidden">
              <strong>our</strong> projects
            </span>

            <span className="md:hidden">
              all our projects
            </span>
          </h1>

          {/* ====================================================== */}
          {/* PROJECT GRID                                           */}
          {/* ====================================================== */}

          <section className="relative w-full max-w-[1280px]">
            <div className="grid w-full grid-cols-1 gap-x-[42px] gap-y-9 min-[962px]:grid-cols-2">
              {filteredProjects.map((project) => {
                const shouldContain =
                  CONTAIN_COVER_SLUGS.has(project.slug);

                const coverScale =
                  COVER_SCALE_BY_SLUG[project.slug];

                const coverOffsetY =
                  COVER_OFFSET_Y_BY_SLUG[project.slug];

                return (
                  <ProjectCard
                    key={project.slug}

                    /* Logo */
                    logo_url={
                      project.image
                        ? project.image
                        : "https://placehold.co/76x76"
                    }
                    logo_url_alt={`${project.name} logo`}

                    /* Cover */
                    card_cover_url={
                      project.popupimage
                        ? project.popupimage
                        : "https://placehold.co/517x354"
                    }
                    card_cover_alt={`${project.name} project cover`}

                    /* Project information */
                    description={project.description}
                    client_name={project.name}
                    service={project.tags?.[0] ?? "Web App"}
                    sector={
                      project.tags?.[1] ??
                      project.tags?.[0] ??
                      "Web-app"
                    }

                    /* Routing */
                    href={`/projects/${project.slug}`}

                    /* Cover customization */
                    coverBg={
                      COVER_BG_BY_SLUG[project.slug]
                    }
                    coverScale={coverScale}
                    coverFit={
                      shouldContain ? "contain" : undefined
                    }
                    coverOffsetY={coverOffsetY}
                  />
                );
              })}
            </div>

            {/* ==================================================== */}
            {/* PROJECT CTA                                          */}
            {/* ==================================================== */}

            <div className="pointer-events-none sticky bottom-3 z-20 mt-[10px] flex flex-col items-center pt-4 tablet:bottom-10 md:mt-[15px]">
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