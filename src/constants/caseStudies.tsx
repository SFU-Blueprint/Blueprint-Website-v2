import { ReactElement, ReactNode } from "react";
import { MemberCardProps } from "../components/shared/MemberCard";
import { OurCommunityBikes } from "./Team/OurCommunityBikes";
import { ReelYouth } from "./Team/ReelYouth";
import { Mosaic } from "./Team/Mosaic";
import { WebsiteRevamp2026 } from "./Team/WebsiteRevamp2026";

/**
 * Format that describes valid CaseStudies. Used locally and in CaseStudyLayout.tsx as a basis for its props.
 * The imgPileFormat function allows the user to create a custom implementation of the imgPile layout found in the hero section. If
 * left blank will resort to a default layout
 */
export type CaseStudyContent = {
  slug: string;
  hero: {
    title: string;
    date: string;
    partnerContent: ReactNode;
    problemContent: ReactNode;
    logoURL: string;
    logoAlt?: string;
    img1: {
      url: string;
      caption: string;
      alt?: string;
      polaroidImgClassName?: string;
      polaroidComponentClassName?: string;
    };
    img2: {
      url: string;
      caption: string;
      alt?: string;
      polaroidImgClassName?: string;
      polaroidComponentClassName?: string;
    };

    /**
     * when defined overides the default image pile layout in caseStudyLayout.tsx.
     * Does not overide the overall layout of the hero section.
     * @param logoUrl - Url to image
     * @param img1PolaroidComponent - A PolaroidPhoto component
     * @param img2PolaroidComponent - A PolaroidPhoto component
     * @param logoAlt - Optional argument, an alt tag for the logo
     * @see CaseStudyLayout.tsx
     * @returns {ReactElement}
     */
    imgPileFormat?: (
      logoUrl: string,
      img1PolaroidComponent: ReactNode,
      img2PolaroidComponent: ReactNode,
      logoAlt?: string
    ) => ReactElement;
  };

  solution: {
    summary: ReactNode;
    contentList: {
      description: ReactNode;
      imgURL: string;
      caption: ReactNode;
      alt?: string;
    }[];
  };

  testemonial?: {
    quote: string;
    name: string;
    title: string;
    imgUrl?: string;
  };

  team: MemberCardProps[];
};

