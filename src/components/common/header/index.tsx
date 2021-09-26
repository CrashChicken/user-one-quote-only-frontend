import React, { useState } from "react";
import { LinkButton } from "../Button";
<<<<<<< Updated upstream
import { Link, useRouteMatch } from "react-router-dom";
=======
import { Link, Redirect, useRouteMatch } from "react-router-dom";
>>>>>>> Stashed changes
import Logo from "./Logo";
import HamburgerMenu from "../../../assets/hamburgerMenu.svg";
import Plus from "../../../assets/plus.svg";
import IconX from "../../../assets/iconX.svg";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuLink from "./MobileMenuLink";
import CreateModal from "../CreateModal";
import ProfileModal from "../ProfileModal";
<<<<<<< Updated upstream

interface HeaderProps {
  firstname?: string;
  surname?: string;
}

const Header: React.FC<HeaderProps> = ({ firstname, surname }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
=======
import { useAuth } from "../../../contexts/AuthContext";

const Header: React.FC = () => {
  const { firstName, lastName, setJwt, setUserId, setFirstName, setLastName } =
    useAuth();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [redirect, setRedirect] = useState(false);
>>>>>>> Stashed changes

  function createModalClose() {
    setCreateModal(false);
  }
  function createModalOpen() {
    setCreateModal(true);
  }

  function profileModalClose() {
    setProfileModal(false);
  }
  function profileModalOpen() {
    setProfileModal(true);
  }

<<<<<<< Updated upstream
  return (
    <div>
=======
  function logout() {
    setJwt("");
    setUserId(0);
    setFirstName("");
    setLastName("");
    setRedirect(true);
  }

  return (
    <div>
      {redirect && <Redirect to="/" />}
>>>>>>> Stashed changes
      {createModal && <CreateModal handleClose={createModalClose} />}
      {profileModal && <ProfileModal handleClose={profileModalClose} />}
      <div className="md:flex flex-nowrap justify-between items-center p-8 hidden">
        <Logo />
        <div className="flex flex-row items-center">
<<<<<<< Updated upstream
          {!useRouteMatch({ path: "/register", exact: true }) && !firstname && (
            <LinkButton path="/register" text="Sign up" />
          )}
          {!useRouteMatch({ path: "/login", exact: true }) && !firstname && (
=======
          {!useRouteMatch({ path: "/register", exact: true }) && !firstName && (
            <LinkButton path="/register" text="Sign up" />
          )}
          {!useRouteMatch({ path: "/login", exact: true }) && !firstName && (
>>>>>>> Stashed changes
            <LinkButton
              className="ml-4"
              path="/login"
              text="Login"
              alternative={true}
            />
          )}
<<<<<<< Updated upstream
          <Link to="/" className="mr-5 text-white">
            Home
          </Link>
          <Link to="/" className="mr-5 text-white">
            Settings
          </Link>
          <Link to="/" className="mr-5 text-white">
            Logout
          </Link>
          <img
            onClick={() => profileModalOpen()}
            src="profile.png"
            alt=""
            className="h-12 w-12 mr-5 rounded-full cursor-pointer"
          />

          <button
            className="h-12 w-12 flex items-center justify-center bg-white rounded-full"
            onClick={() => createModalOpen()}
          >
            <img src={Plus} alt="" />
          </button>
=======
          {firstName && (
            <>
              <Link to="/" className="mr-5 text-white">
                Home
              </Link>
              <Link to="/" className="mr-5 text-white">
                Settings
              </Link>
              <button className="mr-5 text-white" onClick={logout}>
                Logout
              </button>
              <img
                onClick={profileModalOpen}
                src="profile.png"
                alt=""
                className="h-12 w-12 mr-5 rounded-full cursor-pointer"
              />
              <button
                className="h-12 w-12 flex items-center justify-center bg-white rounded-full"
                onClick={createModalOpen}
              >
                <img src={Plus} alt="" />
              </button>{" "}
            </>
          )}
>>>>>>> Stashed changes
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center p-8">
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          <img src={HamburgerMenu} className="h-8 w-8" alt="" />
        </button>
        <Logo />
<<<<<<< Updated upstream
        {firstname && (
          <button onClick={() => createModalOpen()}>
=======
        {firstName && (
          <button onClick={createModalOpen}>
>>>>>>> Stashed changes
            <img src={Plus} className="h-4 w-4" alt="" />
          </button>
        )}
      </div>
      {mobileMenu && (
        <div className="md:hidden px-8 pb-8">
          <button onClick={() => setMobileMenu(false)}>
            <img src={IconX} alt="" />
          </button>
<<<<<<< Updated upstream
          {firstname && (
            <div
              className="flex items-center cursor-pointer"
              onClick={() => profileModalOpen()}
            >
=======
          {firstName && (
            <div className="flex items-center">
>>>>>>> Stashed changes
              <img
                src="profile.png"
                alt=""
                className="h-14 w-14 rounded-full"
              />
              <span className="text-xl ml-6 text-dark">
<<<<<<< Updated upstream
                {firstname} {surname}
=======
                {firstName} {lastName}
>>>>>>> Stashed changes
              </span>
            </div>
          )}
          <MobileMenuLink text="Home" to="/" />
<<<<<<< Updated upstream
          {firstname ? (
            <>
              <MobileMenuButton text="Settings" />
              <MobileMenuButton text="Logout" primary={true} />
=======
          {firstName ? (
            <>
              <MobileMenuButton text="Settings" onClick={profileModalOpen} />
              <MobileMenuButton text="Logout" primary={true} onClick={logout} />
>>>>>>> Stashed changes
            </>
          ) : (
            <>
              <LinkButton className="mt-4" path="/register" text="Sign up" />
              <LinkButton
                className="mt-4"
                path="/login"
                text="Login"
                alternative={true}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
