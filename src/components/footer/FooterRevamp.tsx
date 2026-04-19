import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as DiscordIcon } from "../../assets/icons/discord.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/icons/youtube.svg";

const footerLinks = [
  { name: "our projects", path: "/projectspage" },
  { name: "partner with us", path: "/nonprofits" },
  { name: "join our team", path: "/students" },
  { name: "about us", path: "/about" },
];

const socialLinks = [
  { name: "YouTube", icon: YouTubeIcon, url: "https://youtube.com/@sfublueprint" },
  { name: "Instagram", icon: InstagramIcon, url: "https://instagram.com/sfublueprint" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com/company/sfu-blueprint" },
  { name: "Discord", icon: DiscordIcon, url: "https://discord.gg/blueprint" },
];

function FooterLink({ name, path }: { name: string; path: string }) {
  return (
    <Link
      to={path}
      className="relative flex items-center group"
    >
      <div
        className="absolute -left-[30px] w-[18px] h-[18px] rounded-[3px] bg-bp-accent-purple opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <span
        className="font-poppins text-body-l-reg text-bp-dark-grey group-hover:text-bp-black transition-colors"
      >
        {name}
      </span>
    </Link>
  );
}

export default function FooterRevamp() {
  return (
    <footer id="app-footer" className="w-full font-poppins">
      {/* Desktop */}
      <div className="hidden lg:block px-footer-px-desktop py-footer-py-desktop">
        <div className="rounded-[20px] px-[80px] pt-[60px] pb-[100px] bg-white">
          <div className="flex flex-col gap-[70px]">
            {/* Top section */}
            <div className="flex flex-col gap-[48px]">
              {/* Logo + social row */}
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <LogoIcon className="w-[33px] h-[31px]" style={{ fill: '#0146BE' }} />
                  <span className="text-footer-logo-desktop text-bp-blue">blueprint</span>
                </Link>

                <div className="flex items-center gap-[22.74px]">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.name === "Discord" ? "w-[33px] h-[28px]" : "w-[33px] h-[27px]"} text-bp-dark-grey hover:text-bp-black transition-colors`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-full h-full" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Tagline + links */}
              <div className="flex items-start gap-[117px]">
                <div className="shrink-0">
                  <p className="font-poppins text-heading-m-reg text-bp-black">
                    tech for
                  </p>
                  <p className="font-caveat font-bold text-[80px] leading-[0.7] tracking-[-2.4px] text-bp-black">
                    social good
                  </p>
                </div>

                <div className="flex flex-col gap-[12px]">
                  {footerLinks.map((link, idx) => (
                    <FooterLink key={idx} name={link.name} path={link.path} />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="flex flex-col gap-[24px]">
              <div className="w-full h-[1px] bg-bp-grey" />
              <div className="flex items-center justify-between text-[14px] font-medium text-bp-dark-grey uppercase">
                <p>@2025 sfu blueprint</p>
                <div className="flex items-center gap-[18px]">
                  <Link to="/privacy" className="hover:text-bp-black transition-colors">privacy policy</Link>
                  <Link to="/terms" className="hover:text-bp-black transition-colors">terms and conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden px-footer-px-tablet py-footer-py-desktop">
        <div className="rounded-[20px] px-[60px] pt-[48px] pb-[60px] bg-white">
          <div className="flex flex-col gap-[48px]">
            {/* Logo */}
            <div className="flex flex-col gap-[24px]">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <LogoIcon className="w-[26px] h-[24px]" style={{ fill: '#0146BE' }} />
                  <span className="text-footer-logo-mobile text-bp-blue">blueprint</span>
                </Link>

                <div className="flex items-center gap-[18px]">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.name === "Discord" ? "w-[27px] h-[23px]" : "w-[27px] h-[22px]"} text-bp-dark-grey hover:text-bp-black transition-colors`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-full h-full" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Tagline */}
              <div>
                <p className="font-poppins text-heading-m-reg text-bp-black">
                  tech for
                </p>
                <p className="font-caveat font-bold text-[60px] leading-[0.7] tracking-[-1.8px] text-bp-black">
                  social good
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-[12px]">
              {footerLinks.map((link, idx) => (
                <FooterLink key={idx} name={link.name} path={link.path} />
              ))}
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-[24px]">
              <div className="w-full h-[1px] bg-bp-grey" />
              <div className="flex items-start justify-between text-[14px] font-medium text-bp-dark-grey uppercase">
                <p>@2025 sfu blueprint</p>
                <div className="flex items-center gap-[18px]">
                  <Link to="/privacy" className="hover:text-bp-black transition-colors">privacy policy</Link>
                  <Link to="/terms" className="hover:text-bp-black transition-colors">terms and conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden px-footer-px-mobile py-footer-py-mobile">
        <div className="rounded-[16px] px-[28px] pt-[36px] pb-[48px] bg-white">
          <div className="flex flex-col gap-[36px]">
            {/* Logo */}
            <div className="flex flex-col gap-[44px]">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <LogoIcon className="w-[23px] h-[21px]" style={{ fill: '#0146BE' }} />
                <span className="text-footer-logo-mobile text-bp-blue">blueprint</span>
              </Link>

              {/* Tagline */}
              <div>
                <p className="font-poppins text-mobile-heading-m-reg text-bp-black">
                  tech for
                </p>
                <p className="font-caveat font-bold text-[44px] leading-[0.7] tracking-[-1.32px] text-bp-black">
                  social good
                </p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-[18px]">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.name === "Discord" ? "w-[27px] h-[23px]" : "w-[27px] h-[22px]"} text-bp-dark-grey hover:text-bp-black transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="w-full h-full" />
                </a>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-[10px]">
              {footerLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="font-poppins text-mobile-body-l-reg text-bp-dark-grey hover:text-bp-black transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-[16px]">
              <div className="w-full h-[1px] bg-bp-grey" />
              <div className="flex flex-col gap-[6px] text-[10px] font-medium text-bp-dark-grey uppercase">
                <p>@2025 sfu blueprint</p>
                <div className="flex gap-[12px]">
                  <Link to="/privacy" className="hover:text-bp-black transition-colors">privacy policy</Link>
                  <Link to="/terms" className="hover:text-bp-black transition-colors">terms and conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
