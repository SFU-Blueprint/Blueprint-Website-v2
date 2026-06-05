import { ReactElement, ReactNode } from "react";
import { MemberCardProps } from "../components/shared/MemberCard";
import { OurCommunityBikes } from "./Team/OurCommunityBikes";

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
       * when defined overides the default image pile layout in caseStudyLayout.tsx. Does not overide the overall layout of the hero section.
       * @param logoUrl - Url to image
       * @param img1PolaroidComponent - A PolaroidPhoto component
       * @param img2PolaroidComponent - A PolaroidPhoto component
       * @param logoAlt - Optional argument, an alt tag for the logo
       * @see CaseStudyLayout.tsx
       * @returns {ReactElement}
       * 
       */
      imgPileFormat?: (logoUrl: string, img1PolaroidComponent: ReactNode, img2PolaroidComponent, logoAlt?: string) => ReactElement;
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
];

export default CaseStudies
