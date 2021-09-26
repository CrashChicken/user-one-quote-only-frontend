import React from "react";
import { Link } from "react-router-dom";

interface IMobileMenuLink {
  text: string;
  to: string;
  primary?: boolean;
}

const MobileMenuLink: React.FC<IMobileMenuLink> = ({ text, to, primary }) => {
  return (
    <Link
      to={to}
      className={
        "flex justify-between py-4 text-xl w-full" +
        (primary ? " text-primary" : "")
      }
    >
      {text}
      <svg
        className={"fill-current " + (primary ? "text-primary" : "text-black")}
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.09253 15.9979C1.82609 15.9985 1.56788 15.9057 1.36272 15.7357C1.24725 15.6399 1.1518 15.5224 1.08184 15.3897C1.01188 15.257 0.968782 15.1118 0.955011 14.9625C0.941241 14.8131 0.957071 14.6625 1.00159 14.5193C1.04612 14.3761 1.11846 14.243 1.21448 14.1278L6.32315 8.01564L1.39693 1.89208C1.30221 1.77543 1.23147 1.64122 1.18879 1.49715C1.1461 1.35308 1.13231 1.202 1.14821 1.05259C1.1641 0.90317 1.20937 0.75837 1.28141 0.626506C1.35345 0.494642 1.45084 0.378315 1.56798 0.284212C1.68596 0.180401 1.82413 0.102097 1.97382 0.0542161C2.1235 0.00633482 2.28146 -0.0100901 2.43779 0.00597127C2.59412 0.0220327 2.74545 0.0702341 2.88227 0.14755C3.01909 0.224867 3.13845 0.329629 3.23286 0.455262L8.74064 7.29723C8.90837 7.50127 9.00006 7.75721 9.00006 8.02134C9.00006 8.28547 8.90837 8.54141 8.74064 8.74545L3.039 15.5874C2.92461 15.7254 2.77929 15.8345 2.61485 15.9058C2.4504 15.9772 2.27145 16.0087 2.09253 15.9979Z" />
      </svg>
    </Link>
  );
};

MobileMenuLink.defaultProps = {
  primary: false,
};

export default MobileMenuLink;
