import React, { useId } from "react";

export type EvaluationCardProps = {
  title: string;
  body: string;
};

// <svg className="absolute w-0 h-0" aria-hidden>
//           <clipPath id={clipId} clipPathUnits="objectBoundingBox">
//             <path d="M 1 0 L 1 0 Q 1 0 1 0.04 L 1 0.55 Q 1 0.79 0.96 0.78 L 0.05 1 Q 0 0.95 0 0.78 L 0 0 Q 0 0 0 0 Z" />
//           </clipPath>
//         </svg>
//         <div
//           className="absolute left-0 right-0 top-0 h-[119px] max-w-[605px] bg-blueprint-navyblue rounded-xl m-3"
//           style={{ clipPath: `url(#${clipId})` }}
//           aria-hidden
//         />
/**
 * EvaluationCard: vertical layout when viewport is tall enough (min-h 32rem),
 * horizontal (tablet) layout when viewport height is below that.
 */
const EvaluationCard = ({ title, body }: EvaluationCardProps) => {
    const clipId = useId();
  
    return (
      <>
        {/* Consolidated Desktop/Mobile layout */}
        <div className="inline-flex tablet:hidden desktop:inline-flex max-w-[630px] min-w-[328px] h-[341px] pb-[30px] pt-[42px] px-3 relative bg-white rounded-xl border-2 overflow-hidden flex-col items-start">
          <svg className="absolute w-0 h-0" aria-hidden>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              <path d="M 1 0 L 1 0 Q 1 0 1 0.04 L 1 0.55 Q 1 0.78 0.92 0.78 L 0.06 1 Q 0 0.95 0 0.78 L 0 0 Q 0 0 0 0 Z" />
            </clipPath>
          </svg>
          <div
            className="absolute left-0 right-0 top-0 h-[102px] min-w-[302px] max-wfull max-w-[605px] bg-blueprint-navyblue rounded-xl m-3"
            style={{ clipPath: `url(#${clipId})` }}
            aria-hidden
          />
          <div className="pl-[24px] pr-[20px] flex-1 flex flex-col items-start justify-between overflow-hidden relative z-10 w-fit">
            <div className="w-fit text-white text-2xl font-medium font-['Poppins'] leading-8 whitespace-nowrap">{title}</div>
            <div className="w-full text-zinc-800 text-base font-normal font-['Poppins'] leading-relaxed">{body}</div>
          </div>
        </div>
  
        {/* Tablet layout: shown when lg breakpoint >= width > sm breakpoint (630px - 1280px) */}
        <div className="hidden max-w-[902px] min-w-[630px] min-h-[145px] pl-3 pr-12 py-3 bg-white rounded-xl overflow-hidden border-2 tablet:inline-flex desktop:hidden flex-col">
          <div className="self-stretch inline-flex justify-start items-center h-[121px] gap-2 my-2">
            <div className="relative w-64 h-32">
              <div
                className="absolute bg-blueprint-navyblue rounded-l-xl inset-y-0 left-0 w-8 min-h-[121px]"
                aria-hidden
              />
              <div
                className="relative min-h-[121px] bg-blueprint-navyblue text-white flex items-center justify-center h-full rounded-xl pl-7 pr-[31px] pt-6 pb-9 py-3 origin-bottom-left skew-x-[-8deg]"
              >
                <span className="text-left text-2xl font-medium font-['Poppins'] leading-8 skew-x-[8deg]">
                  {title}
                </span>
              </div>
            </div>
            <div className="min-w-[292px] text-zinc-800 text-base pl-[30px] font-normal font-['Poppins'] leading-relaxed max-w-full h-fit">
              {body}
            </div>
          </div>
        </div>
      </>
    );
  };

export default EvaluationCard;