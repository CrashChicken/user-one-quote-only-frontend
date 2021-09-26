import React from "react";

interface BackdropProps {
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick, children }) => {
  return (
    <div
      className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-25 flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Backdrop;
