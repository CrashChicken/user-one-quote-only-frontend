import React from "react";
import { LinkButton } from "../../components/Button";
import { Link, useRouteMatch } from "react-router-dom";
import HeaderLogo from "./headerLogo.svg";

const Header: React.FC = () => {
  return (
    <div className="flex flex-nowrap justify-between p-8">
      <Link className="text-2xl" to="/">
        Quotastic
        <sup>
          <img className="inline-block" src={HeaderLogo} alt="Quotastic logo" />
        </sup>
      </Link>
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
  );
};

export default Header;