const CaseStudies: CaseStudyContent[] = [
  {
    /* Our Community Bikes */
    slug: "our-community-bikes",

    hero: {
      title: "our community bikes",
      date: "FEB - NOV 2024",

      partnerContent: (
        <>
          <a
            href="https://ourcommunitybikes.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bp-blue underline decoration-bp-blue underline-offset-[2px]"
          >
            Our Community Bikes (OCB)
          </a>{" "}
          is a non-profit based in Vancouver, Canada dedicated to providing
          bikes to underserved communities, empowering people to fix their own
          bikes, and increasing diversity in the repair industry.
        </>
      ),

      problemContent:
        "OCB was struggling to meet growing service demands. Many processes that should have been automated were consuming hours of coordinators' time each month—time that could have been spent running workshops and engaging directly with the community.",

      logoURL: "/images/projects/our-community-bikes/ocb-sticky-logo.svg",

      img1: {
        url: "/images/projects/our-community-bikes/fixing-bike.png",
        caption: "building bikes & community",
        polaroidImgClassName: "object-[50%_44%] scale-[1.52]",
      },

      img2: {
        url: "/images/projects/our-community-bikes/paper-timesheet.png",
        caption: "manual hour tracking :(",
      },
    },

    solution: {
      summary: (
        <p className="tablet:text-body-l-reg">
          We built a web app to{" "}
          <span className="tablet:text-body-l-bold">
            simplify volunteer hour tracking,
          </span>{" "}
          with the ability to easily edit and maintain the database over long
          periods of time.
        </p>
      ),

      contentList: [
        {
          description:
            "For volunteers, this digital logbook improved accuracy by automatically calculating their hours.",

          imgURL: "/images/projects/our-community-bikes/check-in-1.png",

          caption:
            "Volunteers can check-in and check-out of their shift easily, and the product will automatically keep track of hours volunteered.",
        },

        {
          description: (
            <>
              <p className="tablet:text-body-l-reg tablet:mb-[30px] mb-[12px] text-mobile-body-l-reg">
                For coordinators, the impact was much more dramatic;{" "}
                <span className="tablet:text-body-l-bold text-mobile-body-l-bold">
                  reducing a 4-hour manual data entry process into Google Sheets
                  to a single press of a button,
                </span>
              </p>

              <p className="tablet:text-heading-xs-reg text-mobile-heading-xs-reg">
                saving up to{" "}
                <span className="tablet:text-heading-s-bold text-mobile-heading-s-bold">
                  48 hours
                </span>{" "}
                each year.
              </p>
            </>
          ),

          imgURL: "/images/projects/our-community-bikes/shift-manage-1.png",

          caption:
            "Administrators can edit volunteer entries and data, and export CSV data files within a selected range.",
        },
      ],
    },

    testemonial: {
      quote:
        "[The work SFU Blueprint has done] is much appreciated and there is a lot of thanks that cannot really be simply put into words... Volunteers at OCB put in thousands of hours of work behind the scene to make everything happen. The tool that you have created for us will streamline our process to better support and facilitate all the volunteers at OCB. Time is a very valuable and finite resource for us at a small non-profit organization and it will allow us to manage it better and more efficiently.",

      name: "Cavan Hua",
      title: "volunteer coordinator at OCB",
      imgUrl: "/images/projects/our-community-bikes/ocb-logo.svg",
    },

    team: [...OurCommunityBikes].sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  },

  {
    /* Reel Youth */
    slug: "reel-youth",

    hero: {
      title: "reel youth",
      date: "AUG 2024 - CURRENT",

      partnerContent: (
        <>
          <a href=" https://reelyouth-demo.xyz/">Reel Youth</a>{" "}
          is a non-profit organization that empowers youth through filmmaking,
          producing over 120 films annually. Their programs are designed to
          empower young people by building confidence, advocacy & media skills.
        </>
      ),

      problemContent:
        "Reel Youth's website was outdated and difficult to navigate, reducing accessibility and user engagement. It did not effectively showcase the stories and voices at the core of its mission.",

      logoURL: "/images/projects/reel-youth/reel-youth-logo-sticky.svg",

      img1: {
        url: "/images/projects/reel-youth/reel-youth-polaroid-img1.png",
        caption: "youth empowerment!",
      },

      img2: {
        url: "/images/projects/reel-youth/reel-youth-polaroid-img2.png",
        caption: "outdated website :(",
      },
    },

    solution: {
      summary: (
        <p>
          We built a new website to better{" "}
          <span className="tablet:text-body-l-bold">
            showcase Reel Youth's activities and services,
          </span>{" "}
          with clear access to social channels, the project portfolio, media
          content, and donation pathways.
        </p>
      ),

      contentList: [
        {
          description:
            "Youth participants can easily explore past projects through visual content and detailed descriptions, helping them identify areas aligned with their interests.",

          imgURL: "/images/projects/reel-youth/reel-youth-gallery-page.png",

          caption:
            "The new gallery page with search and filtering functionality allows users to sort projects by program, theme, and location for easier navigation and discovery.",
        },

        {
          description:
            "For collaborators, the new website clearly showcases Reel Youth’s impact on communities both locally and internationally.",

          imgURL:
            "/images/projects/reel-youth/reel-youth-international-page.png",

          caption:
            "The new international page dynamically highlights global programs by country and features selected films, effectively demonstrating international reach and impact.",
        },
      ],
    },

    team: [...ReelYouth].sort((a, b) => a.name.localeCompare(b.name)),
  },

  {
    /* MOSAIC */
    slug: "mosaic",

    hero: {
      title: "mosaic AI chatbot",
      date: "APRIL 2024 – APRIL 2025",

      partnerContent: (
        <>
          <a
            href="https://mosaicbc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bp-blue underline decoration-bp-blue underline-offset-[2px]"
          >
            MOSAIC BC
          </a>{" "}
          is a non-profit in Vancouver that helps newcomers settle through
          programs, resources, and community support.
        </>
      ),

      problemContent:
        "MOSAIC BC's website contained a large volume of programs and information, making it difficult for newcomers to find what they needed—especially when navigating in a second language.",

      logoURL: "/images/projects/mosaic/mosaic-sticky.png",

      img1: {
        url: "/images/projects/mosaic/mosaic-newcomers.png",
        caption: "supporting newcomers",
        alt: "MOSAIC BC team supporting newcomers",
      },

      img2: {
        url: "/images/projects/mosaic/mosaic-services.png",
        caption: "providing services",
        alt: "MOSAIC BC staff providing services at a community event",
      },
    },

    solution: {
      summary: (
        <p className="tablet:text-body-l-reg">
          We built an{" "}
          <span className="tablet:text-body-l-bold">
            AI-powered chatbot
          </span>{" "}
          embedded directly into MOSAIC BC&apos;s website, allowing users to
          ask natural language questions and instantly find immigrant programs,
          events, and resources relevant to their needs.
        </p>
      ),

      contentList: [
        {
          description:
            "The chatbot uses a RAG (retrieval-augmented generation) pipeline with LangChain and OpenAI's GPT to surface accurate, up-to-date information from MOSAIC's existing content!",

          imgURL: "/images/projects/mosaic/mosaic-chatbot-ui.png",

          caption:
            "The chatbot interface lets users ask questions in plain language, returning relevant programs and events in seconds.",

          alt: "MOSAIC BC website with embedded AI chatbot interface",
        },

        {
          description: (
            <>
              <p className="tablet:text-body-l-reg tablet:mb-[30px] mb-[12px] text-mobile-body-l-reg">
                The chatbot lowers the barrier to accessing MOSAIC BC&apos;s
                services, particularly for newcomers unfamiliar with the
                site&apos;s structure or navigating in a second language.
              </p>

              <p className="tablet:text-body-l-reg text-mobile-body-l-reg">
                By surfacing relevant programs conversationally, it reduces the
                time and effort required for users to find what they need, and
                allows MOSAIC&apos;s staff to focus on direct community support
                rather than fielding repetitive information requests.
              </p>
            </>
          ),

          imgURL: "/images/projects/mosaic/mosaic-admin.png",

          caption:
            "Admins can manage and update the chatbot's knowledge base to keep program information current.",

          alt: "Admin dashboard for managing MOSAIC chatbot program data",
        },
      ],
    },

    team: [...Mosaic].sort((a, b) => a.name.localeCompare(b.name)),
  },
  
  {
    /* Blueprint Website Revamp 2026 */
    slug: "website-revamp-2026",

    hero: {
      title: "Blueprint Website Revamp 2026",
      date: "2026",

      partnerContent: (
        <>
          <span className="text-bp-blue">SFU Blueprint</span> is a student-run
          nonprofit building technology for social good. As our organization,
          projects, and community continued to grow, our website needed to grow
          with us.
        </>
      ),

      problemContent:
        "Our previous website could no longer efficiently and effectively grow as fast as we were growing. Inconsistent layouts, limited project storytelling, and an outdated visual experience made it harder for nonprofits, students, and sponsors to understand our work and find the information most relevant to them.",

      logoURL: "/images/projects/blueprint-website/bp-sticky.svg",
      logoAlt: "SFU Blueprint logo",

      img1: {
        url: "https://placehold.co/600x450",
        caption: "where we started",
        alt: "Placeholder for the previous SFU Blueprint website",
      },

      img2: {
        url: "/images/projects/blueprint-website/rethinking.png",
        caption: "rethinking the blueprint",
        alt: "The SFU Blueprint website redesign process",
      },
    },

    solution: {
      summary: (
        <p className="tablet:text-body-l-reg">
          We redesigned and rebuilt our website to create a{" "}
          <span className="tablet:text-body-l-bold">
            clearer, more engaging home for Blueprint,
          </span>{" "}
          bringing our projects, people, and mission together in an experience
          that better represents who we are today.
        </p>
      ),

      contentList: [
        {
          description: (
            <>
              <p className="tablet:text-body-l-reg tablet:mb-[30px] mb-[12px] text-mobile-body-l-reg">
                We reworked the experience around the people who use our website
                most: nonprofits exploring a partnership, students looking to
                join, and organizations interested in supporting our work.
              </p>

              <p className="tablet:text-body-l-reg text-mobile-body-l-reg">
                Clearer navigation, responsive layouts, and more intentional
                pathways help each audience understand what Blueprint does and
                where they fit into our community.
              </p>
            </>
          ),

          imgURL: "/images/projects/blueprint-website/picture1.png",

          caption:
            "The redesigned experience creates clearer pathways for nonprofits, students, sponsors, and anyone discovering Blueprint for the first time.",

          alt: "Redesigned SFU Blueprint website pages",
        },

        {
          description: (
            <>
              <p className="tablet:text-body-l-reg tablet:mb-[30px] mb-[12px] text-mobile-body-l-reg">
                Our projects are at the heart of Blueprint, so we gave them more
                room to tell their stories. The new project experience goes
                beyond simply showing what we built, highlighting the problem,
                solution, impact, and people behind each collaboration.
              </p>

              <p className="tablet:text-heading-xs-reg text-mobile-heading-xs-reg">
                In fact,{" "}
                <span className="tablet:text-heading-s-bold text-mobile-heading-s-bold">
                  you&apos;re looking at it right now.
                </span>
              </p>
            </>
          ),

          imgURL: "https://placehold.co/1200x700",

          caption:
            "The new case study experience brings together the story, solution, visuals, and team behind every Blueprint project.",

          alt: "The redesigned Blueprint project case study page",
        },

        {
          description: (
            <>
              <p className="tablet:text-body-l-reg tablet:mb-[30px] mb-[12px] text-mobile-body-l-reg">
                With the revamp being such a frontend-heavy project, our
                designers became the backbone of the process. From rethinking
                page layouts and interactions to building a more cohesive
                visual language, design shaped how the new Blueprint experience
                would look, feel, and move.
              </p>

              <p className="tablet:text-body-l-reg text-mobile-body-l-reg">
                Close collaboration between design and development helped turn
                those ideas into a responsive, interactive website while
                staying true to the experience envisioned from the start.
              </p>
            </>
          ),

          imgURL: "https://placehold.co/1200x700",

          caption:
            "Design was at the heart of the revamp, shaping the visual system, interactions, and experience that our developers brought to life.",

          alt: "The design process behind the SFU Blueprint website revamp",
        },
      ],
    },

    team: [...WebsiteRevamp2026].sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  },
];

export default CaseStudies;