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
  const polaroid1ClassName = hero.img1.polaroidComponentClassName ? hero.img1.polaroidComponentClassName : "z-10 rotate-[9deg] translate-x-[30px]";
  const polaroid2ClassName = hero.img2.polaroidComponentClassName ? hero.img2.polaroidComponentClassName : "rotate-[-7deg] translate-x-[-30px] translate-y-[50px] tablet:mt-0"

  const heroCategory = (body: ReactNode): ReactElement => {
    return(
        <div className="font-poppins text-center tablet:px-[45px] w-full">
            <div className="tablet:text-body-m-reg text-mobile-body-m-reg">{body}</div>
        </div>
    );
  }

  type problemCardBg = 'white' | 'grey'
  const headerCard = (title: ReactNode, content: ReactNode, colour: problemCardBg) => {
    const bgColour = colour === 'white' ? 'bg-white' : 'bg-bp-lighter-grey'
    return (
        <div className={`
               bg-bp flex flex-col text-center rounded-[10px] gap-[12px] pt-[36px] pb-[56px] px-[24px] font-poppins 
               tablet:mt-[11px] tablet:pt-[48px] tablet:pb-[90px] tablet:gap-[24px] tablet:px-[60px] ${bgColour}`}>
            <h2 className="flex items-center justify-center w-full tablet:text-heading-s-reg tablet:h-[93px] gap-[13px] text-mobile-heading-s-reg">{bpRectangle()} {title}</h2>
            <div className="tablet:text-body-l-reg text-mobile-body-l-reg">
                {content}
            </div>
        </div>
        )
  }

  // Determines whether to use custom image pile format or default one
  const heroImagePile: ReactElement = 
  hero.imgPileFormat ? hero.imgPileFormat(
    hero.logoURL, 
    <PolaroidPhoto imageSrc={hero.img1.url} caption={hero.img1.caption} alt={hero.img1.alt} imageCropClassName={hero.img1.polaroidImgClassName} className={polaroid1ClassName}/>, 
    <PolaroidPhoto imageSrc={hero.img2.url} caption={hero.img2.caption} alt={hero.img2.alt} imageCropClassName={hero.img2.polaroidImgClassName} className={polaroid2ClassName}/>
  ) : (
    <div className="flex items-center flex-col scale-50 
                    tablet:scale-100 max-tablet:max-h-[250px]
                    min-[450px]:mb-[70px] min-[450px]:scale-75">
        <img className="z-20 
                        max-w-[229px] tablet:max-h-[201px] mt-[-170px] translate-x-[30px] translate-y-[170px] rotate-0 ml-0" 
                        src={hero.logoURL}/>
        <div className="flex flex-row mt-0">
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
        <section className="bg-white std-max decoration-blueprint-black tablet:px-20 tablet:pt-[70px] rounded-[10px] px-6 py-[60px] text-left border-t-[20px] text-bp-black border-[#A5C6FF]">
            <div className="font-poppins mb-5 flex flex-row gap-5">
                <div className=" tablet:size-[51px] size-[37px] rounded-[50px] overflow-hidden">
                    <img src="https://placehold.co/51x51"/>
                </div>
                <div className="flex flex-col justify-between ">
                    <p className="tablet:text-body-m-bold text-[12px] font-semibold">{testemonial.name.toUpperCase()}</p>
                    <p className="tablet:text-body-s-reg text-[11px] text-[#5e5e5e] uppercase">{testemonial.title.toUpperCase()}</p>
                </div>
            </div>
            <p className="font-caveat text-bp-black tablet:text-[32px] text-[20px] tracking-normal leading-tight">{testemonial.quote}</p>
        </section>
        ) : (
            <></>
        )
    );

 

    return (
        <PageContainer className="overflow-hidden">
            {/* Back link */}
            {backNav}

            {/* CONTENT COLUMN */}
            <div className="flex flex-col std-max items-center tablet:max-w-[728px] w-full tablet:mb-[129px] mb-[135px] ">
                {/* HERO */}
                <section className="text-center flex flex-col w-full items-center tablet:mb-[173px] mb-[96px]">
                    {/* Title */}
                    <div className="tablet:mb-[3.75rem] min-[450px]:mb-9 font-poppins">
                        <h1 className="tablet:text-heading-m-reg mb-3 text-mobile-heading-m-reg">{hero.title}</h1>
                        <p className="text-body-s-reg ">{hero.date}</p>
                    </div>
                    { /* Image content */}
                    {heroImagePile}
                    <div className="flex desktop:flex-col desktop:gap-[37px] tablet:gap-[6%] mt-[50px] items-center tablet:flex-row flex-col gap-10">
                        {heroCategory( hero.partnerContent)}
                    </div> 
                    
                </section>
        
                {/* Solution */}
                <section className="decoration-blueprint-black std-max">
                    {headerCard('the problem', hero.problemContent, 'grey')}
                    
                    {/* Header section */}
                    <div className="tablet:gap-24 flex flex-col self-center font-poppins gap-[4.5rem] tablet:mt-[42px] mt-[69px]">
                        {headerCard('our solution', solution.summary, 'white')}

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
                    </div>
                </section>
            </div>

            {/* Testimonial */}
            <div className="tablet:mb-[140px] mb-[135px]">
                {testemonialContent}
            </div>
            

            {/* Team */}
            <section className="tablet:mb-[140px]">
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

    );
}
export default CaseStudyLayout