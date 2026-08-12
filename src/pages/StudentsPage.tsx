import { useCallback, useLayoutEffect, useRef, useState, type ComponentType, type CSSProperties, type ReactNode, type SVGProps } from "react";
import Button from "../components/shared/Button";
import ExpandableContentCards from "../components/shared/ExpandableContentCards";
import { ReactComponent as ArrowUpRightIcon } from "../assets/icons/ArrowUpRight.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";
import PageContainer from "../components/layout/PageContainer";
import HeroCrosspoint from "../components/shared/HeroCrosspoint";
import Accordion from "../components/shared/Accordion";

const HERO_CONTENT = {
  subtitle:
    "gain real-world experience in the tech industry and work with other passionate students, all while making a positive impact in your community.",
};

const ROLE_DESCRIPTIONS = {
  Developer:
    "In a team of 6-8, bring behavioural and technical skills to build the product. You'll work through project-specific technical challenges—concepts and design approaches—alongside your tech lead, developers, and designers.",
  Designer:
    "In a team of 6-8, shape the product experience through research, UI/UX, and visual design. You'll collaborate closely with the project manager and developers so designs stay aligned with user needs and technical constraints.",
  "Project Manager":
    "In a team of 6-8, lead initiatives end-to-end: communicate with stakeholders, align priorities across design and engineering, and keep the project on track for our nonprofit partner.",
} as const;

const TRIAD_ASSETS = {
  lightGrey: "/images/student/join-triad-light-grey.svg",
  grey: "/images/student/join-triad-grey.svg",
  blue: "/images/student/join-triad-blue.svg",
};

const SOCIAL_EVENT_CARDS = [
  {
    title: "Blueprint-Wide Socials",
    body: "Once a semester, meet members across teams over great food and games!",
    image: "/images/student/join-social-blueprint-wide.webp",
    imageClassName: "h-[166.67%] w-[179.49%] -left-[32.67%] -top-[66.67%]",
    accentColor: "#D2A6FB",
    imageHoverClassName: "lg:group-hover/expandable-card:left-[-17.35%] lg:group-hover/expandable-card:w-[142.86%]",
  },
  {
    title: "Team Socials",
    body: "Go out with your project team for food and drinks, karaoke, hiking, or just to co-work!",
    image: "/images/student/join-social-team.webp",
    imageClassName: "h-full w-full object-cover object-bottom",
    accentColor: "#F49F00",
  },
  {
    title: "Career Events",
    body: "Attend our career knowledge-sharing events to learn how to best set yourself up for success!",
    image: "/images/student/blueprint-to-career.png",
    imageClassName: "h-full w-full object-cover object-center",
    accentColor: "#A5C6FF",
  },
];

const APPLICATION_TABS = [
  "MEET BLUEPRINT",
  "APPLY",
  "INTERVIEW",
  "FINAL DECISION",
  "ONBOARDING",
] as const;

const APPLICATION_TAB_CONTENT: Record<(typeof APPLICATION_TABS)[number], string[]> = {
  "MEET BLUEPRINT": [
    "We host info session events once a semester; join us to have fun and hear directly from our team members about the Blueprint experience!",
  ],
  APPLY: [],
  INTERVIEW: [],
  "FINAL DECISION": [
    "After interviews, our team reviews all candidates and makes final decisions. We aim to notify everyone within a week of completing interviews.",
    "We value diverse perspectives and look for candidates who are passionate about social good and collaborative work.",
  ],
  ONBOARDING: [
    "Welcome to Blueprint! New members go through an onboarding process where you'll meet your team, learn our workflows, and start contributing to your project.",
    "You'll be paired with experienced members who can help you get up to speed quickly.",
  ],
};

type RoleAccordionItem = {
  title: string;
  body: ReactNode;
};

