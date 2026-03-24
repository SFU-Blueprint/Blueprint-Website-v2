import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import ProjectCard from "../components/projects-page/ProjectProjectCard";
import Filters from "../components/shared/Filters";
import ProjectsCTA from "../components/shared/ProjectsCTA";
import { Projects } from "../constants/projects";

// Map filter button labels to project tags they should match - button label: [project tags]
const FILTER_TO_TAGS: Record<string, string[]> = {
  "Web App": ["Admin", "AI / Bot"],
  "Website": ["Website"],
  "Plug-in": ["Innovation"],
  // "Current": ["Current"],
  // "Completed": ["Completed"],
};

const ProjectsPage = () => {
  const filterNames = ["Web App", "Website", "Plug-in", 
    // "Current", "Completed"
  ]; // Filter button labels - Displayed in UI

  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const handleFilterClick = (filterName: string) => {
    setSelectedFilter((prev) => (prev === filterName ? "All" : filterName));
  };

  // Filter projects based on selected filter
  const filteredProjects = Projects.filter((project) => {
    if (selectedFilter === "All") return true;
    const matchTags = FILTER_TO_TAGS[selectedFilter] ?? [];

    // Filter based on status 
    if(matchTags.includes("Completed")){
      return project.status?.toLowerCase() === "completed";
    }else if(matchTags.includes("Current")){
      return project.status?.toLowerCase() === "current";
    }else { // Filter based on tags
      return project.tags?.some((tag) =>
        matchTags.some((t) => t.toLowerCase() === tag.toLowerCase())
      );
    }
  });

    return (
    <PageContainer className="bg-[url('/images/non-profit/desktop_partner_crosspoint.svg')] bg-no-repeat bg-blueprint-gray-light 
                              min-[1280px]:bg-[calc(100%+585px)_-500px]
                              max-[1279px]:bg-[calc(100%+689px)_-500px]
                              max-md:bg-[url('/images/non-profit/mobile_partner_crosspoint.svg')] max-md:bg-[calc(100%+130px)_-45px]">

      {/* Main Container Flex Column */}
      <div className="flex flex-col gap-4 items-center justify-center pb-ppcard-bottom pt-main-desktop-top max-md:pt-main-mobile-top">
          {/* Title */}
          <h1 className="text-center justify-start text-zinc-800 max-md:text-3xl text-5xl font-normal font-['Poppins'] ">
              <span className="max-md:hidden">our projects</span>
              <span className="md:hidden">all our projects</span>
          </h1>
          
          {/* Filters Flex Row (Web app, Website, Plugin)*/}
          <div className="flex flex-row gap-4 items-center justify-center pt-10 pb-16 max-md:gap-[6px] max-md:pb-6 max-md:pt-8">
            {filterNames.map((name) => (
              <Filters
                key={name}
                title={name}
                state={selectedFilter === name ? "active" : "outlined"}
                onClick={() => handleFilterClick(name)}
              />
            ))}
          </div>
          
          {/* Projects Grid: 1 column on mobile, 2 per row on larger screens */}
          <div className="grid grid-cols-1 min-[962px]:grid-cols-2 gap-x-[42px] gap-y-9 w-full max-w-[1280px]">
              {filteredProjects.map((project) => (
                <ProjectCard
                key={project.slug}
                project={{
                  LOGO_PLACEHOLDER: project.image ? project.image : "https://placehold.co/76x76",
                  COVER_PLACEHOLDER: project.popupimage ? project.popupimage : "https://placehold.co/517x354",
                  TITLE_PLACEHOLDER: project.description,
                  CLIENT_PLACEHOLDER: project.name,
                  SERVICE_PLACEHOLDER: project.tags?.[0] ?? "Web App",
                  SECTOR_PLACEHOLDER: project.tags?.[1] ?? project.tags?.[0] ?? "NPO",
                }}
              />
              ))}
          </div>

        {/* Filters */}
        <div
          className="flex flex-row flex-wrap gap-[10px] items-center justify-center pt-[42px] pb-[84px]"
          role="group"
          aria-label="Project type filters"
        >
          {filterNames.map((name, index) => (
            <Filters
              key={name}
              variant="light"
              state={selectedIndex === index ? "selected" : "default"}
              title={name}
              onClick={() => setSelectedIndex(index)}
              aria-pressed={selectedIndex === index}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 min-[962px]:grid-cols-2 gap-x-[42px] gap-y-9 w-full max-w-[1280px]">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      {/* CTA - Sticky at bottom until footer, no extra white space */}
      <div className="sticky bottom-0 left-0 right-0 z-20 flex justify-center pt-4 pb-4
      md:bottom-[300px]">
        <ProjectsCTA />
      </div>
    </PageContainer>
  );
};

export default ProjectsPage;