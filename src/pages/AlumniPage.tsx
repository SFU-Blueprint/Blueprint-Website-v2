import React, { useState } from "react";

import PageContainer from "../components/layout/PageContainer";
import Filters from "../components/shared/Filters";
import MemberCard, {
  memberRoleType,
} from "../components/shared/MemberCard";

import {
  Alumni2023,
  Alumni2024,
  Alumni2025,
} from "../constants/Team/Alumni";

const AlumniPage = () => {
  const roleToFilterMap: Record<memberRoleType, string> = {
    designer: "designers",
    pm: "project managers",
    dev: "developers",
    exec: "executives",
    techLead: "tech leads",
  };

  const [filterState, setFilterState] = useState<string[]>([]);

  /*
   * Keeping this FALSE for now.
   *
   * CSS rotation can visually push a card outside its grid cell,
   * which can make correctly-spaced cards look like they overlap.
   */
  const enableRandomRotation = false;

  const handleFilterClick = (title: string) => {
    setFilterState((prev) =>
      prev.includes(title)
        ? prev.filter((filter) => filter !== title)
        : [...prev, title]
    );
  };

  /*
   * Combine all alumni and sort alphabetically.
   */
  const memberData = [
    ...Alumni2023,
    ...Alumni2024,
    ...Alumni2025,
  ].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <PageContainer className="flex flex-col items-center bg-bp-lightest-grey">
      {/* =========================================================
          HERO
          ========================================================= */}
      <section
        className="
          flex
          flex-col
          items-center

          pt-main-desktop-top
          max-md:pt-main-mobile-top

          mb-[44px]
          tablet:mb-[69px]
        "
      >
        <h1
          className="
            mb-[30px]
            text-center
            font-poppins
            text-heading-m-reg-mobile
            decoration-[#2E2E2E]

            tablet:text-heading-m-reg
          "
        >
          <span
            className="
              text-mobile-heading-m-bold
              tablet:text-heading-m-bold
            "
          >
            thank you
          </span>
          , sfu blueprint alumni!
        </h1>

        <p
          className="
            mb-[61px]
            max-w-[786px]

            text-center
            font-caveat
            text-mobile-heading-hand
            decoration-black

            tablet:mb-[81px]
            tablet:text-heading-hand
            tablet:decoration-bp-black
          "
        >
          The impact you've created, for our projects and our community,
          continues to define who we are as a team.
        </p>

        {/* =======================================================
            FILTERS
            ======================================================= */}
        <div
          className="
            flex
            flex-row
            flex-wrap
            justify-center
            gap-[6px]

            max-[501px]:w-auto
            max-[885px]:w-[max(475px)]

            desktop:gap-x-[14px]
          "
        >
          {Object.values(roleToFilterMap).map((title) => (
            <Filters
              key={title}
              title={title}
              variant="light"
              state={
                filterState.includes(title)
                  ? "selected"
                  : "default"
              }
              onClick={() => handleFilterClick(title)}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          ALUMNI GRID

          Mobile:  2 columns
          Tablet:  3 columns
          Desktop: 4 columns

          The grid controls spacing.
          The cards do NOT have margins.
          ========================================================= */}
      <section
        className="
          grid
          w-full
          max-w-[1128px]

          grid-cols-2
          gap-[10px]

          items-start
          justify-items-center

          pb-[44px]

          tablet:grid-cols-3
          tablet:gap-[20px]
          tablet:pb-[100px]

          desktop:grid-cols-4
        "
      >
        {memberData.map((member) => {
          const roleType =
            member.roleType as memberRoleType | undefined;

          const filterName = roleType
            ? roleToFilterMap[roleType]
            : undefined;

          const shouldDisplay =
            filterState.length === 0 ||
            (filterName !== undefined &&
              filterState.includes(filterName));

          if (!shouldDisplay) {
            return null;
          }

          return (
            <MemberCard
              key={`${member.title}-${member.linkedin}`}
              name={member.title}
              role={member.role ?? "Alumni"}
              roleType={roleType}
              photoUrl={member.img}
              linkedinUrl={member.linkedin || undefined}
              randomRotation={enableRandomRotation}
              layout="alumni"
            />
          );
        })}
      </section>
    </PageContainer>
  );
};

export default AlumniPage;