import React, { useState, useEffect } from "react";
import OutlineButton from "./OutlineButton";
// import { useTranslation } from "react-i18next";
// import { PageHeader } from "../Common";
import { ParagraphTitle } from "../Common";
// import { Link } from 'react-router-dom';
import { Blueprint } from "../../constants/Team/Blueprint";
import { Mosaic } from "../../constants/Team/Mosaic";
import { ReelYouth } from "../../constants/Team/ReelYouth";
// import PlaceholderImage from "../../assets/images/projects/aiForHealth.png";

function ProjectModal({ isOpen, onClose, project }) {
  console.log(project.popupimage);
  // const { t, i18n } = useTranslation();
  const [selectedTab, setSelectedTab] = useState("overview");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);

  if (isOpen) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "unset";

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isOpen) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "unset";

  const teamData = (() => {
    console.log(project.name);
    switch (
      project?.name // Assuming `teamName` is the key in your project object that tells which team it belongs to
    ) {
      case "Reel Youth":
        return ReelYouth;
      case "Blueprint Website":
        return Blueprint;
      case "Mosaic":
        return Mosaic;
      default:
        return []; // This will handle cases where the team is not found or the project is undefined
    }
  })();

  const leads = teamData.filter((member) =>
    member.lastPosition.includes("Lead")
  );
  const designers = teamData.filter((member) =>
    member.role.includes("Designer")
  );
  const developers = teamData.filter(
    (member) =>
      member.role.includes("Developer") && !member.lastPosition.includes("Lead")
  );

  if (!isOpen || !project) return null;
  const renderTeamSection = (title, teamMembers) => (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 space-y-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center justify-between">
            <p className="flex-1 text-l md:text-xl text-gray-800 mr-3">
              {member.title}
            </p>
            <p className="flex-1 text-l md:text-xl text-gray-600">
              {member.role}
            </p>
            {member.linkedin ? (
              <a
                href={member.linkedin}
                className="text-l md:text-xl text-blue-600 hover:underline whitespace-nowrap"
              >
                LinkedIn
              </a>
            ) : (
              <span className="opacity-0 text-l md:text-xl whitespace-nowrap">
                LinkedIn
              </span> // Invisible placeholder
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-8 rounded-sm shadow-md mx-auto h-[95vh] w-[85vw] md-w-[80vw] overflow-scroll flex flex-col justify-between">
        <div>
          <div
            className={`${
              isSmallScreen ? "" : "flex"
            } justify-between items-center mb-6`}
          >
            <div className="flex justify-between">
              <h1 className={`font-bold mr-3 text-4xl`}>{project.name}</h1>
              {isSmallScreen && (
                <button
                  onClick={onClose}
                  className="text-lg font-semibold cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
            {isSmallScreen && (
              <p className="mt-4 text-lg text-gray-600">{project.date}</p>
            )}
            <div className={`flex mt-5 ml-auto items-center mr-6 gap-4 `}>
              {/* <OutlineButton>Github</OutlineButton> */}
              {project.name !== "Blueprint Website" && (
                <a href={project.page}>
                  <OutlineButton>NPO</OutlineButton>
                </a>
              )}
            </div>
            {!isSmallScreen && (
              <button
                onClick={onClose}
                className="text-lg font-semibold cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
          {!isSmallScreen && (
            <p className="text-lg text-gray-600">{project.date}</p>
          )}
          <p className="text-lg mb-4">{project.duration}</p>

          <div className="flex gap-4 border-t pt-4"></div>
          {selectedTab === "overview" && (
            <div
              className={`${isSmallScreen ? "" : "flex"} gap-4`}
              id="overview"
            >
              <div className="mb-8">
                <ParagraphTitle
                  className={`${
                    isSmallScreen ? "mb-3 mt-3" : ""
                  } text-[1.25rem] `}
                >
                  ABOUT THE NON-PROFIT
                </ParagraphTitle>
                <p className="text-lg mb-4">{project.nonProfitDescription}</p>
                <ParagraphTitle
                  className={`${isSmallScreen ? "mb-3" : ""} text-[1.25rem] `}
                >
                  OUR PROJECT
                </ParagraphTitle>
                <p className="text-lg mb-4">{project.projectDescription}</p>
              </div>

              <img
                className={`max-h-[350px] ${isSmallScreen ? "" : "mt-20"}`}
                src={project.popupimage}
                alt="Placeholder"
              />

              <div className="mb-8">
                <p className="text-lg italic mt-4">{project.additionalNote}</p>
              </div>
            </div>
          )}
          {selectedTab === "team" && (
            <div id="team" className="pr-5">
              {renderTeamSection("LEADS", leads)}
              {renderTeamSection("DESIGNERS", designers)}
              {renderTeamSection("DEVELOPERS", developers)}
            </div>
          )}
        </div>
        <div className="flex gap-4 border-t pt-4 ">
          <button
            onClick={() => setSelectedTab("overview")}
            className={`font-bold py-2 px-4 ${
              selectedTab === "overview" ? "text-blue-500" : "text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedTab("team")}
            className={`font-bold py-2 px-4 ${
              selectedTab === "team" ? "text-blue-500" : "text-gray-700"
            }`}
          >
            Team
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
