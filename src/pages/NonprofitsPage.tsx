import React from "react";
import PageContainer from "../components/layout/PageContainer";
import EvaluationCard from "../components/shared/EvaluationCard";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";

const NonprofitsPage = () => {
  const colouredRectCSSBase: string = "w-[22px] h-[22px] inline-block rounded-[5px] max-md:w-[16px] max-md:h-[16px] max-md:rounded-[3px]";

  return (
    <PageContainer className="bg-[url('/images/non-profit/desktop_partner_crosspoint.svg')] bg-no-repeat 
                              min-[1280px]:bg-[calc(100%+585px)_-500px]
                              max-[1279px]:bg-[calc(100%+689px)_-500px]
                              max-md:bg-[url('/images/non-profit/mobile_partner_crosspoint.svg')] max-md:bg-[calc(100%+130px)_-132px]">
    {/* Hero Section */}
    <section className="mb-[180px]
                        max-[1024px]:mb-[30px]">
        <h1 className="text-blueprint-neutral-dark text-[96px]/[100%] font-[400] font-poppins tracking-[-1.92px] text-left mb-[24px] whitespace-pre-wrap
                        max-md:text-[56px] max-md:tracking-[-1.12px] max-md:mb-[12px]
                        max-[400px]:w-[200px]">
        <strong>partner</strong> with us
        </h1>
        {/* Img & Desc container*/}
        <div className="flex flex-row w-[100%] 
                        max-[900px]:flex-col"> 
          <p className="font-poppins font-[400] text-[30px]/[100%] text-black tracking-[-0.6px] 
                        min-[769px]:pr-[30px]
                        max-md:text-[20px]/[140%] max-md:text-blueprint-neutral-dark max-md:tracking-[-0.4px]">
            by working with us, your organization will <div className={`bg-blueprint-orange ${colouredRectCSSBase} `} /> gain fresh perspectives of your business, <div className={`bg-[#71EC59] ${colouredRectCSSBase} `} /> increase community engagement with local students, 
            and <div className={`bg-[#D2A6FB]  ${colouredRectCSSBase}`} />  bring your vision for social good to life through innovative ways, all free of charge.
          </p>
          {/* Polaroid Wrapper */}
          <div className="min-[1025px]:h-0
                          max-[1024px]:mt-[32px]"> 
            <PolaroidPhoto imageSrc="https://placehold.co/398x298" caption="placeholder" alt="placeholder" 
            className="ml-auto rotate-[7deg]
                       max-[1024px]:mr-auto "/>
          </div>
        </div>
    </section>

    {/* Project Trait and BP approach grouping */}
    <section className="mb-[80px]">
      {/* Project Traits Section*/}
      <section className="mb-[60px]
                          max-md:mb-[18px]">
        <div className="flex flex-col gap-6px mb-[30px]"> {/* Text Div */}
          <h2 className="text-blueprint-neutral-dark font-poppins font-[600] text-[36px]/[140%] tracking-[-0.72px]
                          max-md:text-[24px]/[110%] max-md:tracking-[-0.48px] max-md:mb-[12px]">
            can your idea become a project?
          </h2>
          <p className="text-black font-poppins text-[24px]/[130%] font-[400] tracking-[-0.48px]
                        max-md:text-[18px] max-md:tracking-[-0.36px]">
            We consider the following aspects when evaluating potential projects.
          </p>
        </div>
        {/* Eval Card list */}
        <ul className="flex flex-row gap-x-[6px] max-w-[100%]
                       max-[1076px]:flex-col max-[1076px]:gap-y-[18px]">
          <li>
            {/* hexcode: #0146BE */}
            <EvaluationCard colour="blueprint-navyblue" title="Organizational Need" body="What measurable improvements would this product deliver to current operations? 
            How does it align with long-term organizational goals? How urgent is its development?" />
          </li>
          <li>
            {/* hexcode: #F49F00 */}
            <EvaluationCard colour="blueprint-orange" title="Technical Feasibility" body="Are the desired features commonly found in other software products? Example solutions include mobile apps, websites, browser-based games, databases, and AI/ML systems." />
          </li>
          <li>
            {/* hexcode: #0177E8 */}
            <EvaluationCard colour="blueprint-blue" title="Community Impact" body="Does the non-profit understand the challenges encountered by the community it serves? How would the product would align with solving those problems?" />  
          </li>
        </ul>
      </section>

      {/* BP Approach sections*/}
      <section className="m-4">
        <h2>our approach</h2>
        <ol>
          <li>1 Discover PLACEHOLDER</li>
          <li>2 Build PLACEHOLDER</li>
          <li>3 Clean Finish PLACEHOLDER</li>
        </ol>
      </section>
    </section>

    {/* NPO project proposal */}
    <section className="m-4">
      <h2>are you part of an NPO with a project idea in mind?</h2>
      <hr/>
      <h3>submit yout project proposal through the form!</h3>
      <p>additional info PLACEHOLER</p>
      <button>PROPOSAL FORM BTN PLACEHOLDER</button>
    </section>
    </PageContainer>
  );
};

export default NonprofitsPage;