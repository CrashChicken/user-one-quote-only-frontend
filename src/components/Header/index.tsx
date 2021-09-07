import React, { useState } from "react";
import { LinkButton } from "../../components/Button";
import { Link, useRouteMatch } from "react-router-dom";
import Logo from "./logo";
import HamburgerMenu from "./assets/hamburgerMenu.svg";
import Plus from "./assets/plus.svg";
import IconX from "./assets/iconX.svg";
import Profile from "./assets/profile.svg";
import ArrowRight from "./assets/arrowRight.svg";

interface HeaderProps {
  firstname?: string;
  surname?: string;
}

const Header: React.FC<HeaderProps> = ({ firstname, surname }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  function handleMenu() {
    setMobileMenu(!mobileMenu);
  }

  function closeMenu() {
    setMobileMenu(false);
  }

  return (
    <div>
      <div className="md:flex flex-nowrap justify-between items-center p-8 hidden">
        <Logo />
        <div className="flex flex-row">
          {!useRouteMatch({ path: "/register", exact: true }) && (
            <LinkButton path="/register" text="Sign up" />
          )}
          {!useRouteMatch({ path: "/login", exact: true }) && (
            <LinkButton
              className="ml-4"
              path="/login"
              text="Login"
              alternative={true}
            />
          )}
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center p-8">
        <button onClick={handleMenu}>
          <img src={HamburgerMenu} className="h-8 w-8" alt="" />
        </button>
        <Logo />
        <button>
          <img src={Plus} className="h-4 w-4" alt="" />
        </button>
      </div>
      {mobileMenu && (
        <div className="px-8 pb-2">
          <button onClick={closeMenu}>
            <img src={IconX} alt="" />
          </button>
          <div className="flex items-center">
            <img src={Profile} alt="" className="h-16 w-16" />
            <span className="text-xl ml-6 text-dark">
              {firstname} {surname}
            </span>
          </div>
          <Link to="/" className="flex justify-between py-4 text-lg">
            Home <img src={ArrowRight} alt="" />
          </Link>
          <div className="flex justify-between py-4 text-lg">
            Settings <img src={ArrowRight} alt="" />
          </div>
          <div className="flex justify-between py-4 text-lg text-primary">
            <p>Logout</p>
            <img src={ArrowRight} alt="" className="block" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
