import React from "react";
import Button from "./Button";

/**
 * Common StickyCTA component
 * @returns {JSX.Element} - JSX representation of StickyCTA Component
 */
const StickyCTA = () => {
    return (
        <>
        {/* Outer Container 
            - Internal tailwindcss classnames organized from top to bottom: shared rules, larger breakpoints -> smaller
            - Translate is height + margin-bottom (78px desktop and tablet and 48 for mobile)  */}
        <div className="ml-auto mr-auto sticky h-0 bottom-[0px]
                        min-[509px]:w-[460px]
                        max-[508px]:w-[100%]">
            <div className="h-[84px] z-20 bg-blueprint-navyblue py-[12px] pl-[36px] pr-[12px] rounded-[8px] shadow-[2px_4px_10px_0_rgba(0_0_0_0.07)] overflow-hidden absolute
                             min-[509px]:translate-y-[-162px]
                             max-[508px]:pl-[24px] max-[508px]:rounded-[5px] max-[508px]:translate-y-[-132px]">
                {/* Content Flex Row Container */}
                <div className="flex flex-row items-center h-[100%]
                                min-[509px]:justify-between min-[509px]:gap-auto 
                                max-[508px]:gap-[36px]">
                    {/* Text */}
                    <p className="font-poppins text-[16px] text-blueprint-white
                                max-[508px]:text-[14px] max-[508px]:grow-1 ">
                                    Launch a project for your non profit!
                    </p>
                    {/* BTN */}
                    <Button variant="secondary" children={`LEARN MORE`} className="w-[200px] h-[60px] max-[508px]:grow-1 text-blueprint-navyblue"/>

                </div>
            </div>
        </div>
        </>
    );
}

export default StickyCTA;