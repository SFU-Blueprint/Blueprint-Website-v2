import React from "react";
import PageContainer from "../components/layout/PageContainer";
import Accordion from "../components/shared/Accordion";
import EvaluationCard from "../components/shared/EvaluationCard";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";

const NonprofitsPage = () => {
  const colouredRectCSSBase: string =
    "w-[22px] h-[22px] inline-block rounded-[5px] max-md:w-[16px] max-md:h-[16px] max-md:rounded-[3px]";

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
                        max-[1024px]:mb-[30px]"
      >
        {/* Text column & body: width = viewport × (939|693.5)/1422; ref 1422px-wide screen */}
        <div
          className="flex w-full flex-row gap-0 max-[900px]:flex-col max-[900px]:gap-8"
        >
          <div
            className="flex min-w-0 w-full max-w-full flex-col md:shrink-0 md:max-w-[min(100%,calc(100vw*939/1422))] md:w-[min(100%,calc(100vw*939/1422))]"
          >
            <h1
              className="text-left self-start justify-start desktop:mb-[74px] md:mb-[50px] mb-[30px] font-poppins text-5xl md:text-7xl leading-none tracking-[-0.96px] text-bp-black pt-main-desktop-top max-md:pt-main-mobile-top"
            >
              <span className="font-bold">partner</span>{" "}
              <span className="font-normal">with us</span>
            </h1>

            <p
              className="m-0 min-w-0 self-stretch font-poppins text-black text-heading-xs-reg
                        max-md:max-w-[351px] max-md:text-bp-black max-md:text-mobile-heading-xs-reg
                        md:max-w-[min(100%,calc(100vw*693.5/1422))] min-[901px]:mb-[120px]"
            >
              by working with us, your organization will{" "}
              <span className={`bg-[#D2A6FB] ${colouredRectCSSBase}`} /> gain fresh
              perspectives of your business,{" "}
              <span className={`bg-[#71EC59] ${colouredRectCSSBase}`} /> increase community
              engagement with local students, and{" "}
              <span className={`bg-[#F49F00] ${colouredRectCSSBase}`} /> bring your
              vision for social good to life through innovative ways, all free of charge.
            </p>
          </div>

          <div
            className="min-w-0 shrink-0 max-[900px]:ml-0 min-[900px]:mb-5 max-[900px]:mt-5 min-[901px]:-ml-[120px] min-[901px]:mt-[145px]"
          >
            <PolaroidPhoto
              imageSrc="/images/parter-with-us/OCB_project_handoff.png"
              caption="project handoff"
              alt="Our Community Bikes project handoff"
              className="rotate-[7deg] max-[1024px]:mx-auto"
            />
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

      {/* What our partners say — hidden on mobile; width ∝ viewport (1160px at 1422px ref) */}
      <section className="mb-0 max-md:hidden">
        <div className="w-full min-w-0 max-w-[min(100%,calc(100vw*1160/1422))]">
          <h2
            className="text-bp-black font-poppins font-normal text-[36px]/[140%] tracking-[-0.72px]
                        max-md:text-[24px]/[110%] max-md:tracking-[-0.48px]"
          >
            what <span className="font-semibold">our partners</span> say
          </h2>

          <p
            className="m-0 mt-12 w-full min-w-0 text-bp-black font-caveat text-heading-hand leading-[140%] mb-9"
          >
            [The work SFU Blueprint has done] is much appreciated and there is a lot
            of thanks that cannot really be simply put into words... Volunteers at OCB
            put in thousands of hours of work behind the scene to make everything
            happen. The tool that you have created for us will streamline our process
            to better support and facilitate all the volunteers at OCB. Time is a very
            valuable and finite resource for us at a small non-profit organization and
            it will allow us to manage it better and more efficiently.
          </p>

          <div className="w-full min-w-0 max-w-[min(100%,calc(100vw*241/1422))]">
            <p className="m-0 text-bp-black font-poppins text-body-s-reg uppercase">
              CAVAN HUA
            </p>
            <p className="m-0 text-bp-black font-poppins text-body-s-reg uppercase">
              VOLUNTEER COORDINATOR AT OCB
            </p>
          </div>
        </div>
      </section>

      {/* NPO project proposal — mobile: full-bleed #0146BE, white type, white CTA; md+: gray card 
      Update the section to better align with the site's grey and blue design language.
      Improve consistency with surrounding sections.
     
      */}
      <section
        className="mt-[148px] max-md:mt-16 mb-12 md:mb-16 min-w-0
                -mx-6 md:-mx-10 xl:-mx-36 max-md:pl-[23px] max-md:pr-[23px]
                px-footer-px-mobile md:px-footer-px-tablet lg:px-footer-px-desktop
                max-md:bg-bp-blue max-md:py-12 md:bg-transparent"
      >
        <div
          className="w-full shrink-0 flex flex-col justify-center items-stretch
                max-md:bg-transparent max-md:p-0 max-md:min-h-0
                md:bg-bp-lighter-grey rounded-[20px]
                pt-[72px] pb-[96px] px-6 sm:px-10 md:px-[103px]
                md:min-h-[560px]"
        >
          <div className="flex flex-col w-full max-w-[931px] mx-auto justify-center items-stretch">
            <div className="mb-8 flex w-full items-start gap-[26px] max-md:mb-10 md:mb-12 max-md:gap-0">
              <span
                className="mt-4 hidden shrink-0 w-[22px] h-[22px] rounded-[5px] bg-bp-blue md:block"
                aria-hidden
              />
              <h2
                className="m-0 min-h-0 w-full min-w-0 max-md:mr-32 max-md:min-w-[253px] text-left font-poppins text-white text-mobile-heading-m-reg md:max-w-[483px] md:font-normal md:text-bp-black md:text-heading-s-reg"
              >
                are you part of an NPO with{" "}
                <span className="font-normal md:font-semibold">a project idea</span> in mind?
              </h2>
            </div>

            <div
              className="mb-8 h-[0.5px] w-full min-w-0 shrink-0 self-stretch bg-white/35 max-md:mb-10 md:mb-12 md:max-w-[931px] md:bg-bp-grey"
              aria-hidden
            />

            <div className="flex w-full flex-col lg:flex-row md:items-start md:justify-between md:gap-12 max-md:gap-0">
              <div className="flex w-full max-w-full min-w-0 flex-col gap-6 self-start md:max-w-[588px] md:shrink-0 flex-1">
                <div className="w-full min-w-0 self-stretch overflow-x-auto sm:overflow-visible max-md:pr-36  max-md:overflow-visible md:max-w-none">
                  <p className="text-left font-poppins whitespace-normal text-mobile-body-l-bold text-bp-white max-md:min-w-[253px]  md:text-body-l-bold md:text-bp-black">
                    Submit your project proposal through the form!
                  </p>
                </div>
                <p className="min-w-0 self-stretch text-left font-poppins leading-[normal] text-body-m-reg text-bp-white 
                max-md:min-w-[346px] max-md:flex-1 max-md:basis-0 max-md:shrink-0 md:max-w-none md:flex-none md:basis-auto md:text-bp-black">
                  If you have any questions, or haven&apos;t heard back from us within a
                  week of submitting a proposal, feel free to reach out to{" "}
                  <a
                    href="mailto:sfublueprint@gmail.com"
                    className="font-poppins text-body-m-bold-link leading-[normal] text-bp-white underline decoration-solid [text-decoration-skip-ink:auto] underline-offset-auto hover:opacity-90 md:text-body-m-bold-link md:text-bp-black md:hover:opacity-80"
                  >
                    sfublueprint@gmail.com
                  </a>
                </p>
              </div>

              <a
                href="/nonprofits/proposal"
                className="inline-flex w-full shrink-0 items-center justify-center gap-[10px] rounded-[5px] transition-colors
                max-md:mt-10 max-md:min-h-[52px] max-md:px-6 max-md:py-3.5 max-md:bg-white max-md:hover:bg-bp-lightest-grey
                md:mt-0 md:box-border md:h-[60px] md:w-full lg:w-[200px] md:max-w-full md:self-start md:px-[44px] md:py-[14px] md:bg-bp-blue md:hover:bg-bp-hover-blue md:active:bg-bp-pressed-blue"
              >
                <span className="whitespace-nowrap text-center font-poppins uppercase leading-[normal] text-mobile-body-m-bold text-bp-blue md:text-body-m-bold md:text-bp-white">
                  PROPOSAL FORM
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default NonprofitsPage;
