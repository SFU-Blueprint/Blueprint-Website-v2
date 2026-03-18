import { useState, useRef, useEffect, useCallback } from "react";
import CalloutCard from "../components/shared/CalloutCard";
import Button from "../components/shared/Button";
import OpenRoleCard from "../components/shared/OpenRoleCard";
import SocialMediaLinkCard from "../components/shared/SocialMediaLinkCard";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";

const HERO_CONTENT = {
  title: { bold: "join", regular: " our team" },
  subtitle:
    "gain real-world experience in the tech industry and work with other passionate students, all while making a positive impact in your community.",
  callout: {
    title: "BLUEPRINT IS RIGHT FOR YOU IF YOU ARE...",
    body: "• A post-secondary student in Greater Vancouver\n• Passionate about creating meaningful impact in your community\n• Interested in tech, design, or project management and excited to grow through real, collaborative project work",
  },
};

const EXPERIENCE_CONTENT = {
  heading: "a typical experience at sfu blueprint",
  body: "Teams of roughly ten Blueprint members will work together to bring a project from its earliest stages to final client handoff. Cross-functional collaboration is the core of all Blueprint projects!",
};

const ROLES = [
  {
    title: "project manager",
    description:
      "Defining project requirements and timelines, and supporting the team by outlining weekly deliverables and keeping the project on track.",
    color: "#F49F00",
  },
  {
    title: "designer",
    description:
      "Crafting user experiences and interfaces that are intuitive, accessible, and visually aligned with the project's goals.",
    color: "#D2A6FB",
  },
  {
    title: "developer",
    description:
      "Building and implementing the technical solution, writing clean code, and collaborating to bring the design to life.",
    color: "#0177E8",
  },
];

const TIMELINE_CONTENT = {
  heading: "work with a timeline",
  body: "Projects typically run for about 8 months. The first 2-3 months focus on design, followed by development and testing for the remaining 6 months (timelines may vary by project). Students commit around 10 hours per week, with project work intentionally slowing down during midterms and finals to help students balance responsibilities.",
};

const SOCIALS_CONTENT = {
  heading: "go to socials and events!",
  body: "Meet new people, build real connections, and join a community that supports your growth—both personally and professionally.",
};

const APPLICATION_TABS = [
  "MEET BLUEPRINT",
  "APPLY",
  "INTERVIEW",
  "FINAL DECISION",
  "ONBOARDING",
] as const;

const APPLICATION_TAB_CONTENT: Record<string, { title: string; description: string[] }> = {
  "MEET BLUEPRINT": {
    title: "",
    description: [
      "We host info session events once a semester; join us to have fun and hear directly from our team members about the Blueprint experience!",
      "You can also stay updated with our projects and other events on our social media, on Instagram and Linkedin, as well as in our Discord community. (On Discord, we have a channel where you can ask our team questions!)",
    ],
  },
  APPLY: {
    title: "",
    description: [
      "Submit your application through the form linked in our hiring announcements. We'll ask about your experience, interests, and why you want to join Blueprint.",
      "Applications are typically open for 1-2 weeks at the start of each semester.",
    ],
  },
  INTERVIEW: {
    title: "",
    description: [
      "If your application moves forward, we'll invite you to an interview with current Blueprint members. This is a chance for us to get to know you and for you to learn more about our team.",
      "Interviews are casual and conversational — no trick questions!",
    ],
  },
  "FINAL DECISION": {
    title: "",
    description: [
      "After interviews, our team reviews all candidates and makes final decisions. We aim to notify everyone within a week of completing interviews.",
      "We value diverse perspectives and look for candidates who are passionate about social good and collaborative work.",
    ],
  },
  ONBOARDING: {
    title: "",
    description: [
      "Welcome to Blueprint! New members go through an onboarding process where you'll meet your team, learn our workflows, and start contributing to your project.",
      "You'll be paired with experienced members who can help you get up to speed quickly.",
    ],
  },
};

const OPEN_POSITIONS = [
  { title: "senior developer", count: 3, roleType: "dev" as const, href: "#" },
  { title: "designer", count: 3, roleType: "designer" as const, href: "#" },
  { title: "product manager", count: 3, roleType: "pm" as const, href: "#" },
  { title: "event coordinator", count: 3, roleType: "executive" as const, href: "#" },
];

