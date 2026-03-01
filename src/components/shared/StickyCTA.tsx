import React from "react";

/**
 * Common StickyCTA component
 * @returns {JSX.Element} - JSX representation of StickyCTA Component
 */
const StickyCTA = () => {
    return (
        <>
        {/* Outer Container 
            - Internal tailwindcss classnames organized from top to bottom: shared rules, larger breakpoints -> smaller
            - Breakpoint is 460px + 48px([3rem]/x-padding) = 508px. This prevents overflow */}
        <div className="h-[84px] z-20 bg-blueprint-white py-[12px] pl-[36px] pr-[12px] rounded-[8px] shadow-[2px_4px_10px_0_rgba(0_0_0_0.07)] ml-auto sticky
                        min-[509px]:w-[460px] min-[509px]:bottom-[78px] 
                        max-[508px]:w-[100%] max-[508px]:pl-[24px] max-[508px]:rounded-[5px] max-[508px]:bottom-[48px] max-[508px]:mr-0">
            {/* Content Flex Row Container */}
            <div className="flex flex-row items-center h-[100%] overflow-hidden
                            min-[509px]:justify-between min-[509px]:gap-auto 
                            max-[508px]:gap-[36px]">
                {/* Text */}
                <p className="w-[171px] decoration-black font-poppins text-[16px] overflow-hidden
                              max-[508px]:text-[14px] max-[508px]:grow-1">Launch a project for your non profit!</p>
                {/* BTN */}
                <div className="w-[200px] h-[60px] 
                min-[509px]:bg-blueprint-deepblue 
                max-[508px]:bg-red-700 max-[508px]:grow-1" ></div>
            </div>
        </div>
        </>
    );
}

export default StickyCTA;