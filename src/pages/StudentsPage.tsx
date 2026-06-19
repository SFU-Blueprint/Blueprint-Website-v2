import { useCallback, useLayoutEffect, useRef, useState, type ComponentType, type CSSProperties, type SVGProps } from "react";
import Button from "../components/shared/Button";
import { ReactComponent as ArrowUpRightIcon } from "../assets/icons/ArrowUpRight.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";

const HERO_CONTENT = {
  subtitle:
    "gain real-world experience in the tech industry and work with other passionate students, all while making a positive impact in your community.",
  bullets: [
    "A post-secondary student in Greater Vancouver.",
    "Passionate about creating meaningful impact in your community.",
    "Interested in tech, design, or project management and excited to grow through real, collaborative project work.",
  ],
};

const ROLE_DESCRIPTIONS = {
  Developer:
    "In a team of 6-8, work together to build the project based on the project and design requirements, guided by the tech lead in each project.",
  Designer:
    "In a team of 6-8, work together to build the project based on the project and design requirements, guided by the tech lead in each project.",
  "Project Manager":
    "In a team of 6-8, work together to build the project based on the project and design requirements, guided by the tech lead in each project.",
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
    imageHoverClassName: "md:group-hover/social-card:left-[-17.35%] md:group-hover/social-card:w-[142.86%]",
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
    image: "/images/student/join-social-team.webp",
    imageClassName: "h-full w-full object-cover object-bottom grayscale",
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
  APPLY: [
    "Submit your application through the form linked in our hiring announcements. We'll ask about your experience, interests, and why you want to join Blueprint.",
    "Applications are typically open for 1-2 weeks at the start of each semester.",
  ],
  INTERVIEW: [
    "If your application moves forward, we'll invite you to an interview with current Blueprint members. This is a chance for us to get to know you and for you to learn more about our team.",
    "Interviews are casual and conversational — no trick questions!",
  ],
  "FINAL DECISION": [
    "After interviews, our team reviews all candidates and makes final decisions. We aim to notify everyone within a week of completing interviews.",
    "We value diverse perspectives and look for candidates who are passionate about social good and collaborative work.",
  ],
  ONBOARDING: [
    "Welcome to Blueprint! New members go through an onboarding process where you'll meet your team, learn our workflows, and start contributing to your project.",
    "You'll be paired with experienced members who can help you get up to speed quickly.",
  ],
};

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

const APPLICATION_TAB_UNDERLINE_EXTRA_PX = 8;

