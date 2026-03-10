import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as MenuHamburgerIcon } from "../assets/icons/hamburger.svg";
import { ReactComponent as MenuXIcon } from "../assets/icons/x.svg";
import { ReactComponent as GrayMenuHamburgerIcon } from "../assets/icons/TEMP_hamburger_gray.svg" // TEMPORARY ICON FOR DARK
import { ReactComponent as GrayMenuXIcon } from "../assets/icons/x_gray.svg"
import Logo from "./shared/Logo";


const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isDark, setDark] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const toggleDark = () => {
    setDark((prev) => !prev);
  }

  const currentPath = useLocation().pathname;

  // Define nav links in one place
  const routes = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projectspage" },
    { name: "For Non Profits", path: "/nonprofits" },
    { name: "For Students", path: "/students" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="w-full p-5 justify-center">
      <div className="flex flex-col gap-4 max-lg:flex-grow lg:flex-row lg:gap-0 lg:items-stretch w-full max-w-[1254px] mx-auto">
      <div className={`flex justify-between items-center rounded-lg 
                      ${isDark ? 'bg-blueprint-black' : 'bg-blueprint-offwhite'}
                      shadow-[0px_4px_15px_0px_rgba(0,0,0,0.07)] backdrop-blur-xl overflow-hidden max-lg:pr-4`}>
                      
        <div>
          <Logo isDark={isDark} />
        </div>

        <div>
          <MenuButton
            isDark={isDark}
            visibility="lg:hidden"
            isMenuOpened={isMenuOpened}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
      <div className="hidden lg:block flex-1" aria-hidden />
      <div className={`flex justify-between items-center rounded-lg 
                      shadow-[0px_4px_15px_0px_rgba(0,0,0,0.07)] backdrop-blur-xl overflow-hidden max-lg:w-full`}>
        <NavLinks
          isMenuOpened={isMenuOpened}
          isDark={isDark}
          routes={routes}
          closeMenu={closeMenu}
          currentPath={currentPath}
        />
        </div>
      </div>
      {/* Comment out button to test dark features */}
      {/* <button  
        onClick={toggleDark}
        className="ml-4 px-3 py-2 rounded transition-colors bg-blueprint-blue text-white hover:bg-blueprint-linkHover active:bg-blueprint-linkActive"
        aria-label="Toggle dark mode"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button> */}
    </nav>
  );
};

function MenuButton({ isMenuOpened, visibility, toggleMenu, isDark }) {
  return (
    <button
      className={`${visibility} w-10 h-10 rounded-[7.05px] p-[13px_11px] gap-[9px] flex items-center justify-center transition-colors ${
        isDark ? 'bg-blueprint-neutral-dark' : 'bg-blueprint-gray-light'
      }`}
      onClick={toggleMenu}
      aria-label={isMenuOpened ? "Close menu" : "Open menu"}
    >
      
      {isMenuOpened ? (
        isDark ? <GrayMenuXIcon/>:<MenuXIcon />  
      ):(
         isDark ? <GrayMenuHamburgerIcon/>: <MenuHamburgerIcon /> 
      )}
    </button>
  );
}

function NavLinks({ routes, isMenuOpened, currentPath, closeMenu, isDark}) {
  return (
    // MENU BUTTON
    <div
      className={`flex flex-col max-lg:items-stretch max-lg:w-full items-center font-poppins lg:flex-row lg:space-x-12 lg:flex ${
        isMenuOpened ? "" : "max-lg:hidden"
      }`}
    >
      {/* MOBILE WRAPPER */}
      <div className={`
        max-lg:w-full max-lg:py-2 max-lg:px-4 max-lg:space-y-2
        ${isDark ? 'max-lg:bg-blueprint-neutral-dark' : 'max-lg:bg-white'}
        lg:contents 
      `}>
        {routes.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            onClick={closeMenu}
            // max-lg - Mobile width
            // lg - desktop width
            className={`
              max-lg:w-full max-lg:h-nav-mobile-h max-lg:px-nav-mobile-px max-lg:py-nav-mobile-py
              max-lg:flex max-lg:items-center max-lg:justify-start
              max-lg:rounded-md max-lg:text-left 
              max-lg:active:text-white
              max-lg:hover:text-white
              ${isDark ? 'max-lg:active:bg-blueprint-neutral-mutedAlt max-lg:hover:bg-blueprint-neutral-mid max-lg:bg-blueprint-neutral-dark max-lg:text-white' : 
                'max-lg:active:bg-blueprint-linkActive max-lg:hover:bg-blueprint-linkHover max-lg:bg-blueprint-gray-light max-lg:text-blueprint-black'}
              ${route.path === currentPath ? 'max-lg:font-semibold max-lg:text-blueprint-blue' : ''}
               
              lg:relative lg:h-nav-desktop-h lg:px-nav-desktop-px lg:py-nav-desktop-py
              lg:flex lg:items-center lg:justify-between
              lg:bg-transparent lg:hover:text-white lg:active:text-white
              ${isDark ? 'lg:text-white lg:hover:bg-blueprint-neutral-mid lg:active:bg-blueprint-neutral-mutedAlt' : 'lg:hover:bg-blueprint-linkHover lg:active:bg-blueprint-linkActive'}
              lg:rounded lg:transition-all
              
              ${route.path === currentPath && "text-blueprint-blue font-semibold"}
              ${index === 0 && "lg:hidden"}
              
              font-poppins text-nav-link uppercase
              whitespace-nowrap
              transition-all
            `}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default NavBar;
