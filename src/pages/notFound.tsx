import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-dark text-5xl mb-3">
        Error <span className="text-primary">404!</span>
      </h1>
      <p className="text-dark text-xl mb-5">Page not found.</p>
      <Link to="/" className="text-secondary">
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFound;