const INTERVIEW_ROLE_ACCORDIONS: RoleAccordionItem[] = [
  {
    title: "Developers",
    body: (
      <>
        <p>
          We interview for two levels of developers — Junior Developers joining a project team to
          grow their skills, and Senior Developers who take on more ownership of technical work and
          mentoring within the team.
        </p>
        <p>
          For all developer roles, the interview process will focus on both behavioural and technical
          abilities. The technical portion will begin with a few light questions as a warm-up,
          followed by 2-3 project-specific questions. Depending on the hiring timeline, these
          questions may focus on technical concepts and design approaches rather than coding
          exercises. Senior Developer interviews may also explore how you guide technical decisions
          and support other developers on the team.
        </p>
      </>
    ),
  },
  {
    title: "Designer",
    body: (
      <>
        <p>
          We interview for two types of designers — Product/UX designers for our project teams, and
          Graphic/Motion designers for our marketing team.
        </p>
        <p>
          Designer interviews will include behavioural questions and a walkthrough of your portfolio
          or case studies. We’ll focus on your design process, how you iterate on a challenge, and
          how you collaborate with developers and product managers. Be prepared to discuss at least
          one complete case study in depth.
        </p>
      </>
    ),
  },
  {
    title: "Tech Lead",
    body: (
      <p>
        Tech Lead interviews will include both behavioural and technical questions. Candidates will
        also be evaluated on their leadership capabilities, including experience leading teams,
        communicating with stakeholders, and guiding technical decisions. The technical portion will
        consist of a few light questions, followed by project-specific questions.
      </p>
    ),
  },
  {
    title: "Product and Project Manager",
    body: (
      <p>
        Product or Project Manager interviews will consist of behavioural questions and a
        project-specific case study. Questions will focus on your experience leading initiatives,
        communicating with multiple stakeholders, and aligning priorities across teams.
      </p>
    ),
  },
  {
    title: "Executive Member",
    body: (
      <p>
        Executive member interviews will include both behavioural and role-specific situational or
        case study questions. These questions are designed to understand your motivation for joining,
        your approach to decision-making, and your ability to collaborate with others.
      </p>
    ),
  },
];

const APPLY_ROLE_ACCORDIONS: RoleAccordionItem[] = [
  {
    title: "Developers",
    body: (
      <>
        <p>
          We hire for two levels of developers — Junior Developers for our project teams who are
          building foundational experience, and Senior Developers who take on more ownership of
          technical direction within a project. Typically, we hire both junior and senior developers
          each semester depending on project needs.
        </p>
        <p>
          For all developer applications, we look for evidence of both behavioural and technical
          ability. Share projects that show how you approach technical concepts and design decisions.
          (GitHub links, project write-ups, or portfolios are welcome!){" "}
          <strong className="font-semibold">
            We are looking for at least one project that clearly demonstrates your problem-solving
            process, your contributions, and the outcome.
          </strong>
        </p>
        <p>
          If your project is a group effort, make sure it is very clear how your personal
          contributions shaped the final product. If we can’t easily differentiate your work from
          those of your team, your application will likely be rejected.
        </p>
      </>
    ),
  },
  {
    title: "Designer",
    body: (
      <>
        <p>
          We hire for two types of designers - Product/UX designers for one of our project teams, and
          Graphic/Motion designers for our marketing team. Typically, we will only hire 6-8
          Product/UX designers and 2 Graphic/Motion designers throughout the year.
        </p>
        <p>
          For all designer applications, a portfolio is required to show evidence of basic knowledge
          of design principles and your experience with the design process. (PDF/Slide Decks are
          accepted!){" "}
          <strong className="font-semibold">
            We are looking for at least one complete case study showing a design challenge, your
            iterations, and a final product.
          </strong>
        </p>
        <p>
          If your case study is showing a group project, make sure it is very clear how your personal
          contributions shaped the final product. If we can’t easily differentiate your work from
          those of your team, your application will likely be rejected.
        </p>
      </>
    ),
  },
  {
    title: "Tech Lead",
    body: (
      <p>
        Tech Lead applications should speak to leadership as well as technical depth. Share
        experience leading teams, communicating with stakeholders, and guiding technical decisions.
        We want to see how you mentor others and drive project direction, not only your individual
        coding work.
      </p>
    ),
  },
  {
    title: "Product and Project Manager",
    body: (
      <p>
        Product or Project Manager applications should emphasize how you lead initiatives, work with
        multiple stakeholders, and align priorities across teams. Use concrete examples of planning,
        communication, and trade-offs you’ve made to move a project forward.
      </p>
    ),
  },
  {
    title: "Executive Member",
    body: (
      <p>
        Executive Member applications should convey your motivation for joining Blueprint, how you
        approach decision-making, and how you collaborate with others. Situational examples that show
        judgment and teamwork help us understand how you’d contribute at the org level.
      </p>
    ),
  },
];

const OPEN_POSITIONS = [
  { title: "senior developer", count: 3, accent: "#71EC59", href: "#" },
  { title: "designer", count: 3, accent: "#D2A6FB", href: "#" },
  { title: "product manager", count: 3, accent: "#F49F00", href: "#" },
  { title: "event coordinator", count: 3, accent: "#9CC0FF", href: "#" },
];

