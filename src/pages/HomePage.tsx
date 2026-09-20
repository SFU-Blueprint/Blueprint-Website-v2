import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import PageContainer from "../components/layout/PageContainer";
import Button from "../components/shared/Button";
import Carousel from "../components/shared/Carousel";
import InteractiveCarousel from "../components/shared/Carousel-Interactive";
import {
  blueprintTestimonials,
  bpLogos,
} from "../constants/homepage-media";
import TestimonialCard from "../components/shared/TestimonialCard.tsx";
import { Link } from "react-router-dom";
import ProjectCard from "../components/home-page/HomeProjectCard.tsx";
import { Projects } from "../constants/projects";
import { ReactComponent as WindmillIcon } from "../assets/home/windmill.svg";
import { ReactComponent as HandshakeIcon } from "../assets/home/handshake.svg";
import { ReactComponent as GiftIcon } from "../assets/home/gift.svg";
import { createPortal } from "react-dom";
import HeroCrosspoint from "../components/shared/HeroCrosspoint";

/* ================================================================ */
/* CONSTANTS                                                        */
/* ================================================================ */

const HERO_SCROLLBAR_BG = "#2A2A2A";

const WHO_WE_ARE_VIDEO_SRC = "/videos/who-we-are.mp4";
const WHO_WE_ARE_TEASER_SRC = "/videos/who-we-are-teaser.mp4";

const impactPoints = [
  {
    color: "bp-blue",
    text: "Reducing administrative workflows",
  },
  {
    color: "bp-accent-medium-blue",
    text: "Improving access to help and resources",
  },
  {
    color: "bp-accent-light-blue",
    text: "Increasing volunteer engagement",
  },
];

/* ================================================================ */
/* PLAY ICON                                                        */
/* ================================================================ */

const PlayIcon = ({
  className = "",
}: {
  className?: string;
}) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 10 12"
    className={className}
    fill="currentColor"
  >
    <path d="M0 0.75v10.5a.75.75 0 0 0 1.166.624l8.25-5.25a.75.75 0 0 0 0-1.248L1.166.126A.75.75 0 0 0 0 .75Z" />
  </svg>
);

/* ================================================================ */
/* WHO WE ARE PILL                                                  */
/* ================================================================ */

