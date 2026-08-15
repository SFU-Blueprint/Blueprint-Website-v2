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

  const enableRandomRotation = true;

  const handleFilterClick = (title: string) => {
    setFilterState((prev) =>
      prev.includes(title)
        ? prev.filter((filter) => filter !== title)
        : [...prev, title]
    );
  };

  const memberData = [
    ...Alumni2023,
    ...Alumni2024,
    ...Alumni2025,
  ].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <PageContainer className="bg-bp-lightest-grey items-center flex-col flex">
      {/* Hero Section */}
      <section className="flex items-center flex-col pt-main-desktop-top max-md:pt-main-mobile-top tablet:mb-[69px] mb-[44px]">
        <h1 className="decoration-[#2E2E2E] font-poppins text-center mb-[30px] tablet:text-heading-m-reg text-heading-m-reg-mobile">
          <span className="tablet:text-heading-m-bold text-mobile-heading-m-bold">
            thank you
          </span>
          , sfu blueprint alumni!
        </h1>

        <p className="font-caveat text-center max-w-[786px] tablet:decoration-bp-black tablet:mb-[81px] mb-[61px] tablet:text-heading-hand text-mobile-heading-hand decoration-black">
          The impact you've created, for our projects and our community,
          continues to define who we are as a team.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap flex-row desktop:gap-x-[14px] gap-[6px] justify-center max-[501px]:w-auto max-[885px]:w-[max(475px)]">
          {Object.values(roleToFilterMap).map((title) => (
            <Filters
              title={title}
              variant="light"
              key={title}
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

      {/* Alumni */}
      <section
        className={`grid gap-[10px] grid-cols-2 w-full max-w-[1128px] self-center justify-items-center pb-[44px]
          min-[629.9px]:grid-cols-3
          tablet:gap-[20px] tablet:grid-cols-2 tablet:pb-[100px]
          min-[825px]:grid-cols-3
          min-[1056px]:grid-cols-4`}
      >
        {memberData.map((member) => {
          const roleType = member.roleType as memberRoleType | undefined;

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