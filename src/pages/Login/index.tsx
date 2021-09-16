import React from "react";
import Input from "../../components/common/input";
import { SubmitButton } from "../../components/common/button";
import BackgroundgLogo from "./backgroundLogo.svg";

/*
<img
        className="bg-left-bottom md:visible invisible"
        src={BackgroundgLogo}
        alt="Background logo"
      />
*/

const LoginPage: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center flex-col text-center p-4 bg-no-repeat bg-left-bottom"
      style={{ backgroundImage: `url(${BackgroundgLogo})` }}
    >
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
