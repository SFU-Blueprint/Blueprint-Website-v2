import { Link } from "react-router-dom";

interface TestimonialSectionProps {
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
  polaroidImage?: string;
  polaroidCaption?: string;
  caseStudyImage?: string;
  caseStudyLink: string;
}

export default function TestimonialSection({
  quote,
  authorName,
  authorRole,
  polaroidCaption = "description here",
  caseStudyLink,
 }: TestimonialSectionProps) {
   return (
    <section className="mx-auto w-full max-w-[1160px] px-6 md:px-10 desktop:px-0">
        <div className="relative overflow-hidden rounded-[20px] bg-bp-lighter-grey">
          {/* Orange accent bar */}
          <div className="h-[19px] w-full rounded-t-[20px] bg-bp-orange" />

          {/* Content container */}
          <div className="flex flex-col gap-10 px-6 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10 md:px-12 lg:min-h-[603px] lg:flex-row lg:justify-between lg:px-[74px] lg:pb-[82px] lg:pt-[126px]">
            {/* Left side - Testimonial */}
            <div className="w-full max-w-[533px] lg:pt-[30px]">
              {/* Author info */}
              <div className="flex items-center gap-[13px]">
                <div className="h-10 w-10 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />
                <div className="flex flex-col">
                  <p className="font-poppins text-[16px] font-semibold leading-none tracking-[-0.32px] text-bp-black">
                    {authorName}
                  </p>
                  <p className="mt-[4px] font-poppins text-[14px] font-medium uppercase leading-none tracking-[-0.28px] text-bp-dark-grey">
                    {authorRole}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 max-w-[533px] font-poppins text-[18px] font-normal leading-[1.4] tracking-[-0.36px] text-bp-black sm:text-[20px] sm:tracking-[-0.4px] lg:mt-[39px] lg:text-[24px] lg:tracking-[-0.48px]">
                {quote}
              </blockquote>
            </div>

            {/* Right side - Images */}
            <div className="flex w-full justify-center lg:mt-[-24px] lg:w-[388px] lg:justify-end">
              <div className="relative h-[290px] w-[280px] sm:h-[330px] sm:w-[340px] lg:h-[372px] lg:w-[388px]">
                <div className="absolute right-0 top-0 h-[172px] w-[220px] rounded-[2px] bg-[#C4C4C4] sm:h-[210px] sm:w-[270px] lg:h-[257px] lg:w-[334px]" aria-hidden="true" />
                <div className="absolute left-[18px] top-[154px] z-10 rotate-[4.28deg] sm:left-[20px] sm:top-[176px] lg:left-[18px] lg:top-[151px]">
                  <div className="w-[138px] bg-bp-white px-[7px] pb-[10px] pt-[8px] shadow-[2px_4px_10px_rgba(0,0,0,0.07)] sm:w-[170px] sm:px-[8px] sm:pb-[12px] sm:pt-[10px] lg:w-[173px] lg:px-[9px] lg:pb-[13px] lg:pt-[10px]">
                    <div className="aspect-[329/257] w-full bg-[#C4C4C4]" aria-hidden="true" />
                    <p className="mt-[4px] text-center font-caveat text-[14px] leading-none text-bp-black sm:text-[18px] lg:mt-[6px] lg:text-[20px]">
                      {polaroidCaption}
                    </p>
                  </div>
                </div>

                {/* View case study button */}
                <Link
                  to={caseStudyLink}
                  className="absolute bottom-[44px] right-0 inline-flex h-[42px] min-w-[140px] items-center justify-center rounded-[5px] bg-bp-white px-4 font-poppins text-[12px] font-semibold uppercase tracking-[-0.24px] text-bp-blue transition-colors duration-150 hover:bg-white/90 active:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bp-blue sm:h-[44px] sm:min-w-[148px] sm:text-[13px] lg:bottom-[55px] lg:h-[46px] lg:min-w-[164px] lg:text-[14px]"
                >
                  VIEW CASE STUDY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
 }
