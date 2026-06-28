import { useEffect, type ReactNode } from "react";
import PageContainer from "../layout/PageContainer";
import CrosspointTitle from "./CrosspointTitle";

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
    <PageContainer className="overflow-x-hidden bg-bp-lightest-grey !pt-[160px] pb-[120px] [--legal-crosspoint-right:24px] md:[--legal-crosspoint-right:40px] xl:[--legal-crosspoint-right:144px]">
      <article className="mx-auto w-full max-w-[1024px]">
        <header className="mb-[60px] w-full">
          <CrosspointTitle lines={titleLines} />
        </header>

        <div className="w-full font-poppins text-[16px] font-normal text-bp-black">
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
  );
}