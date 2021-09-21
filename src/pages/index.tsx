import React from "react";
import { Link } from "react-router-dom";

const FrontPage: React.FC = () => {
  return (
    <div>
      <h1>Front page</h1>
      <Link to="/login">Login page</Link>
    </div>
  );
};

export default FrontPage;
