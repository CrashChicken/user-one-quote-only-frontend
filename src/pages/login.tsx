import React, { useState } from "react";
import Input from "../components/common/Input";
import { SubmitButton } from "../components/common/Button";
import BackgroundgLogo from "../assets/backgroundLogo.svg";
import { login, getMe } from "../api/quotesApi";
import { useAuth } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { setJwt, setUserId, setFirstName, setLastName } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function loginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    login({ username: email, password })
      .then(({ access_token }) => {
        setJwt(access_token);

        getMe(access_token)
          .then(({ id, firstName, lastName }) => {
            setUserId(id);
            setFirstName(firstName);
            setLastName(lastName);
            setRedirect(true);
          })
          .catch(() => {
            setIsLoading(false);
            setIsError(true);
          });
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
      {redirect && <Redirect to="/" />}
      <div className="max-w-lg">
        <h1 className="text-dark text-5xl mb-3">
          Welcome <span className="text-primary">back!</span>
        </h1>
        <p className="text-dark text-xl mb-5">
          Thank you for coming back. Hope you have a good day and inspire
          others.
        </p>

        <form onSubmit={loginSubmit}>
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="user@example.com"
            onChange={handleEmail}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={handlePassword}
          />
          {isLoading && <p className="text-primary">Loading ...</p>}
          {isError && <p className="text-red-500">Wrong email or password</p>}
          <SubmitButton
            className="w-full mt-4"
            value="Login"
            alternative={true}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