const SOCIAL_LINKS = [
  {
    platform: "instagram",
    description:
      "Follow us on Instagram to stay updated on events and see what our team is working on.",
    href: "https://www.instagram.com/sfublueprint/",
    accentColor: "#FFC3E8",
    icon: InstagramIcon,
  },
  {
    platform: "youtube",
    description: "Subscribe to our Youtube channel for our Career Talks podcast series!",
    href: "https://www.youtube.com/@sfublueprint",
    accentColor: "#F49F00",
    icon: YoutubeIcon,
  },
  {
    platform: "discord",
    description:
      "Join our Discord for hiring announcements and a place to ask any questions about Blueprint!",
    href: "https://discord.gg/sfublueprint",
    accentColor: "#D2A6FB",
    icon: DiscordIcon,
  },
  {
    platform: "linkedin",
    description: "Curious to see what our members are up to? Connect with Blueprint on Linkedin!",
    href: "https://www.linkedin.com/company/sfublueprint/",
    accentColor: "#A5C6FF",
    icon: LinkedinIcon,
  },
];

const StudentsPage = () => {
  const scrollToPositions = () => {
    document
      .getElementById("open-positions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-x-clip bg-bp-lightest-grey">
      <HeroCrosspoint videoSrc="/videos/crosspoints/dotted-path-2.webm" />
      <PageContainer className="relative z-10">
        <HeroSection onOpenPositions={scrollToPositions} />
        <TypicalExperienceSection />
        <ApplicationProcessSection />
        <OpenPositionsSection />
        <StayUpdatedSection />
      </PageContainer>
    </div>
  );
};

function HeroSection({ onOpenPositions }: { onOpenPositions: () => void }) {
  return (
    <section className="relative z-10">
      <div className="mx-auto relative z-10 flex w-full max-w-[1212px] flex-col pb-[154px] max-md:pb-[84px] pt-main-desktop-top max-md:pt-main-mobile-top">
        <div className="flex items-start justify-between gap-10 max-md:flex-col max-md:gap-12">
          <div className="max-w-[954px]">
            <h1 className="font-poppins text-[72px] font-bold leading-none tracking-[-1.44px] text-bp-black max-md:text-[46px] max-md:tracking-[-0.92px]">
              join <span className="font-normal">our team</span>
            </h1>
            <p className="mt-6 max-w-[726px] font-poppins text-[30px] font-normal leading-[1.4] tracking-[-0.6px] text-bp-black max-md:text-[20px] max-md:leading-[1.4] max-md:tracking-[-0.4px]">
              {HERO_CONTENT.subtitle}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-[60px] flex w-full max-w-[617px] flex-col items-center text-center max-md:mt-[67px]">
          <h2 className="font-caveat text-heading-hand text-bp-black max-md:text-mobile-heading-hand">
            Blueprint at SFU is right for you!
          </h2>
          <Button
            variant="primary"
            onClick={onOpenPositions}
            className="mt-6 w-[200px] max-md:h-[52px] max-md:w-full max-md:max-w-[352px] max-md:text-[14px]"
          >
            SEE OPEN POSITIONS
          </Button>
        </div>
      </div>
    </section>
  );
}

function TypicalExperienceSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1152px] flex-col items-center gap-[100px] px-5 pb-[148px] max-md:gap-[72px] max-md:pb-[102px]">
      <div className="flex max-w-[792px] flex-col items-center gap-12 text-center max-md:gap-[60px]">
        <h2 className="relative max-w-[792px] font-poppins text-[36px] font-normal leading-[1.4] tracking-[-0.72px] text-black max-md:max-w-[243px] max-md:text-[24px] max-md:tracking-[-0.48px]">
          a <strong className="font-semibold">typical experience</strong> at{" "}
          <BlueprintSpark className="mx-2 inline-block align-[-12px] max-md:mx-1 max-md:align-[-6px]" />
          blueprint
        </h2>
        <p className="max-w-[792px] font-poppins text-[24px] font-normal leading-[1.3] tracking-[-0.48px] text-black max-md:max-w-[306px] max-md:text-[18px] max-md:tracking-[-0.36px]">
          Work with a <span className="font-medium">cross-functional team</span> of roughly 10 blueprint members to bring a project from its earliest stages to final client handoff.
        </p>
      </div>

      <TriadDiagram />

      <div className="flex w-full flex-col items-center gap-[76px] max-md:gap-12">
        <p className="max-w-[820px] text-center font-poppins text-[24px] font-normal leading-[1.3] tracking-[-0.48px] text-black max-md:max-w-[300px] max-md:text-[18px] max-md:tracking-[-0.36px]">
          Through our <span className="font-medium">regular social events</span>, you can take the opportunity to meet passionate people, build real connections, and engage with a community that supports your growth - personally and professionally.
        </p>
        <ExpandableContentCards cards={SOCIAL_EVENT_CARDS} />
      </div>

      <TimelineSection />
    </section>
  );
}

