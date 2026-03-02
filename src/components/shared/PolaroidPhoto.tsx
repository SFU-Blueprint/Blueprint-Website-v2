import React from "react";

/**
 * Common polaroid photograph component
 * @param {string} imageSrc - URL of image
 * @param {string} caption - Description or comment for image
 * @param {string} alt - Optional argument that represents alt text for 
 * @param {string} class - Optional argument that applies contents as additional TailWindCSS to highest level container
 * @returns {JSX.Element} - JSX representation of Polaroid photo component
 */

type PolaroidPhotoProps = {
    imageSrc: string;
    caption: string;
    alt?: string;
    className?: string;
}

const PolaroidPhoto = ({imageSrc, caption, alt, className = ""}: PolaroidPhotoProps) => {
    // Outer container for component
    return (
    <div className={`bg-blueprint-white gap-[8px] shadow-[2px_4px_10px_0_rgba(0_0_0_0.07)] w-[306px] h-[270px] pt-[11px] pr-[12px] pb-[15px] pl-[13px] 
                    md:h-[359px] md:w-[377px] md:px-[18px] md:pt[20px] md:pb[24px] overflow-hidden ${className}`}>
        {/* Inner container for all elements */}
        <div className="flex flex-col self-stretch shrink-0 items-center gap-[8px] md:gap-[10px]"> 
            {/* Image container */}
            <div className="h-[206px] overflow-hidden md:h-[267px]">
                <img className="object-cover object-top w-full h-full block" src={imageSrc} alt={alt}/>
            </div>
            <p className="decoration-blueprint-black text-center font-caveat text-[24px] md:text-[34px] text-wrap">{caption}</p>
        </div>  
    </div>
    );
};

export default PolaroidPhoto