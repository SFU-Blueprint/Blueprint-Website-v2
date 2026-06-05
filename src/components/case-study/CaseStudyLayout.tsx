import React, {ReactElement, ReactNode} from "react";

import PageContainer from "../layout/PageContainer";
import MemberCard from "../shared/MemberCard";
import { CaseStudyContent } from "../../constants/caseStudies";
import PolaroidPhoto from "../shared/PolaroidPhoto";

export type CaseStudyLayoutProps = CaseStudyContent & {
    backNav: ReactElement;
}

/**
 * Layout for reusable case study content. Data is sourced from caseStudies.tsx in constants
 * @param {CaseStudyLayoutProps} case - Parameter that contains all information for a case study
 * @see CaseStudyLayoutProps
 * @see CaseStudyContent
 * @returns {ReactElement}
 */
const CaseStudyLayout = ({backNav, hero, solution, testemonial, team}:CaseStudyLayoutProps) => {
  const enableRandomRotation = true;
  const polaroid1ClassName = hero.img1.polaroidComponentClassName ? hero.img1.polaroidComponentClassName : "z-10 desktop:translate-x-0 desktop:translate-y-0 tablet:rotate-[9deg] tablet:translate-x-[30px] rotate-[-4deg] translate-x-[-60px]";
  const polaroid2ClassName = hero.img2.polaroidComponentClassName ? hero.img2.polaroidComponentClassName : "desktop:mt-[-160px] desktop:translate-x-[-100px] desktop:translate-y-0 tablet:rotate-[-7deg] tablet:translate-x-[-30px] tablet:translate-y-[50px] tablet:mt-0 mt-[-40px] rotate-[7deg] translate-x-[50px]"

  const heroCategory = (title: string, body: ReactNode): ReactElement => {
    return(
        <div className="font-poppins desktop:w-auto tablet:w-[47%]">
            <h2 className="tablet:text-heading-xs-reg tablet:mb-[14px] text-mobile-heading-xs-reg mb-[12px]">{title}</h2>
            <div className="tablet:text-body-m-reg text-mobile-body-m-reg">{body}</div>
        </div>
    );
  }

  // Determines whether to use custom image pile format or default one
  const heroImagePile: ReactElement = 
  hero.imgPileFormat ? hero.imgPileFormat(
    hero.logoURL, 
    <PolaroidPhoto imageSrc={hero.img1.url} caption={hero.img1.caption} alt={hero.img1.alt} imageCropClassName={hero.img1.polaroidImgClassName} className={polaroid1ClassName}/>, 
    <PolaroidPhoto imageSrc={hero.img2.url} caption={hero.img2.caption} alt={hero.img2.alt} imageCropClassName={hero.img2.polaroidImgClassName} className={polaroid2ClassName}/>
  ) : (
    <div className="flex desktop:flex-row desktop:ml-auto desktop:mb-0 items-center tablet:mb-[70px] flex-col mb-[20px] desktop:self-start">
        <img className="z-20 
                        desktop:translate-x-[30px] desktop:translate-y-[-90px] desktop:m-[-10px] desktop:mt-0 desktop:self-auto
                        tablet:max-w-[229px] tablet:max-h-[201px] tablet:mt-[-170px] tablet:translate-x-[30px] tablet:translate-y-[170px] tablet:rotate-0 tablet:ml-0
                        max-w-[197px] max-h-[184px] rotate-[13deg] translate-x-[100px]" 
                        src={hero.logoURL}/>
        <div className="flex desktop:flex-col desktop:translate-y-[30px] tablet:flex-row tablet:mt-0 mt-[-150px] flex-col">
            <PolaroidPhoto imageSrc={hero.img1.url} caption={hero.img1.caption} alt={hero.img1.alt} imageCropClassName={hero.img1.polaroidImgClassName} className={polaroid1ClassName}/>
            <PolaroidPhoto imageSrc={hero.img2.url} caption={hero.img2.caption} alt={hero.img2.alt} imageCropClassName={hero.img2.polaroidImgClassName} className={polaroid2ClassName}/>
        </div>
    </div>
  );

  const bpRectangle = ():ReactElement => {
    return (
        <span className="bg-[#0146BE] tablet:w-[18px] tablet:h-[18px] tablet:translate-y-[3px] inline-block w-[16px] h-[15px] rounded-[1px]"></span>
    );
  }

  const testemonialContent: ReactElement = (
    testemonial ? (
        <section className="bg-white std-max decoration-blueprint-black text-center tablet:px-20 tablet:py-[3.75rem] rounded-[10px] px-6 py-[42px]">
            <p className="font-caveat tablet:text-heading-hand tablet:mb-[35px] mb-6 text-mobile-heading-hand">{testemonial.quote}</p>
            <div className="font-poppins tablet:text-body-s-reg text-mobile-body-s-reg">
                <p>{testemonial.name.toUpperCase()}</p>
                <p>{testemonial.title.toUpperCase()}</p>
            </div>
        </section>
        ) : (
            <></>
        )
    );

  return (
    <>
        { /* Hero Section */}
        <PageContainer className="flex flex-col gap-[90px] overflow-hidden decoration-black z-10
                                  tablet:gap-[111px] tablet:bg-[#e8e8e8] tablet:pb-28
                                  desktop:gap-[6.75rem] desktop:pb-[9.25rem]">
            {/* Container */}
            <div className="flex std-max desktop:flex-row flex-col desktop:mt-[7px]">
                {/* Text Content */}
                <div className="desktop:max-w-[560px] desktop:mb-0 tablet:mb-[60px] mb-[64px]">
                    {/* Back link */}
                    {backNav}

                    {/* Content */}
                    <div className="tablet:mb-[3.75rem] mb-9 font-poppins">
                        <h1 className="tablet:text-heading-m-reg mb-3 text-mobile-heading-m-reg">{hero.title}</h1>
                        <p className="text-body-s-reg ">{hero.date}</p>
                    </div>
                    <div className="flex desktop:flex-col desktop:gap-[37px] tablet:gap-[6%] tablet:flex-row flex-col gap-10">
                        {heroCategory("our partner", hero.partnerContent)}
                        {heroCategory("the problem", hero.problemContent)}
                    </div>
                </div>

                { /* Image content */}
                {heroImagePile}
            </div>
   
        </PageContainer>
        <PageContainer className="flex flex-col gap-[90px] tablet:gap-[6.75rem]
                                  tablet:bg-[url('/images/individual-projects/crosspoint.svg')] bg-no-repeat
                                  bg-[calc(50%-125px)_-437px] max-[629.9px]:pt-[98px]
                                  max-[1024px]:pb-28">
            {/* Solution */}
            <section className="decoration-blueprint-black std-max tablet:max-w-[728px] tablet:gap-24 flex flex-col self-center font-poppins gap-[4.5rem]">

                {/* Header section */}
                <div className="bg-white flex flex-col text-center tablet:mt-[11px] tablet:pt-[48px] tablet:pb-[90px] tablet:gap-[24px] tablet:px-[60px] rounded-[10px] gap-[12px] pt-[36px] pb-[56px] px-[24px]">
                    <h2 className="flex items-center justify-center w-full tablet:text-heading-s-reg tablet:h-[93px] gap-[13px] text-mobile-heading-s-reg">{bpRectangle()} our solution</h2>
                    <div className="tablet:text-body-l-reg text-mobile-body-l-reg">
                        {solution.summary}
                    </div>
                </div>

                {/* Maps content to formatted sections */}
                {solution.contentList.map((item, index) => {
                    return(
                        <div className="flex flex-col items-center w-[100%] decoration-blueprint-black" key={index}>
                            <div className="flex flex-col justify-center text-center tablet:text-body-l-reg tablet:mb-12 tablet:max-w-[656px] text-mobile-body-l-reg mb-9">
                                {item.description}
                            </div>
                            <img className="w-[100%] tablet:mb-[30px] mb-[18px]" src={item.imgURL} alt={item.alt} />
                            <div className="flex flex-col justify-center text-center tablet:text-body-m-reg tablet:max-w-[530px] text-mobile-body-m-reg">
                                {item.caption}
                            </div>
                        </div>
                    )
                })}
            </section>

            {/* Testimonial */}
            {testemonialContent}

            {/* Team */}
            <section>
                <h2 className="decoration-black std-max font-poppins text-center tablet:text-heading-m-reg tablet:mb-[3.75rem] mb-9 text-mobile-heading-m-reg" >the team</h2>

                {/* MemberCard Layout - Code duped from alumni page */}
                <div className=
                    {`grid gap-[10px] grid-cols-2 w-full self-center std-max justify-items-center
                    min-[629.9px]:grid-cols-3
                    tablet:gap-[20px] tablet:grid-cols-2 
                    min-[825px]:grid-cols-3 
                    min-[1056px]:grid-cols-4 `}>
                    { team.map((member, index)=>{
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
                    })}
                </div>
            </section>
        </PageContainer>
    </>
  );
}
export default CaseStudyLayout