function BlueprintSpark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/student/join-blueprint-mark.svg"
      alt=""
      aria-hidden
      className={`h-[53px] w-[53.003px] max-md:h-[27px] max-md:w-[27.003px] ${className}`}
    />
  );
}

function TriadDiagram() {
  const [activeRole, setActiveRole] = useState<keyof typeof ROLE_DESCRIPTIONS>("Developer");

  return (
    <div className="flex flex-col items-center gap-12 max-md:gap-9">
      <div className="relative h-[390.406px] w-[500.74px] max-md:h-[277.068px] max-md:w-[319.86px]">
        <img
          src={TRIAD_ASSETS.lightGrey}
          alt=""
          className="absolute left-[164px] top-[110px] h-[182.886px] w-[175.279px] max-md:left-[98.09px] max-md:top-[78.07px] max-md:h-[129.793px] max-md:w-[124.394px]"
          aria-hidden
        />
        <img
          src={TRIAD_ASSETS.grey}
          alt=""
          className="absolute left-[46.52px] top-0 h-[390.406px] w-[409.843px] max-md:left-[14.71px] max-md:h-[277.068px] max-md:w-[290.863px]"
          aria-hidden
        />
        <img
          src={TRIAD_ASSETS.blue}
          alt=""
          className="absolute left-[46.52px] top-0 h-[390.406px] w-[409.843px] max-md:left-[14.71px] max-md:h-[277.068px] max-md:w-[290.863px]"
          aria-hidden
        />
        <p className="absolute left-[194.52px] top-[183px] w-[113px] text-center font-poppins text-[24px] font-normal leading-[1.3] tracking-[-0.48px] text-black max-md:left-[102.93px] max-md:top-[129px] max-md:text-[18px] max-md:tracking-[-0.36px]">
          Product Triad
        </p>
        <TriadRoleButton
          label="Project Manager"
          accent="#F49F00"
          active={activeRole === "Project Manager"}
          onClick={() => setActiveRole("Project Manager")}
          className="left-[265.74px] top-[10px] w-[198px] max-md:left-[134.14px] max-md:top-[9px] max-md:w-[163px]"
        />
        <TriadRoleButton
          label="Developer"
          accent="#6AA0FF"
          active={activeRole === "Developer"}
          onClick={() => setActiveRole("Developer")}
          className="left-0 top-[263px] w-[147px] max-md:top-[204px] max-md:w-[119px]"
        />
        <TriadRoleButton
          label="Designer"
          accent="#D2A6FB"
          active={activeRole === "Designer"}
          onClick={() => setActiveRole("Designer")}
          className="left-[361.74px] top-[303px] w-[139px] max-md:left-[208.86px] max-md:top-[227px] max-md:w-[111px]"
        />
      </div>

      <div className="w-[520px] rounded-[10px] bg-bp-lighter-grey px-[38px] pb-12 pt-[35px] max-md:w-[355px] max-md:px-6 max-md:pb-10 max-md:pt-[30px]">
        <h3 className="font-poppins text-[24px] font-normal leading-[1.3] tracking-[-0.48px] text-bp-black max-md:text-[18px] max-md:tracking-[-0.36px]">
          {activeRole}:
        </h3>
        <p className="mt-3 font-poppins text-[16px] font-normal leading-normal text-black max-md:text-[14px]">
          {ROLE_DESCRIPTIONS[activeRole]}
        </p>
      </div>
    </div>
  );
}