const StudentsPage = () => {
  const scrollToPositions = () => {
    document
      .getElementById("open-positions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-x-hidden bg-bp-lightest-grey text-bp-black">
      <HeroSection onOpenPositions={scrollToPositions} />
      <TypicalExperienceSection />
      <ApplicationProcessSection />
      <OpenPositionsSection />
      <StayUpdatedSection />
    </div>
  );
};

function HeroSection({ onOpenPositions }: { onOpenPositions: () => void }) {
  return (
    <section className="relative bg-bp-lightest-grey max-md:bg-none ">
      <div className="w-full h-0 max-[767.9px]:hidden">
        <div className="bg-[url('/images/crosspoint.png')] bg-no-repeat
                  min-[1280px]:bg-[calc(50%+175px)_-218px]
                  max-[1279.9px]:bg-[calc(100%+697px)_-218px]
                  max-[767.9px]:bg-[calc(100%+683px)_-500px] max-[767.9px]:w-[calc(100%+17px)]
                  overflow-clip w-full h-full mt-[-110px] absolute z-0">

        </div>
        <video
          autoPlay
          muted
          loop

          className="
                    min-[1280px]:right-[calc(50%-965px)] min-[1280px]:top-[-115px]
                    max-[1279.9px]:right-[-363px] max-[1279.9px]:top-[-115px]
                    max-[1023.9px]:right-[-335px] max-[1023.9px]:top-[-100px] min-[1024px]:w-[790px] max-[1023.9px]:w-[740px]
                    max-[767.9px]:right-[-200px] max-[767.9px]:top-[-175px]
                      max-[513.9px]:scale-[1] max-[513.9px]:right-[-101px] max-[513.9px]:top-[-46px]
                    absolute z-0">
          <source src="videos/crosspoints/dotted-path-2.webm" type="video/webm"/>
        </video>
      </div>
      <div className="mx-auto relative z-10 flex w-full max-w-[1212px] flex-col px-5 pb-[154px] pt-[190px] md:px-10 lg:px-0 max-md:pb-[84px] max-md:pt-[116px]">
        <div className="flex items-start justify-between gap-10 max-md:flex-col max-md:gap-12">
          <div className="max-w-[954px]">
            <h1 className="font-poppins text-[72px] font-bold leading-none tracking-[-1.44px] text-bp-black max-md:text-[46px] max-md:tracking-[-0.92px]">
              join <span className="font-normal">our team</span>
            </h1>
            <p className="mt-6 max-w-[726px] font-poppins text-[30px] font-normal leading-[1.4] tracking-[-0.6px] text-bp-black max-md:text-[20px] max-md:leading-[1.4] max-md:tracking-[-0.4px]">
              {HERO_CONTENT.subtitle}
            </p>
          </div>
          <Button
            variant="tertiary"
            onClick={onOpenPositions}
            className="mt-[138px] mr-[34px] w-[200px] max-md:mr-0 max-md:mt-0 max-md:h-[52px] max-md:w-full max-md:text-[14px]"
          >
            OPEN POSITIONS
          </Button>
        </div>

        <div className="mt-[60px] w-full max-w-[617px] rounded-[5px] bg-white p-9 max-md:mt-[67px] max-md:px-[30px] max-md:pb-12 max-md:pt-7">
          <div className="inline-flex items-center gap-3 rounded-[5px] bg-bp-lightest-grey px-[14px] py-[10px] max-md:gap-2 max-md:px-3 max-md:py-2">
            <span className="size-4 rounded-[3px] bg-bp-orange max-md:size-3 max-md:bg-bp-blue" aria-hidden />
            <span className="font-poppins text-[14px] font-medium uppercase leading-none text-bp-black max-md:text-[10px]">
              Is Blueprint for you?
            </span>
          </div>
          <h2 className="mt-8 font-poppins text-[24px] font-normal leading-[1.3] tracking-[-0.48px] max-md:mt-6 max-md:text-[18px] max-md:tracking-[-0.36px]">
            Blueprint is right for you if you are...
          </h2>
          <ul className="mt-[18px] list-disc space-y-0 pl-5 font-poppins text-[16px] font-normal leading-normal text-bp-black max-md:mt-4 max-md:text-[14px]">
            {HERO_CONTENT.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
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
        <SocialEventCards />
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

      <div className="h-[198px] w-[520px] overflow-hidden rounded-[10px] bg-bp-lighter-grey px-[38px] py-[35px] max-md:h-auto max-md:w-[355px] max-md:px-6 max-md:py-[30px]">
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

function SocialEventCards() {
  return (
    <div className="w-full max-md:w-[351px]">
      <div className="flex justify-center gap-[23px] max-md:snap-x max-md:justify-start max-md:overflow-x-auto max-md:scrollbar-hide-custom">
        {SOCIAL_EVENT_CARDS.map((card) => (
          <article
            key={card.title}
            className="group/social-card relative h-[470px] w-[351px] shrink-0 overflow-hidden rounded-[10px] bg-white px-9 pt-9 transition-[width] duration-300 ease-out md:hover:w-[429px] max-md:h-[418px] max-md:snap-center motion-reduce:transition-none"
          >
            <div className="flex items-center gap-0 transition-[gap] duration-300 ease-out md:group-hover/social-card:gap-[10px] motion-reduce:transition-none">
              <span
                className="h-[19px] w-0 shrink-0 rounded-[4px] opacity-0 transition-[width,opacity] duration-300 ease-out md:group-hover/social-card:w-[19px] md:group-hover/social-card:opacity-100 motion-reduce:transition-none"
                style={{ backgroundColor: card.accentColor }}
                aria-hidden
              />
              <h3 className="whitespace-nowrap font-caveat text-[32px] font-normal leading-[1.3] tracking-[-0.64px] text-black max-md:text-[28px] max-md:tracking-[-0.56px]">
                {card.title}
              </h3>
            </div>
            <p className="mt-[10px] w-[282px] font-poppins text-[16px] font-normal leading-normal text-black transition-[width] duration-300 ease-out md:group-hover/social-card:w-[275px] max-md:w-[290px] max-md:text-[14px] motion-reduce:transition-none">
              {card.body}
            </p>
            <div className="absolute left-5 top-[199px] h-[252px] w-[312px] overflow-hidden rounded-[10px] transition-[left,width] duration-300 ease-out md:group-hover/social-card:left-[20.5px] md:group-hover/social-card:w-[392px] max-md:top-[145px] motion-reduce:transition-none">
              <img
                src={card.image}
                alt=""
                className={`absolute max-w-none transition-[left,width] duration-300 ease-out motion-reduce:transition-none ${card.imageClassName} ${card.imageHoverClassName ?? ""}`}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
      <div className="mt-[22px] hidden justify-center gap-[8px] max-md:flex" aria-hidden>
        <span className="h-[11px] w-[30px] rounded-full bg-bp-blue" />
        <span className="size-[11px] rounded-full bg-bp-grey" />
        <span className="size-[11px] rounded-full bg-bp-grey" />
      </div>
    </div>
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
      left: tabRect.left - containerRect.left - APPLICATION_TAB_UNDERLINE_EXTRA_PX,
      width: tabRect.width + APPLICATION_TAB_UNDERLINE_EXTRA_PX * 2,
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
        <div className="flex flex-col gap-2">
          <div
            ref={tabsScrollRef}
            className="scrollbar-hide-custom flex gap-[60px] overflow-x-auto pl-4 font-poppins text-[16px] leading-normal max-md:gap-[30px] max-md:pl-[26px] max-md:text-[14px]"
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
          <div ref={indicatorContainerRef} className="relative">
            <div
              className="absolute top-0 h-[5px] rounded-t-[10px] bg-bp-blue max-md:h-[3px]"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                transition: "left 0.2s ease, width 0.2s ease",
              }}
            />
            <div className="h-px w-full bg-bp-grey pt-[5px] max-md:w-[598px] max-md:pt-[3px]" />
          </div>
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
    <article className="flex min-h-[278px] flex-col gap-8 rounded-[10px] bg-bp-lighter-grey p-12 max-md:min-h-[390px] max-md:px-6 max-md:py-12">
      <div className="flex flex-col gap-3 max-md:gap-[23px]">
        <div className="flex items-start justify-between gap-8 max-md:flex-col max-md:gap-[23px]">
          <div className="flex w-[366px] flex-col gap-1 text-bp-black max-md:w-full">
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
        <div className="h-px w-full bg-black/10" />
      </div>

      <div className="flex gap-[52px] font-poppins text-bp-black max-md:flex-col max-md:gap-4">
        <EventDetail label="DATE AND TIME:" value="September 10, 2026, 7 PM" />
        <EventDetail label="LOCATION:" value="SFU Burnaby Campus, ASB 9720" />
      </div>
    </article>
  );
}

function EventDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-[253px] flex-col gap-[10px] max-md:gap-1.5">
      <p className="text-[14px] font-medium uppercase leading-normal max-md:text-[10px]">{label}</p>
      <p className="text-[16px] font-normal leading-normal max-md:text-[14px]">{value}</p>
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
      className="mx-auto relative z-10 grid w-full max-w-[1298px] grid-cols-[318px_623px] justify-center gap-[127px] rounded-[20px] bg-bp-black px-[115px] py-[117px] max-lg:flex max-lg:flex-col max-lg:gap-[31px] max-lg:rounded-none max-lg:px-[19px] max-lg:pb-[76px] max-lg:pt-[61px]"
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
    <section className="relative bg-bp-lightest-grey py-[202px] max-md:py-[122px]">
        <div className="w-full h-0 ">
          <div className="bg-bp-lightest-grey bg-[url('/images/crosspoint.png')] bg-no-repeat
                    min-[768px]:bg-[calc(50%-399px)_-310px] 
                    max-[767.9px]:bg-[calc(50%-190px)_-250px] max-[767.9px]:bg-[length:1100px_1100px]
                    overflow-clip h-[900px] w-full mt-[-110px] absolute">
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="
                      min-[768px]:w-[785px] min-[768px]:max-w-[785px] min-[768px]:right-[calc(50%-395px)] min-[768px]:top-[-8px]
                      max-[767.9px]:w-[400px] max-[767.9px]:max-w-[370px] max-[767.9px]:right-[calc(50%-187px)] max-[767.9px]:top-[20px]
                      absolute ">
            <source src="videos/crosspoints/dotted-path-2.webm" type="video/webm"/>
          </video>
      </div>
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