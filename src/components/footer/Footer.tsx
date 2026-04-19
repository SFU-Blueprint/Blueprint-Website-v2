import React from "react";
import { useTranslation } from "react-i18next";
import AnchorList from "./AnchorList";
import IconButton from "./IconButton";
import Logo from "../shared/Logo";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="inset-x-0 bottom-0 h-fit p-14 bg-bp-blue text-bp-white font-poppins">
      {/* Render page links */}
      <div className="page-links">
        {t("pages").map(
          (page) =>
            t(`${page}.anchors`) !== page + ".anchors" && (
              <AnchorList page={page} key={page} />
            )
        )}
        {/* Render connect section */}
        <div className="connect-container">
          <div className="text-xl mb-6 font-semibold">{t("connect.name")}</div>
          <div className="icons-container">
            {/* Render social media icons */}
            {t("connect.links").map((id) => (
              <IconButton id={id} key={id} />
            ))}
          </div>
        </div>
      </div>
      {/* Render horizontal line */}
      <hr className="my-8" />
      {/* Render footer information */}
      <div className="flex justify-between text-xs items-center">
        {/* Render logo */}
        <Logo colour="white" />
        {/* Render common links */}
        <div>{t("common.blueprint")}</div>
      </div>
    </footer>
  );
};

export default Footer;
