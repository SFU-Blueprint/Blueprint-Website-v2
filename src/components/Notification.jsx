import React, { useState } from "react";
import { ReactComponent as MenuXIcon } from "../assets/icons/x_gray.svg";
// import SpeakerIcon from "../assets/images/home/speaker.png";
import { ParagraphText } from "./Common";

const Notification = ({ message, onClose }) => {
  const [closed, setClosed] = useState(false);
  const SpeakerIcon = "images/home/speaker.webp";

  const handleClose = () => {
    setClosed(true);
    setTimeout(onClose, 700)
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 mx-[10%] lg:mx-[20%] mt-24 p-5 rounded-sm bg-bp-white shadow-2xl border border-bp-lightest-grey flex justify-between items-center duration-700 transition-opacity ${
        closed ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-7 h-7">
        <img src={SpeakerIcon} alt="Speaker Icon" />
      </div>
      <ParagraphText>{message}</ParagraphText>
      <button onClick={handleClose}>
        <MenuXIcon/>
      </button>
    </div>
  );
};

export default Notification;
