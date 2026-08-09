import { useEffect, type ReactNode } from "react";
import PageContainer from "../layout/PageContainer";
import HeroCrosspoint, {
  HERO_CROSSPOINT_IMAGE,
  HERO_CROSSPOINT_VIDEO,
} from "../shared/HeroCrosspoint";

/**
 * Same size/right offset as other pages; lower desktop top so the
 * horizontal line clears the 2-line 58px legal title (~18px gap).
 */
const LEGAL_CROSSPOINT_ANCHOR = [
  "absolute",
  "md:top-[276px] md:right-[clamp(48px,8vw,120px)]",
  "max-md:top-[120px] max-md:right-[24px]",
].join(" ");

export type LegalSection = {
  heading: string;
  content: ReactNode;
};

type LegalPageLayoutProps = {
  titleLines: [string, string];
  sections: LegalSection[];
  contactHeading?: string;
  contactContent: ReactNode;
  documentTitle: string;
};

export default function LegalPageLayout({
  titleLines,
  sections,
  contactHeading = "Contact",
  contactContent,
  documentTitle,
}: LegalPageLayoutProps) {
  useEffect(() => {
    document.title = `${documentTitle} | SFU Blueprint`;
  }, [documentTitle]);

  return (
    <div className="relative overflow-x-clip bg-bp-lightest-grey">
      <HeroCrosspoint
        videoSrc="/videos/crosspoints/dotted-path-1.webm"
        anchorClassName={LEGAL_CROSSPOINT_ANCHOR}
        videoClassName={HERO_CROSSPOINT_VIDEO}
        imageClassName={HERO_CROSSPOINT_IMAGE}
      />
      <PageContainer className="relative z-10 pb-[120px]">
        <article className="mx-auto w-full max-w-[1024px]">
          <header className="relative z-10 mb-[60px] w-full pt-main-desktop-top max-md:pt-main-mobile-top">
            <h1 className="relative z-10 m-0 text-left font-poppins text-[58px] font-medium leading-[85%] tracking-[-1.16px] text-bp-black max-md:text-[34px] max-md:tracking-[-0.68px]">
              <span className="block">{titleLines[0]}</span>
              <span className="block">{titleLines[1]}</span>
            </h1>
          </header>

          <div className="relative z-10 w-full font-poppins text-[16px] font-normal text-bp-black">
            {sections.map((section, index) => (
              <section
                key={section.heading || `intro-${index}`}
                className={`flex flex-col items-start self-stretch gap-[12px] ${
                  index === sections.length - 1 ? "" : "mb-[50px]"
                }`}
              >
                {section.heading && (
                  <h2 className="m-0 font-poppins text-[24px] font-semibold leading-[130%] tracking-[-0.48px] text-bp-black max-md:text-[20px] max-md:tracking-[-0.4px]">
                    {section.heading}
                  </h2>
                )}

                <div
                  className={`flex flex-col gap-[12px] ${
                    index === 0
                      ? "text-[24px] leading-[130%] tracking-[-0.48px]"
                      : "text-[16px] leading-normal tracking-normal"
                  }`}
                >
                  {section.content}
                </div>
              </section>
            ))}

            <section className="mt-[50px] flex flex-col items-start self-stretch gap-[12px]">
              <h2 className="m-0 font-poppins text-[58px] font-medium leading-[85%] tracking-[-1.16px] text-bp-black max-md:text-[34px] max-md:tracking-[-0.68px]">
                {contactHeading}
              </h2>

              <div className="flex flex-col gap-[12px] text-[16px] font-normal leading-normal tracking-normal">
                {contactContent}
              </div>
            </section>
          </div>
        </article>
      </PageContainer>
    </div>
  );
}
