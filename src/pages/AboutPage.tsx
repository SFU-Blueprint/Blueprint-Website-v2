import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import CameraButton from "../components/shared/CameraButton";
import { ReactComponent as SnapAPicText } from "../assets/icons/snap-a-pic-text.svg";
import { ReactComponent as SnapAPicArrow } from "../assets/icons/snap-a-pic-arrow.svg";
import PolaroidPhoto from "../components/shared/PolaroidPhoto";
import { GroupImages } from "../constants/about-us-media";
import InfoCard from "../components/shared/InfoCard";
import {
  useRive,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-webgl2";
import revisedRiv from "../assets/rive/Revised-Desktop.riv?url";
import aboutValuesMobileRiv from "../assets/rive/mobile-vers-rive.riv?url";
import Button from "../components/shared/Button";
import Filters from "../components/shared/Filters";
import MemberCard, {
  memberRoleType,
} from "../components/shared/MemberCard";

import { Members } from "../constants/Team/Members";

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

/* -------------------------------------------------------------------------- */
/*                              TEAM MEMBER DATA                              */
/* -------------------------------------------------------------------------- */

type TeamMember = {
  name: string;
  role: string;
  roleTypes: memberRoleType[];
  photoUrl?: string;
  linkedinUrl?: string;
};

const FILTER_TABS: {
  label: string;
  roleType: memberRoleType;
}[] = [
  {
    label: "Executives",
    roleType: "exec",
  },
  {
    label: "Project Managers",
    roleType: "pm",
  },
  {
    label: "Designers",
    roleType: "designer",
  },
  {
    label: "Tech Leads",
    roleType: "techLead",
  },
  {
    label: "Developers",
    roleType: "dev",
  },
];

const VALID_ROLE_TYPES: memberRoleType[] = [
  "exec",
  "pm",
  "designer",
  "techLead",
  "dev",
];

const isMemberRoleType = (
  roleType: string
): roleType is memberRoleType => {
  return VALID_ROLE_TYPES.includes(
    roleType as memberRoleType
  );
};

/*
 * Convert Members.js into the format MemberCard expects.
 *
 * Members.js now supports multiple roles:
 *
 * role: "Co-President & Project Manager"
 * roleType: ["exec", "pm"]
 *
 * This lets one member appear under multiple filters
 * while still only having one card.
 */
const TEAM_MEMBERS: TeamMember[] = Members.flatMap((member) => {
  const validRoleTypes = member.roleType.filter(
    (roleType): roleType is memberRoleType =>
      isMemberRoleType(roleType)
  );

  if (validRoleTypes.length === 0) {
    console.warn(
      `No valid roleTypes found for ${member.title}.`
    );

    return [];
  }

  return [
    {
      name: member.title,
      role: member.role,
      roleTypes: validRoleTypes,
      photoUrl: member.img,
      linkedinUrl: member.linkedin || undefined,
    },
  ];
});

/*
 * Desktop layout is 4 columns x 3 rows.
 */
const MEMBERS_PER_PAGE = 12;

/* -------------------------------------------------------------------------- */
/*                                  HELPERS                                   */
/* -------------------------------------------------------------------------- */

function randomTiltDeg(
  maxDeg: number,
  minDeg: number
) {
  return (
    Math.floor(
      Math.random() * (maxDeg - minDeg + 1)
    ) + minDeg
  );
}

const POLAROID_GRID_COLS = 7;

function pickRandomGridColumn(
  occupiedColumns: number[]
): number {
  const used = new Set(occupiedColumns);

  const available = Array.from(
    {
      length: POLAROID_GRID_COLS,
    },
    (_, i) => i
  ).filter((column) => !used.has(column));

  if (available.length > 0) {
    return available[
      Math.floor(Math.random() * available.length)
    ]!;
  }

  return Math.floor(
    Math.random() * POLAROID_GRID_COLS
  );
}

const RIVE_VALUES_STATE_MACHINE =
  "MainStateMachine";

function usePreloadRiveFiles() {
  useEffect(() => {
    const preloadFiles = async () => {
      try {
        await Promise.all([
          fetch(revisedRiv),
          fetch(aboutValuesMobileRiv),
        ]);
      } catch (error) {
        console.warn(
          "Rive files preload failed:",
          error
        );
      }
    };

    void preloadFiles();
  }, []);
}

/* -------------------------------------------------------------------------- */
/*                                RIVE DESKTOP                                */
/* -------------------------------------------------------------------------- */

function AboutValuesRiveDesktop({
  isVisible,
}: {
  isVisible: boolean;
}) {
  const [isLoaded, setIsLoaded] =
    useState(false);

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

    onLoad: () => {
      setIsLoaded(true);
    },
  });

  const shouldShow =
    isVisible && isLoaded;

  return (
    <div
      className={`h-[900px] lg:h-[950px] w-[1650px] ml-[-350px] transition-opacity duration-700 ease-in-out ${
        shouldShow
          ? "opacity-100"
          : "opacity-0"
      }`}
    >
      <RiveComponent className="w-full h-full" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 RIVE MOBILE                                */
/* -------------------------------------------------------------------------- */

function AboutValuesRiveMobile({
  isVisible,
}: {
  isVisible: boolean;
}) {
  const [isLoaded, setIsLoaded] =
    useState(false);

  const { RiveComponent } = useRive({
    src: aboutValuesMobileRiv,
    stateMachines: RIVE_VALUES_STATE_MACHINE,
    autoplay: true,
    autoBind: true,

    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),

    onLoad: () => {
      setIsLoaded(true);
    },
  });

  const shouldShow =
    isVisible && isLoaded;

  return (
    <div
      className={`h-[1100px] w-full translate-y-[-460px] transition-opacity duration-700 ease-in-out ${
        shouldShow
          ? "opacity-100"
          : "opacity-0"
      }`}
    >
      <RiveComponent className="w-full h-full" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                ABOUT PAGE                                  */
/* -------------------------------------------------------------------------- */

const AboutPage = () => {
  const navigate = useNavigate();

  usePreloadRiveFiles();

  /* ------------------------------------------------------------------------ */
  /*                             PRELOAD PHOTOS                               */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const images = GroupImages.map(
      ({ image }) => {
        const img = new Image();

        img.src = image;

        return img
          .decode()
          .catch(() => undefined);
      }
    );

    void Promise.all(images);
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                          INTERSECTION OBSERVER                           */
  /* ------------------------------------------------------------------------ */

  function useIsVisible(
    ref: React.RefObject<HTMLDivElement>
  ) {
    const [isVisible, setIsVisible] =
      useState(false);

    useEffect(() => {
      if (isVisible || !ref.current) {
        return;
      }

      const observer =
        new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });

      observer.observe(ref.current);

      return () => observer.disconnect();
    }, [ref, isVisible]);

    return isVisible;
  }

  const isComponentVisible =
    useRef<HTMLDivElement>(null);

  const isVisible = useIsVisible(
    isComponentVisible
  );

  /* ------------------------------------------------------------------------ */
  /*                              POLAROID STATE                              */
  /* ------------------------------------------------------------------------ */

  const INITIAL_VISIBLE = 3;
  const INITIAL_VISIBLE_MOBILE = 2;
  const MAX_VISIBLE = 10;

  const [
    extraPlacements,
    setExtraPlacements,
  ] = useState<number[]>([]);

  const rotations = useMemo(() => {
    return GroupImages.map(() =>
      randomTiltDeg(20, -20)
    );
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                               TEAM STATE                                 */
  /* ------------------------------------------------------------------------ */

  const [
    selectedRoles,
    setSelectedRoles,
  ] = useState<memberRoleType[]>([]);

  const [
    memberPage,
    setMemberPage,
  ] = useState(1);

  /* ------------------------------------------------------------------------ */
  /*                              MEDIA QUERY                                 */
  /* ------------------------------------------------------------------------ */

  function useMinWidth(
    minWidthPx: number
  ): boolean {
    const [matches, setMatches] =
      useState(false);

    useEffect(() => {
      const mediaQuery =
        window.matchMedia(
          `(min-width: ${minWidthPx}px)`
        );

      setMatches(mediaQuery.matches);

      const listener = () =>
        setMatches(mediaQuery.matches);

      mediaQuery.addEventListener(
        "change",
        listener
      );

      return () =>
        mediaQuery.removeEventListener(
          "change",
          listener
        );
    }, [minWidthPx]);

    return matches;
  }

  const isMinMobileWidth =
    useMinWidth(520);

  const isMdUp = useMinWidth(768);

  const baseVisible =
    isMinMobileWidth
      ? INITIAL_VISIBLE
      : INITIAL_VISIBLE_MOBILE;

  const extraCount =
    extraPlacements.length;

  const visibleCount = Math.min(
    MAX_VISIBLE,
    baseVisible + extraCount
  );

  /* ------------------------------------------------------------------------ */
  /*                              CAMERA CLICK                                */
  /* ------------------------------------------------------------------------ */

  const handleCameraClick = () => {
    if (
      baseVisible + extraCount >=
      MAX_VISIBLE
    ) {
      setExtraPlacements([]);
    } else {
      setExtraPlacements((prev) => [
        ...prev,
        pickRandomGridColumn(prev),
      ]);
    }
  };

  /* ------------------------------------------------------------------------ */
  /*                              TEAM FILTERS                                */
  /* ------------------------------------------------------------------------ */

  const toggleRole = (
    roleType: memberRoleType
  ) => {
    setSelectedRoles((prev) =>
      prev.includes(roleType)
        ? prev.filter(
            (role) =>
              role !== roleType
          )
        : [...prev, roleType]
    );

    /*
     * Whenever filters change,
     * go back to page 1.
     */
    setMemberPage(1);
  };

  /*
   * Filtering happens before pagination.
   *
   * No selected filters = show everyone.
   *
   * Multiple filters use OR logic:
   *
   * Executives + Project Managers means:
   * - show executives
   * - show project managers
   * - show members who are both
   *
   * A member is still rendered only once.
   */
  const filteredMembers =
    useMemo(() => {
      const filtered =
        selectedRoles.length === 0
          ? TEAM_MEMBERS
          : TEAM_MEMBERS.filter(
              (member) =>
                member.roleTypes.some(
                  (roleType) =>
                    selectedRoles.includes(
                      roleType
                    )
                )
            );

      return [...filtered].sort(
        (a, b) =>
          a.name.localeCompare(
            b.name,
            undefined,
            {
              sensitivity: "base",
            }
          )
      );
    }, [selectedRoles]);

  /* ------------------------------------------------------------------------ */
  /*                               PAGINATION                                 */
  /* ------------------------------------------------------------------------ */

  const totalMemberPages =
    Math.max(
      1,
      Math.ceil(
        filteredMembers.length /
          MEMBERS_PER_PAGE
      )
    );

  const displayedMembers =
    useMemo(() => {
      const startIndex =
        (memberPage - 1) *
        MEMBERS_PER_PAGE;

      const endIndex =
        startIndex +
        MEMBERS_PER_PAGE;

      return filteredMembers.slice(
        startIndex,
        endIndex
      );
    }, [
      filteredMembers,
      memberPage,
    ]);

  const goToPreviousMemberPage =
    () => {
      setMemberPage((prev) =>
        Math.max(1, prev - 1)
      );
    };

  const goToNextMemberPage = () => {
    setMemberPage((prev) =>
      Math.min(
        totalMemberPages,
        prev + 1
      )
    );
  };

  /* ------------------------------------------------------------------------ */
  /*                            POLAROID IMAGES                               */
  /* ------------------------------------------------------------------------ */

  const initialImages =
    GroupImages.slice(
      0,
      baseVisible
    );

  const imagesToShow =
    GroupImages.slice(
      baseVisible,
      visibleCount
    );

  return (
    <PageContainer className="bg-bp-lightest-grey overflow-x-hidden">
      {/* ================================================================ */}
      {/* MAIN CONTENT                                                     */}
      {/* ================================================================ */}

      <div className="pt-main-mobile-top md:pt-main-desktop-top flex flex-col justify-between">
        {/* ABOUT US */}

        <div className="flex md:flex-row flex-col justify-between md:mb-[100px] md:gap-28">
          <div className="flex flex-col md:justify-between max-md:pb-[62px] gap-3 md:gap-6">
            <h1 className="font-poppins text-5xl md:text-7xl leading-none tracking-[-0.96px] text-bp-black">
              <strong>about</strong> us
            </h1>

            <p className="font-poppins text-xl md:text-3xl leading-7 md:leading-10 text-bp-black w-90 md:max-w-[684px] md:flex md:flex-1 md:w-full">
              building innovative, tech-based solutions for
              communities and public welfare is the mission that
              brings us together.
            </p>
          </div>

          <div className="flex flex-row-reverse md:flex-row items-end gap-8 md:gap-10 self-start md:self-end max-md:mt-2">
            <div
              className="flex flex-col items-center gap-1"
              aria-hidden
            >
              <SnapAPicText className="h-[40px] w-auto md:h-[53px]" />

              <SnapAPicArrow className="h-[14px] w-auto -scale-x-100 md:h-[20px] md:scale-x-100 md:self-end md:mr-[-4px]" />
            </div>

            <CameraButton
              onClick={
                handleCameraClick
              }
            />
          </div>
        </div>

        {/* ================================================================ */}
        {/* PHOTOS                                                           */}
        {/* ================================================================ */}

        <div className="flex justify-center">
          {/* Desktop */}

          <div className="max-md:hidden">
            <div className="relative md:grid md:grid-cols-3 md:justify-items-center flex flex-col max-w-[1160px] flex-wrap mb-[50px]">
              {initialImages.map(
                (image, index) => (
                  <PolaroidPhoto
                    key={image.id}
                    imageSrc={
                      image.image
                    }
                    caption={
                      image.caption
                    }
                    alt={
                      image.caption
                    }
                    style={{
                      transform: `rotate(${rotations[index]}deg)`,
                    }}
                  />
                )
              )}
            </div>
          </div>

          {/* Mobile */}

          <div className="md:hidden mb-[-50px]">
            <div className="relative flex flex-col max-w-[306px]">
              {initialImages[0] && (
                <span className="relative z-10 translate-x-24">
                  <PolaroidPhoto
                    imageSrc={
                      initialImages[0]
                        .image
                    }
                    caption={
                      initialImages[0]
                        .caption
                    }
                    alt={
                      initialImages[0]
                        .caption
                    }
                    style={{
                      transform:
                        "rotate(10deg)",
                    }}
                  />
                </span>
              )}

              {initialImages[1] && (
                <span className="relative z-0 -translate-x-20 translate-y-[-150px]">
                  <PolaroidPhoto
                    imageSrc={
                      initialImages[1]
                        .image
                    }
                    caption={
                      initialImages[1]
                        .caption
                    }
                    alt={
                      initialImages[1]
                        .caption
                    }
                    style={{
                      transform:
                        "rotate(-8deg)",
                    }}
                  />
                </span>
              )}
            </div>
          </div>

          {/* Camera-added photos */}

          <div className="absolute grid h-[400px] md:h-[500px] md:max-w-[100vw] overflow-hidden grid-cols-7 grid-rows-1 md:translate-y-[-4rem] w-full justify-items-center z-20">
            {imagesToShow.map(
              (image, index) => {
                const col =
                  extraPlacements[
                    index
                  ] ??
                  index %
                    POLAROID_GRID_COLS;

                const rotation =
                  rotations[
                    baseVisible +
                      index
                  ];

                return (
                  <div
                    key={`${image.id}-${index}-${col}`}
                    className="translate-y-16"
                    style={
                      {
                        gridColumn:
                          col + 1,
                        gridRow: 1,
                      } as React.CSSProperties
                    }
                  >
                    <PolaroidPhoto
                      imageSrc={
                        image.image
                      }
                      caption={
                        image.caption
                      }
                      alt={
                        image.caption
                      }
                      className="animate-popIn"
                      style={
                        {
                          transform: `rotate(${rotation}deg)`,
                          zIndex:
                            index,
                          "--rotation": `${rotation}deg`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* ================================================================ */}
        {/* INFO CARDS                                                       */}
        {/* ================================================================ */}

        <div className="relative z-10 md:pt-[116px] flex flex-col items-center justify-center gap-6 mb-[148px] md:flex-row">
          <InfoCard
            title={
              OUR_MEMBERS_CONTENT.title
            }
            heading={
              OUR_MEMBERS_CONTENT.heading
            }
            body={
              OUR_MEMBERS_CONTENT.body
            }
            color={
              OUR_MEMBERS_CONTENT.color
            }
          />

          <InfoCard
            title={
              BLUEPRINT_MULTINATIONAL_CONTENT.title
            }
            heading={
              BLUEPRINT_MULTINATIONAL_CONTENT.heading
            }
            body={
              BLUEPRINT_MULTINATIONAL_CONTENT.body
            }
            color={
              BLUEPRINT_MULTINATIONAL_CONTENT.color
            }
          />
        </div>

        {/* ================================================================ */}
        {/* VALUES                                                           */}
        {/* ================================================================ */}

        <div
          ref={isComponentVisible}
          className="relative mb-[420px] max-[1479.9px]:left-[-20px] max-[1280px]:left-[10px] min-[1480px]:left-[calc(50%-500px)] max-[768px]:left-[0px]"
        >
          <div className="pointer-events-none relative z-30 flex flex-col md:gap-10 mb-[280p]">
            <h2 className="pointer-events-auto flex flex-col max-md:justify-center max-md:items-center font-poppins text-5xl md:text-7xl leading-10">
              our{" "}
              <strong>
                values
              </strong>
            </h2>
          </div>

          <div className="absolute w-full h-full bottom-0 md:translate-y-[-300px] lg:translate-y-[-325px]">
            {isMdUp ? (
              <AboutValuesRiveDesktop
                isVisible={
                  isVisible
                }
              />
            ) : (
              <AboutValuesRiveMobile
                isVisible={
                  isVisible
                }
              />
            )}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* MEET THE TEAM                                                    */}
      {/* ================================================================ */}

      <section
        className="meet-the-team relative z-0 w-full max-w-[1328px] mx-auto rounded-[20px] bg-bp-lighter-grey px-4 pt-14 pb-16 sm:px-8 md:px-10 md:pt-20 md:pb-24 xl:px-14"
        aria-labelledby="meet-the-team-heading"
      >
        {/* TITLE */}

        <h2
          id="meet-the-team-heading"
          className="mb-8 text-center md:mb-10"
        >
          <span className="font-caveat font-normal text-bp-black text-mobile-heading-hand tablet:text-heading-hand desktop:text-[78px] desktop:leading-none desktop:tracking-normal">
            meet the team
          </span>
        </h2>

        {/* ================================================================ */}
        {/* FILTERS                                                          */}
        {/* ================================================================ */}

        <div
          className="mb-8 flex flex-wrap flex-row justify-center gap-x-2 gap-y-2 md:mb-10 md:gap-x-[14px] md:gap-y-3"
          role="toolbar"
          aria-label="Filter team by role"
        >
          {FILTER_TABS.map(
            ({
              label,
              roleType,
            }) => {
              const selected =
                selectedRoles.includes(
                  roleType
                );

              return (
                <Filters
                  key={
                    roleType
                  }
                  title={
                    label
                  }
                  variant="light"
                  state={
                    selected
                      ? "selected"
                      : "default"
                  }
                  onClick={() =>
                    toggleRole(
                      roleType
                    )
                  }
                />
              );
            }
          )}
        </div>

        {/* ================================================================ */}
        {/* TEAM CARDS - 4 x 3 DESKTOP                                      */}
        {/* ================================================================ */}

        <div
          className="
            grid
            w-full
            grid-cols-2
            gap-3
            justify-items-center
            md:grid-cols-3
            md:gap-8
            xl:grid-cols-4
          "
          role="list"
          aria-live="polite"
        >
          {displayedMembers.map(
            (member) => (
              <div
                key={
                  member.name
                }
                className="
                  flex
                  w-full
                  max-w-[350px]
                  justify-center
                "
                role="listitem"
              >
                <MemberCard
                  name={
                    member.name
                  }
                  role={
                    member.role
                  }

                  /*
                   * MemberCard itself only needs one roleType
                   * for visual styling.
                   *
                   * Filtering uses ALL of member.roleTypes.
                   */
                  roleType={
                    member.roleTypes[0]
                  }

                  photoUrl={
                    member.photoUrl
                  }
                  linkedinUrl={
                    member.linkedinUrl
                  }
                  randomRotation
                />
              </div>
            )
          )}
        </div>

        {/* ================================================================ */}
        {/* NO RESULTS                                                       */}
        {/* ================================================================ */}

        {filteredMembers.length ===
          0 && (
          <p className="mt-8 text-center font-poppins text-bp-black">
            No team members
            found for the
            selected filters.
          </p>
        )}

        {/* ================================================================ */}
        {/* PAGINATION                                                       */}
        {/* ================================================================ */}

        {totalMemberPages > 1 && (
          <div className="mt-10 grid w-full grid-cols-[1fr_auto_1fr] items-center">
            {/* Previous */}

            <div className="flex justify-end pr-5 md:pr-8">
              <button
                type="button"
                onClick={
                  goToPreviousMemberPage
                }
                disabled={
                  memberPage === 1
                }
                aria-label="Previous team members"
                className="
                  font-poppins
                  text-[14px]
                  font-semibold
                  text-bp-blue
                  transition-opacity
                  duration-150
                  hover:opacity-70
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                  md:text-[16px]
                "
              >
                ← Previous
              </button>
            </div>

            {/* Page number stays centered */}

            <span className="whitespace-nowrap text-center font-poppins text-[14px] text-bp-black">
              {memberPage} /{" "}
              {totalMemberPages}
            </span>

            {/* Next */}

            <div className="flex justify-start pl-5 md:pl-8">
              <button
                type="button"
                onClick={
                  goToNextMemberPage
                }
                disabled={
                  memberPage ===
                  totalMemberPages
                }
                aria-label="Next team members"
                className="
                  font-poppins
                  text-[14px]
                  font-semibold
                  text-bp-blue
                  transition-opacity
                  duration-150
                  hover:opacity-70
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                  md:text-[16px]
                "
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* ALUMNI BUTTON                                                    */}
        {/* ================================================================ */}

        <div className="mt-10 flex w-full justify-center md:mt-12">
          <Button
            type="button"
            variant="tertiary"
            onClick={() =>
              navigate(
                "/alumni"
              )
            }
            className="h-[52px] w-full max-w-[200px] md:h-[60px] md:w-[200px] md:min-w-[200px] md:max-w-[200px] md:shrink-0 md:px-4"
          >
            ALUMNI
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};

export default AboutPage;