function TriadRoleButton({
  label,
  accent,
  active,
  onClick,
  className,
}: {
  label: keyof typeof ROLE_DESCRIPTIONS;
  accent: string;
  active: boolean;
  onClick: () => void;
  className: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute flex h-[55px] items-center gap-[14px] rounded-[10px] px-[18px] font-poppins text-[16px] font-normal leading-normal transition-colors max-md:h-11 max-md:gap-[9px] max-md:px-[13px] max-md:text-[14px] ${
        active ? "bg-bp-black text-white" : "bg-white text-bp-black"
      } ${className}`}
    >
      <span className="size-4 shrink-0 rounded-[3px] max-md:size-3" style={{ backgroundColor: accent }} aria-hidden />
      {label}
    </button>
  );
}

function TimelineSection() {
  return (
    <div className="flex w-full flex-col items-center gap-[76px] max-md:gap-[60px]">
      <div className="flex max-w-[620px] flex-col items-center gap-[50px] text-center max-md:gap-6">
        <p className="max-w-[606px] font-poppins text-[24px] font-normal leading-[1.3] tracking-[-0.48px] text-black max-md:max-w-[306px] max-md:text-[18px] max-md:tracking-[-0.36px]">
          Projects typically run for about 8 months, giving you{" "}
          <span className="font-medium">plenty of time to learn and make quality work.</span>
        </p>
        <p className="font-poppins text-[16px] font-normal leading-normal text-black max-md:max-w-[310px] max-md:text-[14px]">
          The first 2-3 months focus on design, followed by development and testing for the remaining 6 months (timelines may vary by project). Students commit around 10 hours per week, with{" "}
          <span className="font-semibold">project work intentionally slowing down during midterms and finals</span>{" "}
          to help students balance responsibilities.
        </p>
      </div>
      <TimelineGraphic />
    </div>
  );
}

function TimelineGraphic() {
  return (
    <div className="relative h-[241px] w-[842px] font-caveat text-[24px] leading-none text-black max-md:h-[89px] max-md:w-[312px] max-md:text-[9px]">
      <svg viewBox="0 0 842 241" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        <g stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round">
          <path d="M55 44V204" />
          <path d="M240 44V204" />
          <path d="M425 44V204" />
          <path d="M795 44V204" />
          <path d="M55 68H425" />
          <path d="M55 68L72 54" />
          <path d="M55 68L72 82" />
          <path d="M425 68L408 54" />
          <path d="M425 68L408 82" />
          <path d="M240 138H795" />
          <path d="M240 138L257 124" />
          <path d="M240 138L257 152" />
          <path d="M795 138L778 124" />
          <path d="M795 138L778 152" />
        </g>
      </svg>
      <span className="absolute left-0 top-0">Project Start</span>
      <span className="absolute left-[352px] top-0 max-md:left-[130px]">Full Design Hand-off</span>
      <span className="absolute left-[717px] top-0 max-md:left-[266px]">Client Hand-off</span>
      <span className="absolute left-[69px] top-[77px] max-md:left-[25px] max-md:top-[28px]">Product Design</span>
      <span className="absolute left-[261px] top-[148px] max-md:left-[97px] max-md:top-[55px]">Development</span>
      <span className="absolute left-[192px] top-[211px] max-md:left-[71px] max-md:top-[78px]">2 Months</span>
      <span className="absolute left-[380px] top-[211px] max-md:left-[141px] max-md:top-[78px]">4 Months</span>
      <span className="absolute left-[752px] top-[211px] max-md:left-[279px] max-md:top-[78px]">8 Months</span>
    </div>
  );
}

function ApplicationProcessSection() {
  const [activeTab, setActiveTab] = useState<(typeof APPLICATION_TABS)[number]>("MEET BLUEPRINT");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorContainerRef = useRef<HTMLDivElement | null>(null);
  const tabsScrollRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const activeIndex = APPLICATION_TABS.indexOf(activeTab);
    const tabEl = tabRefs.current[activeIndex];
    const container = indicatorContainerRef.current;
    if (!tabEl || !container) return;
    const containerRect = container.getBoundingClientRect();
    const tabRect = tabEl.getBoundingClientRect();
    setIndicatorStyle({
      left: tabRect.left - containerRect.left,
      width: tabRect.width,
    });
  }, [activeTab]);

  useLayoutEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    const scrollEl = tabsScrollRef.current;
    scrollEl?.addEventListener("scroll", updateIndicator, { passive: true });
    return () => {
      window.removeEventListener("resize", updateIndicator);
      scrollEl?.removeEventListener("scroll", updateIndicator);
    };
  }, [updateIndicator]);

  return (
    <section className="mx-auto flex w-full max-w-[1152px] flex-col gap-[58px] px-5 pb-[148px] max-md:gap-[31px] max-md:pb-20">
      <h2 className="font-poppins text-[48px] font-normal leading-[1.2] tracking-[-0.96px] text-[#2e2e2e] max-md:text-[28px] max-md:tracking-[-0.56px]">
        the <strong className="font-bold">application</strong> process
      </h2>

      <div className="flex flex-col gap-12 max-md:gap-[30px]">
        <div ref={indicatorContainerRef} className="relative">
          <div
            ref={tabsScrollRef}
            className="scrollbar-hide-custom flex items-end gap-[60px] overflow-x-auto pb-3 font-poppins text-[16px] leading-normal max-md:gap-[30px] max-md:text-[14px]"
          >
            {APPLICATION_TABS.map((tab, index) => (
              <button
                key={tab}
                type="button"
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 whitespace-nowrap bg-transparent p-0 uppercase ${
                  activeTab === tab ? "font-semibold text-bp-blue" : "font-normal text-bp-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Full-width baseline flush with heading; blue bar meets the left edge when first tab is active */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-bp-grey" aria-hidden />
          <div
            className="pointer-events-none absolute bottom-0 h-[5px] rounded-t-[10px] bg-bp-blue max-md:h-[3px]"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              transition: "left 0.2s ease, width 0.2s ease",
            }}
            aria-hidden
          />
        </div>

        <div className="flex flex-col gap-12 max-md:gap-[30px]">
          {activeTab === "MEET BLUEPRINT" && <InfoSessionCard />}
          <ApplicationTabBody activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}

function InfoSessionCard() {
  return (
    <article className="flex min-h-[278px] flex-col md:flex-row gap-8 rounded-[10px] bg-bp-lighter-grey p-12 max-md:min-h-[390px] max-md:px-6 max-md:py-12">
      <div className="flex flex-col md:flex-row gap-3 max-md:gap-[23px] md:w-[clamp(1px,1000px,600px)]">
        <div className="flex flex-col items-start max-md:justify-between gap-8 max-md:gap-[23px] md:mr-auto ">
          <div className="flex max-w-[366px] flex-col gap-1 text-bp-black max-md:w-full">
            <p className="font-poppins text-[14px] font-medium uppercase leading-normal max-md:text-[10px]">
              upcoming event:
            </p>
            <h3 className="font-poppins text-[36px] font-normal leading-[1.4] tracking-[-0.72px] max-md:text-[24px] max-md:tracking-[-0.48px]">
              blueprint info session
            </h3>
          </div>
          <Button variant="tertiary" className="h-[54px] w-[149px] max-md:h-[52px] max-md:w-full max-md:text-[14px]">
            RSVP
          </Button>
        </div>
        <div className="w-full h-[1px] md:hidden bg-black/10"/>
        <div className="w-[1px] h-100 max-md:hidden bg-black/10"/>
      </div>

      <div className="flex flex-col md:justify-around  max-md:gap-4 font-poppins text-bp-black">
        <EventDetail label="DATE AND TIME:" value="September 10, 2026, 7 PM" />
        <EventDetail label="LOCATION:" value="SFU Burnaby Campus, ASB 9720" />
      </div>
    </article>
  );
}

function EventDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-[253px] flex-col gap-[10px] max-md:gap-1.5">
      <p className="text-[14px] md:text-body-s-reg uppercase text-mobile-body-s-reg ">{label}</p>
      <p className="text-[16px] md:text-body-m-reg text-mobile-body-m-reg">{value}</p>
    </div>
  );
}

function RoleAccordions({ roles }: { roles: RoleAccordionItem[] }) {
  return (
    <div className="flex w-full flex-col gap-3 max-md:gap-2.5">
      {roles.map((role) => (
        <Accordion key={role.title} header={role.title}>
          <div className="flex flex-col gap-3">{role.body}</div>
        </Accordion>
      ))}
    </div>
  );
}

function ApplicationTabBody({ activeTab }: { activeTab: (typeof APPLICATION_TABS)[number] }) {
  if (activeTab === "MEET BLUEPRINT") {
    return (
      <div className="flex max-w-[621px] flex-col gap-3 font-poppins text-[16px] font-normal leading-normal text-black max-md:text-[14px]">
        <p>{APPLICATION_TAB_CONTENT[activeTab][0]}</p>
        <p>
          You can also stay updated with our projects and other events on our social media, on{" "}
          <a href="https://www.instagram.com/sfublueprint/" target="_blank" rel="noopener noreferrer" className="font-medium underline">
            Instagram
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/company/sfublueprint/" target="_blank" rel="noopener noreferrer" className="font-medium underline">
            Linkedin
          </a>
          , as well as in our{" "}
          <a href="https://discord.gg/sfublueprint" target="_blank" rel="noopener noreferrer" className="font-medium underline">
            Discord
          </a>{" "}
          community. (On Discord, we have a channel where you can ask our team questions!)
        </p>
      </div>
    );
  }

  if (activeTab === "APPLY") {
    return (
      <div className="flex w-full flex-col gap-10 max-md:gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-8 max-md:flex-col max-md:gap-5">
            <h3 className="max-w-[621px] font-poppins text-[24px] font-medium leading-[1.3] tracking-[-0.48px] text-bp-black max-md:text-[18px] max-md:tracking-[-0.36px]">
              We hire each semester for new and ongoing projects, for various roles.
            </h3>
            <Button
              variant="primary"
              className="h-[54px] shrink-0 px-6 max-md:h-[52px] max-md:w-full"
              onClick={() =>
                document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              SEE OPEN ROLES
            </Button>
          </div>
          <div className="flex max-w-[621px] flex-col gap-3 font-poppins text-[16px] font-normal leading-normal text-black max-md:text-[14px]">
            <p>
              We carefully review every application we receive. Depending on the role and volume of
              applicants, this process typically takes 1–2 weeks. Successful applicants will be
              contacted via email to schedule an interview.
            </p>
            <p>Learn about what we would like to see in your application based on your desired role:</p>
          </div>
        </div>
        <RoleAccordions roles={APPLY_ROLE_ACCORDIONS} />
      </div>
    );
  }

  if (activeTab === "INTERVIEW") {
    return (
      <div className="flex w-full flex-col gap-10 max-md:gap-8">
        <div className="flex max-w-[621px] flex-col gap-3 font-poppins text-[16px] font-normal leading-normal text-black max-md:text-[14px]">
          <p>
            Once your application is accepted, you will be contacted by our Talent team to schedule
            an interview. Interviews usually last 30–45 minutes and include a mix of behavioural and
            project-specific questions.
          </p>
          <p>Learn more about what to expect in your interview based on your desired role:</p>
        </div>
        <RoleAccordions roles={INTERVIEW_ROLE_ACCORDIONS} />
      </div>
    );
  }

  return (
    <div className="flex max-w-[621px] flex-col gap-3 font-poppins text-[16px] font-normal leading-normal text-black max-md:text-[14px]">
      {APPLICATION_TAB_CONTENT[activeTab].map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function OpenPositionsSection() {
  return (
    <section
      id="open-positions"
      className="mx-auto relative z-10 grid w-full max-w-[1298px] grid-cols-[318px_minmax(0,623px)] justify-center gap-[127px] rounded-[20px] bg-bp-black px-[115px] py-[117px] max-xl:gap-[60px] max-xl:px-[60px] max-lg:flex max-lg:flex-col max-lg:gap-[31px] max-lg:rounded-none max-lg:px-[19px] max-lg:pb-[76px] max-lg:pt-[61px]"
    >
      <div className="flex flex-col gap-12 text-white max-lg:gap-0">
        <div className="flex flex-col gap-6">
          <h2 className="font-poppins text-[36px] font-normal leading-[1.4] tracking-[-0.72px] max-lg:text-[28px] max-lg:leading-[1.2] max-lg:tracking-[-0.56px]">
            open positions
          </h2>
          <p className="w-[311px] font-poppins text-[16px] font-normal leading-normal max-lg:hidden">
            Join our discord for hiring announcements and the opportunity to ask any question in our #questions channel!
          </p>
        </div>
        <Button
          variant="secondary"
          onClick={() => window.open("https://discord.gg/sfublueprint", "_blank")}
          className="w-[200px] !text-bp-black max-lg:hidden"
        >
          JOIN OUR DISCORD
        </Button>
      </div>

      <div className="flex w-full flex-col gap-[25px] max-lg:gap-[13.5px]">
        {OPEN_POSITIONS.map((position) => (
          <OpenPositionCard key={position.title} {...position} />
        ))}
      </div>

      <div className="hidden max-lg:flex max-lg:flex-col max-lg:gap-6">
        <p className="font-poppins text-[14px] font-normal leading-normal text-white">
          Join our discord for hiring announcements and the opportunity to ask any question in our #questions channel
        </p>
        <Button
          variant="secondary"
          onClick={() => window.open("https://discord.gg/sfublueprint", "_blank")}
          className="h-[52px] w-full !text-bp-black"
        >
          JOIN OUR DISCORD
        </Button>
      </div>
    </section>
  );
}

function OpenPositionCard({
  title,
  count,
  accent,
  href,
}: {
  title: string;
  count: number;
  accent: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-[100px] items-center justify-between rounded-[9px] border-2 border-transparent bg-bp-darkest-grey px-12 py-[30px] transition-colors hover:border-[var(--position-accent)] active:bg-black max-lg:h-[54px] max-lg:px-[19px] max-lg:py-[16px]"
      style={{ "--position-accent": accent } as CSSProperties}
      aria-label={`${title} (${count}) — Apply`}
    >
      <span className="flex min-w-0 items-center gap-6 max-lg:gap-[13px]">
        <span className="size-5 shrink-0 rounded max-lg:size-[14px] max-lg:rounded-[2px]" style={{ backgroundColor: accent }} aria-hidden />
        <span className="truncate font-poppins text-[24px] font-normal leading-[1.3] tracking-[-0.48px] text-white max-lg:text-[14px] max-lg:leading-normal max-lg:tracking-normal">
          {title} ({count})
        </span>
      </span>
      <span className="flex shrink-0 items-center gap-1.5 font-poppins text-[24px] font-normal uppercase leading-[1.3] tracking-[-0.48px] text-white max-lg:text-[14px] max-lg:leading-normal max-lg:tracking-normal">
        APPLY
        <ArrowUpRightIcon className="size-[30px] max-lg:size-4" aria-hidden />
      </span>
    </a>
  );
}

function StayUpdatedSection() {
  return (
    <section className="relative overflow-hidden bg-bp-lightest-grey py-[202px] max-md:py-[122px]">
      <HeroCrosspoint
        videoSrc="/videos/crosspoints/dotted-path-2.webm"
        className="h-full"
        anchorClassName="absolute top-[220px] left-1/2 max-md:top-[160px]"
        videoClassName="w-[720px] max-md:w-[300px]"
        imageClassName="w-[2260px] max-md:w-[1200px]"
      />
      <div className="mx-auto z-10 relative flex w-full max-w-[1155px] flex-col items-center gap-[58px] px-5 max-md:gap-[38px]">
        <div className="flex flex-col items-center gap-3 text-center max-md:gap-1.5">
          <h2 className="font-caveat text-[78px] font-normal leading-[1.2] tracking-[-1.56px] text-bp-black max-md:text-[32px] max-md:tracking-[-0.64px]">
            stay updated
          </h2>
          <p className="font-poppins text-[36px] font-normal leading-[1.4] tracking-[-0.72px] text-black max-md:text-[24px] max-md:tracking-[-0.48px]">
            @sfublueprint
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-[21px] max-md:grid-cols-1 max-md:gap-[15px]">
          {SOCIAL_LINKS.map((link) => (
            <SocialLinkCard key={link.platform} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialLinkCard({
  platform,
  description,
  href,
  accentColor,
  icon: Icon,
}: {
  platform: string;
  description: string;
  href: string;
  accentColor: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-[199px] items-center gap-9 rounded-[10px] bg-white pr-9 transition-transform hover:-translate-y-1 max-md:h-[183px] max-md:gap-6 max-md:rounded-[5px] max-md:pr-6"
    >
      <span className="h-full w-2 shrink-0 rounded-l-[10px] max-md:w-[7px] max-md:rounded-l-[5px]" style={{ backgroundColor: accentColor }} aria-hidden />
      <span className="flex min-w-0 flex-1 flex-col gap-[18px] max-md:gap-3">
        <span className="flex items-center justify-between gap-4">
          <span className="flex min-w-0 items-center gap-[18px] max-md:gap-3">
            <Icon className="size-[30px] shrink-0 text-bp-black max-md:size-[34px]" aria-hidden />
            <span className="truncate font-poppins text-[30px] font-normal leading-[1.4] tracking-[-0.6px] text-black max-md:text-[24px] max-md:tracking-[-0.48px]">
              {platform}
            </span>
          </span>
          <ArrowUpRightIcon className="size-[38px] shrink-0 text-bp-black max-md:size-[35px]" aria-hidden />
        </span>
        <span className="max-w-[400px] font-poppins text-[16px] font-normal leading-normal text-bp-black max-md:w-[264px] max-md:text-[14px]">
          {description}
        </span>
      </span>
    </a>
  );
}

export default StudentsPage;
