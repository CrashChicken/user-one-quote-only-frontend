import React from "react";

interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  name,
  placeholder,
}) => {
  return (
    <div className="text-left mb-2 w-full">
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        className="rounded-full border-2 border-primary px-4 py-2 text-dark outline-none w-full"
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
