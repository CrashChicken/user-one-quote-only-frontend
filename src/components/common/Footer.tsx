import React from "react";
import ReactLogo from "../../assets/footerLogo.svg";
// fixed bottom-0 w-full
const Footer: React.FC = () => {
  return (
    <div className="flex flex-nowrap justify-between bg-gradient-to-r from-primary p-3 to-secondary rounded-t-3xl text-white">
      <img src={ReactLogo} alt="Quotastic logo" />
      <span className="whitespace-nowrap">
        All rights reserved |{" "}
        <a href="https://skillupmentor.com/">skillupmentor.com</a>
      </span>
    </div>
  );
};

export default Footer;
