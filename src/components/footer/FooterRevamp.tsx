import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as DiscordIcon } from "../../assets/icons/discord.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/icons/youtube.svg";

const footerLinks = [
  {
    name: "our projects",
    path: "/projectspage",
    accentClass: "bg-bp-blue",
  },
  {
    name: "partner with us",
    path: "/nonprofits",
    accentClass: "bg-bp-orange",
  },
  {
    name: "join our team",
    path: "/students",
    accentClass: "bg-bp-accent-purple",
  },
  {
    name: "about us",
    path: "/about",
    accentClass: "bg-bp-green",
  },
  {
    name: "sponsor us",
    path: "/sponsor-us",
    accentClass: "bg-bp-accent-light-blue",
  },
];

const socialLinks = [
  {
    name: "YouTube",
    icon: YouTubeIcon,
    url: "https://youtube.com/@sfublueprint",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://instagram.com/sfublueprint",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://linkedin.com/company/sfu-blueprint",
  },
  {
    name: "Discord",
    icon: DiscordIcon,
    url: "https://discord.gg/blueprint",
  },
];

function FooterLink({
  name,
  path,
  accentClass,
}: {
  name: string;
  path: string;
  accentClass: string;
}) {
  return (
    <Link
      to={path}
      className="group relative flex items-center"
    >
      <div
        className={`
          absolute -left-[30px]
          h-[18px] w-[18px]
          rounded-[3px]
          opacity-0
          transition-opacity
          group-hover:opacity-100
          ${accentClass}
        `}
      />

      <span
        className="
          font-poppins
          text-body-l-reg
          text-bp-dark-grey
          transition-colors
          group-hover:text-bp-black
        "
      >
        {name}
      </span>
    </Link>
  );
}

