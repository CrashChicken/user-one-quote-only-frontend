import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../../assets/headerLogo.svg";

const Logo: React.FC = () => {
  return (
    <Link className="text-2xl text-dark" to="/">
      Quotastic
      <sup>
        <img className="inline-block" src={HeaderLogo} alt="Quotastic logo" />
      </sup>
    </Link>
  );
};

export default Logo;
