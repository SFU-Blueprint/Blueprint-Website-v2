import { useState, useMemo, useEffect } from "react";
import PageContainer from "../components/layout/PageContainer";
import CameraButton from "../components/shared/CameraButton";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";
import { GroupImages } from "../constants/about-us-media";
import InfoCard from "../components/shared/InfoCard";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-webgl2";
import revisedRiv from "../assets/rive/Revised-Desktop.riv?url";
import aboutValuesMobileRiv from "../assets/rive/mobile-vers-rive.riv?url";

const OUR_MEMBERS_CONTENT = {
  title: "Our members",
  heading: "Our talented members come from diverse cultures, professions, and social backgrounds.",
  body: "With a passion for social good and dedication to creating beautiful technology, our student project teams work alongside nonprofits to help them better serve their communities.",
  color: "bp-blue",
} as const;

const BLUEPRINT_MULTINATIONAL_CONTENT = {
  title: "Blueprint Multinational",
  heading: "This chapter of Blueprint is part of a much larger multinational community, originally started at UC Berkeley.",
  body: "As the fifth established chapter in Canada, our team is based largely at Simon Fraser University, and operating as a registered non profit!",
  color: "bp-orange",
} as const

/** Random tilt in degrees, roughly -maxDeg … +maxDeg (inclusive). */
function randomTiltDeg(maxDeg: number, minDeg: number) {
  return Math.floor(Math.random() * (maxDeg - minDeg + 1)) + minDeg;
}

/** Slots in the camera-click overlay row (0 = empty, 1 = polaroid). */
const POLAROID_GRID_COLS = 7;

/** Pick a random free column; if all 7 are used, pick any column (stack). */
function pickRandomGridColumn(occupiedColumns: number[]): number {
  const used = new Set(occupiedColumns);
  const available = Array.from({ length: POLAROID_GRID_COLS }, (_, i) => i).filter((c) => !used.has(c));
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
      layoutScaleFactor:1,
    }),
  });
  return <RiveComponent className="h-[950px] w-[1200px] ml-[-400px] 2xl:ml-[-200px]" />;
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
  const INITIAL_VISIBLE = 3;
  const INITIAL_VISIBLE_MOBILE = 2;
  const MAX_VISIBLE = 10;
  /** Column index (0…POLAROID_GRID_COLS-1) for each camera-added polaroid, in click order. */
  const [extraPlacements, setExtraPlacements] = useState<number[]>([]);
  
  // Create and memoize rotations for each image
  const rotations = useMemo(() => {
    return GroupImages.map(() => randomTiltDeg(20, -20));
  }, []); // Empty dependency array means this runs once on mount

  // Custom hook to check if the window is at least a certain width return true if window is at least the width
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
  /** Align with Tailwind `md` (768px) so only one values Rive mounts. */
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

  const initialImages = GroupImages.slice(0, baseVisible);
  const imagesToShow = GroupImages.slice(baseVisible, baseVisible + extraCount);
  

  return (
    <PageContainer className="bg-blueprint-gray-lightest">
      {/* Main Container */}
      <div className="pt-main-mobile-top md:pt-main-desktop-top flex flex-col justify-between">
          
        {/* About us section */}
        <div className="flex md:flex-row flex-col justify-between md:mb-[100px] flex-wrap">
          <div className="flex flex-col md:justify-between max-md:pb-[62px] gap-3 md:gap-6">
          {/* Title/text */}
            <h1 className="font-poppins text-5xl md:text-7xl leading-none tracking-[-0.96px] text-blueprint-black ">
              <strong>about</strong> us
            </h1>

            {/* Text */}
            <p className="font-poppins text-xl md:text-3xl leading-7 md:leading-10 text-blueprint-black w-90 md:w-[684px]">
              building innovative, tech-based solutions for communities and public welfare is the mission that brings us together.
            </p>
          </div>

          <div className="flex items-center">
          <CameraButton onClick={handleCameraClick} />
          </div>
        </div>
        
        {/* Photos Container, 3 photos then on click of Camera button, new photo drops ontop of existing photos (randomized rotation)*/}
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
                style={{ transform: `rotate(10deg)` }}
              />
            </span>
            <span className="relative z-0 -translate-x-20 translate-y-[-150px]">
              <PolaroidPhoto
                imageSrc={initialImages[1].image}
                caption={initialImages[1].caption}
                alt={initialImages[1].caption}
                style={{ transform: `rotate(-8deg)` }}
              />
            </span>
          </div>
        </div>

          {/* Drops new photos on top of existing photos */}
          <div className="absolute grid h-[200px] md:h-[500px] grid-cols-7 grid-rows-1 translate-y-12 w-full justify-items-center z-20">
            {imagesToShow.map((image, index) => {
              const col = extraPlacements[index] ?? index % POLAROID_GRID_COLS;
              return (
                <PolaroidPhoto
                  key={`${image.id}-${index}-${col}`}
                  imageSrc={image.image}
                  caption={image.caption}
                  alt={image.caption}
                  className="animate-popIn"
                  style={{
                    gridColumn: col + 1,
                    gridRow: 1,
                    transform: `rotate(${rotations[baseVisible + index]}deg)`,
                    zIndex: index,
                    '--rotation': `${rotations[baseVisible + index]}deg`,
                  } as React.CSSProperties}
                />
              );
            })}
          
          </div>
          
          {/* Info Cards Container*/}
        </div>
          <div className="relative z-10 md:pt-[108px] flex flex-col items-center justify-center gap-2 pb-[148px] lg:flex-row gap-6">
             {/* Our members  */}
            <InfoCard title={OUR_MEMBERS_CONTENT.title} heading={OUR_MEMBERS_CONTENT.heading} body={OUR_MEMBERS_CONTENT.body} color={OUR_MEMBERS_CONTENT.color} />
            

            {/* Blueprint Multinational */}
            <InfoCard title={BLUEPRINT_MULTINATIONAL_CONTENT.title} heading={BLUEPRINT_MULTINATIONAL_CONTENT.heading} body={BLUEPRINT_MULTINATIONAL_CONTENT.body} color={BLUEPRINT_MULTINATIONAL_CONTENT.color} />
          </div>

          {/* Values Section — Rive needs a real URL from Vite (?url) and a sized box for the canvas */}
          <div className="relative w-full shrink-0 pb-[280px] md:pb-0">
            <div className="pointer-events-none relative z-10 flex flex-col md:gap-10 md:pb-[566px]">
              <h2 className="pointer-events-auto flex flex-col max-md:justify-center max-md:items-center font-poppins text-5xl md:text-7xl md:ml-[-40px] 2xl:ml-[160px] 2xl:mx-48">
                our <strong>values</strong>
              </h2>
            </div>
            <div className="absolute md:inset-x-0 bottom-0 z-0 h-[320px] w-full lg:translate-y-[-50px] md:w-full md:h-[1000px]">
              {isMdUp ? <AboutValuesRiveDesktop /> : <AboutValuesRiveMobile />}
            </div>
          </div>
      </div>

      {/* Meet the Team */}
      <div className="h-96 bg-blueprint-white">
        <h2 className="flex flex-col font-poppins md:text-7xl">
          Meet the Team Polaroid Div
        </h2>
      </div>
    </PageContainer>
  );
};

export default AboutPage;