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
  authorImage,
  polaroidImage,
  polaroidCaption = "description here",
  caseStudyImage,
  caseStudyLink,
}: TestimonialSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[1160px] px-6 md:px-10 desktop:px-0">
      <div className="relative overflow-hidden rounded-[20px] bg-bp-lighter-grey">
        {/* Orange accent bar */}
        <div className="h-[15px] w-full rounded-t-[20px] bg-bp-orange lg:h-[19px]" />

        {/* ============================================================ */}
        {/* MOBILE                                                       */}
        {/* < md                                                         */}
        {/* Main image only                                              */}
        {/* ============================================================ */}

        <div className="flex flex-col px-[28px] pb-[40px] pt-[34px] md:hidden">
          {/* Author */}
          <div className="flex items-center gap-[12px]">
            {authorImage && (
              <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-bp-white">
                <img
                  src={authorImage}
                  alt=""
                  className="h-[28px] w-[28px] object-contain"
                />
              </div>
            )}

            <div className="flex flex-col">
              <p className="font-poppins text-[14px] font-semibold leading-[1.2] tracking-[-0.28px] text-bp-black">
                {authorName}
              </p>

              <p className="mt-[3px] font-poppins text-[10px] font-medium uppercase leading-[1.25] tracking-[-0.2px] text-bp-dark-grey">
                {authorRole}
              </p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="mt-[28px] font-poppins text-[18px] font-normal leading-[1.4] tracking-[-0.36px] text-bp-black">
            “{quote}”
          </blockquote>

          {/* Main image */}
          {caseStudyImage && (
            <div className="mt-[30px] flex justify-center">
              <img
                src={caseStudyImage}
                alt={`${authorName} case study`}
                className="h-auto w-full max-w-[300px] rounded-[2px] object-cover"
              />
            </div>
          )}

          {/* CTA */}
          <div className="mt-[28px] flex justify-center">
            <Link
              to={caseStudyLink}
              className="
                inline-flex h-[46px] min-w-[150px]
                items-center justify-center
                rounded-[5px] bg-bp-white px-5
                font-poppins text-[12px] font-bold uppercase
                leading-none text-bp-blue
                transition-colors duration-150
                hover:bg-white/90
                active:bg-white/80
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-bp-blue
              "
            >
              VIEW CASE STUDY
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TABLET                                                       */}
        {/* md -> lg                                                     */}
        {/* Main image + polaroid                                        */}
        {/* ============================================================ */}

        <div className="hidden flex-col px-[48px] pb-[60px] pt-[50px] md:flex lg:hidden">
          {/* Author */}
          <div className="flex items-center gap-[13px]">
            {authorImage && (
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-bp-white">
                <img
                  src={authorImage}
                  alt=""
                  className="h-[32px] w-[32px] object-contain"
                />
              </div>
            )}

            <div className="flex flex-col">
              <p className="font-poppins text-[15px] font-semibold leading-[1.2] tracking-[-0.3px] text-bp-black">
                {authorName}
              </p>

              <p className="mt-[4px] font-poppins text-[11px] font-medium uppercase leading-[1.25] tracking-[-0.2px] text-bp-dark-grey">
                {authorRole}
              </p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="mt-[32px] max-w-[600px] font-poppins text-[20px] font-normal leading-[1.4] tracking-[-0.4px] text-bp-black">
            “{quote}”
          </blockquote>

          {/* Images */}
          <div className="mt-[38px] flex justify-center">
            <div className="relative h-[355px] w-[390px]">
              {/* Main image */}
              {caseStudyImage ? (
                <img
                  src={caseStudyImage}
                  alt={`${authorName} case study`}
                  className="absolute right-0 top-0 h-[230px] w-[300px] rounded-[2px] object-cover"
                />
              ) : (
                <div
                  className="absolute right-0 top-0 h-[230px] w-[300px] rounded-[2px] bg-[#C4C4C4]"
                  aria-hidden="true"
                />
              )}

              {/* Polaroid */}
              <div className="absolute left-[8px] top-[135px] z-10 -rotate-[4.28deg]">
                <div className="w-[165px] bg-bp-white px-[9px] pb-[13px] pt-[10px] shadow-[2px_4px_10px_rgba(0,0,0,0.07)]">
                  {polaroidImage ? (
                    <img
                      src={polaroidImage}
                      alt={polaroidCaption}
                      className="aspect-[329/257] w-full object-cover"
                    />
                  ) : (
                    <div
                      className="aspect-[329/257] w-full bg-[#C4C4C4]"
                      aria-hidden="true"
                    />
                  )}

                  <p className="mt-[6px] text-center font-caveat text-[18px] leading-none text-bp-black">
                    {polaroidCaption}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to={caseStudyLink}
                className="
                  absolute bottom-[10px] right-0
                  inline-flex h-[46px] w-[164px]
                  items-center justify-center
                  rounded-[5px] bg-bp-white px-4
                  font-poppins text-[12px] font-bold uppercase
                  leading-none text-bp-blue
                  transition-colors duration-150
                  hover:bg-white/90
                  active:bg-white/80
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-bp-blue
                "
              >
                VIEW CASE STUDY
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP                                                      */}
        {/* lg+                                                          */}
        {/* Main image + polaroid                                        */}
        {/* ============================================================ */}

        <div className="hidden min-h-[603px] flex-row items-center justify-between px-[74px] pb-[82px] pt-[82px] lg:flex">
          {/* Left side */}
          <div className="w-full max-w-[510px]">
            {/* Author */}
            <div className="flex items-center gap-[13px]">
              {authorImage && (
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-bp-white">
                  <img
                    src={authorImage}
                    alt=""
                    className="h-[35px] w-[35px] object-contain"
                  />
                </div>
              )}

              <div className="flex flex-col">
                <p className="font-poppins text-[16px] font-semibold leading-[1.25] tracking-[-0.32px] text-bp-black">
                  {authorName}
                </p>

                <p className="mt-[4px] font-poppins text-[12px] font-medium uppercase leading-[1.3] tracking-[-0.2px] text-bp-dark-grey">
                  {authorRole}
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mt-[36px] max-w-[500px] font-poppins text-[21px] font-normal leading-[1.45] tracking-[-0.42px] text-bp-black">
              “{quote}”
            </blockquote>
          </div>

          {/* Right side */}
          <div className="flex w-[440px] shrink-0 justify-end">
            <div className="relative h-[430px] w-[440px]">
              {/* Main image */}
              {caseStudyImage ? (
                <img
                  src={caseStudyImage}
                  alt={`${authorName} case study`}
                  className="absolute right-0 top-0 h-[290px] w-[377px] rounded-[2px] object-cover"
                />
              ) : (
                <div
                  className="absolute right-0 top-0 h-[290px] w-[377px] rounded-[2px] bg-[#C4C4C4]"
                  aria-hidden="true"
                />
              )}

              {/* Polaroid */}
              <div className="absolute left-[8px] top-[170px] z-10 -rotate-[4.28deg]">
                <div className="w-[205px] bg-bp-white px-[10px] pb-[15px] pt-[11px] shadow-[2px_4px_10px_rgba(0,0,0,0.07)]">
                  {polaroidImage ? (
                    <img
                      src={polaroidImage}
                      alt={polaroidCaption}
                      className="aspect-[329/257] w-full object-cover"
                    />
                  ) : (
                    <div
                      className="aspect-[329/257] w-full bg-[#C4C4C4]"
                      aria-hidden="true"
                    />
                  )}

                  <p className="mt-[7px] text-center font-caveat text-[22px] leading-none text-bp-black">
                    {polaroidCaption}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to={caseStudyLink}
                className="
                  absolute bottom-[20px] right-0
                  inline-flex h-[46px] w-[164px]
                  items-center justify-center
                  rounded-[5px] bg-bp-white px-4
                  font-poppins text-[12px] font-bold uppercase
                  leading-none text-bp-blue
                  transition-colors duration-150
                  hover:bg-white/90
                  active:bg-white/80
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-bp-blue
                "
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