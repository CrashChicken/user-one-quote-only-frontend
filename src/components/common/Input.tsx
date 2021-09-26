import React from "react";

interface InputProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
<<<<<<< Updated upstream
=======
  required?: boolean;
  disabled?: boolean;
  value?: any;
>>>>>>> Stashed changes
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  name,
  placeholder,
  className,
  onChange,
<<<<<<< Updated upstream
=======
  required,
  disabled,
  value,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
        required={required}
        disabled={disabled}
        value={value}
>>>>>>> Stashed changes
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
