import React, { ReactElement } from "react";
import { useParams, Link } from "react-router-dom";

import { ReactComponent as ArrowLeftIcon } from "../assets/icons/arrow-left-black.svg";

import { Projects } from "../constants/projects";
import CaseStudies from "../constants/caseStudies";

import PageContainer from "../components/layout/PageContainer";
import CaseStudyLayout from "../components/case-study/CaseStudyLayout";
import HeroCrosspoint from "../components/shared/HeroCrosspoint";

const IndividualProject = () => {
  const { slug } = useParams();
  const project = Projects.find((p) => p.slug === slug);
  const caseStudy = CaseStudies.find((c) => c.slug == slug);

  /**
   * Shared with CaseStudyLayout so hover / typography / destination match finished pages.
   */
  const BackNav = (description: string): ReactElement => {
    return (
      <nav className="mb-2 w-fit rounded-[5px] px-2 py-2 font-poppins text-mobile-body-m-bold tablet:mb-[3.75rem] tablet:px-2 tablet:py-2 tablet:pl-2 tablet:pr-4 tablet:text-body-m-bold">
        <Link
          to="/projectspage"
          className="flex flex-row items-center gap-[6px] text-bp-black transition-colors [@media(hover:hover)]:hover:text-bp-grey"
        >
          <ArrowLeftIcon className="size-[21px] shrink-0 tablet:size-[26px]" aria-hidden />
          {description.toUpperCase()}
        </Link>
      </nav>
    );
  };

  // Case study not published yet — keep cards clickable with a friendly placeholder
  if (!caseStudy) {
    const projectName = project?.name ?? "This project";
    return (
      <PageContainer className="relative overflow-hidden bg-bp-lightest-grey">
        <HeroCrosspoint
          videoSrc="/videos/crosspoints/dotted-path-orange.webm"
          className="h-[900px]"
          anchorClassName="absolute top-[320px] right-[48px] max-[850px]:top-[150px] max-[850px]:right-[36px]"
          videoClassName="w-[720px] max-[850px]:w-[280px]"
          imageClassName="w-[2260px] max-[850px]:w-[1200px]"
        />

        {/* Same stacking / placement as finished case studies — not under a full-page overlay */}
        <div className="relative z-10">{BackNav("back")}</div>

        <div className="relative z-10 flex min-h-[calc(100svh-220px)] w-full flex-col items-center justify-center px-2 pb-16 text-center max-md:min-h-[calc(100svh-180px)] max-md:pb-10">
          <div className="flex w-full max-w-[840px] flex-col items-center gap-8 max-md:gap-6">
            <img
              src="/blueprint-popup.svg"
              alt=""
              className="h-auto w-full max-w-[240px] max-md:max-w-[180px]"
              aria-hidden
            />
            <div className="flex w-full flex-col items-center gap-4 font-poppins text-bp-black">
              <h1 className="text-[48px] font-normal leading-[1.2] tracking-[-0.96px] max-md:text-[32px] max-md:tracking-[-0.64px]">
                this page is still <strong className="font-bold">in progress</strong>
              </h1>
              <p className="w-full max-w-[720px] text-[20px] font-normal leading-[1.4] tracking-[-0.4px] text-bp-dark-grey max-md:text-[16px]">
                {projectName}&apos;s case study isn&apos;t done yet. Check back later — we&apos;re still
                putting the finishing touches on it.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }

  // Logs error to console if project and casestudy with matching slug have different date values
  if (project && caseStudy.hero.date !== project.date) {
    console.error(`project and case study with slug '${slug}' have different date values.`);
  }

  return (
    <CaseStudyLayout
      backNav={BackNav("back")}
      hero={caseStudy.hero}
      solution={caseStudy.solution}
      testemonial={caseStudy.testemonial}
      team={caseStudy.team}
      slug={caseStudy.slug}
    />
  );
};

export default IndividualProject;
