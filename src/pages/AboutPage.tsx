import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import CameraButton from "../components/shared/CameraButton";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";
import { GroupImages } from "../constants/about-us-media";
import InfoCard from "../components/shared/InfoCard";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-webgl2";
import revisedRiv from "../assets/rive/Revised-Desktop.riv?url";
import aboutValuesMobileRiv from "../assets/rive/mobile-vers-rive.riv?url";
import Button from "../components/shared/Button";
import Filters from "../components/shared/Filters";
import MemberCard, { memberRoleType } from "../components/shared/MemberCard";

const OUR_MEMBERS_CONTENT = {
  title: "Our members",
  heading:
    "Our talented members come from diverse cultures, professions, and social backgrounds.",
  body: "With a passion for social good and dedication to creating beautiful technology, our student project teams work alongside nonprofits to help them better serve their communities.",
  color: "bp-blue",
} as const;

const BLUEPRINT_MULTINATIONAL_CONTENT = {
  title: "Blueprint Multinational",
  heading:
    "This chapter of Blueprint is part of a much larger multinational community, originally started at UC Berkeley.",
  body: "As the fifth established chapter in Canada, our team is based largely at Simon Fraser University, and operating as a registered non profit!",
  color: "bp-orange",
} as const;

type TeamMember = {
  name: string;
  role: string;
  roleType: memberRoleType;
  photoUrl?: string;
  linkedinUrl?: string;
};

/** Polaroid photo placeholder — solid fill until real headshots are wired */
const POLAROID_PLACEHOLDER_PHOTO =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="100%" height="100%" fill="#686974"/></svg>'
  );

const FILTER_TABS: { label: string; roleType: memberRoleType }[] = [
  { label: "Executives", roleType: "exec" },
  { label: "Project Managers", roleType: "pm" },
  { label: "Designers", roleType: "designer" },
  { label: "Tech Leads", roleType: "techLead" },
  { label: "Developers", roleType: "dev" },
];

/** Placeholder roster — replace with CMS or API when available */
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "developer",
    roleType: "dev",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Casey Morgan",
    role: "designer",
    roleType: "designer",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Dana Singh",
    role: "project manager",
    roleType: "pm",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Elliot Park",
    role: "tech lead",
    roleType: "techLead",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Jordan Lee",
    role: "executive",
    roleType: "exec",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Morgan Blake",
    role: "developer",
    roleType: "dev",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Priya Nair",
    role: "designer",
    roleType: "designer",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Riley Chen",
    role: "project manager",
    roleType: "pm",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
];

/** Random tilt in degrees, roughly -maxDeg … +maxDeg inclusive. */
function randomTiltDeg(maxDeg: number, minDeg: number) {
  return Math.floor(Math.random() * (maxDeg - minDeg + 1)) + minDeg;
}

/** Slots in the camera-click overlay row, 0 = empty, 1 = polaroid. */
const POLAROID_GRID_COLS = 7;

/** Pick a random free column; if all 7 are used, pick any column and stack. */
function pickRandomGridColumn(occupiedColumns: number[]): number {
  const used = new Set(occupiedColumns);
  const available = Array.from({ length: POLAROID_GRID_COLS }, (_, i) => i).filter(
    (c) => !used.has(c)
  );

  if (available.length > 0) {
    return available[Math.floor(Math.random() * available.length)]!;
  }

  return Math.floor(Math.random() * POLAROID_GRID_COLS);
}

const RIVE_VALUES_STATE_MACHINE = "MainStateMachine";

/** Own hook instance + canvas; mount only one at a time so hidden WebGL canvases don’t break Rive. */
function AboutValuesRiveDesktop() {
  const { RiveComponent } = useRive({
    src: revisedRiv,
    stateMachines: RIVE_VALUES_STATE_MACHINE,
    autoplay: true,
    autoBind: true,
    layout: new Layout({
      fit: Fit.FitHeight,
      alignment: Alignment.TopLeft,
      layoutScaleFactor: 1,
    }),
  });

  return (
    <RiveComponent className="h-[950px] w-[1200px] ml-[-400px] 2xl:ml-[-200px]" />
  );
}

