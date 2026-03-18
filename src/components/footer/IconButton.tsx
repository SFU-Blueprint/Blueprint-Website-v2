import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as DiscordIcon } from "../../assets/icons/discord.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as MediumIcon } from "../../assets/icons/medium.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import "./Footer.css"

/*
In the translation library, the icons contain a name and a link
and are referenced by the passed id
 */
const IconButton = ({ id }) => {
    const { t } = useTranslation();

    const reroute = (id) => {
        if(t(`${id}.link`) === `${id}.link`) return;
        window.open(t(`${id}.link`), '_blank');
    }

    let iconComponent;

    switch (t(`${id}.name`)) {
        case t('discord.name'):
            iconComponent = <DiscordIcon style={{'fill':'white'}} />;
            break;
        case t('email.name'):
            iconComponent = <EmailIcon />;
            break;
        case t('linkedin.name'):
            iconComponent = <LinkedinIcon style={{'fill':'white'}} />;
            break;
        case t('medium.name'):
            iconComponent = <MediumIcon />;
            break;
        case t('github.name'):
            iconComponent = <GithubIcon />;
            break;
        case t('instagram.name'):
            iconComponent = <InstagramIcon style={{'fill':'white'}}/>;
            break;
        default:
            iconComponent = <EmailIcon />;
            break;
    }

    return <>{
        <div className="icon-hover flex items-center gap-2" onClick={(e) => reroute(id)}>
            <div className="flex justify-center lg:w-1/5">
                {iconComponent}
            </div>
            <div className="icon-name">{t(`${id}.name`)}</div>
        </div>
    }</>;
};

export default IconButton;
