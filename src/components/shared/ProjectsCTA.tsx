import Button from "./Button";
import { Link } from "react-router-dom";

/**
 * ProjectsCTA - Figma layout with inverted colors, centre-aligned, sticky until footer
 */
const ProjectsCTA = () => {
    return (
        <>
        {/* Container */}
        <div className="w-90 pl-6 pr-3 py-3 bg-blueprint-navyblue rounded-[5px]
        shadow-[0px_4px_7px_0px_rgba(0,0,0,0.07)] inline-flex flex-row justify-between items-center gap-2.5 flex-shrink-0
        md:w-[460px] md:pl-9 md:pr-3 md:py-3">
            {/* Text Container */}
            <div className="inline-flex items-center gap-9 self-stretch flex-1 md:justify-between">
                <p className="w-36 justify-start text-sm text-white font-poppins font-light 
                md:w-44 md:text-base">
                    Launch a project for your non profit!
                </p>
                <Link to="/nonprofits" className="flex-shrink-0 w-36 h-[52px] bg-white rounded-[5px]
                                    inline-flex justify-center items-center text-blueprint-navyblue text-sm font-semibold  
                                    font-poppins hover:bg-gray-100 transition-colors
                                    md:w-48 md:h-14 md:text-base">
                    LEARN MORE
                </Link>
            </div>
        </div>
        </>
    );
}

export default ProjectsCTA;