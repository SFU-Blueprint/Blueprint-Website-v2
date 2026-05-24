import { ReactNode } from "react";
import { MemberCardProps } from "../components/shared/MemberCard";
import { OurCommunityBikes } from "./Team/OurCommunityBikes";
import { Mosaic } from "./Team/Mosaic";

/**
 * Format that describes valid CaseStudies. Used locally and in CaseStudyLayout.tsx as a basis for its props.
 */
export type CaseStudyContent = {
    slug: string;
    hero: {
      title: string;
      date: string;
      partnerContent: ReactNode;
      problemContent: ReactNode;
      logoURL: string;
      img1: {
          url: string;
          caption: string;
          alt?: string;
          polaroidImgClassName?: string;
      };
      img2: {
          url: string;
          caption: string;
          alt?: string;
          polaroidImgClassName?: string;
      };
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
    };
    team: MemberCardProps[];
}

const CaseStudies: CaseStudyContent[] = [
    { /* Our Community Bikes */
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
            is a non-profit based in Vancouver, Canada dedicated to providing bikes to underserved communities,
            empowering people to fix their own bikes, and increasing diversity in the repair industry.
          </>
        ),
        problemContent: "OCB was struggling to meet growing service demands. Many processes that should have been automated were consuming hours of coordinators' time each month—time that could have been spent running workshops and engaging directly with the community.",
        logoURL: "/images/projects/our-community-bikes/ocb-sticky-logo.svg",
        img1: {
          url: "/images/projects/our-community-bikes/fixing-bike.png",
          caption: "building bikes & community",
          /** Zoom past loose framing so the opening matches the density of the timesheet polaroid */
          polaroidImgClassName: "object-[50%_44%] scale-[1.52]",
        },
        img2: {
          url: "/images/projects/our-community-bikes/paper-timesheet.png",
          caption: "manual hour tracking :(",
        },
      },
      solution: {
        summary: <p className="tablet:text-body-l-reg">We built a web app to <span className="tablet:text-body-l-bold">simplify volunteer hour tracking,</span> with the ability to easily edit and maintain the database over long periods of time.</p>,
        contentList: [
          {
            description: "For volunteers, this digital logbook improved accuracy by automatically calculating their hours.",
            imgURL: "/images/projects/our-community-bikes/check-in-1.png",
            caption: "Volunteers can check-in and check-out of their shift easily, and the product will automatically keep track of hours volunteered.",
          },
          {
            description: 
            <>
              <p className="tablet:text-body-l-reg tablet:mb-[30px] mb-[12px] text-mobile-body-l-reg">For coordinators, the impact was much more dramatic; <span className="tablet:text-body-l-bold text-mobile-body-l-bold">reducing a 4-hour manual data entry process into Google Sheets to a single press of a button,</span></p>
              <p className="tablet:text-heading-xs-reg text-mobile-heading-xs-reg">saving up to <span className="tablet:text-heading-s-bold text-mobile-heading-s-bold">48 hours</span> each year. </p>
            </>,
            imgURL: "/images/projects/our-community-bikes/shift-manage-1.png",
            caption: "Administrators can edit volunteer entries and data, and export CSV data files within a selected range. "
          }
        ],
      },
      testemonial: {
        quote: "[The work SFU Blueprint has done] is much appreciated and there is a lot of thanks that cannot really be simply put into words... Volunteers at OCB put in thousands of hours of work behind the scene to make everything happen. The tool that you have created for us will streamline our process to better support and facilitate all the volunteers at OCB. Time is a very valuable and finite resource for us at a small non-profit organization and it will allow us to manage it better and more efficiently.",
        name: "Cavan Hua",
        title: "volunteer coordinator at OCB",
      },
      team: [...OurCommunityBikes].sort((a, b) => a.name.localeCompare(b.name)),
    },
    {
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
            is a non-profit in Vancouver that helps newcomers settle through programs, resources, and community
            support.
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
            We built an <span className="tablet:text-body-l-bold">AI-powered chatbot</span> embedded directly into
            MOSAIC BC&apos;s website, allowing users to ask natural language questions and instantly find immigrant
            programs, events, and resources relevant to their needs.
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
                  The chatbot lowers the barrier to accessing MOSAIC BC&apos;s services, particularly for newcomers
                  unfamiliar with the site&apos;s structure or navigating in a second language.
                </p>
                <p className="tablet:text-body-l-reg text-mobile-body-l-reg">
                  By surfacing relevant programs conversationally, it reduces the time and effort required for users to
                  find what they need, and allows MOSAIC&apos;s staff to focus on direct community support rather than
                  fielding repetitive information requests.
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
];

export default CaseStudies
