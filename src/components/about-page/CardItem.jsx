import React from "react";
import { ParagraphText } from "../Common";
import { headshots } from "../../main";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

/**
 * CardItem component to display an individual card item.
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.img - The URL of the image to be displayed.
 * @param {string} props.title - The title of the card item.
 * @param {string} props.linkedin - The URL for the LinkedIn profile.
 * @returns {JSX.Element} - Returns the JSX for the CardItem component.
 */
const CardItem = React.memo((props) => {
  if (props.img) {
    // If there is an image provided, render the card with the image

    return (
      <div className="flex flex-col h-fit w-fit m-6 mb-5 sm:mb-20 gap-[7px]">
        {/* Member's Headshot */}

        <LazyLoadImage
          alt="headshot"
          style={{ minWidth: "12rem" }}
          className="h-48 w-48 object-cover rounded-[5px]"
          height={props.img.height}
          src={headshots[props.img]}
          placeholderSrc={headshots["blueprint.webp"]}
          width={props.img.width}
          effect="blur"
        />

        {/* Member's Name */}
        <ParagraphText className="!font-bold flex justify-center">
          {props.title}
        </ParagraphText>

        {/* Position */}
        {props.position !== "" && (
          <ParagraphText className="font-poppins text-blueprint flex justify-center">
            {props.position}
          </ParagraphText>
        )}

        {props.lastPosition !== "" && (
          <ParagraphText className="font-poppins text-blueprint-gray-dark flex justify-center">
            {props.lastPosition}
          </ParagraphText>
        )}

        {/* Member's LinkedIn profile */}
        {/* Copied the same style from alumni cards in Aboutpage.jsx */}
        <ParagraphText className="text-black flex ml-5 mb-3 mr-5 justify-center">
          {props.linkedin && (
            <a
              href={props.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              LinkedIn
            </a>
          )}
        </ParagraphText>
      </div>
    );
  }
});

export default CardItem;
