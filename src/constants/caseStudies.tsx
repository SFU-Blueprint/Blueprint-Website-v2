import { ReactNode } from "react";
import { MemberCardProps } from "../components/shared/MemberCard";
import { OurCommunityBikes } from "./Team/OurCommunityBikes";

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
      };
      img2: {
          url: string;
          caption: string;
          alt?: string;
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
        title: "Our Community Bikes",
        date: "Feb - Nov 2024",
        partnerContent: "Our Community Bikes (OCB) is a non-profit based in Vancouver, Canada dedicated to providing bikes to underserved communities, empowering people to fix their own bikes, and increasing diversity in the repair industry.",
        problemContent: "OCB was struggling to meet growing service demands. Many processes that should have been automated were consuming hours of coordinators' time each month—time that could have been spent running workshops and engaging directly with the community.",
        logoURL: "/images/projects/our-community-bikes/ocb-sticky-logo.svg",
        img1: {
          url: "/images/projects/our-community-bikes/fixing-bike.png",
          caption: "building bikes & community",
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
      team: OurCommunityBikes,
    },
];

export default CaseStudies
