import React from "react";
import PageContainer from "../components/layout/PageContainer";
import Accordion from "../components/shared/Accordion";
import EvaluationCard from "../components/shared/EvaluationCard";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";
import TestimonialSection from "../components/sponsor-page/TestimonialSection";
import NonprofitsCTASection from "../components/nonprofits-page/NonprofitsCTASection";
import HeroCrosspoint from "../components/shared/HeroCrosspoint";

const NonprofitsPage = () => {
  return (
    <div className="relative overflow-x-clip bg-bp-lightest-grey">
      <HeroCrosspoint videoSrc="/videos/crosspoints/dotted-path-1.webm" />

      <PageContainer className="relative z-10">
        {/* ============================================================ */}
        {/* HERO                                                         */}
        {/* ============================================================ */}

        <section
          className="
            relative z-10 mb-[180px] pt-main-desktop-top
            max-md:pt-main-mobile-top
            max-[1024px]:mb-[80px]
            max-[480px]:mb-[64px]
          "
        >
          <div className="flex items-end gap-6 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-0">
            <h1
              className="
                relative z-10 self-start justify-start text-left
                font-poppins text-[72px] font-normal leading-none
                tracking-[-1.44px] text-bp-black
                max-md:text-[46px] max-md:tracking-[-0.92px]
              "
            >
              <span className="font-bold">partner</span>{" "}
              <span className="font-normal">with us</span>
            </h1>
          </div>

          <div
            className="
              mt-[22px] flex w-full items-center gap-[38px]
              max-[900px]:mt-[18px]
              max-[900px]:flex-col
              max-[900px]:items-start
              max-[900px]:gap-[28px]
            "
          >
            {/* Left content */}
            <div className="min-w-0 max-w-[760px] flex-1">
              <p
                className="
                  m-0 font-poppins text-[30px] font-normal
                  leading-[1.4] tracking-[-0.6px] text-bp-black
                  max-md:text-[20px]
                  max-md:leading-[1.4]
                  max-md:tracking-[-0.4px]
                "
              >
                by working with us, your organization will:
              </p>

              <ul
                className="
                  mt-[38px] flex list-none flex-col gap-[22px] p-0
                  max-md:mt-[24px] max-md:gap-[18px]
                "
              >
                {/* Fresh perspectives */}
                <li className="flex items-start gap-[16px] max-md:gap-[12px]">
                  <span
                    className="
                      mt-[10px] h-[19px] w-[19px] shrink-0
                      rounded-[5px] bg-[#F49F00]
                      max-md:mt-[6px]
                      max-md:h-[16px]
                      max-md:w-[16px]
                      max-md:rounded-[3px]
                    "
                    aria-hidden="true"
                  />

                  <span
                    className="
                      font-poppins text-[30px] font-normal
                      leading-[1.4] tracking-[-0.6px] text-bp-black
                      max-md:text-[20px]
                      max-md:leading-[1.4]
                      max-md:tracking-[-0.4px]
                    "
                  >
                    gain fresh perspectives of your business
                  </span>
                </li>

                {/* Community engagement */}
                <li className="flex items-start gap-[16px] max-md:gap-[12px]">
                  <span
                    className="
                      mt-[10px] h-[19px] w-[19px] shrink-0
                      rounded-[5px] bg-[#D2A6FB]
                      max-md:mt-[6px]
                      max-md:h-[16px]
                      max-md:w-[16px]
                      max-md:rounded-[3px]
                    "
                    aria-hidden="true"
                  />

                  <span
                    className="
                      font-poppins text-[30px] font-normal
                      leading-[1.4] tracking-[-0.6px] text-bp-black
                      max-md:text-[20px]
                      max-md:leading-[1.4]
                      max-md:tracking-[-0.4px]
                    "
                  >
                    increase community engagement with local students
                  </span>
                </li>

                {/* Social good */}
                <li className="flex items-start gap-[16px] max-md:gap-[12px]">
                  <span
                    className="
                      mt-[10px] h-[19px] w-[19px] shrink-0
                      rounded-[5px] bg-[#71EC59]
                      max-md:mt-[6px]
                      max-md:h-[16px]
                      max-md:w-[16px]
                      max-md:rounded-[3px]
                    "
                    aria-hidden="true"
                  />

                  <span
                    className="
                      font-poppins text-[30px] font-normal
                      leading-[1.4] tracking-[-0.6px] text-bp-black
                      max-md:text-[20px]
                      max-md:leading-[1.4]
                      max-md:tracking-[-0.4px]
                    "
                  >
                    bring your vision for social good to life through innovative
                    ways, all free of charge
                  </span>
                </li>
              </ul>
            </div>

            {/* ======================================================== */}
            {/* HERO POLAROIDS                                           */}
            {/* ======================================================== */}

            <div
              className="
                relative h-[340px] w-full max-w-[324px] shrink-0
                self-center md:h-[420px] md:max-w-[460px]
                min-[901px]:ml-auto
              "
            >
              {/* Stoney Creek */}
              <div className="absolute left-0 top-[50%] -translate-y-[52%] md:left-[10px]">
                <PolaroidPhoto
                  imageSrc="/images/parter-with-us/stoney-creek.png"
                  caption="salmon release @stoney creek"
                  alt="Students collecting samples at Stoney Creek"
                  className="origin-top-left rotate-[-4deg] scale-[0.88] md:scale-[0.84]"
                  imageCropClassName="object-center scale-[1.04]"
                />
              </div>

              {/* OCB site visit */}
              <div className="absolute right-0 top-[50%] z-10 -translate-y-[68%]">
                <PolaroidPhoto
                  imageSrc="/images/parter-with-us/OCB_site_visit.jpg"
                  caption="site visit @OCB"
                  alt="Our Community Bikes site visit"
                  className="origin-top-right rotate-[6deg] scale-[0.88] md:scale-[0.84]"
                  imageCropClassName="object-center scale-[1.04]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* PROJECT TRAITS                                                */}
        {/* ============================================================ */}

        <section className="mb-[120px] max-md:mb-[80px]">
          <section className="mb-[148px] max-md:mb-[80px]">
            <div className="mb-12 flex flex-col gap-3 max-md:mb-10">
              <h2
                className="
                  font-poppins text-heading-s-reg font-normal
                  text-bp-black
                  max-md:mb-[12px]
                  max-md:max-w-[253px]
                  max-md:text-mobile-heading-s-bold
                "
              >
                can <span className="md:font-semibold">your idea</span>{" "}
                become a project?
              </h2>

              <p
                className="
                  font-poppins text-body-l-reg text-black
                  max-md:min-w-[305px]
                  max-md:text-mobile-body-l-reg
                "
              >
                We consider the following aspects when evaluating potential
                projects:
              </p>
            </div>

            <ul
              className="
                flex max-w-[100%] flex-row gap-x-6
                max-[1076px]:flex-col
                max-[1076px]:gap-y-6
              "
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

          {/* ========================================================== */}
          {/* OUR APPROACH                                               */}
          {/* ========================================================== */}

          <section>
            <h2
              className="
                mb-12 font-poppins text-heading-s-reg font-normal
                text-bp-black
                max-md:mb-[18px]
                max-md:text-s-bold
              "
            >
              our <span className="font-semibold">approach</span>
            </h2>

            <div className="flex flex-col gap-4 max-md:gap-3">
              {/* 01. Discover */}
              <Accordion header="01. Discover">
                <div className="flex flex-col gap-[24px] md:gap-[30px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-poppins text-[14px] font-[600] md:text-[16px]">
                      Research and Discovery
                    </p>

                    <p className="font-poppins text-[14px] font-[400] md:text-[16px]">
                      We work closely with your organization to understand your
                      needs, goals, and the community you serve.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <p className="font-poppins text-[14px] font-[600] md:text-[16px]">
                      Project Scoping
                    </p>

                    <p className="font-poppins text-[14px] font-[400] md:text-[16px]">
                      Our team defines the project scope, deliverables, and
                      timeline to ensure alignment with your vision.
                    </p>
                  </div>

                  <p className="font-poppins text-[14px] font-[600] md:text-[16px]">
                    Total Time: 2-3 Months
                  </p>
                </div>
              </Accordion>

              {/* 02. Build */}
              <Accordion header="02. Build">
                <div className="flex flex-col gap-[24px] md:gap-[30px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-poppins text-[14px] font-[600] md:text-[16px]">
                      Design and Validation
                    </p>

                    <p className="font-poppins text-[14px] font-[400] md:text-[16px]">
                      Our designers create design concepts and validate them
                      early to ensure they address the problem effectively.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <p className="font-poppins text-[14px] font-[600] md:text-[16px]">
                      Development
                    </p>

                    <p className="font-poppins text-[14px] font-[400] md:text-[16px]">
                      Our developers bring the design to life with reliable,
                      scaleable, and maintainable code tailored to your
                      organization.
                    </p>
                  </div>

                  <p className="font-poppins text-[14px] font-[600] md:text-[16px]">
                    Total Time: 6-8 Months
                  </p>
                </div>
              </Accordion>

              {/* 03. Clean Finish */}
              <Accordion header="03. Clean Finish">
                <div className="flex flex-col gap-[24px] md:gap-[30px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-poppins text-[14px] font-[600] md:text-[16px]">
                      Testing and QA
                    </p>

                    <p className="font-poppins text-[14px] font-[400] md:text-[16px]">
                      We rigorously test the product to ensure it meets quality
                      standards and is ready for deployment.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <p className="font-poppins text-[14px] font-[600] md:text-[16px]">
                      Handoff and Support
                    </p>

                    <p className="font-poppins text-[14px] font-[400] md:text-[16px]">
                      We provide documentation, training, and a smooth handoff
                      so your team can maintain the product independently.
                    </p>
                  </div>

                  <p className="font-poppins text-[14px] font-[600] md:text-[16px]">
                    Total Time: 1-2 Months
                  </p>
                </div>
              </Accordion>
            </div>
          </section>
        </section>

        {/* ============================================================ */}
        {/* OCB TESTIMONIAL                                               */}
        {/* ============================================================ */}

        <div className="pt-20 max-md:pt-14">
          <TestimonialSection
            quote="Volunteers at OCB put in thousands of hours of work behind the scene to make everything happen. The tool that you have created for us will streamline our process to better support and facilitate all the volunteers at OCB."
            authorName="Cavan Hua"
            authorRole="VOLUNTEER COORDINATOR AT OCB"
            authorImage="/images/projects/our-community-bikes/ocb-logo.svg"
            caseStudyImage="/images/parter-with-us/OCB_project_handoff.png"
            polaroidImage="/images/parter-with-us/OCB_demo.png"
            polaroidCaption="project demo @OCB"
            caseStudyLink="/projects/our-community-bikes"
          />
        </div>

        {/* ============================================================ */}
        {/* CTA                                                           */}
        {/* ============================================================ */}

        <div className="pt-16 max-md:pt-12">
          <NonprofitsCTASection
            proposalFormLink="https://forms.gle/D77d78W95Mnhjskq5"
          />
        </div>
      </PageContainer>
    </div>
  );
};

export default NonprofitsPage;