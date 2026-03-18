import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as DiscordIcon } from "../../assets/icons/discord.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/icons/youtube.svg";

function LinkSection({ title, links, titleClassName, linkClassName, titleGap, linkGap, width }) {
  return (
    <div className={`flex flex-col ${titleGap} ${width || ''}`}>
      <h3 className={titleClassName}>{title}</h3>
      <div className={`flex flex-col ${linkGap}`}>
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className={linkClassName}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function FooterRevamp() {
  const footerLinks = {
    projects: [
      { name: "pedals", path: "/projects/pedals" },
      { name: "mosaic", path: "/projects/mosaic" },
      { name: "reel youth", path: "/projects/reel-youth" },
    ],
    forNonProfits: [
      { name: "can your idea become a project?", path: "/nonprofits/idea" },
      { name: "our process", path: "/nonprofits/process" },
      { name: "submit a proposal", path: "/nonprofits/proposal" },
    ],
    forStudents: [
      { name: "a typical experience", path: "/students/experience" },
      { name: "application process", path: "/students/apply" },
      { name: "open positions", path: "/students/positions" },
      { name: "stay connected", path: "/students/connect" },
    ],
    aboutUs: [
      { name: "our values", path: "/about/values" },
      { name: "our team", path: "/about/team" },
      { name: "alumni", path: "/about/alumni" },
    ],
  };

  const socialLinks = [
    { name: "Discord", icon: DiscordIcon, url: "https://discord.gg/blueprint" },
    { name: "Instagram", icon: InstagramIcon, url: "https://instagram.com/sfublueprint" },
    { name: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com/company/sfu-blueprint" },
    { name: "YouTube", icon: YouTubeIcon, url: "https://youtube.com/@sfublueprint" },
  ];

  const sectionTitleClass = "text-footer-section-title font-normal";
  const linkClass = "text-blueprint-neutral-muted text-footer-link font-normal hover:text-white active:text-blueprint-blue transition-colors";
  const titleGap = "gap-footer-gap-title";
  const linkGap = "gap-footer-gap-link";

  return (
    <footer id="app-footer" className="w-full bg-blueprint-neutral-dark text-white font-poppins">
      <div className="hidden lg:block px-footer-px-desktop py-footer-py-desktop">
        <div className="flex flex-col gap-footer-gap-section">
          <div className="flex flex-col gap-footer-gap-block">
            <div className="flex items-center justify-between h-[37px]">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <LogoIcon className="w-[33px] h-[31px]" style={{ fill: 'white' }} />
                <span className="text-footer-logo-desktop">blueprint</span>
              </Link>

              <div className="flex items-center gap-footer-gap-social">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[33px] h-[27px] hover:opacity-70 transition-opacity"
                    aria-label={social.name}
                  >
                    <social.icon className="w-full h-full" style={{ fill: 'white' }} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start justify-between gap-[55px]">
              <h2 className="text-footer-headline w-[310px]">
                tech for social good
              </h2>

              <div className="flex flex-wrap gap-x-footer-gap-grid-x gap-y-footer-gap-grid-y">
                <LinkSection
                  title="projects"
                  links={footerLinks.projects}
                  titleClassName={sectionTitleClass}
                  linkClassName={linkClass}
                  titleGap={titleGap}
                  linkGap={linkGap}
                  width="w-[105px]"
                />
                <LinkSection
                  title="for non profits"
                  links={footerLinks.forNonProfits}
                  titleClassName={sectionTitleClass}
                  linkClassName={linkClass}
                  titleGap={titleGap}
                  linkGap={linkGap}
                  width="w-[184px]"
                />
                <LinkSection
                  title="for students"
                  links={footerLinks.forStudents}
                  titleClassName={sectionTitleClass}
                  linkClassName={linkClass}
                  titleGap={titleGap}
                  linkGap={linkGap}
                  width="w-[154px]"
                />
                <LinkSection
                  title="about us"
                  links={footerLinks.aboutUs}
                  titleClassName={sectionTitleClass}
                  linkClassName={linkClass}
                  titleGap={titleGap}
                  linkGap={linkGap}
                  width="w-[109px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-footer-gap-stack">
            <div className="w-full h-[1px] bg-blueprint-neutral-mutedAlt" />
            <div className="flex items-center justify-between text-footer-legal text-blueprint-neutral-mutedAlt uppercase">
              <p>@2025 sfu blueprint</p>
              <div className="flex items-center gap-footer-gap-legal">
                <Link to="/privacy" className="hover:text-white transition-colors">privacy policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">terms and conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden px-footer-px-tablet py-footer-py-desktop">
        <div className="flex flex-col gap-footer-gap-tablet">
          <div className="flex flex-col gap-footer-gap-stack">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <LogoIcon className="w-[23px] h-[23px]" style={{ fill: 'white' }} />
              <span className="text-footer-logo-mobile">blueprint</span>
            </Link>
            <h2 className="text-footer-headline">
              tech for social good
            </h2>
          </div>

          <div className="flex items-center gap-footer-gap-stack">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[27px] h-[27px] hover:opacity-70 transition-opacity"
                aria-label={social.name}
              >
                <social.icon className="w-full h-full" style={{ fill: 'white' }} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-footer-gap-grid-x gap-y-footer-gap-grid-y">
            <LinkSection
              title="projects"
              links={footerLinks.projects}
              titleClassName={sectionTitleClass}
              linkClassName={linkClass}
              titleGap={titleGap}
              linkGap={linkGap}
              width="w-[105px]"
            />
            <LinkSection
              title="for non profits"
              links={footerLinks.forNonProfits}
              titleClassName={sectionTitleClass}
              linkClassName={linkClass}
              titleGap={titleGap}
              linkGap={linkGap}
              width="w-[184px]"
            />
            <LinkSection
              title="for students"
              links={footerLinks.forStudents}
              titleClassName={sectionTitleClass}
              linkClassName={linkClass}
              titleGap={titleGap}
              linkGap={linkGap}
              width="w-[154px]"
            />
            <LinkSection
              title="about us"
              links={footerLinks.aboutUs}
              titleClassName={sectionTitleClass}
              linkClassName={linkClass}
              titleGap={titleGap}
              linkGap={linkGap}
              width="w-[109px]"
            />
          </div>

          <div className="flex flex-col gap-footer-gap-stack">
            <div className="w-full h-[1px] bg-blueprint-neutral-mutedAlt" />
            <div className="flex items-start justify-between text-footer-legal text-blueprint-neutral-mutedAlt uppercase">
              <p>@2025 sfu blueprint</p>
              <div className="flex items-center gap-footer-gap-legal">
                <Link to="/privacy" className="hover:text-white transition-colors">privacy policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">terms and conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden px-footer-px-mobile py-footer-py-mobile">
        <div className="flex flex-col gap-footer-gap-mobile-section">
          <div className="flex flex-col gap-footer-gap-stack">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <LogoIcon className="w-[23px] h-[23px]" style={{ fill: 'white' }} />
              <span className="text-footer-logo-mobile">blueprint</span>
            </Link>
            <h2 className="text-footer-headline-mobile">
              tech for social good
            </h2>
          </div>

          <div className="flex items-center gap-footer-gap-stack">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[24px] hover:opacity-70 transition-opacity"
                aria-label={social.name}
              >
                <social.icon className="w-full h-full" style={{ fill: 'white' }} />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-footer-gap-mobile-block">
            <LinkSection
              title="projects"
              links={footerLinks.projects}
              titleClassName="text-footer-section-title-mobile font-normal"
              linkClassName="text-blueprint-neutral-muted text-footer-link-mobile font-normal hover:text-white active:text-blueprint-blue transition-colors"
              titleGap={titleGap}
              linkGap={linkGap}
            />
            <LinkSection
              title="for non profits"
              links={footerLinks.forNonProfits}
              titleClassName="text-footer-section-title-mobile font-normal"
              linkClassName="text-blueprint-neutral-muted text-footer-link-mobile font-normal hover:text-white active:text-blueprint-blue transition-colors"
              titleGap={titleGap}
              linkGap={linkGap}
            />
            <LinkSection
              title="for students"
              links={footerLinks.forStudents}
              titleClassName="text-footer-section-title-mobile font-normal"
              linkClassName="text-blueprint-neutral-muted text-footer-link-mobile font-normal hover:text-white active:text-blueprint-blue transition-colors"
              titleGap={titleGap}
              linkGap={linkGap}
            />
            <LinkSection
              title="about us"
              links={footerLinks.aboutUs}
              titleClassName="text-footer-section-title-mobile font-normal"
              linkClassName="text-blueprint-neutral-muted text-footer-link-mobile font-normal hover:text-white active:text-blueprint-blue transition-colors"
              titleGap={titleGap}
              linkGap={linkGap}
            />
          </div>

          <div className="flex flex-col gap-footer-gap-stack">
            <div className="w-full h-[1px] bg-blueprint-neutral-mutedAlt" />
            <div className="flex flex-col gap-footer-gap-legal text-footer-legal text-blueprint-neutral-mutedAlt uppercase">
              <p>@2025 sfu blueprint</p>
              <div className="flex flex-col gap-footer-gap-legal-inner">
                <Link to="/privacy" className="hover:text-white transition-colors">privacy policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">terms and conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}