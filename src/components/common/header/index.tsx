import React, { useState } from "react";
import { LinkButton } from "../Button";
import { Link, Redirect, useRouteMatch } from "react-router-dom";
import Logo from "./Logo";
import HamburgerMenu from "../../../assets/hamburgerMenu.svg";
import Plus from "../../../assets/plus.svg";
import IconX from "../../../assets/iconX.svg";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuLink from "./MobileMenuLink";
import CreateModal from "../CreateModal";
import ProfileModal from "../ProfileModal";
import { useAuth } from "../../../contexts/AuthContext";

const Header: React.FC = () => {
  const {
    userId,
    firstName,
    lastName,
    setJwt,
    setUserId,
    setFirstName,
    setLastName,
  } = useAuth();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [redirect, setRedirect] = useState(false);

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
      {createModal && <CreateModal handleClose={createModalClose} />}
      {profileModal && <ProfileModal handleClose={profileModalClose} />}
      <div
        className={
          (useRouteMatch({ path: "/profile/:id", exact: true })
            ? "bg-gradient-to-r from-primary to-secondary "
            : "") +
          "md:flex flex-nowrap justify-between items-center p-8 hidden"
        }
      >
        <Logo />
        <div className="flex flex-row items-center">
          {!useRouteMatch({ path: "/register", exact: true }) && !firstName && (
            <LinkButton path="/register" text="Sign up" />
          )}
          {!useRouteMatch({ path: "/login", exact: true }) && !firstName && (
            <LinkButton
              className="ml-4"
              path="/login"
              text="Login"
              alternative={true}
            />
          )}
          {firstName && (
            <>
              <Link to="/" className="mr-5 text-white">
                Home
              </Link>
              <button className="mr-5 text-white" onClick={profileModalOpen}>
                Settings
              </button>
              <button className="mr-5 text-white" onClick={logout}>
                Logout
              </button>
              <Link to={"/profile/" + userId}>
                <img
                  src="profile.png"
                  alt=""
                  className="h-12 w-12 mr-5 rounded-full cursor-pointer"
                />
              </Link>
              <button
                className="h-12 w-12 flex items-center justify-center bg-white rounded-full"
                onClick={createModalOpen}
              >
                <img src={Plus} alt="" />
              </button>{" "}
            </>
          )}
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center p-8">
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          <img src={HamburgerMenu} className="h-8 w-8" alt="" />
        </button>
        <Logo />
        {firstName && (
          <button onClick={createModalOpen}>
            <img src={Plus} className="h-4 w-4" alt="" />
          </button>
        )}
      </div>
      {mobileMenu && (
        <div className="md:hidden px-8 pb-8">
          <button onClick={() => setMobileMenu(false)}>
            <img src={IconX} alt="" />
          </button>
          {firstName && (
            <div className="flex items-center">
              <img
                src="profile.png"
                alt=""
                className="h-14 w-14 rounded-full"
              />
              <span className="text-xl ml-6 text-dark">
                {firstName} {lastName}
              </span>
            </div>
          )}
          <MobileMenuLink text="Home" to="/" />
          {firstName ? (
            <>
              <MobileMenuButton text="Settings" onClick={profileModalOpen} />
              <MobileMenuButton text="Logout" primary={true} onClick={logout} />
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
