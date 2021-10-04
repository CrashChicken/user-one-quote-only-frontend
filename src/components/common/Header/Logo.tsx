import React from "react";
import { Link } from "react-router-dom";
//import HeaderLogo from "../../../assets/headerLogo.svg";

//<img className="inline-block" src={HeaderLogo} alt="Quotastic logo" />
interface LogoProps {
  alternative?: boolean;
}

const Logo: React.FC<LogoProps> = ({ alternative }) => {
  return (
    <Link
      className={(alternative ? "text-white" : "text-dark") + " text-2xl"}
      to="/"
    >
      Quotastic
      <sup>
        <svg
          className="inline-block"
          width={16}
          height={12}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.555.25v6.233h2.476c0 1.376-.972 3.073-2.482 3.643l.618 1.34c3.264-.65 5.592-3.059 5.592-6.61V.25H9.555zm5.581 4.606c0 2.92-1.757 5.135-4.621 5.89v-.004l-.15-.325c1.489-.867 2.283-2.592 2.283-3.94v-.62h-2.475V.873h4.96v3.984h.003zM.846.25v6.233H3.33c0 1.376-.972 3.073-2.482 3.643l.618 1.34c3.264-.65 5.583-3.059 5.583-6.61V.25H.845zm5.58 4.606c0 2.92-1.754 5.138-4.609 5.89l-.15-.326C3.153 9.553 3.95 7.828 3.95 6.48v-.622H1.466V.872h4.96v3.984z"
            fill={alternative ? "white" : "url(#prefix__paint0_linear)"}
          />
          <defs>
            <linearGradient
              id="prefix__paint0_linear"
              x1={0.844}
              y1={5.858}
              x2={15.758}
              y2={5.858}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DE8667" />
              <stop offset={1} stopColor="#EFB467" />
            </linearGradient>
          </defs>
        </svg>
      </sup>
    </Link>
  );
};

export default Logo;
