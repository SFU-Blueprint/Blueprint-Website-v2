import React from "react";
import PageContainer from "../components/layout/PageContainer";
import Accordion from "../components/shared/Accordion";
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
            by working with us, your organization will{" "}
            <span className={`bg-blueprint-orange ${colouredRectCSSBase}`} /> gain fresh
            perspectives of your business,{" "}
            <span className={`bg-[#71EC59] ${colouredRectCSSBase}`} /> increase community
            engagement with local students, and{" "}
            <span className={`bg-[#D2A6FB] ${colouredRectCSSBase}`} /> bring your vision
            for social good to life through innovative ways, all free of charge.
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
        <div className="flex flex-col gap-[6px] mb-[30px]"> {/* Text Div */}
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

      {/* BP Approach Section */}
      <section>
        <h2 className="text-blueprint-neutral-dark font-poppins font-[600] text-[36px]/[140%] tracking-[-0.72px] mb-[24px]
                        max-md:text-[24px]/[110%] max-md:tracking-[-0.48px] max-md:mb-[18px]">
          our approach
        </h2>
        <div className="flex flex-col gap-[16px] max-md:gap-[12px]">
          <Accordion header="01. Discover">
            <div className="flex flex-col gap-[24px] md:gap-[30px]">
              <div className="flex flex-col gap-[6px]">
                <p className="font-poppins font-[600] text-[14px] md:text-[16px]">Research and Discovery</p>
                <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                  We work closely with your organization to understand your needs, goals, and the community you serve.
                </p>
              </div>
              <div className="flex flex-col gap-[6px]">
                <p className="font-poppins font-[600] text-[14px] md:text-[16px]">Project Scoping</p>
                <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                  Our team defines the project scope, deliverables, and timeline to ensure alignment with your vision.
                </p>
              </div>
              <p className="font-poppins font-[600] text-[14px] md:text-[16px]">Total Time: 2-3 Months</p>
            </div>
          </Accordion>
          <Accordion header="02. Build">
            <div className="flex flex-col gap-[24px] md:gap-[30px]">
              <div className="flex flex-col gap-[6px]">
                <p className="font-poppins font-[600] text-[14px] md:text-[16px]">Design and Validation</p>
                <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                  Our designers create design concepts and validate them early to ensure they address the problem effectively.
                </p>
              </div>
              <div className="flex flex-col gap-[6px]">
                <p className="font-poppins font-[600] text-[14px] md:text-[16px]">Development</p>
                <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                  Our developers bring the design to life with reliable, scaleable, and maintainable code tailored to your organization.
                </p>
              </div>
              <p className="font-poppins font-[600] text-[14px] md:text-[16px]">Total Time: 6-8 Months</p>
            </div>
          </Accordion>
          <Accordion header="03. Clean Finish">
            <div className="flex flex-col gap-[24px] md:gap-[30px]">
              <div className="flex flex-col gap-[6px]">
                <p className="font-poppins font-[600] text-[14px] md:text-[16px]">Testing and QA</p>
                <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                  We rigorously test the product to ensure it meets quality standards and is ready for deployment.
                </p>
              </div>
              <div className="flex flex-col gap-[6px]">
                <p className="font-poppins font-[600] text-[14px] md:text-[16px]">Handoff and Support</p>
                <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                  We provide documentation, training, and a smooth handoff so your team can maintain the product independently.
                </p>
              </div>
              <p className="font-poppins font-[600] text-[14px] md:text-[16px]">Total Time: 1-2 Months</p>
            </div>
          </Accordion>
        </div>
      </section>
    </section>

    {/* NPO project proposal - full viewport width, breaks out of PageContainer padding */}
    <section className="-mx-6 bg-blueprint-navyblue overflow-hidden px-6 pt-[45px] pb-[68px] pl-[23px] pr-[21px] flex min-w-96 
                sm:mx-10% sm:px-[103px] sm:pt-[60px] sm:pb-[80px] sm:rounded-2xl sm:mb-[52px]">
                  {/* sm:px-[103px] sm:pt-[60px] sm:pb-[80px] sm:rounded-xl sm:inline-flex sm:flex-col sm:justify-start 
                  sm:items-start sm:gap-2.5 sm:overflow-hidden sm:mb-[52px] sm:max-w-[1360px] */}
                          
      <div className="flex flex-col justify-start items-start gap-6 sm:gap-12 w-full">              
          {/* Heading */}
          <h2 className="w-full text-white text-3xl font-light font-poppins leading-8
            sm:text-heading-m-reg sm:leading-[57.60px] lg:max-w-[655px]">
            are you part of an NPO with a project idea in mind?
          </h2>
          {/* Divider Line */}
          <div className="self-stretch h-px bg-white scale-y-[0.5] origin-center" />
          
          {/* Content */}
          <div className="flex flex-col justify-start items-start gap-3 w-full 
          sm:flex-row sm:justify-between sm:items-start sm:gap-6 lg:justify-between">
            
            {/* Text */}
            <div className="flex flex-col justify-start items-start gap-6 w-full sm:max-w-[588px] max-sm:mb-10">
              <p className="text-white text-lg font-normal font-poppins leading-6 pr-24
               sm:self-stretch sm:text-2xl sm:font-normal sm:leading-8 sm:pr-0 sm:gap-6">
                Submit your project proposal through the form!
              </p>
              <p className="text-white text-base font-light font-poppins leading-6 max-w-100% max-h-100%">
                If you have any questions, or haven&apos;t heard back from us within a week of submitting a proposal, feel free to reach out to{" "}
                <a
                  href="mailto:sfublueprint@gmail.com"
                  className="text-white font-normal underline hover:opacity-90"
                >
                  sfublueprint@gmail.com
                </a>
              </p>
            </div>
          
            <a
              href="/nonprofits/proposal"
              className="w-full h-[52px] px-11 py-3.5 bg-white rounded-[5px] flex flex-row justify-center items-center 
              gap-2.5 hover:bg-blueprint-offwhite transition-colors flex-shrink-0 sm:w-[200px] sm:h-[60px]"
            >
              <span className="text-blue-800 text-sm sm:text-base font-semibold font-poppins whitespace-nowrap">
                PROPOSAL FORM
              </span>
            </a>
           
        </div>
      </div>
    {/* What our partners say */}
    <section className="m-4 mb-[60px]
                        max-md:mb-[40px]">
      <h2 className="text-blueprint-neutral-dark font-poppins font-[600] text-[36px]/[140%] tracking-[-0.72px]
                      max-md:text-[24px]/[110%] max-md:tracking-[-0.48px]">
        what our partners say
      </h2>

      <p className="text-black font-caveat font-[400] text-[34px]/[100%] mt-[24px] mb-[24px]
                    max-md:text-[24px]/[120%] max-md:mt-[18px] max-md:mb-[18px]">
        [The work SFU Blueprint has done] is much appreciated and there is a lot of thanks that cannot really be simply put into words... Volunteers at OCB put in thousands of hours of work behind the scene to make everything happen. 
        The tool that you have created for us will streamline our process to better support and facilitate all the volunteers at OCB. Time is a very valuable and finite resource for us at a small non-profit organization and it will allow us to 
        manage it better and more efficiently.
      </p>

      <div>
        <p className="text-black font-poppins font-[400] text-[14px]/[100%] uppercase">
          CAVAN HUA
        </p>
        <p className="text-black font-poppins font-[400] text-[14px]/[100%] uppercase mt-[2px]">
          VOLUNTEER COORDINATOR AT OCB
        </p>
      </div>
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