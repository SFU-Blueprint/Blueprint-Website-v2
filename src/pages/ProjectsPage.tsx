import React, { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import ProjectCard from "../components/shared/ProjectCard";
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
 * Background colours for project covers.
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
 * Custom cover scaling.
 */
const COVER_SCALE_BY_SLUG: Record<string, number> = {
  mosaic: 1.28,
  "original-blueprint-website": 1,
  "website-revamp-2026": 1,
};

/**
 * Vertical cover positioning.
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
    <div className="relative w-full bg-bp-lightest-grey">
      {/* ======================================================== */}
      {/* HERO CROSSPOINT                                          */}
      {/* Clip only the crosspoint instead of the entire page      */}
      {/* so position: sticky continues to work correctly.         */}
      {/* ======================================================== */}

      <div className="absolute inset-x-0 top-0 overflow-x-clip">
        <HeroCrosspoint videoSrc="/videos/crosspoints/dotted-path-3.webm" />
      </div>

      <PageContainer className="relative z-10">
        {/* ======================================================== */}
        {/* HERO / PAGE TITLE                                        */}
        {/* Same positioning as Sponsor Us                           */}
        {/* ======================================================== */}

        <section className="relative z-10">
          <div
            className="
              mx-auto
              w-full
              max-w-[1440px]
              pt-main-desktop-top
              max-md:pt-main-mobile-top
            "
          >
            <h1
              className="
                font-poppins
                text-[72px]
                font-normal
                leading-none
                tracking-[-1.44px]
                text-bp-black

                max-md:text-[46px]
                max-md:tracking-[-0.92px]
              "
            >
              <span className="max-md:hidden">
                <strong>our</strong> projects
              </span>

              <span className="md:hidden">all our projects</span>
            </h1>
          </div>
        </section>

        {/* ======================================================== */}
        {/* PROJECTS                                                 */}
        {/* Keeps original 1280px content width                      */}
        {/* ======================================================== */}

        <section
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1280px]
            pt-[74px]

            max-md:pt-[30px]
          "
        >
          {/*
           * This wrapper establishes the area that the sticky CTA
           * is allowed to move within.
           */}
          <div className="relative">
            {/* ==================================================== */}
            {/* PROJECT GRID                                         */}
            {/* ==================================================== */}

            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-y-9

                min-[962px]:grid-cols-2
                min-[962px]:gap-x-[42px]
              "
            >
              {filteredProjects.map((project) => {
                const shouldContain = CONTAIN_COVER_SLUGS.has(
                  project.slug
                );

                const coverScale =
                  COVER_SCALE_BY_SLUG[project.slug];

                const coverOffsetY =
                  COVER_OFFSET_Y_BY_SLUG[project.slug];

                return (
                  <ProjectCard
                    key={project.slug}
                    logo_url={
                      project.image
                        ? project.image
                        : "https://placehold.co/76x76"
                    }
                    logo_url_alt={`${project.name} logo`}
                    card_cover_url={
                      project.popupimage
                        ? project.popupimage
                        : "https://placehold.co/517x354"
                    }
                    card_cover_alt={`${project.name} project cover`}
                    description={project.description}
                    client_name={project.name}
                    service={project.tags?.[0] ?? "Web App"}
                    sector={
                      project.tags?.[1] ??
                      project.tags?.[0] ??
                      "Web-app"
                    }
                    href={`/projects/${project.slug}`}
                    coverBg={COVER_BG_BY_SLUG[project.slug]}
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
            {/* STICKY PROJECT CTA                                    */}
            {/*                                                      */}
            {/* Sticks near the bottom of the viewport while         */}
            {/* scrolling through the project section.               */}
            {/* ==================================================== */}

            <div
              className="
                sticky
                bottom-6
                z-20

                mt-[24px]
                flex
                w-full
                justify-center
                pb-[48px]

                max-md:bottom-4
                max-md:mt-[20px]
                max-md:pb-[32px]
              "
            >
              <ProjectsCTA />
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  );
};

export default ProjectsPage;