function AboutValuesRiveMobile() {
  const { RiveComponent } = useRive({
    src: aboutValuesMobileRiv,
    stateMachines: RIVE_VALUES_STATE_MACHINE,
    autoplay: true,
    autoBind: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  return <RiveComponent className="relative h-[1000px] w-full translate-y-[-450px]" />;
}

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const images = GroupImages.map(({ image }) => {
      const img = new Image();
      img.src = image;
      return img.decode().catch(() => undefined);
    });

    void Promise.all(images);
  }, []);

  const INITIAL_VISIBLE = 3;
  const INITIAL_VISIBLE_MOBILE = 2;
  const MAX_VISIBLE = 10;

  /** Column index, 0 to POLAROID_GRID_COLS - 1, for each camera-added polaroid. */
  const [extraPlacements, setExtraPlacements] = useState<number[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<memberRoleType[]>([]);

  const rotations = useMemo(() => {
    return GroupImages.map(() => randomTiltDeg(20, -20));
  }, []);

  function useMinWidth(minWidthPx: number): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const m = window.matchMedia(`(min-width: ${minWidthPx}px)`);
      setMatches(m.matches);

      const listener = () => setMatches(m.matches);
      m.addEventListener("change", listener);

      return () => m.removeEventListener("change", listener);
    }, [minWidthPx]);

    return matches;
  }

  const isMinMobileWidth = useMinWidth(520);

  /** Align with Tailwind md, 768px, so only one values Rive mounts. */
  const isMdUp = useMinWidth(768);

  const baseVisible = isMinMobileWidth ? INITIAL_VISIBLE : INITIAL_VISIBLE_MOBILE;
  const extraCount = extraPlacements.length;
  const visibleCount = Math.min(MAX_VISIBLE, baseVisible + extraCount);

  const handleCameraClick = () => {
    if (baseVisible + extraCount >= MAX_VISIBLE) {
      setExtraPlacements([]);
    } else {
      setExtraPlacements((prev) => [...prev, pickRandomGridColumn(prev)]);
    }
  };

  const toggleRole = (roleType: memberRoleType) => {
    setSelectedRoles((prev) =>
      prev.includes(roleType)
        ? prev.filter((r) => r !== roleType)
        : [...prev, roleType]
    );
  };

  const displayedMembers = useMemo(() => {
    const base =
      selectedRoles.length === 0
        ? TEAM_MEMBERS
        : TEAM_MEMBERS.filter((m) => selectedRoles.includes(m.roleType));

    return [...base].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
  }, [selectedRoles]);

  const initialImages = GroupImages.slice(0, baseVisible);
  const imagesToShow = GroupImages.slice(baseVisible, visibleCount);

  return (
    <PageContainer className="bg-bp-lightest-grey max-md:overflow-x-hidden">
      {/* Main Container */}
      <div className="pt-main-mobile-top md:pt-main-desktop-top flex flex-col justify-between">
        {/* About us section */}
        <div className="flex md:flex-row flex-col justify-between md:mb-[100px] flex-wrap">
          <div className="flex flex-col md:justify-between max-md:pb-[62px] gap-3 md:gap-6">
            <h1 className="font-poppins text-5xl md:text-7xl leading-none tracking-[-0.96px] text-bp-black">
              <strong>about</strong> us
            </h1>

            <p className="font-poppins text-xl md:text-3xl leading-7 md:leading-10 text-bp-black w-90 md:w-[684px]">
              building innovative, tech-based solutions for communities and public
              welfare is the mission that brings us together.
            </p>
          </div>

          <div className="flex items-center">
            <CameraButton onClick={handleCameraClick} />
          </div>
        </div>

        {/* Photos Container */}
        <div className="flex justify-center">
          {/* Desktop photos container */}
          <div className="max-md:hidden">
            <div className="relative md:grid md:grid-cols-3 md:justify-items-center flex flex-col max-w-[1160px] flex-wrap mb-[50px]">
              {initialImages.map((image, index) => (
                <PolaroidPhoto
                  key={image.id}
                  imageSrc={image.image}
                  caption={image.caption}
                  alt={image.caption}
                  style={{ transform: `rotate(${rotations[index]}deg)` }}
                />
              ))}
            </div>
          </div>

          {/* Mobile photos container */}
          <div className="md:hidden mb-[-50px]">
            <div className="relative flex flex-col max-w-[306px]">
              <span className="relative z-10 translate-x-24">
                <PolaroidPhoto
                  imageSrc={initialImages[0].image}
                  caption={initialImages[0].caption}
                  alt={initialImages[0].caption}
                  style={{ transform: "rotate(10deg)" }}
                />
              </span>
              <span className="relative z-0 -translate-x-20 translate-y-[-150px]">
                <PolaroidPhoto
                  imageSrc={initialImages[1].image}
                  caption={initialImages[1].caption}
                  alt={initialImages[1].caption}
                  style={{ transform: "rotate(-8deg)" }}
                />
              </span>
            </div>
          </div>

          {/* Drops new photos on top of existing photos */}
          <div className="absolute grid h-[200px] md:h-[500px] grid-cols-7 grid-rows-1 translate-y-12 w-full justify-items-center z-20">
            {imagesToShow.map((image, index) => {
              const col = extraPlacements[index] ?? index % POLAROID_GRID_COLS;
              const rotation = rotations[baseVisible + index];

              return (
                <PolaroidPhoto
                  key={`${image.id}-${index}-${col}`}
                  imageSrc={image.image}
                  caption={image.caption}
                  alt={image.caption}
                  className="animate-popIn"
                  style={
                    {
                      gridColumn: col + 1,
                      gridRow: 1,
                      transform: `rotate(${rotation}deg)`,
                      zIndex: index,
                      "--rotation": `${rotation}deg`,
                    } as React.CSSProperties
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Info Cards Container */}
        <div className="relative z-10 md:pt-[108px] flex flex-col items-center justify-center gap-6 pb-[148px] lg:flex-row">
          <InfoCard
            title={OUR_MEMBERS_CONTENT.title}
            heading={OUR_MEMBERS_CONTENT.heading}
            body={OUR_MEMBERS_CONTENT.body}
            color={OUR_MEMBERS_CONTENT.color}
          />

          <InfoCard
            title={BLUEPRINT_MULTINATIONAL_CONTENT.title}
            heading={BLUEPRINT_MULTINATIONAL_CONTENT.heading}
            body={BLUEPRINT_MULTINATIONAL_CONTENT.body}
            color={BLUEPRINT_MULTINATIONAL_CONTENT.color}
          />
        </div>

        {/* Values Section — Rive needs a real URL from Vite (?url) and a sized box for the canvas */}
        <div className="relative z-10 w-full shrink-0 pb-[280px] max-md:pb-[420px] md:z-0 md:pb-0 max-md:overflow-hidden">
          <div className="pointer-events-none relative z-10 flex flex-col md:gap-10 md:pb-[566px]">
            <h2 className="pointer-events-auto flex flex-col max-md:justify-center max-md:items-center font-poppins text-5xl md:text-7xl md:ml-[-40px] 2xl:ml-[160px]">
              our <strong>values</strong>
            </h2>
          </div>

          <div className="absolute md:inset-x-0 bottom-0 z-0 h-[400px] w-full md:w-full md:h-[1000px] lg:translate-y-[-50px]">
            {isMdUp ? <AboutValuesRiveDesktop /> : <AboutValuesRiveMobile />}
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <section
        className="meet-the-team relative z-0 w-full max-md:w-screen max-md:max-w-none max-md:ml-[calc(50%-50vw)] max-md:mr-[calc(50%-50vw)] max-w-[1328px] md:mx-auto rounded-[20px] bg-bp-lighter-grey max-md:rounded-none max-md:bg-bp-blue max-md:px-6 max-md:pt-16 max-md:pb-20 sm:px-8 md:px-10 md:pt-20 md:pb-24 xl:px-14"
        aria-labelledby="meet-the-team-heading"
      >
        <h2
          id="meet-the-team-heading"
          className="mb-8 max-md:mb-6 max-md:text-left md:mb-10 md:text-center"
        >
          <span className="font-poppins text-mobile-heading-l-bold text-bp-white md:hidden">
            <span className="font-normal">our </span>
            <span className="font-bold">team</span>
          </span>
          <span className="hidden font-caveat font-normal text-bp-black text-mobile-heading-hand tablet:text-heading-hand desktop:text-[78px] desktop:leading-none desktop:tracking-normal md:inline">
            meet the team
          </span>
        </h2>

        <div
          className="mb-8 flex max-md:mb-6 max-md:justify-start max-md:gap-2 md:mb-10 flex-wrap flex-row justify-center gap-x-3 gap-y-3 md:gap-x-[14px]"
          role="toolbar"
          aria-label="Filter team by role"
        >
          {FILTER_TABS.map(({ label, roleType }) => {
            const selected = selectedRoles.includes(roleType);

            return (
              <div key={roleType} className="contents">
                <span className="max-md:contents md:hidden">
                  <Filters
                    title={label}
                    state={selected ? "filled" : "outlined"}
                    variant="dark"
                    className="max-md:hover:!border-bp-white max-md:hover:!bg-bp-white/15"
                    onClick={() => toggleRole(roleType)}
                  />
                </span>
                <span className="hidden md:contents">
                  <Filters
                    title={label}
                    variant="light"
                    state={selected ? "selected" : "default"}
                    onClick={() => toggleRole(roleType)}
                  />
                </span>
              </div>
            );
          })}
        </div>

        <div
          className="grid w-full max-md:grid-cols-2 max-md:gap-3 max-md:justify-items-stretch justify-items-center gap-6 md:gap-8 md:[grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]"
          role="list"
          aria-live="polite"
        >
          {displayedMembers.map((member) => (
            <div
              key={member.name}
              className="flex w-full max-w-[350px] justify-center max-md:max-w-none"
              role="listitem"
            >
              <MemberCard
                name={member.name}
                role={member.role}
                roleType={member.roleType}
                photoUrl={member.photoUrl}
                linkedinUrl={member.linkedinUrl}
                randomRotation
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex w-full justify-center max-md:mt-8 md:mt-12">
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate("/alumni")}
            className="w-full md:hidden"
          >
            ALUMNI
          </Button>
          <Button
            type="button"
            variant="tertiary"
            onClick={() => navigate("/alumni")}
            className="hidden w-full desktop:h-[60px] desktop:w-[200px] desktop:min-w-[200px] desktop:max-w-[200px] desktop:shrink-0 desktop:px-4 md:flex"
          >
            ALUMNI
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};

export default AboutPage;