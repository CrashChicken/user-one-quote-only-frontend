import React from "react";

interface InputProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  name,
  placeholder,
  className,
}) => {
  return (
    <div className={"text-left mb-2 w-full " + className}>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        className="rounded-full border-2 border-primary px-6 text-dark outline-none w-full h-11 mt-2"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
