import React, { useMemo, useState } from "react";

import linkedinIcon from "../../assets/icons/linkedin2.png";
import { ReactComponent as ArrowUpRightIcon } from "../../assets/icons/ArrowUpRight.svg";

export type memberRoleType =
  | "designer"
  | "pm"
  | "dev"
  | "exec"
  | "techLead";

export type memberCardLayoutType =
  | "default"
  | "alumni";

export type MemberCardProps = {
  name: string;
  role: string;
  roleType?: memberRoleType;
  photoUrl?: string;
  linkedinUrl?: string;
  randomRotation?: boolean;
  layout?: memberCardLayoutType;
};

const ROLE_HOVER_BG_CLASS: Record<
  NonNullable<MemberCardProps["roleType"]>,
  string
> = {
  designer: "bg-bp-accent-purple",
  pm: "bg-bp-orange",
  dev: "bg-bp-accent-light-blue",
  exec: "bg-bp-accent-very-light-blue",
  techLead: "bg-bp-accent-medium-blue",
};

const BORDER_RADIUS = 10;

export default function MemberCard({
  name,
  role,
  roleType = "designer",
  photoUrl,
  linkedinUrl,
  randomRotation = false,
  layout = "default",
}: MemberCardProps) {
  const [isHovered, setIsHovered] =
    useState(false);

  const isAlumniLayout =
    layout === "alumni";

  const hoverBgClass =
    ROLE_HOVER_BG_CLASS[roleType];

  const showHoverStyle = Boolean(
    isHovered && linkedinUrl
  );

  /*
   * ============================================================
   * DISPLAY NAME
   * ============================================================
   *
   * Keep normal names intact.
   *
   * Only abbreviate unusually long names.
   */
  const getDisplayName = (
    fullName: string
  ) => {
    const trimmedName =
      fullName.trim();

    if (trimmedName.length <= 20) {
      return trimmedName;
    }

    const parts =
      trimmedName.split(/\s+/);

    if (parts.length <= 1) {
      return trimmedName;
    }

    return `${parts[0]} ${parts
      .slice(1)
      .map(
        (part) =>
          `${part
            .charAt(0)
            .toUpperCase()}.`
      )
      .join(" ")}`;
  };

  const displayName =
    getDisplayName(name);

  /*
   * ============================================================
   * ROTATION
   * ============================================================
   */

  const rotationDegree =
    useMemo(() => {
      if (!randomRotation) {
        return "0";
      }

      const magnitude =
        Math.floor(
          Math.random() * 4
        ) + 2;

      const direction =
        Math.random() < 0.5
          ? -1
          : 1;

      return String(
        magnitude * direction
      );
    }, [randomRotation]);

  /*
   * ============================================================
   * CLICK
   * ============================================================
   */

  const handleClick = () => {
    if (!linkedinUrl) {
      return;
    }

    window.open(
      linkedinUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /*
   * ============================================================
   * PHOTO SIZE
   * ============================================================
   *
   * Three distinct layouts:
   *
   * Mobile
   * Tablet
   * Desktop
   */

  const photoSizeClassName =
    isAlumniLayout
      ? `
          w-full
          h-[136px]

          tablet:h-[190px]

          desktop:h-[192px]

          shrink-0
          overflow-hidden
          rounded-md
          bg-bp-lightest-grey
        `
      : `
          w-full
          h-[127px]

          tablet:h-[192px]

          desktop:h-[192px]

          shrink-0
          overflow-hidden
          rounded-md
          bg-bp-lightest-grey
        `;

  /*
   * ============================================================
   * CARD SIZE
   * ============================================================
   *
   * ALUMNI
   *
   * Mobile:
   * fills grid cell, capped at 230px
   *
   * Tablet:
   * fixed 220px
   *
   * Desktop:
   * fixed 267px
   *
   * The desktop grid is max 1128px:
   *
   * 267 × 4 = 1068
   * 20 × 3  =   60
   * ----------------
   *           1128
   */

  const sizeClassName =
    isAlumniLayout
      ? `
          box-border

          w-[calc(100%-5px)]
          max-w-[230px]
          h-[250px]

          pt-[10px]
          pr-[9px]
          pb-[10px]
          pl-[8px]

          tablet:w-[220px]
          tablet:max-w-[220px]
          tablet:h-[315px]

          tablet:pt-[12px]
          tablet:pr-[10px]
          tablet:pb-[16px]
          tablet:pl-[12px]

          desktop:w-[267px]
          desktop:max-w-[267px]
          desktop:h-[330px]

          desktop:pt-[14px]
          desktop:pr-[13px]
          desktop:pb-[18px]
          desktop:pl-[13px]
        `
      : `
          box-border

          w-full
          max-w-[230px]
          h-[228px]

          pt-[10px]
          pr-[9px]
          pb-[10px]
          pl-[8px]

          tablet:w-[224px]
          tablet:max-w-[224px]
          tablet:h-[308px]

          tablet:pt-[12px]
          tablet:pr-[10px]
          tablet:pb-[26px]
          tablet:pl-[12px]

          desktop:w-[299px]
          desktop:max-w-[299px]
          desktop:h-[332px]

          desktop:pt-[14px]
          desktop:pr-[13px]
          desktop:pb-[30px]
          desktop:pl-[13px]
        `;

  /*
   * ============================================================
   * CONTENT
   * ============================================================
   */

  const cardContent = (
    <div
      className="
        flex
        h-full
        w-full
        min-w-0
        flex-col
        items-start
      "
    >
      {/* PHOTO */}
      <div
        className={
          photoSizeClassName
        }
      >
        {photoUrl ? (
          <img
            src={photoUrl}
            alt=""
            className="
              block
              h-full
              w-full
              object-cover
            "
          />
        ) : (
          <div
            className="
              h-full
              w-full
              bg-bp-grey
            "
            aria-hidden
          />
        )}
      </div>

      {/* =======================================================
          LOWER CONTENT
          ======================================================= */}
      <div
        className={`
          flex
          w-full
          min-w-0
          flex-1
          flex-col
          items-start

          ${
            showHoverStyle
              ? "desktop:justify-center"
              : "desktop:justify-start"
          }
        `}
      >
        {/* ROLE */}
        <span
          className={`
            block
            w-full
            min-w-0

            font-poppins
            font-medium
            uppercase
            text-black

            mt-[8px]

            text-[10px]
            leading-[13px]
            min-h-[26px]

            tablet:mt-[12px]
            tablet:text-[13px]
            tablet:leading-[17px]
            tablet:min-h-[34px]

            desktop:mt-[14px]
            desktop:text-[14px]
            desktop:leading-[18px]
            desktop:min-h-[36px]

            whitespace-normal
            break-words
            [overflow-wrap:anywhere]

            ${
              showHoverStyle
                ? "desktop:hidden"
                : ""
            }
          `}
        >
          {role}
        </span>

        {/* NAME */}
        <span
          className={`
            block
            w-full
            min-w-0
            max-w-full

            font-poppins
            font-medium
            text-black

            text-[18px]
            leading-[120%]
            tracking-[-0.36px]

            tablet:text-[22px]
            tablet:leading-[120%]
            tablet:tracking-[-0.44px]

            desktop:text-[24px]
            desktop:leading-[120%]
            desktop:tracking-[-0.48px]

            whitespace-normal
            break-words
            [overflow-wrap:anywhere]

            ${
              showHoverStyle
                ? "desktop:hidden"
                : ""
            }
          `}
        >
          {displayName.toLowerCase()}
        </span>

        {/* =====================================================
            LINKEDIN
            ===================================================== */}
        {linkedinUrl && (
          <span
            className={`
              flex
              min-w-0
              items-center
              gap-[6px]

              font-poppins
              font-normal
              text-black

              mt-auto
              pt-[4px]

              ${
                showHoverStyle
                  ? `
                      desktop:flex
                      desktop:mt-6
                      desktop:pt-0
                    `
                  : "desktop:hidden"
              }
            `}
          >
            <img
              src={linkedinIcon}
              alt=""
              aria-hidden
              className={`
                h-[17px]
                w-[17px]
                shrink-0

                tablet:h-[22px]
                tablet:w-[22px]

                ${
                  showHoverStyle
                    ? `
                        desktop:h-[40px]
                        desktop:w-[40px]
                      `
                    : ""
                }
              `}
            />

            <span
              className={`
                hidden

                text-[24px]
                leading-[130%]
                tracking-[-0.48px]

                ${
                  showHoverStyle
                    ? "desktop:inline"
                    : ""
                }
              `}
            >
              linkedin
            </span>

            <ArrowUpRightIcon
              className={`
                hidden
                h-6
                w-6
                shrink-0
                [&_path]:fill-current

                ${
                  showHoverStyle
                    ? "desktop:block"
                    : ""
                }
              `}
              aria-hidden
            />
          </span>
        )}
      </div>
    </div>
  );

  /*
   * ============================================================
   * CARD WRAPPER
   * ============================================================
   */

  const baseClassName = `
    flex
    flex-col
    items-start

    shrink-0

    rounded-[10px]
    font-poppins

    cursor-pointer

    transition-transform
    duration-200
    ease-out
  `;

  const wrapperStyle:
    React.CSSProperties = {
      borderRadius:
        BORDER_RADIUS,
    };

  const rotationStyle = {
    "--customRot":
      `${rotationDegree}deg`,
  } as React.CSSProperties;

  const wrapperBgClass =
    isHovered
      ? hoverBgClass
      : "bg-white";

  /*
   * Disabled while we verify the grid.
   *
   * Once everything is stable, this can be restored to:
   *
   * const rotationClass =
   *   isHovered && randomRotation
   *     ? "desktop:rotate-[--customRot]"
   *     : "";
   */
  const rotationClass = "";

  const combinedClassName = `
    ${baseClassName}
    ${sizeClassName}
    ${wrapperBgClass}
    ${rotationClass}
  `;

  /*
   * ============================================================
   * CLICKABLE
   * ============================================================
   */

  if (linkedinUrl) {
    return (
      <div
        role="button"
        tabIndex={0}
        className={
          combinedClassName
        }
        style={{
          ...wrapperStyle,
          ...rotationStyle,
        }}
        onMouseEnter={() =>
          setIsHovered(true)
        }
        onMouseLeave={() =>
          setIsHovered(false)
        }
        onClick={handleClick}
        onKeyDown={(e) => {
          if (
            e.key === "Enter" ||
            e.key === " "
          ) {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-label={`${name}, ${role}. Open LinkedIn profile.`}
      >
        {cardContent}
      </div>
    );
  }

  /*
   * ============================================================
   * NON-CLICKABLE
   * ============================================================
   */

  return (
    <div
      className={
        combinedClassName
      }
      style={{
        ...wrapperStyle,
        ...rotationStyle,
      }}
      onMouseEnter={() =>
        setIsHovered(true)
      }
      onMouseLeave={() =>
        setIsHovered(false)
      }
      aria-label={`${name}, ${role}`}
    >
      {cardContent}
    </div>
  );
}