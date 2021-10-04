import React from "react";
import { Link } from "react-router-dom";

function getClassName(alternative?: boolean, className?: string): string {
  return (
    "grid items-center inline-block rounded-full text-center px-8 cursor-pointer h-11 whitespace-nowrap " +
    (alternative
      ? "border-2 border-primary text-primary bg-white box-border "
      : "bg-gradient-to-r from-primary to-secondary text-white ") +
    className
  );
}

interface LinkButtonProps {
  path: string;
  text: string;
  alternative?: boolean;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  path,
  text,
  alternative,
  className,
}) => {
  return (
    <Link className={getClassName(alternative, className)} to={path}>
      {text}
    </Link>
  );
};

LinkButton.defaultProps = {
  alternative: false,
};

interface SubmitButtonProps {
  value: string;
  alternative?: boolean;
  className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  value,
  alternative,
  className,
}) => {
  return (
    <input
      className={getClassName(alternative, className)}
      type="submit"
      value={value}
    />
  );
};

SubmitButton.defaultProps = {
  alternative: false,
};

interface ButtonProps {
  text: string;
  alternative?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  alternative,
  className,
  onClick,
}) => {
  return (
    <button
      className={getClassName(alternative, className)}
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  alternative: false,
};
