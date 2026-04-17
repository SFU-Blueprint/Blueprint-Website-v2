import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/shared/Button";
import Filters from "../components/shared/Filters";
import MemberCard, { memberRoleType } from "../components/shared/MemberCard";

type TeamMember = {
  name: string;
  role: string;
  roleType: memberRoleType;
  photoUrl?: string;
  linkedinUrl?: string;
};

/** Polaroid photo placeholder — solid fill until real headshots are wired */
const POLAROID_PLACEHOLDER_PHOTO =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="100%" height="100%" fill="#686974"/></svg>'
  );

const FILTER_TABS: { label: string; roleType: memberRoleType }[] = [
  { label: "Executives", roleType: "exec" },
  { label: "Project Managers", roleType: "pm" },
  { label: "Designers", roleType: "designer" },
  { label: "Tech Leads", roleType: "techLead" },
  { label: "Developers", roleType: "dev" },
];

/** Placeholder roster — replace with CMS or API when available */
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "developer",
    roleType: "dev",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Casey Morgan",
    role: "designer",
    roleType: "designer",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Dana Singh",
    role: "project manager",
    roleType: "pm",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Elliot Park",
    role: "tech lead",
    roleType: "techLead",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Jordan Lee",
    role: "executive",
    roleType: "exec",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Morgan Blake",
    role: "developer",
    roleType: "dev",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Priya Nair",
    role: "designer",
    roleType: "designer",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
  {
    name: "Riley Chen",
    role: "project manager",
    roleType: "pm",
    photoUrl: POLAROID_PLACEHOLDER_PHOTO,
    linkedinUrl: "https://www.linkedin.com/company/sfublueprint/",
  },
];

const AboutPage = () => {
  const navigate = useNavigate();
  const [selectedRoles, setSelectedRoles] = useState<memberRoleType[]>([]);

  const toggleRole = (roleType: memberRoleType) => {
    setSelectedRoles((prev) =>
      prev.includes(roleType) ? prev.filter((r) => r !== roleType) : [...prev, roleType]
    );
  };

  const displayedMembers = useMemo(() => {
    const base =
      selectedRoles.length === 0
        ? TEAM_MEMBERS
        : TEAM_MEMBERS.filter((m) => selectedRoles.includes(m.roleType));
    return [...base].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
  }, [selectedRoles]);

  return (
    <PageContainer className="flex max-md:!px-0 max-md:overflow-x-hidden flex-col items-stretch bg-bp-lightest-grey pb-[100px] max-md:pb-[60px] xl:!px-[56px] 2xl:!px-[56px]">
      <section
        className="meet-the-team mx-auto w-full max-w-[1328px] max-md:max-w-none rounded-[20px] bg-bp-lighter-grey max-md:rounded-none max-md:bg-bp-blue max-md:px-6 max-md:pt-16 max-md:pb-20 sm:px-8 md:px-10 md:pt-20 md:pb-24 xl:px-14"
        aria-labelledby="meet-the-team-heading"
      >
        <h2
          id="meet-the-team-heading"
          className="mb-8 max-md:mb-6 max-md:text-left md:mb-10 md:text-center"
        >
          <span className="font-poppins text-mobile-heading-l-bold text-bp-white md:hidden">
            <span className="font-normal">our </span>
            <span className="font-bold">team</span>
          </span>
          <span className="hidden font-caveat font-normal text-bp-black text-mobile-heading-hand tablet:text-heading-hand desktop:text-[78px] desktop:leading-none desktop:tracking-normal md:inline">
            meet the team
          </span>
        </h2>

        <div
          className="mb-8 flex max-md:mb-6 max-md:justify-start max-md:gap-2 md:mb-10 flex-wrap flex-row justify-center gap-x-3 gap-y-3 md:gap-x-[14px]"
          role="toolbar"
          aria-label="Filter team by role"
        >
          {FILTER_TABS.map(({ label, roleType }) => {
            const selected = selectedRoles.includes(roleType);
            return (
              <div key={roleType} className="contents">
                <span className="max-md:contents md:hidden">
                  <Filters
                    title={label}
                    state={selected ? "filled" : "outlined"}
                    variant="dark"
                    className="max-md:hover:!border-bp-white max-md:hover:!bg-bp-white/15"
                    onClick={() => toggleRole(roleType)}
                  />
                </span>
                <span className="hidden md:contents">
                  <Filters
                    title={label}
                    variant="light"
                    state={selected ? "selected" : "default"}
                    onClick={() => toggleRole(roleType)}
                  />
                </span>
              </div>
            );
          })}
        </div>

        <div
          className="grid w-full max-md:grid-cols-2 max-md:gap-3 max-md:justify-items-stretch justify-items-center gap-6 md:gap-8 md:[grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]"
          role="list"
          aria-live="polite"
        >
          {displayedMembers.map((member) => (
            <div
              key={member.name}
              className="flex w-full max-w-[350px] justify-center max-md:max-w-none"
              role="listitem"
            >
              <MemberCard
                name={member.name}
                role={member.role}
                roleType={member.roleType}
                photoUrl={member.photoUrl}
                linkedinUrl={member.linkedinUrl}
                randomRotation
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex w-full justify-center max-md:mt-8 md:mt-12">
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate("/alumni")}
            className="w-full md:hidden"
          >
            ALUMNI
          </Button>
          <Button
            type="button"
            variant="tertiary"
            onClick={() => navigate("/alumni")}
            className="hidden w-full desktop:h-[60px] desktop:w-[200px] desktop:min-w-[200px] desktop:max-w-[200px] desktop:shrink-0 desktop:px-4 md:flex"
          >
            ALUMNI
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};

export default AboutPage;