export default function FooterRevamp() {
  return (
    <footer
      id="app-footer"
      className="w-full relative bg-bp-lightest-grey font-poppins"
    >
      {/* ========================================================== */}
      {/* DESKTOP                                                    */}
      {/* ========================================================== */}

      <div className="hidden relative z-10 w-full px-5 pb-8 pt-footer-py-desktop lg:block">
        {/* Same centered boundary as navbar / PageContainer */}
        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-2
            md:px-6
            xl:px-16
            z-[11]
          "
        >
          <div
            className="
              rounded-[20px]
              bg-white
              px-[80px]
              pb-[100px]
              pt-[60px]
            "
          >
            <div className="flex flex-col gap-[70px]">
              {/* ================================================== */}
              {/* TOP SECTION                                        */}
              {/* ================================================== */}

              <div className="flex flex-col gap-[48px]">
                {/* Logo + social row */}

                <div className="flex items-center justify-between">
                  <Link
                    to="/"
                    className="
                      flex items-center gap-2
                      transition-opacity
                      hover:opacity-80
                    "
                  >
                    <LogoIcon
                      className="h-[31px] w-[33px]"
                      style={{ fill: "#0146BE" }}
                    />

                    <span className="text-footer-logo-desktop text-bp-blue">
                      blueprint
                    </span>
                  </Link>

                  <div className="flex items-center gap-[22.74px]">
                    {socialLinks.map((social) => {
                      const SocialIcon = social.icon;

                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            ${
                              social.name === "Discord"
                                ? "h-[28px] w-[33px]"
                                : "h-[27px] w-[33px]"
                            }
                            text-bp-dark-grey
                            transition-colors
                            hover:text-bp-black
                          `}
                          aria-label={social.name}
                        >
                          <SocialIcon className="h-full w-full" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* ================================================== */}
                {/* TAGLINE + LINKS                                    */}
                {/* ================================================== */}

                <div className="flex items-start gap-[117px]">
                  <div className="shrink-0">
                    <p className="font-poppins text-heading-m-reg text-bp-black">
                      tech for
                    </p>

                    <p
                      className="
                        font-caveat
                        text-[80px]
                        font-bold
                        leading-[0.7]
                        tracking-[-2.4px]
                        text-bp-black
                      "
                    >
                      social good
                    </p>
                  </div>

                  <div className="flex flex-col gap-[12px]">
                    {footerLinks.map((link) => (
                      <FooterLink
                        key={link.path}
                        name={link.name}
                        path={link.path}
                        accentClass={link.accentClass}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* ================================================== */}
              {/* BOTTOM SECTION                                     */}
              {/* ================================================== */}

              <div className="flex flex-col gap-[24px]">
                <div className="h-[1px] w-full bg-bp-grey" />

                <div
                  className="
                    flex items-center justify-between
                    text-[14px]
                    font-medium
                    uppercase
                    text-bp-dark-grey
                  "
                >
                  <p>@2025 sfu blueprint</p>

                  <div className="flex items-center gap-[18px]">
                    <Link
                      to="/privacy-policy"
                      className="transition-colors hover:text-bp-black"
                    >
                      privacy policy
                    </Link>

                    <Link
                      to="/terms-and-conditions"
                      className="transition-colors hover:text-bp-black"
                    >
                      terms and conditions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* TABLET                                                     */}
      {/* ========================================================== */}

      <div className="hidden relative z-10 w-full px-5 pb-8 pt-footer-py-desktop md:block lg:hidden">
        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-6
          "
        >
          <div
            className="
              rounded-[20px]
              bg-white
              px-[60px]
              pb-[60px]
              pt-[48px]
            "
          >
            <div className="flex flex-col gap-[48px]">
              {/* Logo + socials */}

              <div className="flex flex-col gap-[24px]">
                <div className="flex items-center justify-between">
                  <Link
                    to="/"
                    className="
                      flex items-center gap-2
                      transition-opacity
                      hover:opacity-80
                    "
                  >
                    <LogoIcon
                      className="h-[24px] w-[26px]"
                      style={{ fill: "#0146BE" }}
                    />

                    <span className="text-footer-logo-mobile text-bp-blue">
                      blueprint
                    </span>
                  </Link>

                  <div className="flex items-center gap-[18px]">
                    {socialLinks.map((social) => {
                      const SocialIcon = social.icon;

                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            ${
                              social.name === "Discord"
                                ? "h-[23px] w-[27px]"
                                : "h-[22px] w-[27px]"
                            }
                            text-bp-dark-grey
                            transition-colors
                            hover:text-bp-black
                          `}
                          aria-label={social.name}
                        >
                          <SocialIcon className="h-full w-full" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Tagline */}

                <div>
                  <p className="font-poppins text-heading-m-reg text-bp-black">
                    tech for
                  </p>

                  <p
                    className="
                      font-caveat
                      text-[60px]
                      font-bold
                      leading-[0.7]
                      tracking-[-1.8px]
                      text-bp-black
                    "
                  >
                    social good
                  </p>
                </div>
              </div>

              {/* Links */}

              <div className="flex flex-col gap-[12px]">
                {footerLinks.map((link) => (
                  <FooterLink
                    key={link.path}
                    name={link.name}
                    path={link.path}
                    accentClass={link.accentClass}
                  />
                ))}
              </div>

              {/* Bottom */}

              <div className="flex flex-col gap-[24px]">
                <div className="h-[1px] w-full bg-bp-grey" />

                <div
                  className="
                    flex items-start justify-between
                    text-[14px]
                    font-medium
                    uppercase
                    text-bp-dark-grey
                  "
                >
                  <p>@2025 sfu blueprint</p>

                  <div className="flex items-center gap-[18px]">
                    <Link
                      to="/privacy-policy"
                      className="transition-colors hover:text-bp-black"
                    >
                      privacy policy
                    </Link>

                    <Link
                      to="/terms-and-conditions"
                      className="transition-colors hover:text-bp-black"
                    >
                      terms and conditions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* MOBILE                                                     */}
      {/* ========================================================== */}

      <div className="block w-full relative px-5 pb-8 pt-footer-py-mobile md:hidden">
        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-2
          "
        >
          <div
            className="
              rounded-[16px]
              bg-white
              px-[28px]
              pb-[48px]
              pt-[36px]
            "
          >
            <div className="flex flex-col gap-[36px]">
              {/* Logo + tagline */}

              <div className="flex flex-col gap-[44px]">
                <Link
                  to="/"
                  className="
                    flex items-center gap-2
                    transition-opacity
                    hover:opacity-80
                  "
                >
                  <LogoIcon
                    className="h-[21px] w-[23px]"
                    style={{ fill: "#0146BE" }}
                  />

                  <span className="text-footer-logo-mobile text-bp-blue">
                    blueprint
                  </span>
                </Link>

                <div>
                  <p className="font-poppins text-mobile-heading-m-reg text-bp-black">
                    tech for
                  </p>

                  <p
                    className="
                      font-caveat
                      text-[44px]
                      font-bold
                      leading-[0.7]
                      tracking-[-1.32px]
                      text-bp-black
                    "
                  >
                    social good
                  </p>
                </div>
              </div>

              {/* ================================================== */}
              {/* SOCIAL ICONS                                       */}
              {/* ================================================== */}

              <div className="flex items-center gap-[18px]">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        ${
                          social.name === "Discord"
                            ? "h-[23px] w-[27px]"
                            : "h-[22px] w-[27px]"
                        }
                        text-bp-dark-grey
                        transition-colors
                        hover:text-bp-black
                      `}
                      aria-label={social.name}
                    >
                      <SocialIcon className="h-full w-full" />
                    </a>
                  );
                })}
              </div>

              {/* ================================================== */}
              {/* LINKS                                              */}
              {/* ================================================== */}

              <div className="flex flex-col gap-[10px]">
                {footerLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="
                      font-poppins
                      text-mobile-body-l-reg
                      text-bp-dark-grey
                      transition-colors
                      hover:text-bp-black
                    "
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* ================================================== */}
              {/* BOTTOM                                             */}
              {/* ================================================== */}

              <div className="flex flex-col gap-[16px]">
                <div className="h-[1px] w-full bg-bp-grey" />

                <div
                  className="
                    flex flex-col gap-[6px]
                    text-[10px]
                    font-medium
                    uppercase
                    text-bp-dark-grey
                  "
                >
                  <p>@2025 sfu blueprint</p>

                  <div className="flex gap-[12px]">
                    <Link
                      to="/privacy-policy"
                      className="transition-colors hover:text-bp-black"
                    >
                      privacy policy
                    </Link>

                    <Link
                      to="/terms-and-conditions"
                      className="transition-colors hover:text-bp-black"
                    >
                      terms and conditions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}