import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as MenuHamburgerIcon } from "../assets/icons/hamburger.svg";
import { ReactComponent as MenuXIcon } from "../assets/icons/x.svg";
import { ReactComponent as HamburgerIconDark } from "../assets/icons/hamburger-dark.svg";
import { ReactComponent as MenuXIconDark } from "../assets/icons/x_gray.svg";
import Logo from "./shared/Logo";

/** Mobile unified card + desktop nav link surfaces */
const NAV_SURFACE_SHADOW =
  "shadow-[0px_4px_15px_0px_rgba(0,0,0,0.07)]";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projectspage" },
  { name: "For Non Profits", path: "/nonprofits" },
  { name: "For Students", path: "/students" },
  { name: "About Us", path: "/about" },
] as const;

export interface NavBarProps {
  /** e.g. Students page — outer strip bp-black, cards bp-black */
  isDark?: boolean;
}

const NavBar = ({ isDark = false }: NavBarProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleMenu = () => setIsMenuOpened((prev) => !prev);
  const closeMenu = () => setIsMenuOpened(false);
  const currentPath = useLocation().pathname;

  const surfaceClass = isDark ? "bg-bp-black" : "bg-bp-white";

  return (
    <nav className="w-full justify-center p-5" aria-label="Primary">
      <div className="mx-auto flex w-full max-w-full flex-col gap-4 max-lg:flex-grow px-2 md:px-6 xl:px-32 lg:flex-row lg:items-stretch lg:gap-0">
        {/* Desktop (lg+): original layout — logo card, flex spacer, compact nav card (hugs links, not full width) */}
        <div
          className={`hidden items-center justify-between overflow-hidden rounded-[5px] backdrop-blur-xl lg:flex lg:shrink-0 ${
            isDark
              ? "bg-bp-black"
              : `bg-bp-white ${NAV_SURFACE_SHADOW}`
          }`}
        >
          <Logo isDark={isDark} />
        </div>
        <div className="hidden min-w-0 flex-1 lg:block" aria-hidden />
        <div
          className={`hidden items-center overflow-hidden backdrop-blur-xl lg:flex lg:shrink-0 lg:rounded-lg ${
            isDark
              ? "rounded-[10px] bg-bp-black"
              : `bg-bp-white ${NAV_SURFACE_SHADOW}`
          }`}
        >
          <DesktopNavLinks
            routes={ROUTES}
            currentPath={currentPath}
            isDark={isDark}
            closeMenu={closeMenu}
          />
        </div>

        {/* Mobile (max-lg): single extended card — top row + stacked pills inside same surface */}
        <div className="lg:hidden">
          <div
            className={`overflow-hidden rounded-lg ${NAV_SURFACE_SHADOW} ${surfaceClass}`}
          >
            <div
              className={`flex flex-col gap-3 pt-2 pr-4 pl-4 ${
                isMenuOpened ? "pb-6" : "pb-2"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Logo isDark={isDark} />
                <MenuButton
                  isDark={isDark}
                  isMenuOpened={isMenuOpened}
                  toggleMenu={toggleMenu}
                />
              </div>
              {isMenuOpened ? (
                <div className="flex flex-col gap-1">
                  <MobileNavLinks
                    routes={ROUTES}
                    currentPath={currentPath}
                    isDark={isDark}
                    closeMenu={closeMenu}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

type RouteItem = (typeof ROUTES)[number];

function MenuButton({
  isMenuOpened,
  toggleMenu,
  isDark,
}: {
  isMenuOpened: boolean;
  toggleMenu: () => void;
  isDark: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg p-2 transition-colors ${
        isDark ? "bg-bp-darkest-grey" : "bg-bp-lightest-grey"
      }`}
      onClick={toggleMenu}
      aria-expanded={isMenuOpened}
      aria-label={isMenuOpened ? "Close menu" : "Open menu"}
    >
      {isMenuOpened ? (
        isDark ? (
          <MenuXIconDark className="h-[23px] w-[23px]" />
        ) : (
          <MenuXIcon className="h-[23px] w-[23px]" />
        )
      ) : isDark ? (
        <HamburgerIconDark className="h-[23px] w-[23px]" />
      ) : (
        <MenuHamburgerIcon className="h-[23px] w-[23px]" />
      )}
    </button>
  );
}

function DesktopNavLinks({
  routes,
  currentPath,
  closeMenu,
  isDark,
}: {
  routes: readonly RouteItem[];
  currentPath: string;
  closeMenu: () => void;
  isDark: boolean;
}) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-end space-x-12">
      {routes.map((route, index) => {
        if (index === 0) return null;
        const isActive = route.path === currentPath;
        return (
          <Link
            key={route.path}
            to={route.path}
            onClick={closeMenu}
            className={[
              "relative flex items-center whitespace-nowrap rounded font-poppins text-nav-link uppercase transition-all",
              "h-nav-desktop-h px-nav-desktop-px py-nav-desktop-py",
              isDark
                ? "text-white hover:bg-bp-dark-grey hover:text-white active:bg-bp-grey active:text-white"
                : "text-bp-black hover:bg-bp-blue hover:text-white active:bg-bp-pressed-blue active:text-white",
              isActive
                ? "font-semibold text-bp-blue hover:text-white"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}

function MobileNavLinks({
  routes,
  currentPath,
  closeMenu,
  isDark,
}: {
  routes: readonly RouteItem[];
  currentPath: string;
  closeMenu: () => void;
  isDark: boolean;
}) {
  return (
    <>
      {routes.map((route) => {
        const isActive = route.path === currentPath;
        return (
          <Link
            key={route.path}
            to={route.path}
            onClick={closeMenu}
            className={[
              "flex h-nav-mobile-h items-center justify-start rounded-md px-nav-mobile-px py-nav-mobile-py font-poppins text-nav-link uppercase transition-all",
              isDark
                ? "bg-bp-darkest-grey text-white hover:bg-bp-dark-grey hover:text-white active:bg-bp-grey active:text-white"
                : "bg-bp-lightest-grey text-bp-black hover:bg-bp-blue hover:text-white active:bg-bp-pressed-blue active:text-white",
              isActive
                ? "font-semibold text-bp-blue hover:text-white"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {route.name}
          </Link>
        );
      })}
    </>
  );
}

export default NavBar;
