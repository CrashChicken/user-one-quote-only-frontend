import React from "react";
import Input from "../../components/Input";
import { SubmitButton } from "../../components/Button";
import BackgroundgLogo from "./backgroundLogo.svg";

const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center p-4">
      <div className="max-w-lg">
        <h1 className="text-dark text-6xl mb-3">
          Welcome <span className="text-primary">back!</span>
        </h1>
        <p className="text-dark text-xl mb-5">
          Thank you for coming back. Hope you have a good day and inspire
          others.
        </p>

        <form action="">
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="user@example.com"
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <SubmitButton
            className="w-full mt-2"
            value="Login"
            alternative={false}
          />
        </form>
      </div>
      <img
        className="fixed bottom-0 left-0 md:visible invisible"
        src={BackgroundgLogo}
        alt="Background logo"
      />
    </div>
  );
};

export default LoginPage;
