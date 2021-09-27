import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const FrontPage: React.FC = () => {
  const { jwt } = useAuth();
  return (
    <div>
      <h1>Front page</h1>
      <Link to="/login">Login page</Link>
      <Link to="/profile">Profile page</Link>
      <p>{jwt}</p>
    </div>
  );
};

export default FrontPage;
