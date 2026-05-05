/*
    This file contains the data for the Projects section.
    EXAMPLE:
    {
        name: "Project Name", // Name of the project.
        status: "completed" | "current", // Project status for grouping (Current vs Completed).
        description: "Brief description of the project purpose.", // Short summary of what the project is about.
        tags: ["Tag1", "Tag2"], // Array of tags related to the project for categorization or search.
        image: "project_image.png", // Store the image in the /public folder and provide the relative path here.
        popupimage: "project_popup_image.png", // Store the image in the /public folder and provide the relative path here.
        nonProfitDescription: "Description of the non-profit organization involved.", // Detailed description of the non-profit organization this project is associated with.
        projectDescription: "Detailed description of the project, including objectives and technologies used.", // Full description of the project's scope, goals, and technology stack.
        page: "https://example.com/project-page" // URL to the project's dedicated page or external site.
    },
*/
import { Mosaic } from "./Team/Mosaic.ts";
import { Pedals } from "./Team/Pedals.ts";
import { Blueprint } from "./Team/Blueprint.ts";
import { ReelYouth } from "./Team/ReelYouth.ts";
import { OurCommunityBikes } from "./Team/OurCommunityBikes.ts";

export const Projects = [
  {
    name: "Mosaic",
    slug: "mosaic",
    status: "completed",
    description: "improving access to immigration resources with a chatbot and admin ",
    date: "November 2023 - Current",
    tags: ["Immigration", "AI / Bot"],
    image: "/images/projects/mosaic/mosaic-logo.svg",
    popupimage: "/images/projects/mosaic/mosaic-popup.png",
    nonProfitDescription:
      "Mosaic is one of Canada’s largest settlement and employment services organisations. Founded in 1976, Mosaic has since served 26,000 newcomers, has 1200 employer partnerships and a client satisfaction rate of 93%. Their mission is to enrich communities through services and advocacy, furthering the success and sense of belonging of newcomers and individuals from diverse backgrounds.",
    projectDescription:
      "Developing an AI chatbot that will help users find relevant programs and services. By offering personalised recommendations, facilitating registration, and communicating in multiple languages, the integration aims to improve the overall experience for MOSAIC's diverse audience, helping them successfully settle in Canada and access the services they need.",
    page: "https://mosaicbc.org/",
    team: Mosaic,
  },
  {
    name: "Pedals",
    slug: "pedals",
    status: "completed",
    description: "Empowering Communities Through Bicycles",
    date: "January 2024 - Current",
    tags: ["Admin", "Community"],
    image: "Pedals.png",
    popupimage: "pedals-popup.png",
    nonProfitDescription:
      "Our Community Bikes (transferred to PEDALS 6 years ago), has been offering bike repair workshops to help empower bike users to use their bikes more comfortably. They currently offer bike mechanic courses, host community bike clinics, and provide employment opportunities to people facing employment barriers. PEDALS regularly engages with around 3 dozen members of the community as volunteers weekly. ",
    projectDescription:
      "To streamline the tracking of volunteer hours and shift management, we are developing a responsive website for PEDALS. Accessible on both mobile and desktop devices, this site replaces the current manual paper log system. It allows volunteers to easily sign in and out of their shifts, enabling managers to maintain accurate records in real-time. This digital solution ensures PEDALS has consistent, up-to-date data available for grant applications and frees up time for PEDALS’ coordinators to focus on revenue-generating activities for the shop",
    page: "https://ourcommunitybikes.org/",
    team: Pedals,
  },
  {
    name: "Reel Youth",
    slug: "reel-youth",
    status: "current",
    description: "Supporting the creative expression of youth worldwide with a modernized website",
    date: "August 2024 - Current",
    tags: ["Website", "Community"],
    image: "/images/projects/reel-youth/reel-youth-logo.svg",
    popupimage: "/images/projects/reel-youth/reel-youth-popup.png",
    nonProfitDescription:
      "Reel Youth is a media empowerment NPO supporting youth to create and distribute films reflecting their vision for positive change. Reel Youth aims to build momentum for change, particularly in areas like conservation and community development",
    projectDescription:
      "To address the issue of information and accessibility to the public, the SFU Blueprint team will be developing a website for Reel Youth, helping them build a more diverse audience and a central place to distribute information among the community.",
    page: "https://reelyouth.ca",
    team: ReelYouth,
  },
  {
    name: "Our Community Bikes",
    slug: "our-community-bikes",
    status: "completed",
    description:
      "Reducing volunteer management time with a digital volunteer hour logbook",
    date: "Feb - Nov 2024",
    tags: ["Admin", "Community"],
    image: "/images/projects/our-community-bikes/ocb-logo.svg",
    popupimage: "/images/projects/our-community-bikes/check-in-1.png",
    nonProfitDescription:
      "Our Community Bikes is a Vancouver non-profit dedicated to providing bikes to underserved communities, empowering people to fix their own bikes, and increasing diversity in the repair industry.",
    projectDescription:
      "SFU Blueprint built a web app to simplify volunteer hour tracking, reduce manual data entry, and help coordinators manage volunteer records more efficiently.",
    page: "https://ourcommunitybikes.org/",
    team: OurCommunityBikes,
  },
  { // Missing final values for "slug", "status", "date", "nonProfitDesc", "projectDescription", "page", and "team" keys
    name: "Regional Animal Protection Society",
    slug: "raps",
    status: "",
    description:
      "Increasing organizational growth and coordination with a volunteer management system",
    date: "",
    tags: ["Web-app", "Animal Care"],
    image: "/images/projects/raps/raps-logo.svg",
    popupimage: "/images/projects/raps/raps-popup.png",
    nonProfitDescription:
      "",
    projectDescription:
      "",
    page: "",
    team: [],
  },
  {
    name: "Blueprint Website",
    slug: "blueprint-website",
    description: "Taking SFU Blueprint LIVE",
    date: "September 2023 - December 2023",
    tags: ["Website", "Innovation"],
    image: "logo_icon_blue.svg",
    popupimage: "blueprint-popup.svg",
    nonProfitDescription:
      "The primary purpose of our website is to provide a platform to display the types of services and opportunities that we offer for both NPOs and students.  We aim to address the main questions that students have about Blueprint, whilst also conveying key messages about our culture, values and the essence of why we do what we do at SFU Blueprint.",
    projectDescription:
      "To address the issue of accessibility and information dissemination, the SFU Blueprint team opted to develop a website utilizing React, Tailwind CSS, and Vercel. This strategic choice was made to ensure a responsive website that effectively communicates information about our projects to a diverse audience, including experienced individuals, students, and older users within the nonprofit community.",
    team: Blueprint,
  },
  
];