const WhoWeArePill = () => (
  <span
    aria-hidden="true"
    className="
      inline-flex
      items-center
      gap-[10px]
      whitespace-nowrap
      rounded-[10px]
      bg-[#1F1F1F]/90
      px-[18px]
      py-3
      font-poppins
      text-[14px]
      font-medium
      text-bp-white
      transition-colors
      duration-150
      select-none

      group-hover:bg-bp-white
      group-hover:text-bp-black

      group-active:bg-bp-light-grey
      group-active:text-bp-black

      max-md:rounded-[5px]
      max-md:px-4
      max-md:py-2
      max-md:text-[12px]
    "
  >
    <PlayIcon className="h-[14px] w-[12px] max-md:h-3 max-md:w-2.5" />

    Who we are
  </span>
);

/* ================================================================ */
/* VIDEO CARD                                                       */
/* ================================================================ */

const VideoCardStack = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  const handleCardKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openVideo();
    }
  };

  return (
    <>
      <div
        className="
          group
          relative
          aspect-square
          w-full
          max-w-[560px]

          max-lg:max-w-[480px]
          max-md:max-w-[500px]
        "
      >
        {/* Purple backing card */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            rounded-[10px]
            bg-bp-accent-purple
            origin-center
            rotate-[4.7deg]
            translate-x-[14px]
            -translate-y-[5px]
            transition-transform
            duration-300
            ease-out

            group-hover:rotate-[6.4deg]
          "
        />

        {/* Blue backing card */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            rounded-[10px]
            bg-bp-accent-blue
            origin-center
            rotate-[2deg]
            transition-transform
            duration-300
            ease-out

            group-hover:-rotate-[2.2deg]
          "
        />

        {/* Main video card */}

        <div
          role="button"
          tabIndex={0}
          aria-label="Play Who we are video"
          onClick={openVideo}
          onKeyDown={handleCardKeyDown}
          className="
            relative
            h-full
            w-full
            cursor-pointer
            overflow-hidden
            rounded-[10px]
            bg-bp-darkest-grey
            origin-center
            transition-transform
            duration-300
            ease-out

            group-hover:rotate-[2deg]

            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-bp-white
          "
        >
          <video
            aria-hidden="true"
            className="
              absolute
              inset-0
              z-0
              h-full
              w-full
              object-cover
            "
            src={WHO_WE_ARE_TEASER_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          <div
            className="
              absolute
              left-5
              top-5
              z-10

              max-md:left-3
              max-md:top-3
            "
          >
            <WhoWeArePill />
          </div>
        </div>
      </div>

      {/* Video modal */}

      {isVideoOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[9999] bg-black/80"
              aria-hidden="true"
              onClick={closeVideo}
            />

            <button
              type="button"
              aria-label="Close video"
              onClick={closeVideo}
              className="
                fixed
                right-4
                top-4
                z-[10001]
                rounded-[5px]
                bg-bp-white/95
                px-4
                py-2
                font-poppins
                text-sm
                font-medium
                text-bp-black
                transition-colors
                duration-150

                hover:bg-bp-light-grey
                active:bg-bp-grey

                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-bp-white
              "
            >
              Close
            </button>

            <video
              className="
                fixed
                inset-0
                z-[10000]
                m-auto
                aspect-video
                bg-black
                object-contain
              "
              style={{
                width: "min(calc(100vw - 32px), 1000px)",
              }}
              src={WHO_WE_ARE_VIDEO_SRC}
              controls
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              autoPlay
              playsInline
              preload="metadata"
              aria-label="Who we are video"
            >
              Sorry, your browser does not support embedded videos.
            </video>
          </>,
          document.body
        )}
    </>
  );
};

/* ================================================================ */
/* HERO FEATURE CARDS                                               */
/* ================================================================ */

const HomeHeroFeatureCards = () => {
  const cards: Array<{
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    squareClass: string;
  }> = [
    {
      Icon: WindmillIcon,
      label: "all NPO sectors",
      squareClass: "bg-bp-orange",
    },
    {
      Icon: HandshakeIcon,
      label: "local partnerships",
      squareClass: "bg-bp-pink",
    },
    {
      Icon: GiftIcon,
      label: "100% pro bono",
      squareClass: "bg-bp-green",
    },
  ];

  return (
    <div
      className="
        mt-[58px]
        grid
        w-full
        grid-cols-1
        gap-[28px]

        md:grid-cols-3
      "
      aria-label="Blueprint highlights"
    >
      {cards.map(({ Icon, label, squareClass }) => (
        <div
          key={label}
          className="
            relative
            flex
            min-h-0
            min-w-0
            overflow-hidden
            rounded-[10px]
            bg-[#1F1F1F]

            h-[124px]
            w-full
            flex-row
            items-center
            px-5
            py-4

            md:h-[clamp(250px,28vw,402px)]
            md:flex-col
            md:px-4
            md:pb-8
            md:pt-5
          "
        >
          {/* IMAGE */}

          <div
            className="
              order-2
              ml-auto
              flex
              h-[90px]
              w-[120px]
              shrink-0
              items-center
              justify-center
              overflow-hidden

              md:order-1
              md:ml-0
              md:h-[250px]
              md:w-full
              md:shrink
            "
          >
            <Icon
              aria-hidden
              className="
                block
                !h-auto
                !w-auto
                max-h-full
                max-w-full
                shrink-0
              "
            />
          </div>

          {/* LABEL */}

          <div
            className="
              order-1
              z-10
              flex
              min-w-0
              flex-1
              items-center
              gap-2

              md:order-2
              md:mt-auto
              md:w-full
              md:flex-none
              md:justify-center
              md:gap-[10px]
              md:pt-2
            "
          >
            <span
              aria-hidden
              className={`size-3 shrink-0 rounded-[2px] ${squareClass}`}
            />

            <span
              className="
                min-w-0
                whitespace-nowrap
                font-caveat
                text-[24px]
                leading-none
                text-bp-lightest-grey

                md:text-[clamp(20px,2.3vw,36px)]
              "
            >
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ================================================================ */
/* TECH FOR GOOD HERO                                               */
/* ================================================================ */

const TechForGoodSection = () => {
  return (
    <section
      className="
        relative
        left-1/2
        -mt-[116px]
        w-screen
        -translate-x-1/2
        bg-bp-black
        pb-24
        pt-[116px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-[28px]

          md:px-[44px]
          xl:px-[72px]
          2xl:px-0
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-14

            lg:grid-cols-[minmax(260px,360px)_minmax(0,1fr)]
            lg:items-start
            lg:gap-[clamp(50px,6vw,100px)]

            xl:grid-cols-[372px_minmax(0,1fr)]
          "
        >
          {/* LEFT COLUMN */}

          <div
            className="
              flex
              flex-col
              items-start

              lg:pt-8
            "
          >
            <p
              className="
                font-caveat
                text-[40px]
                font-normal
                leading-none
                tracking-[-1.2px]
                text-bp-lightest-grey

                md:text-[52px]
                lg:text-[clamp(48px,4.4vw,64px)]
              "
            >
              we are
            </p>

            <h1
              className="
                -mt-1
                font-poppins
                text-[28px]
                font-semibold
                leading-none
                tracking-[-0.56px]
                text-bp-lightest-grey

                md:text-[40px]

                lg:text-[clamp(40px,3.5vw,50px)]
                lg:font-medium
                lg:tracking-[-1px]
              "
            >
              blueprint
            </h1>

            <p
              className="
                mt-8
                max-w-[420px]
                font-poppins
                text-[14px]
                font-normal
                leading-normal
                text-bp-lightest-grey

                lg:mt-7
                lg:max-w-[284px]
                lg:text-[16px]
              "
            >
              Our student teams have been committed to promoting public
              welfare since 2023. We build apps, websites, and digital
              products for impactful non profit organizations in BC,
              Canada, free of charge.
            </p>

            <Link
              to="/about"
              className="
                mt-[21px]
                w-full

                md:w-auto
                lg:mt-10
              "
            >
              <Button
                variant="primary"
                className="
                  !h-[52px]
                  !w-full
                  uppercase

                  md:!w-[200px]

                  lg:!h-[60px]
                  lg:!px-[44px]
                  lg:!py-[14px]
                "
              >
                Learn about us
              </Button>
            </Link>
          </div>

          {/* RIGHT COLUMN */}

          <div
            className="
              relative
              flex
              min-w-0
              flex-col
              items-center

              lg:items-end
              lg:pt-8
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[560px]

                lg:w-[clamp(430px,43vw,560px)]
              "
            >
              <VideoCardStack />

              {/* HEADLINE */}

              <div
                className="
                  relative
                  z-20
                  -mt-[64px]
                  w-full

                  md:-mt-[85px]

                  lg:-ml-[8%]
                  lg:-mt-[clamp(125px,13vw,190px)]
                  lg:w-[115%]
                "
              >
                <h2
                  className="
                    whitespace-nowrap
                    font-poppins
                    text-[clamp(40px,10.3vw,64px)]
                    font-medium
                    leading-[0.9]
                    tracking-[-1.2px]
                    text-bp-lightest-grey

                    lg:text-[clamp(58px,6.4vw,92px)]
                    lg:tracking-[-2.4px]
                  "
                >
                  we build
                  <br />
                  tech for

                  <span
                    className="
                      -ml-[0.04em]
                      -mt-[0.12em]
                      block
                      font-caveat
                      text-[clamp(67px,17vw,108px)]
                      font-bold
                      leading-none
                      tracking-[-2px]

                      lg:text-[clamp(96px,10.5vw,152px)]
                      lg:tracking-[-4px]
                    "
                  >
                    social good
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <HomeHeroFeatureCards />
      </div>
    </section>
  );
};

/* ================================================================ */
/* FEATURED PROJECTS                                                */
/* ================================================================ */

const PROJECT_COVER_BG: Record<string, string> = {
  mosaic: "#5386E4",
  "our-community-bikes": "#E5E5EB",
  "reel-youth": "#F49F00",
};

const featuredProjects = Projects.filter((p) =>
  ["mosaic", "our-community-bikes", "reel-youth"].includes(p.slug)
);

const PROJECTS_CARD_STICKY_TOP = 40;
const PROJECTS_CARD_GAP = 16;
const PROJECTS_CARD_PEEK_HEIGHT = 20;

const getProjectsCardStickyTop = (index: number) =>
  PROJECTS_CARD_STICKY_TOP +
  index * PROJECTS_CARD_PEEK_HEIGHT;

const PROJECTS_CARD_SCROLL_ANIMATIONS = [
  {
    minScale: 0.7,
    minBrightness: 0.7,
  },
  {
    minScale: 0.8,
    minBrightness: 0.8,
  },
] as const;

/* ================================================================ */
/* PROJECT CARD STACK                                               */
/* ================================================================ */

const ProjectsCardStack = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateCardTransforms = useCallback(() => {
    const lastIndex = featuredProjects.length - 1;

    const lastCard = cardRefs.current[lastIndex];

    const lastStickyTop =
      getProjectsCardStickyTop(lastIndex);

    const isStackComplete =
      lastCard != null &&
      lastCard.getBoundingClientRect().top <=
        lastStickyTop + 1;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardStickyTop =
        getProjectsCardStickyTop(index);

      const config =
        PROJECTS_CARD_SCROLL_ANIMATIONS[index];

      if (!config) {
        card.style.transform =
          "scale3d(1, 1, 1)";

        card.style.filter =
          "brightness(1)";

        return;
      }

      const nextCard =
        cardRefs.current[index + 1];

      if (!nextCard) {
        card.style.transform =
          "scale3d(1, 1, 1)";

        card.style.filter =
          "brightness(1)";

        return;
      }

      const nextTop =
        nextCard.getBoundingClientRect().top;

      const scrollDistance =
        card.offsetHeight +
        PROJECTS_CARD_GAP;

      let progress = Math.min(
        Math.max(
          1 -
            (nextTop - cardStickyTop) /
              scrollDistance,
          0
        ),
        1
      );

      if (isStackComplete) {
        progress = 1;
      }

      const scale =
        1 -
        progress *
          (1 - config.minScale);

      const brightness =
        1 -
        progress *
          (1 - config.minBrightness);

      card.style.transform =
        `scale3d(${scale}, ${scale}, 1)`;

      card.style.filter =
        `brightness(${brightness})`;
    });
  }, []);

  useLayoutEffect(() => {
    updateCardTransforms();

    window.addEventListener(
      "scroll",
      updateCardTransforms,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateCardTransforms
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateCardTransforms
      );

      window.removeEventListener(
        "resize",
        updateCardTransforms
      );
    };
  }, [updateCardTransforms]);

  return (
    <section className="w-full min-w-0">
      <div className="flex w-full min-w-0 flex-col gap-4">
        {featuredProjects.map(
          (project, index) => (
            <div
              key={project.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="sticky origin-top"
              style={{
                top: getProjectsCardStickyTop(
                  index
                ),

                zIndex: 20 + index,

                willChange:
                  index <
                  PROJECTS_CARD_SCROLL_ANIMATIONS.length
                    ? "transform, filter"
                    : undefined,
              }}
            >
              <ProjectCard
                project={{
                  LOGO_PLACEHOLDER:
                    project.image
                      ? project.image
                      : "https://placehold.co/76x76",

                  COVER_PLACEHOLDER:
                    project.popupimage
                      ? project.popupimage
                      : "https://placehold.co/517x354",

                  COVER_BG:
                    PROJECT_COVER_BG[
                      project.slug
                    ] ?? "#5387E3",

                  COVER_SCALE:
                    project.slug === "mosaic"
                      ? 1.28
                      : undefined,

                  TITLE_PLACEHOLDER:
                    project.description,

                  CLIENT_PLACEHOLDER:
                    project.name,

                  SERVICE_PLACEHOLDER:
                    project.tags?.[0] ??
                    "Web App",

                  SECTOR_PLACEHOLDER:
                    project.tags?.[1] ??
                    project.tags?.[0] ??
                    "NPO",
                }}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

/* ================================================================ */
/* IMPACT SECTION                                                   */
/* ================================================================ */

const ImpactSection = () => {
  return (
    <section className="relative z-20 w-full pt-[80px] max-md:pt-[75px]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          justify-between
          gap-12

          xl:flex-row
          xl:items-start
          xl:gap-24
        "
      >
        {/* LEFT SIDE */}

        <div
          className="
            z-20
            w-full
            max-w-[440px]
            shrink-0

            max-md:max-w-[90vw]

            xl:sticky
            xl:top-[25%]
          "
        >
          <div className="flex w-full flex-col gap-9 md:gap-12">
            <div
              className="
                justify-start
                font-['Poppins']
                text-mobile-heading-m-reg
                font-normal
                leading-8
                text-bp-black

                md:w-72
                md:text-heading-s-reg
                md:leading-[50.40px]
              "
            >
              <h2>
                impact that
              </h2>

              <strong className="font-semibold">
                speaks for itself
              </strong>
            </div>

            {/* BULLETS */}

            <div className="flex flex-col items-start justify-start gap-[9px]">
              {impactPoints.map((point) => (
                <div
                  key={point.text}
                  className="
                    flex
                    flex-row
                    items-center
                    justify-center
                    gap-[18px]
                    font-poppins

                    md:justify-start
                  "
                >
                  <div
                    className={`h-4 w-4 shrink-0 rounded-[3px] bg-${point.color}`}
                  />

                  {point.text}
                </div>
              ))}
            </div>

            {/* LOGOS */}

            <div className="relative w-full">
              <div
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  z-10
                  h-full
                  w-16
                  bg-gradient-to-r
                  from-bp-lightest-grey
                  to-transparent

                  md:w-36
                "
              />

              <Carousel>
                {bpLogos.map((logo) => (
                  <img
                    className="h-full w-full object-contain"
                    key={logo.id}
                    src={logo.image}
                    alt={logo.id.toString()}
                  />
                ))}
              </Carousel>

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  z-10
                  h-full
                  w-16
                  bg-gradient-to-l
                  from-bp-lightest-grey
                  to-transparent

                  md:w-36
                "
              />
            </div>
          </div>

          <div className="w-full pt-10 max-md:hidden">
            <Link to="/projectspage">
              <Button
                variant="tertiary"
                className="
                  !h-15
                  !w-52
                  uppercase

                  max-xl:!basis-auto
                  max-xl:!w-full
                "
              >
                see all projects
              </Button>
            </Link>
          </div>
        </div>

        {/* PROJECT PREVIEW */}

        <div
          className="
            flex
            w-full
            min-w-0
            max-w-[708px]
            flex-1
            shrink-0
            justify-center

            max-md:pt-[30px]

            xl:sticky
            xl:top-[40px]
          "
        >
          <ProjectsCardStack />
        </div>
      </div>

      {/* MOBILE PROJECT BUTTON */}

      <div
        className="
          mx-auto
          hidden
          w-full
          max-w-[440px]
          pt-[4rem]

          max-md:block
          max-md:max-w-[90vw]
        "
      >
        <Link to="/projectspage">
          <Button
            variant="tertiary"
            className="
              !h-15
              !w-52
              uppercase

              max-md:!w-full
            "
          >
            see all projects
          </Button>
        </Link>
      </div>
    </section>
  );
};

/* ================================================================ */
/* UPCOMING EVENT CARD                                              */
/* ================================================================ */

const UpcomingEventsCard = () => {
  return (
    <div className="flex items-end justify-end max-md:justify-center md:-mb-10">
      {/*
        The content container itself is NOT clipped.
        This avoids Safari clipping text along with the blue shape.
      */}

      <div
        className="
          relative
          flex
          h-[350px]
          w-full
          min-w-[347px]
          flex-col
          text-bp-white

          md:max-w-[737px]
          md:px-[50px]
          md:pb-[60px]
          md:pt-[72px]

          max-md:h-auto
          max-md:min-h-[336px]
          max-md:px-[26px]
          max-md:pb-[40px]
          max-md:pt-[34px]
        "
      >
        {/* BLUE SHAPE ONLY */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            rounded-[5px]
            bg-bp-blue

            md:[clip-path:polygon(0_13%,100%_0,100%_100%,0_100%)]
          "
        />

        {/* CONTENT */}

        <div
          className="
            relative
            z-10
            flex
            h-full
            w-full
            flex-col
          "
        >
          {/* TOP */}

          <div className="flex flex-col gap-[25px]">
            <div
              className="
                flex
                items-end
                justify-between
                gap-8

                max-md:flex-col
                max-md:items-stretch
                max-md:gap-[26px]
              "
            >
              <div
                className="
                  flex
                  min-w-0
                  max-w-[366px]
                  flex-1
                  flex-col
                  gap-[16px]

                  max-md:w-full
                  max-md:max-w-none
                "
              >
                <p
                  className="
                    font-poppins
                    text-[10px]
                    font-normal
                    uppercase
                    leading-normal

                    md:text-[14px]
                  "
                >
                  upcoming event:
                </p>

                <p
                  className="
                    font-poppins
                    text-[36px]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.72px]

                    max-md:text-2xl
                    max-md:leading-8
                  "
                >
                  None currently. Check back for future events!
                </p>
              </div>

              <div className="shrink-0 max-md:w-full">
                <Button
                  variant="secondary"
                  className="
                    w-[200px]
                    shrink-0

                    max-md:w-full
                  "
                  href="https://forms.gle/KxcKKLQXrK8Xzfc8A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-poppins text-sm font-semibold">
                    Keep Me Updated
                  </span>
                </Button>
              </div>
            </div>

            <div className="h-px w-full bg-white/30" />
          </div>

          {/* BOTTOM */}

          <div
            className="
              mt-auto
              flex
              w-full
              flex-row
              justify-start
              gap-[52px]
              pt-6
              font-poppins

              max-md:mt-6
              max-md:flex-col
              max-md:gap-5
              max-md:pt-0
            "
          >
            {/* DATE */}

            <div
              className="
                flex
                flex-col
                gap-[6px]
                text-[10px]
                font-normal
                leading-normal

                md:gap-[10px]
              "
            >
              <p
                className="
                  font-normal
                  uppercase
                  leading-normal

                  md:text-[14px]
                "
              >
                DATE AND TIME:
              </p>

              <p
                className="
                  flex
                  flex-col
                  gap-1
                  text-body-s-reg
                  font-light

                  md:flex-row
                "
              >
                <span>
                  TBD
                </span>
              </p>
            </div>

            {/* LOCATION */}

            <div
              className="
                flex
                flex-col
                gap-[6px]
                text-[10px]
                font-normal
                leading-normal

                md:gap-[10px]
              "
            >
              <p
                className="
                  font-normal
                  uppercase
                  leading-normal

                  md:text-[14px]
                "
              >
                LOCATION:
              </p>

              <p
                className="
                  flex
                  flex-col
                  gap-1
                  font-poppins
                  text-body-s-reg
                  font-light
                  leading-normal

                  md:flex-row
                "
              >
                <span>TBD</span>
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================================================================ */
/* HOME PAGE                                                        */
/* ================================================================ */

const HomePage = () => {
  useEffect(() => {
    const html =
      document.documentElement;

    const prev =
      html.style.backgroundColor;

    html.style.backgroundColor =
      HERO_SCROLLBAR_BG;

    return () => {
      html.style.backgroundColor =
        prev;
    };
  }, []);

  return (
    <>
      {/* ========================================================== */}
      {/* HERO + IMPACT                                              */}
      {/* ========================================================== */}

      <PageContainer>
        <TechForGoodSection />

        <ImpactSection />
      </PageContainer>

      {/* ========================================================== */}
      {/* STUDENTS                                                   */}
      {/* ========================================================== */}

      <section
        className="
          relative
          z-30
          overflow-x-clip
          bg-bp-lightest-grey
        "
      >
        {/* ======================================================== */}
        {/* STUDENT INTRO                                            */}
        {/* ======================================================== */}

        <PageContainer className="relative z-10 !pt-0">
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[1440px]

              pt-[140px]

              font-poppins

              md:pt-[220px]
            "
          >
            <div
              className="
                relative
                z-10
                flex
                w-full
                min-w-0
                flex-col
              "
            >
              <div
                className="
                  flex
                  w-full
                  max-w-[660px]
                  min-w-0
                  flex-col
                  gap-6
                  text-zinc-800

                  max-md:min-w-0
                "
              >
                {/* TITLE */}

                <h2
                  className="
                    max-w-[600px]
                    text-heading-s-reg
                    font-normal

                    max-md:max-w-full
                    max-md:text-mobile-heading-m-reg
                  "
                >
                  students: turn real projects into{" "}
                  <span className="font-semibold">
                    real opportunities.
                  </span>
                </h2>

                {/* DESCRIPTION */}

                <p
                  className="
                    max-w-[660px]
                    text-body-m-reg
                    leading-8

                    max-md:text-mobile-body-m-reg
                    max-md:leading-normal
                  "
                >
                  By working with a passionate
                  interdisciplinary team and making a
                  real impact in their community, our
                  members have gained invaluable skills,
                  allowing them to pursue successful
                  careers in tech. Join us to see the
                  Blueprint difference.
                </p>

                {/* DESKTOP JOIN */}

                <div className="relative z-10 mt-6 self-start max-md:hidden">
                  <Link
                    to="/students"
                    className="
                      inline-flex
                      h-16
                      w-48
                      items-center
                      justify-center
                      rounded-[5px]
                      bg-bp-black
                      px-[44px]
                      font-poppins
                      text-[16px]
                      font-light
                      uppercase
                      leading-none
                      text-white
                      transition-colors
                      duration-150

                      hover:bg-bp-dark-grey
                      active:bg-bp-pressed-blue
                    "
                  >
                    join us
                  </Link>
                </div>
              </div>

              {/* ================================================== */}
              {/* CROSSPOINT                                         */}
              {/* ================================================== */}

              <div
                className="
                  relative
                  z-0
                  h-[120px]
                  w-full

                  max-md:h-[104px]
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    z-0
                    h-full
                    w-screen
                    max-w-none
                    -translate-x-1/2
                  "
                >
                  <HeroCrosspoint
                    videoSrc="/videos/crosspoints/dotted-path-1.webm"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      z-0
                      h-full
                    "
                    anchorClassName="
                      absolute
                      right-[clamp(24px,8vw,120px)]
                      top-1/2

                      max-md:right-[24px]
                    "
                    videoClassName="
                      w-[640px]

                      max-md:w-[280px]
                    "
                    imageClassName="
                      w-[2260px]

                      max-md:w-[1200px]
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </PageContainer>

        {/* ======================================================== */}
        {/* TESTIMONIAL CAROUSEL                                     */}
        {/* ======================================================== */}

        <div
          className="
            relative
            left-1/2
            z-10
            h-[390px]
            w-screen
            -translate-x-1/2
            overflow-hidden

            max-md:h-[330px]
          "
        >
          <InteractiveCarousel autoScrollSpeed={1}>
            {blueprintTestimonials.map(
              (testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  role={testimonial.role}
                  picture={testimonial.image}
                  caption={testimonial.caption}
                />
              )
            )}
          </InteractiveCarousel>
        </div>

        {/* ======================================================== */}
        {/* MOBILE JOIN BUTTON                                       */}
        {/* ======================================================== */}

        <PageContainer className="relative z-10 !pt-0">
          <div
            className="
              mx-auto
              hidden
              w-full
              max-w-[1440px]
              pb-10
              pt-6

              max-md:block
            "
          >
            <Link
              to="/students"
              className="
                inline-flex
                h-16
                w-full
                items-center
                justify-center
                rounded-[5px]
                bg-bp-black
                px-[44px]
                font-poppins
                text-[16px]
                font-normal
                uppercase
                leading-none
                text-white
                transition-colors
                duration-150

                hover:bg-bp-dark-grey
                active:bg-bp-pressed-blue
              "
            >
              join us
            </Link>
          </div>
        </PageContainer>

        {/* ======================================================== */}
        {/* UPCOMING EVENT                                           */}
        {/* ======================================================== */}

        <PageContainer className="relative z-10 !pt-0">
          <section
            className="
              mx-auto
              w-full
              max-w-[1440px]
              pb-[38px]
              pt-[72px]

              max-md:pb-[19px]
              max-md:pt-[48px]
            "
          >
            <div className="relative w-full">
              {/* GROUP PHOTO */}

              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  rounded-[5px]
                "
              >
                <img
                  src="/images/home/photos/group.png"
                  alt="Blueprint team"
                  className="
                    block
                    h-[620px]
                    w-full
                    object-cover
                    object-center

                    max-xl:h-[540px]
                    max-lg:h-[460px]
                    max-md:h-[320px]
                    max-sm:h-[260px]
                  "
                />
              </div>

              {/* DESKTOP EVENT CARD */}

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  z-20
                  w-full
                  max-w-[737px]
                  translate-y-[50%]

                  max-md:hidden
                "
              >
                <UpcomingEventsCard />
              </div>
            </div>

            {/* SPACE FOR HANGING CARD */}

            <div className="h-[175px] max-md:hidden" />

            {/* MOBILE EVENT CARD */}

            <div className="hidden pt-6 max-md:block">
              <UpcomingEventsCard />
            </div>
          </section>
        </PageContainer>
      </section>
    </>
  );
};

export default HomePage;
