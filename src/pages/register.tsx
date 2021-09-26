import React, { useState } from "react";
import Input from "../components/common/Input";
import { SubmitButton } from "../components/common/Button";
import BackgroundgLogo from "../assets/backgroundLogo.svg";
import { register } from "../api/quotesApi";
import { Link, Redirect } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function registerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) return;

    setIsLoading(true);
    setIsError(false);

    register({ username: email, password, firstName, lastName })
      .then(() => {
        setRedirect(true);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }

  return (
    <div
      className="flex justify-center items-center flex-col text-center p-4 bg-no-repeat bg-left-bottom"
      style={{ backgroundImage: `url(${BackgroundgLogo})` }}
    >
      {redirect && <Redirect to="/login" />}
      <div className="max-w-lg">
        <h1 className="text-dark text-5xl mb-3">
          What is your <span className="text-primary">name?</span>
        </h1>
        <p className="text-dark text-xl mb-5">
          Your name will appear on quotes and your public profle.
        </p>

        <div className="flex justify-center">
          <img
            src="profile.png"
            alt="Profile"
            className="h-20 w-20 rounded-full"
          />
        </div>

        <form onSubmit={registerSubmit}>
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="user@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex">
            <Input
              label="First name"
              id="firstName"
              name="firstName"
              placeholder="John"
              className="mr-4"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Input
              label="Last name"
              id="lastName"
              name="lastName"
              placeholder="Scott"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            label="Confirm password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {isLoading && <p className="text-primary">Loading ...</p>}
          {isError && <p className="text-red-500">Something went wrong</p>}
          {password !== confirmPassword && (
            <p className="text-red-500">Passwords do not match</p>
          )}
          <SubmitButton className="w-full mt-4" value="Sign up" />
        </form>
        <div className="flex justify-between mt-3">
          <span>Already have an account?</span>
          <Link to="/login" className="text-secondary">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
