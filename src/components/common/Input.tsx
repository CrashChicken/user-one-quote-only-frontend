import React from "react";

interface InputProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  value?: any;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  name,
  placeholder,
  className,
  onChange,
  required,
  disabled,
  value,
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
        onChange={onChange}
        required={required}
        disabled={disabled}
        value={value}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