const SOCIAL_LINKS = [
  {
    platform: "instagram",
    description:
      "Follow us on Instagram to stay updated on events and see what our team is working on.",
    href: "https://www.instagram.com/sfublueprint/",
    accentColor: "#FFC3E8",
    icon: <InstagramIcon className="w-full h-full text-blueprint-black" />,
  },
  {
    platform: "youtube",
    description:
      "Subscribe to our Youtube channel for our Career Talks podcast series!",
    href: "https://www.youtube.com/@sfublueprint",
    accentColor: "#FFB347",
    icon: <YoutubeIcon className="w-full h-full text-blueprint-black" />,
  },
  {
    platform: "discord",
    description:
      "Join our Discord for hiring announcements and a place to ask any questions about Blueprint!",
    href: "https://discord.gg/sfublueprint",
    accentColor: "#9CC0FF",
    icon: <DiscordIcon className="w-full h-full text-blueprint-black" />,
  },
  {
    platform: "linkedin",
    description:
      "Curious to see what our members are up to? Connect with Blueprint on Linkedin!",
    href: "https://www.linkedin.com/company/sfublueprint/",
    accentColor: "#71EC59",
    icon: <LinkedinIcon className="w-full h-full text-blueprint-black" />,
  },
];

const StudentsPage = () => {
  const scrollToPositions = () => {
    document
      .getElementById("open-positions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Dark Background */}
      <section className="relative bg-blueprint-black z-5
                          bg-[url('/images/non-profit/desktop_partner_crosspoint.svg')] bg-no-repeat
                          min-[1280px]:bg-[calc(100%+585px)_-360px]
                          max-[1279px]:bg-[calc(100%+689px)_-360px]
                          max-md:bg-[url('/images/non-profit/mobile_partner_crosspoint.svg')] max-md:bg-[calc(100%+130px)_-132px]">


        <div className="relative z-10 w-full px-6 md:px-10 xl:px-36 pt-[142px] pb-[100px] max-md:pt-[90px] max-md:pb-[60px]">
          {/* Title + Button row */}
          <div className="flex justify-between items-start gap-8 max-md:flex-col max-md:gap-6 mb-[60px] max-md:mb-[35px]">
            {/* Title Block */}
            <div className="flex flex-col gap-6 max-md:gap-3 text-white max-w-[954px]">
              <h1
                className="font-poppins text-[96px] leading-none tracking-[-1.92px]
                           max-md:text-[56px] max-md:tracking-[-1.12px]"
              >
                <strong className="font-bold">{HERO_CONTENT.title.bold}</strong>
                <span className="font-normal">{HERO_CONTENT.title.regular}</span>
              </h1>
              <p
                className="font-poppins text-[30px] leading-[1.4] tracking-[-0.6px] max-w-[790px]
                           max-md:text-[20px] max-md:leading-[1.4] max-md:tracking-[-0.4px]"
              >
                {HERO_CONTENT.subtitle}
              </p>
            </div>

            {/* Open Positions Button */}
            <div className="shrink-0 lg:mt-[138px]">
              <Button onClick={scrollToPositions} className="w-[200px] max-md:w-full">
                OPEN POSITIONS
              </Button>
            </div>
          </div>

          {/* Callout Card */}
          <div className="max-w-[647px] max-md:max-w-full">
            <CalloutCard
              title={HERO_CONTENT.callout.title}
              body={HERO_CONTENT.callout.body}
              stripeColor="#71EC59"
              variant="dark"
              backgroundColor="#404040"
              titleColor="#FFFFFF"
              bodyColor="#FFFFFF"
            />
          </div>
        </div>
      </section>

      <div>
      {/* Typical Experience Section */}
      <section className="w-full px-6 md:px-10 xl:px-36 pt-[108px] max-md:pt-[60px]">
        {/* Section Intro */}
        <div className="max-w-[852px] mb-[90px] max-md:mb-[50px]">
          <h2
            className="font-poppins text-[48px] leading-none tracking-[-0.96px] text-blueprint-black mb-[24px]
                       max-md:text-[28px] max-md:tracking-[-0.56px] max-md:mb-[16px]"
          >
            <span className="font-normal">a </span>
            <strong className="font-bold">typical experience</strong>
            <span className="font-normal"> at sfu blueprint</span>
          </h2>
          <p
            className="font-poppins text-[16px] leading-normal text-blueprint-black max-w-[852px]
                       max-md:text-[14px]"
          >
            {EXPERIENCE_CONTENT.body}
          </p>
        </div>

        {/* Work with a Team */}
        <div className="mb-[90px] max-md:mb-[50px]">
        <h3
                className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] text-blueprint-black font-semibold
                           max-md:text-[22px] max-md:tracking-[-0.44px]"
              >
            <span>work with a team</span>
              </h3>

          {/* Role Cards */}
          <div className="flex flex-wrap justify-center items-start gap-6 max-[1024px]:flex-col max-[1024px]:items-stretch">
            {ROLES.map((role, index) => (
              <RoleCard
                key={role.title}
                title={role.title}
                description={role.description}
                color={role.color}
                offset={index}
              />
            ))}
          </div>
        </div>

        {/* Work with a Timeline */}
        <div className="mb-[90px] max-md:mb-[50px]">
        <h3
                className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] text-blueprint-black font-semibold
                           max-md:text-[22px] max-md:tracking-[-0.44px]"
              >
                {TIMELINE_CONTENT.heading}
              </h3>
          <p
            className="font-poppins text-[16px] leading-normal text-blueprint-black max-w-[584px]
                       max-md:text-[14px] max-md:max-w-full"
          >
            {TIMELINE_CONTENT.body}
          </p>

          {/* Timeline image placeholder */}
          <div className="mt-[36px] w-full h-[289px] max-md:h-[131px] bg-blueprint-gray-light rounded-lg flex items-center justify-center">
            <span className="font-poppins text-[16px] text-blueprint-darkGrey">
              Image placeholder
            </span>
          </div>
        </div>

        {/* Go to Socials and Events */}
        <div className="mb-[90px] max-md:mb-[50px]">
          <div className="flex gap-[94px] items-start max-md:flex-col max-md:gap-[40px]">
            {/* Text content */}
            <div className="flex flex-col gap-[24px] shrink-0 max-w-[468px] max-md:max-w-full">
              <h3
                className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] text-blueprint-black font-semibold
                           max-md:text-[22px] max-md:tracking-[-0.44px]"
              >
                {SOCIALS_CONTENT.heading}
              </h3>
              <p className="font-poppins text-[16px] leading-normal text-blueprint-black max-w-[451px] max-md:text-[14px]">
                {SOCIALS_CONTENT.body}
              </p>
            </div>

            {/* Polaroid photos */}
            <div className="relative flex-1 min-h-[343px] max-md:min-h-[300px] max-md:w-full">
              <div className="absolute top-[50px] left-0 max-md:top-[30px] max-md:left-[-10px]">
                <PolaroidPhoto
                  imageSrc="/images/student/studentPage_header.webp"
                  caption="designer pottery painting"
                  className="rotate-[-5deg]"
                />
              </div>
              <div className="absolute top-0 left-[263px] max-md:top-0 max-md:left-[100px]">
                <PolaroidPhoto
                  imageSrc="/images/student/studentPage_header.webp"
                  caption="post-co-working session dinner"
                  className="rotate-[4deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Application Process Section */}
      <ApplicationProcessSection />
      </div>

      {/* Open Positions Section */}
      <section
        id="open-positions"
        className="bg-blueprint-black rounded-[20px] mx-[60px] flex flex-wrap items-start gap-[40px] xl:gap-[165px]
                   pt-[94px] pr-[84px] pb-[94px] pl-[94px] overflow-hidden
                   max-lg:flex-col max-lg:gap-[31px] max-lg:pt-[61px] max-lg:pb-[106px] max-lg:px-[19px] max-lg:mx-[16px] max-lg:rounded-[12px]"
      >
          {/* Left side: heading + description + button (desktop) */}
          {/* On mobile/tablet, this becomes just the heading (order-1) */}
          <div className="flex flex-col gap-[48px] w-[376px] min-w-0 max-lg:w-full max-lg:gap-0 max-lg:order-1">
            <div className="flex flex-col gap-[24px] text-white">
              <h2
                className="font-poppins text-[48px] leading-[1.2] tracking-[-0.96px]
                           max-lg:text-[28px] max-lg:tracking-[-0.56px]"
              >
                open positions
              </h2>
              <p className="font-poppins text-[16px] leading-normal max-w-[356px] max-lg:hidden">
                Join our discord for hiring announcements and the opportunity to
                ask any question in our #questions channel
              </p>
            </div>
            <Button
              onClick={() =>
                window.open("https://discord.gg/sfublueprint", "_blank")
              }
              className="w-[200px] max-lg:hidden"
            >
              JOIN OUR DISCORD
            </Button>
          </div>

          {/* Role cards */}
          <div className="flex flex-col gap-[25px] flex-1 min-w-0 max-lg:w-full max-lg:order-2 max-lg:gap-[13px]">
            {OPEN_POSITIONS.map((position) => (
              <OpenRoleCard
                key={position.title}
                title={position.title}
                count={position.count}
                roleType={position.roleType}
                href={position.href}
              />
            ))}
          </div>

          {/* Mobile/tablet: description + button below cards */}
          <div className="hidden max-lg:flex flex-col gap-[24px] items-start w-full max-lg:order-3">
            <p className="font-poppins text-[14px] leading-normal text-white w-full">
              Join our discord for hiring announcements and the opportunity to
              ask any question in our #questions channel
            </p>
            <Button
              onClick={() =>
                window.open("https://discord.gg/sfublueprint", "_blank")
              }
              className="w-full"
            >
              JOIN OUR DISCORD
            </Button>
          </div>
      </section>

      {/* Stay Updated Section */}
      <div className="overflow-x-hidden">
      <section className="relative z-5
                          bg-[url('/images/non-profit/desktop_partner_crosspoint.svg')] bg-no-repeat
                          bg-[calc(50%-409px)_-360px]
                          max-md:bg-[url('/images/non-profit/mobile_partner_crosspoint.svg')] max-md:bg-[calc(50%-277px)_-132px]
                          [clip-path:inset(0_0_0_calc((100%-1320px)/2))]
                          max-md:[clip-path:none]">
        <div className="relative z-10 px-6 md:px-10 xl:px-36 py-[100px] max-md:py-[60px]">
          {/* Header */}
          <div className="text-center mb-[48px] max-md:mb-[32px]">
            <h2
              className="font-caveat text-[48px] leading-[1.2] tracking-[-0.96px] text-blueprint-black mb-[12px]
                         max-md:text-[32px] max-md:tracking-[-0.64px]"
            >
              stay updated
            </h2>
            <p
              className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] text-blueprint-black
                         max-md:text-[28px] max-md:tracking-[-0.56px]"
            >
              @sfublueprint
            </p>
          </div>

          {/* Social Media Link Cards - 2x2 grid */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[20px] max-w-[1152px] mx-auto">
            {SOCIAL_LINKS.map((link) => (
              <SocialMediaLinkCard
                key={link.platform}
                icon={link.icon}
                platform={link.platform}
                description={link.description}
                href={link.href}
                accentColor={link.accentColor}
              />
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

function ApplicationProcessSection() {
  const [activeTab, setActiveTab] = useState<string>("MEET BLUEPRINT");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 160 });

  const updateIndicator = useCallback(() => {
    const activeIndex = APPLICATION_TABS.indexOf(activeTab as typeof APPLICATION_TABS[number]);
    const tabEl = tabRefs.current[activeIndex];
    if (tabEl) {
      const parent = tabEl.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const tabRect = tabEl.getBoundingClientRect();
        const tabCenter = tabRect.left - parentRect.left + tabRect.width / 2;
        setIndicatorStyle({
          left: tabCenter - 80,
          width: 160,
        });
      }
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const renderTabContent = () => {
    if (activeTab === "MEET BLUEPRINT") {
      return (
        <div className="flex flex-col gap-[12px] max-w-[621px]">
          <p className="font-poppins text-[16px] leading-normal text-black max-md:text-[14px]">
            We host info session events once a semester; join us to have fun and hear directly from our team members about the Blueprint experience!
          </p>
          <p className="font-poppins text-[16px] leading-normal text-black max-md:text-[14px]">
            You can also stay updated with our projects and other events on our social media, on{" "}
            <a href="https://www.instagram.com/sfublueprint/" target="_blank" rel="noopener noreferrer" className="font-medium underline">Instagram</a>
            {" "}and{" "}
            <a href="https://www.linkedin.com/company/sfublueprint/" target="_blank" rel="noopener noreferrer" className="font-medium underline">Linkedin</a>
            , as well as in our{" "}
            <a href="https://discord.gg/sfublueprint" target="_blank" rel="noopener noreferrer" className="font-medium underline">Discord</a>
            {" "}community. (On Discord, we have a channel where you can ask our team questions!)
          </p>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-[12px] max-w-[621px]">
        {APPLICATION_TAB_CONTENT[activeTab]?.description.map((text, idx) => (
          <p
            key={idx}
            className="font-poppins text-[16px] leading-normal text-black max-md:text-[14px]"
          >
            {text}
          </p>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full px-6 md:px-10 xl:px-36 pb-[100px] max-md:pb-[60px]">
      {/* Section heading */}
      <h2
        className="font-poppins text-[48px] leading-[1.2] tracking-[-0.96px] text-[#2e2e2e] mb-[48px]
                   max-md:text-[28px] max-md:tracking-[-0.56px] max-md:mb-[24px]"
      >
        the <strong className="font-bold italic">application</strong> process
      </h2>

      {/* Tabs */}
      <div className="flex flex-col gap-[21px]">
        {/* Tab bar */}
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[60px] max-md:gap-[24px] pl-[16px] overflow-x-auto">
            {APPLICATION_TABS.map((tab, i) => (
              <button
                key={tab}
                ref={(el) => { tabRefs.current[i] = el; }}
                onClick={() => setActiveTab(tab)}
                className={`font-poppins text-[16px] max-md:text-[14px] whitespace-nowrap cursor-pointer bg-transparent border-none p-0 ${
                  activeTab === tab
                    ? "font-semibold text-[#0146be]"
                    : "font-normal text-[#2a2a2a]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Tab indicator line */}
          <div className="relative w-full">
            <div
              className="absolute top-0 h-[5px] bg-[#0146be] rounded-t-[10px]"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                transition: "left 0.2s ease",
              }}
            />
            <div className="w-full h-px bg-[#aaaaaa] mt-[5px]" />
          </div>
        </div>

        {/* Tab content */}
        <div className="flex flex-col gap-[38px]">
          {/* Info session card - only show on MEET BLUEPRINT tab */}
          {activeTab === "MEET BLUEPRINT" && (
            <div className="bg-[#0146be] rounded-[10px] p-[48px] max-md:p-[24px] flex flex-col gap-[32px]">
              {/* Top section */}
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-start justify-between max-md:flex-col max-md:gap-[16px]">
                  <div className="flex flex-col gap-[4px] text-white w-[366px] max-md:w-full">
                    <p className="font-poppins font-medium text-[14px] uppercase leading-normal">
                      upcoming event:
                    </p>
                    <p className="font-poppins text-[36px] leading-[1.4] tracking-[-0.72px] max-md:text-[24px]">
                      blueprint info session
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    className="shrink-0 w-[149px] max-md:w-full"
                  >
                    RSVP
                  </Button>
                </div>
                <div className="w-full h-px bg-white/30" />
              </div>

              {/* Bottom section: date + location */}
              <div className="flex gap-[52px] text-white max-md:flex-col max-md:gap-[24px]">
                <div className="flex flex-col gap-[10px] w-[199px]">
                  <p className="font-poppins font-medium text-[14px] uppercase leading-normal">
                    DATE AND TIME:
                  </p>
                  <p className="font-poppins text-[16px] leading-normal max-md:text-[14px]">
                    September 10, 2026, 7 PM
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] w-[253px]">
                  <p className="font-poppins font-medium text-[14px] uppercase leading-normal">
                    LOCATION:
                  </p>
                  <p className="font-poppins text-[16px] leading-normal max-md:text-[14px]">
                    SFU Burnaby Campus, ASB 9720
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Text content */}
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
}

type RoleCardProps = {
  title: string;
  description: string;
  color: string;
  offset: number;
};

function RoleCard({ title, description, color, offset }: RoleCardProps) {
  const desktopOffset =
    offset === 0 ? "lg:mt-[120px]" : offset === 1 ? "lg:mt-[58px]" : "lg:mt-0";
  const mobileAlign =
    offset === 0
      ? "max-[1024px]:self-start"
      : offset === 1
        ? "max-[1024px]:self-center max-[1024px]:-mt-[30px]"
        : "max-[1024px]:self-end max-[1024px]:-mt-[30px]";

  return (
    <div
      className={`w-[276px] max-[1024px]:w-[75%] bg-white rounded-[16px] flex flex-col p-[12px] gap-[65px] ${desktopOffset} ${mobileAlign}`}
    >
      {/* Colored header */}
      <div className="relative h-[144px] w-full">
        <svg viewBox="0 0 275 144" fill="none" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path d="M16.1151 143.798L261.115 125.535C268.945 124.951 275 118.428 275 110.576L275 9.99995C275 4.4771 270.523 -6.06438e-05 265 -6.01609e-05L10 -3.78681e-05C4.47716 -3.73853e-05 1.82327e-05 4.47711 1.87155e-05 9.99995L2.91048e-05 128.84C2.98675e-05 137.564 7.41568 144.447 16.1151 143.798Z" fill={color} />
        </svg>
        <p className="relative z-10 font-poppins text-white text-[30px] font-semibold leading-none tracking-[-0.6px] p-[23px] max-md:text-[22px]">
          {title}
        </p>
      </div>
      {/* Description */}
      <p className="font-poppins text-[16px] leading-normal text-blueprint-black max-md:text-[14px]">
        {description}
      </p>
    </div>
  );
}

export default StudentsPage;
