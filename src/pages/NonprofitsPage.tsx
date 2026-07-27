import React from "react";
import PageContainer from "../components/layout/PageContainer";
import Accordion from "../components/shared/Accordion";
import EvaluationCard from "../components/shared/EvaluationCard";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";
import TestimonialSection from "../components/sponsor-page/TestimonialSection";
import NonprofitsCTASection from "../components/nonprofits-page/NonprofitsCTASection";

const NonprofitsPage = () => {
  return (
    <PageContainer className="overflow-hidden relative"
    >
      <div className="w-full h-0 xl:ml-[-144px] max-[1279.9px]:ml-[-40px]">
          <div className="bg-bp-lightest-grey bg-[url('/images/crosspoint.png')] bg-no-repeat z-[-10]
                    min-[1340px]:bg-[calc(100%+600px)_-385px]
                    max-[1339.9px]:bg-[calc(100%+670px)_-385px]
                    max-[1279.9px]:bg-[calc(100%+700px)_-385px]
                    max-[1023.9px]:bg-[calc(100%+700px)_-385px]
                    max-[767.9px]:bg-[calc(100%+715px)_-420px] max-[767.9px]:w-[calc(100%+17px)]
                    max-[513.9px]:bg-[calc(100%+745px)_-470px]
                    overflow-clip w-full h-full mt-[-110px] absolute ">

          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="
                      min-[1340px]:right-[-117px] min-[1340px]:top-[-45px]
                      max-[1339.9px]:right-[-187px] max-[1339.9px]:top-[-35px]
                      max-[1279.9px]:right-[-217px]
                      max-[1023.9px]:right-[-216px]
                      max-[767.9px]:right-[-234px] max-[767.9px]:top-[-65px] md:scale-[1.6] max-md:scale-[0.8]                     min-[514px]:w-[500px] max-[513.9px]:w-[300px] max-[513.9px]:scale-[1] max-[513.9px]:right-[-100px] max-[513.9px]:top-[-25px]
                      max-[513.9px]:scale-[0.9] max-[513.9px]:right-[-155px] max-[513.9px]:top-[50px]
                      absolute  z-[-10]">
            <source src="videos/crosspoints/dotted-path-1.webm" type="video/webm"/>
          </video>
      </div>

      {/* Hero Section */}
      <section
        className="mb-[180px]
                        max-[1024px]:mb-[80px] max-[480px]:mb-[64px]"
      >
        <div className="flex items-end gap-6 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-0">
          <div className="pointer-events-none absolute bottom-[14px] left-0 right-0 hidden h-px bg-bp-light-grey min-[901px]:block" aria-hidden="true" />
          <h1
            className="relative z-10 text-left self-start justify-start font-poppins text-5xl leading-none tracking-[-0.96px] text-bp-black pt-main-desktop-top max-md:pt-main-mobile-top md:text-7xl"
          >
            <span className="font-bold">partner</span>{" "}
            <span className="font-normal">with us</span>
          </h1>
        </div>

        <div className="mt-[22px] flex w-full items-start gap-[38px] max-[900px]:mt-[18px] max-[900px]:flex-col max-[900px]:gap-[28px]">
          <div className="min-w-0 flex-1 max-w-[592px]">
            <p className="m-0 font-poppins text-[24px] font-normal leading-[1.35] tracking-[-0.48px] text-bp-black max-md:text-[18px] max-md:leading-[1.4] max-md:tracking-[-0.36px]">
              by working with us, your organization will:
            </p>

            <ul className="mt-[38px] flex list-none flex-col gap-[22px] p-0 max-md:mt-[24px] max-md:gap-[18px]">
              <li className="flex items-start gap-[16px] max-md:gap-[12px]">
                <span className="mt-[8px] h-[19px] w-[19px] shrink-0 rounded-[5px] bg-[#F49F00] max-md:mt-[5px] max-md:h-[16px] max-md:w-[16px] max-md:rounded-[3px]" aria-hidden="true" />
                <span className="font-poppins text-[24px] font-normal leading-[1.35] tracking-[-0.48px] text-bp-black max-md:text-[18px] max-md:leading-[1.4] max-md:tracking-[-0.36px]">
                  gain fresh perspectives of your business
                </span>
              </li>
              <li className="flex items-start gap-[16px] max-md:gap-[12px]">
                <span className="mt-[8px] h-[19px] w-[19px] shrink-0 rounded-[5px] bg-[#D2A6FB] max-md:mt-[5px] max-md:h-[16px] max-md:w-[16px] max-md:rounded-[3px]" aria-hidden="true" />
                <span className="font-poppins text-[24px] font-normal leading-[1.35] tracking-[-0.48px] text-bp-black max-md:text-[18px] max-md:leading-[1.4] max-md:tracking-[-0.36px]">
                  increase community engagement with local students
                </span>
              </li>
              <li className="flex items-start gap-[16px] max-md:gap-[12px]">
                <span className="mt-[8px] h-[19px] w-[19px] shrink-0 rounded-[5px] bg-[#71EC59] max-md:mt-[5px] max-md:h-[16px] max-md:w-[16px] max-md:rounded-[3px]" aria-hidden="true" />
                <span className="font-poppins text-[24px] font-normal leading-[1.35] tracking-[-0.48px] text-bp-black max-md:text-[18px] max-md:leading-[1.4] max-md:tracking-[-0.36px]">
                  bring your vision for social good to life through innovative ways, all free of charge
                </span>
              </li>
            </ul>
          </div>

          <div className="relative h-[382px] w-full max-w-[324px] shrink-0 self-center md:h-[500px] md:max-w-[460px] min-[901px]:ml-auto min-[901px]:self-start">
            <div className="absolute left-0 top-[108px] md:left-[10px] md:top-[152px]">
              <PolaroidPhoto
                imageSrc="/images/parter-with-us/OCB_project_handoff.png"
                caption="project handoff @OCB"
                alt=""
                className="origin-top-left rotate-[-4deg] scale-[0.88] md:scale-[0.84]"
                imageCropClassName="object-center scale-[1.04]"
              />
            </div>
            <div className="absolute right-0 top-0 z-10">
              <PolaroidPhoto
                imageSrc="/images/parter-with-us/OCB_project_handoff.png"
                caption="project handoff @OCB"
                alt="Our Community Bikes project handoff"
                className="origin-top-right rotate-[6deg] scale-[0.88] md:scale-[0.84]"
                imageCropClassName="object-center scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Trait and BP approach grouping */}
      <section className="mb-[120px] max-md:mb-[80px]">
        {/* Project Traits Section*/}
        <section
          className="mb-[148px] max-md:mb-[80px]"
        >
          <div className="flex flex-col gap-3 mb-12 max-md:mb-10">
            <h2
              className="text-bp-black font-poppins font-normal text-heading-s-reg
                          max-md:max-w-[253px] max-md:text-bp-black max-md:text-mobile-heading-s-bold max-md:mb-[12px]"
            >
              can <span className="md:font-semibold">your idea</span> become a project?
            </h2>
            <p
              className="text-black font-poppins text-body-l-reg
                        max-md:min-w-[305px] max-md:text-mobile-body-l-reg"
            >
              We consider the following aspects when evaluating potential projects:
            </p>
          </div>

          {/* Eval Card list */}
          <ul
            className="flex flex-row gap-x-6 max-w-[100%]
                       max-[1076px]:flex-col max-[1076px]:gap-y-6"
          >
            <li>
              <EvaluationCard
                colour="bp-blue"
                title="Organizational Need"
                body="What measurable improvements would this product deliver to current operations? 
            How does it align with long-term organizational goals? How urgent is its development?"
              />
            </li>
            <li>
              <EvaluationCard
                colour="bp-accent-purple"
                title="Technical Feasibility"
                body="Are the desired features commonly found in other software products? Example solutions include mobile apps, websites, browser-based games, databases, and AI/ML systems."
              />
            </li>
            <li>
              <EvaluationCard
                colour="bp-accent-medium-blue"
                title="Community Impact"
                body="Does the non-profit understand the challenges encountered by the community it serves? How would the product align with solving those problems?"
              />
            </li>
          </ul>
        </section>

        {/* BP Approach Section */}
        <section>
          <h2
            className="text-bp-black font-poppins font-normal text-heading-s-reg mb-12
                        max-md:text-s-bold max-md:mb-[18px]"
          >
            our <span className="font-semibold">approach</span>
          </h2>

          <div className="flex flex-col gap-4 max-md:gap-3">
            <Accordion header="01. Discover">
              <div className="flex flex-col gap-[24px] md:gap-[30px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="font-poppins font-[600] text-[14px] md:text-[16px]">
                    Research and Discovery
                  </p>
                  <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                    We work closely with your organization to understand your needs, goals,
                    and the community you serve.
                  </p>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="font-poppins font-[600] text-[14px] md:text-[16px]">
                    Project Scoping
                  </p>
                  <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                    Our team defines the project scope, deliverables, and timeline to ensure
                    alignment with your vision.
                  </p>
                </div>
                <p className="font-poppins font-[600] text-[14px] md:text-[16px]">
                  Total Time: 2-3 Months
                </p>
              </div>
            </Accordion>

            <Accordion header="02. Build">
              <div className="flex flex-col gap-[24px] md:gap-[30px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="font-poppins font-[600] text-[14px] md:text-[16px]">
                    Design and Validation
                  </p>
                  <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                    Our designers create design concepts and validate them early to ensure
                    they address the problem effectively.
                  </p>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="font-poppins font-[600] text-[14px] md:text-[16px]">
                    Development
                  </p>
                  <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                    Our developers bring the design to life with reliable, scaleable, and
                    maintainable code tailored to your organization.
                  </p>
                </div>
                <p className="font-poppins font-[600] text-[14px] md:text-[16px]">
                  Total Time: 6-8 Months
                </p>
              </div>
            </Accordion>

            <Accordion header="03. Clean Finish">
              <div className="flex flex-col gap-[24px] md:gap-[30px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="font-poppins font-[600] text-[14px] md:text-[16px]">
                    Testing and QA
                  </p>
                  <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                    We rigorously test the product to ensure it meets quality standards and
                    is ready for deployment.
                  </p>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="font-poppins font-[600] text-[14px] md:text-[16px]">
                    Handoff and Support
                  </p>
                  <p className="font-poppins font-[400] text-[14px] md:text-[16px]">
                    We provide documentation, training, and a smooth handoff so your team
                    can maintain the product independently.
                  </p>
                </div>
                <p className="font-poppins font-[600] text-[14px] md:text-[16px]">
                  Total Time: 1-2 Months
                </p>
              </div>
            </Accordion>
          </div>
        </section>
      </section>

      <div className="pt-20 max-md:pt-14">
        <TestimonialSection
          quote="Volunteers at OCB put in thousands of hours of work behind the scene to make everything happen. The tool that you have created for us will streamline our process to better support and facilitate all the volunteers at OCB."
          authorName="Cavan Hua"
          authorRole="VOLUNTEER COORDINATOR AT OCB"
          polaroidCaption="description here"
          caseStudyLink="/projects/our-community-bikes"
        />
      </div>
      <div className="pt-16 max-md:pt-12">
        <NonprofitsCTASection proposalFormLink="/nonprofits/proposal" />
      </div>
    </PageContainer>
  );
};

export default NonprofitsPage;
