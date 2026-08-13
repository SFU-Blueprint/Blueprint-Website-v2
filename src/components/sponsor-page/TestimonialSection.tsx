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
        <div className="h-[15px] w-full rounded-t-[20px] bg-bp-orange lg:h-[19px]" />

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col px-[28px] pb-[32px] pt-[34px] lg:hidden">
          {/* Author */}
          <div className="flex items-center gap-[12px]">
            <div
              className="h-[22px] w-[22px] shrink-0 rounded-full bg-[#D9D9D9]"
              aria-hidden="true"
            />

            <div className="flex flex-col">
              <p className="font-poppins text-[11px] font-semibold leading-none tracking-[-0.22px] text-bp-black">
                {authorName}
              </p>

              <p className="mt-[3px] font-poppins text-[7px] font-medium uppercase leading-none tracking-[-0.14px] text-bp-dark-grey">
                {authorRole}
              </p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="mt-[28px] font-poppins text-[18px] font-normal leading-[1.35] tracking-[-0.36px] text-bp-black">
            “{quote}”
          </blockquote>

          {/* CTA */}
          <div className="mt-[20px] flex justify-center">
            <Link
              to={caseStudyLink}
              className="inline-flex h-[35px] min-w-[132px] items-center justify-center rounded-[4px] bg-bp-white px-4 font-poppins text-[10px] font-semibold uppercase tracking-[-0.2px] text-bp-blue transition-colors duration-150 hover:bg-white/90 active:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bp-blue"
            >
              VIEW CASE STUDY
            </Link>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden min-h-[603px] flex-row justify-between px-[74px] pb-[82px] pt-[126px] lg:flex">
          {/* Left side - Testimonial */}
          <div className="w-full max-w-[533px] pt-[30px]">
            {/* Author info */}
            <div className="flex items-center gap-[13px]">
              <div
                className="h-10 w-10 shrink-0 rounded-full bg-[#D9D9D9]"
                aria-hidden="true"
              />

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
            <blockquote className="mt-[39px] max-w-[533px] font-poppins text-[24px] font-normal leading-[1.4] tracking-[-0.48px] text-bp-black">
              {quote}
            </blockquote>
          </div>

          {/* Right side - Images */}
          <div className="mt-[-24px] flex w-[388px] justify-end">
            <div className="relative h-[372px] w-[388px]">
              {/* Main image */}
              <div
                className="absolute right-0 top-0 h-[257px] w-[334px] rounded-[2px] bg-[#C4C4C4]"
                aria-hidden="true"
              />

              {/* Polaroid */}
              <div className="absolute left-[18px] top-[151px] z-10 rotate-[4.28deg]">
                <div className="w-[173px] bg-bp-white px-[9px] pb-[13px] pt-[10px] shadow-[2px_4px_10px_rgba(0,0,0,0.07)]">
                  <div
                    className="aspect-[329/257] w-full bg-[#C4C4C4]"
                    aria-hidden="true"
                  />

                  <p className="mt-[6px] text-center font-caveat text-[20px] leading-none text-bp-black">
                    {polaroidCaption}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to={caseStudyLink}
                className="absolute bottom-[55px] right-0 inline-flex h-[46px] min-w-[164px] items-center justify-center rounded-[5px] bg-bp-white px-4 font-poppins text-[14px] font-semibold uppercase tracking-[-0.24px] text-bp-blue transition-colors duration-150 hover:bg-white/90 active:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bp-blue"
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