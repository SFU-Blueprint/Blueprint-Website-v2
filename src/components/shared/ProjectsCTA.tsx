import React from "react";
import Button from "./Button";

/**
 * ProjectsCTA - Figma layout with inverted colors, centre-aligned, sticky until footer
 */
const ProjectsCTA = () => {
    return (
        <>
        {/* Outer Container - centre-aligned, Figma widths */}
        <div className="mx-auto
                        md:w-[460px]
                        max-md:w-96">
            {/* CTA Block - Figma layout, navy bg with white text */}
            <div className="z-20 overflow-hidden shadow-[0px_4px_7px_0px_rgba(0,0,0,0.07)]
                        w-full inline-flex flex-col justify-start items-start
                        md:pl-9 md:pr-3 md:py-3 md:rounded-lg md:gap-3
                        max-md:pl-6 max-md:pr-3 max-md:py-3 max-md:rounded-[5px] max-md:gap-2.5
                        bg-blueprint-navyblue">
                {/* Desktop: justify-between | Mobile: justify-start */}
                <div className="self-stretch inline-flex items-center
                            md:justify-between md:gap-0
                            max-md:justify-start max-md:gap-2.5">
                    <div className="max-md:flex-1 max-md:flex max-md:justify-start max-md:items-center max-md:gap-9 md:contents">
                        <p className="font-poppins font-normal text-white
                                    md:w-44 md:text-base
                                    max-md:w-36 max-md:text-sm">
                            Launch a project for your non profit!
                        </p>
                        <Button
                            variant="secondary"
                            className="md:w-48 md:h-14 md:px-11 md:py-3.5 md:text-base md:shrink-0
                                        max-md:flex-1 max-md:h-12 max-md:px-11 max-md:py-3.5 max-md:text-sm"
                        >
                            LEARN MORE
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProjectsCTA;