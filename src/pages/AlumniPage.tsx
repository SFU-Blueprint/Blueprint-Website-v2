import React, {useState} from "react";
import PageContainer from "../components/layout/PageContainer";
import Filters from "../components/shared/Filters";
import MemberCard, {memberRoleType} from "../components/shared/MemberCard";

const AlumniPage = () => {
  // Placeholder type meant to emualte how data may be stored
  type memberCardData = {
    name: string;
    role: string;
    roleType?: memberRoleType;
    photoUrl?: string;
    linkedinUrl?: string;
  }

  const roleTofilterMap: Record< memberRoleType, string> = {
    "designer": "designer",
    "pm":  "project managers",
    "dev": "developers",
    "exec": "executives" ,
    "techLead": "tech leads"
  }

  // Filter status represented as array stores filter name if filter is active.
  // Note: the empty set and universal set are equivalent states in that members from all role types are displayed.
  const [filterState, setFilterState] = useState<string[]>([]);

  // For MemberCard Components. If false, rotation is a set +5deg
  const enableRandomRotation: boolean = true;
  
  // Adds or removes filters from filterState based on existence in array
  const handleFilterClick = (title: string) => {
    filterState.includes(title) ? setFilterState(filterState.filter((val) => {return val !== title})) : setFilterState([...filterState, title]);
  }

  /**
   * Sorts members alphabetically and eliminates members with a name value that is longer than 14 chars.
   * @returns {memberCardData[]} Organized member data as object array
   */
  const getMemberData = (): memberCardData[] => {
    // Emulation of data storage
    const memberDataUnorganized: memberCardData[] = [
      {name: "Steve B", role: "Designer", roleType: "designer", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
      {name: "Chris T", role: "project manager", roleType: "pm", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
      {name: "Sarah J", role: "developer", roleType: "dev", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
      {name: "Langley L", role: "executive", roleType: "exec", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
      {name: "Taylor S", role: "tech lead", roleType: "techLead", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
      {name: "Osmosis J", role: "Designer", roleType: "designer", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
      {name: "Cailey Z", role: "project manager", roleType: "pm", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
      {name: "Amanda Y", role: "developer", roleType: "dev", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
      {name: "Elliott S", role: "executive", roleType: "exec", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
      {name: "LongNameJane D", role: "tech lead", roleType: "techLead", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
      //{name: "TEST_MEM_FOR_LONG_NAME_ERROR", role: "tech lead", roleType: "techLead", photoUrl: "https://placehold.co/153x127", linkedinUrl: "PLACEHOLDER-LINKEDIN"},
    ];
    // Sorts members alphabetically.
    memberDataUnorganized.sort((val1, val2) => {
      if (val1.name > val2.name){
        return 1;
      }
      else if (val1.name < val2.name) {
        return -1;
      }
      return 0;
    })

    return memberDataUnorganized.reduce((dataAccum, member)=> {
      const memName = member.name;
      if (memName.length <= 14) {
        member.name = memName.toLowerCase();
        return [...dataAccum, member];
      }
      else {
        console.error("Member with name prop '" + member.name+ "' is longer than 14 chars. Skipping card.");
        return dataAccum;
      }
    }, []);
  }
  
  const memberData: memberCardData[] = getMemberData();

  return (
  <PageContainer className="bg-blueprint-gray-lightest items-center flex-col flex">
    {/* Hero Section */}
    <section className="flex items-center flex-col tablet:mt-[39px] tablet:mb-[69px] mt-[31px] mb-[44px]">
      <h1 className="decoration-[#2E2E2E] font-poppins text-center mb-[30px] tablet:text-heading-m-reg text-heading-m-reg-mobile">
        thank you, sfu blueprint alumni!
      </h1>
      <p className="font-caveat  text-center max-w-[786px] tablet:decoration-blueprint-black tablet:mb-[81px] mb-[61px] tablet:text-heading-hand text-mobile-heading-hand decoration-black">
        The impact you've created, for our projects and our community, continues to define who we are as a team.
      </p>
      {/* Filter buttons */}
      <div className="flex flex-wrap flex-row desktop:gap-x-[14px] gap-[6px] justify-center max-[501px]:w-auto max-[885px]:w-[max(475px)]"> 
        
        { /* Maps filterState and filter titles to Filters components */
          (Object.values(roleTofilterMap)).map((title) => {
            return (
            <Filters 
            title={title} 
            variant="light"
            key={title} 
            state={filterState.includes(title) ? "selected" : "default"} 
            onClick={() => handleFilterClick(title)}/>);
        })}
        
      </div>
    </section>

    {/* Alumni */}
    <section className=
    {`grid gap-[10px] grid-cols-2 w-full self-center justify-items-center pb-[44px]
      min-[629.9px]:grid-cols-3
      tablet:gap-[20px] tablet:grid-cols-2 tablet:pb-[100px]
      min-[825px]:grid-cols-3 
      min-[1056px]:grid-cols-4 `}>
      {
        /*  
          Adds each member to the page according to current filter status using the MemberCard component.
          - Assumes that array is static
        */
        memberData.map((member: memberCardData, index)=>{
          if (filterState.includes(roleTofilterMap[member.roleType]) || filterState.length == 0) {
             return (
              <MemberCard 
                key={index}
                name={member.name} 
                role={member.role} 
                roleType={member.roleType} 
                photoUrl={member.photoUrl} 
                linkedinUrl={member.linkedinUrl} 
                randomRotation={enableRandomRotation}/>
            );
          }
          else{
            <></>
          }
        })
      }
    </section>
  </PageContainer>);
};

export default AlumniPage;