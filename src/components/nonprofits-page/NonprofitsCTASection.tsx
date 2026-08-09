import { Link } from "react-router-dom";

interface NonprofitsCTASectionProps {
  proposalFormLink?: string;
}

export default function NonprofitsCTASection({
  proposalFormLink = "/nonprofits/proposal",
}: NonprofitsCTASectionProps) {
  return (
    <section
      id="proposal-form"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-bp-lightest-grey scroll-mt-28"
    >
      <div className="relative mx-auto max-w-[1422px] px-6 py-16 sm:px-8 sm:py-20 md:px-10 lg:min-h-[523px] lg:px-0 lg:py-0">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-[9%] top-[8%] h-[16px] w-[16px] rounded-[3px] bg-bp-blue sm:h-[18px] sm:w-[18px] lg:left-[130px] lg:top-[94px] lg:h-[23px] lg:w-[23px]" />
          <div className="absolute left-[27%] top-[3%] hidden h-[16px] w-[16px] rounded-[3px] bg-bp-accent-light-blue sm:block sm:h-[18px] sm:w-[18px] lg:left-[392px] lg:top-[16px] lg:h-[23px] lg:w-[23px]" />
          <div className="absolute right-[9%] top-[8%] h-[16px] w-[16px] rounded-[3px] bg-bp-blue sm:h-[18px] sm:w-[18px] lg:left-[1116px] lg:top-[55px] lg:h-[23px] lg:w-[23px]" />
          <div className="absolute right-[6%] top-[29%] hidden h-[16px] w-[16px] rounded-[3px] bg-bp-orange sm:block sm:h-[18px] sm:w-[18px] lg:left-[1275px] lg:top-[201px] lg:h-[23px] lg:w-[23px]" />
          <div className="absolute left-[18%] top-[33%] hidden h-[16px] w-[16px] rounded-[3px] bg-bp-accent-purple sm:block sm:h-[18px] sm:w-[18px] lg:left-[288px] lg:top-[201px] lg:h-[23px] lg:w-[23px]" />
          <div className="absolute right-[16%] top-[53%] hidden h-[16px] w-[16px] rounded-[3px] bg-bp-accent-purple md:block md:h-[18px] md:w-[18px] lg:left-[1074px] lg:top-[301px] lg:h-[23px] lg:w-[23px]" />
          <div className="absolute left-[8%] bottom-[24%] hidden h-[16px] w-[16px] rounded-[3px] bg-bp-accent-very-light-blue sm:block sm:h-[18px] sm:w-[18px] lg:left-[171px] lg:top-[335px] lg:h-[23px] lg:w-[23px]" />
          <div className="absolute right-[10%] bottom-[13%] hidden h-[16px] w-[16px] rounded-[3px] bg-bp-accent-very-light-blue md:block md:h-[18px] md:w-[18px] lg:left-[1193px] lg:top-[427px] lg:h-[23px] lg:w-[23px]" />
          <div className="absolute left-[24%] bottom-[10%] h-[16px] w-[16px] rounded-[3px] bg-bp-orange sm:h-[18px] sm:w-[18px] lg:left-[332px] lg:top-[442px] lg:h-[23px] lg:w-[23px]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[610px] flex-col items-center text-center lg:pt-[94px]">
          <h2 className="max-w-[495px] font-poppins text-[24px] font-normal leading-[1.4] tracking-[-0.48px] text-bp-black sm:text-[30px] sm:tracking-[-0.6px] lg:text-[36px] lg:tracking-[-0.72px]">
            are you part of an NPO with <span className="font-semibold text-bp-orange">a project idea</span> in mind?
          </h2>

          <p className="mt-5 max-w-[610px] font-poppins text-[18px] font-normal leading-[1.3] tracking-[-0.36px] text-bp-black sm:text-[21px] sm:tracking-[-0.42px] lg:text-[24px] lg:tracking-[-0.48px]">
            Let&apos;s talk! Submit your proposal or reach out to <a href="mailto:sfublueprint@gmail.com" className="text-inherit no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bp-blue">sfublueprint@gmail.com</a> if you have questions or haven&apos;t heard back within a week.
          </p>

          <Link
            to={proposalFormLink}
            className="mt-[30px] inline-flex h-[60px] w-full max-w-[200px] items-center justify-center rounded-[5px] bg-bp-blue px-[44px] font-poppins text-[16px] font-semibold uppercase leading-none text-bp-white transition-colors duration-150 hover:bg-bp-hover-blue active:bg-bp-pressed-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bp-blue"
          >
            PROPOSAL FORM
          </Link>
        </div>
      </div>
    </section>
  );
}
