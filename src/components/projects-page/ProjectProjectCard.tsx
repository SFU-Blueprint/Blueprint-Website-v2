import React from "react";
import { Link } from "react-router-dom";

import ProjectCardCover from "../shared/ProjectCardCover";
import ProjectCardMeta from "../shared/ProjectCardMeta";

export type ProjectCardProps = {
  logo_url: string;
  logo_url_alt?: string;

  card_cover_url: string;
  card_cover_alt?: string;

  description: string;
  client_name: string;
  service: string;
  sector: string;
  href: string;

  /**
   * Optional cover customizations.
   *
   * Leave undefined for normal project cards.
   */
  coverBg?: string;

  /**
   * Scale the cover image.
   */
  coverScale?: number;

  /**
   * Optional MacBook mockup rendering.
   */
  coverMockup?: "macbook";

  /**
   * Controls whether the image fills the panel
   * or remains fully visible.
   */
  coverFit?: "cover" | "contain";

  /**
   * Moves the cover image vertically without
   * changing its size.
   *
   * Positive = down
   * Negative = up
   */
  coverOffsetY?: number;
};

const ProjectCard = ({
  logo_url = "https://placehold.co/76x76",
  logo_url_alt = "placeholder_alt",

  card_cover_url = "https://placehold.co/517x354",
  card_cover_alt = "placeholder_alt",

  description =
    "reducing volunteer management time by 4 hours per month with a digital volunteer hour logbook",

  client_name = "Our Community Bikes",
  service = "Web-app",
  sector = "Web-app",

  href,

  coverBg = "#F3F3F3",
  coverScale,
  coverMockup,
  coverFit,
  coverOffsetY,
}: ProjectCardProps) => {
  const cardClassName = `
    w-full
    px-9
    pt-9
    pb-12
    bg-white
    rounded-[5px]
    inline-flex
    flex-col
    justify-start
    items-start
    gap-2.5
    overflow-hidden

    md:w-full
    md:max-w-[865px]
    md:min-w-[460px]
    md:px-9
    md:pt-9
    md:pb-12

    max-[767px]:min-w-[276px]
    max-[767px]:max-w-[623px]

    [@media(hover:hover)]:hover:ring-1
    [@media(hover:hover)]:hover:ring-bp-grey
    [@media(hover:hover)]:hover:bg-bp-lightest-grey

    group
    cursor-pointer
  `;

  return (
    <Link
      to={href}
      className="relative z-10 block w-full text-inherit no-underline"
    >
      <div className={cardClassName}>
        <div className="flex self-stretch flex-col items-start justify-start gap-4 md:gap-5">
          {/* ====================================================== */}
          {/* PROJECT COVER                                          */}
          {/* ====================================================== */}

          <ProjectCardCover
            src={card_cover_url}
            alt={card_cover_alt}
            backgroundColor={coverBg}
            scale={coverScale}
            mockup={coverMockup}
            fit={coverFit}
            offsetY={coverOffsetY}
          />

          {/* ====================================================== */}
          {/* DESCRIPTION + LOGO                                     */}
          {/* ====================================================== */}

          <div
            className="
              inline-flex
              self-stretch
              items-start
              justify-start
              gap-3
              md:gap-[40px]
            "
          >
            <div
              className="
                max-w-96
                flex-1
                justify-start
                font-['Poppins']
                text-lg
                font-normal
                leading-6
                text-black

                md:max-w-none
                md:text-[18px]/[140%]
              "
            >
              {description}
            </div>

            <img
              className="
                h-[76px]
                w-[76px]
                max-[767px]:hidden
                md:block
              "
              src={logo_url}
              alt={logo_url_alt}
            />
          </div>

          {/* ====================================================== */}
          {/* DIVIDER                                                */}
          {/* ====================================================== */}

          <div className="h-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-zinc-300" />

          {/* ====================================================== */}
          {/* PROJECT METADATA                                       */}
          {/* ====================================================== */}

          <ProjectCardMeta
            client={client_name}
            service={service}
            sector={sector}
            className="md:gap-9"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;