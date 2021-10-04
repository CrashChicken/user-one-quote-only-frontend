import React, { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import Input from "./Input";
import { SubmitButton } from "./Button";
import { getMe, updatePassword } from "../../api/quotesApi";
import { useAuth } from "../../contexts/AuthContext";

interface ProfileModalProps {
  handleClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ handleClose }) => {
  const { jwt } = useAuth();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getMe(jwt).then(({ email, firstName, lastName }) => {
      setEmail(email);
      setFirstName(firstName);
      setLastName(lastName);
    });
  }, [jwt]);

  function profileSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) return;

    setIsLoading(true);
    setIsError(false);

    updatePassword({ password }, jwt)
      .then(() => handleClose())
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }
  return (
    <Backdrop onClick={handleClose}>
      <div
        className="bg-white md:w-6/12 w-full m-4 p-6 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-dark text-4xl mb-4">
          Profile <span className="text-primary">settings.</span>
        </h1>
        <p className="mb-6">Change your profile settings</p>
        <form onSubmit={profileSubmit}>
          <Input
            type="email"
            label="Email"
            id="email"
            name="email"
            value={email}
            disabled={true}
          />
          <div className="flex">
            <Input
              label="First name"
              id="firstname"
              name="firstname"
              className="mr-4"
              value={firstName}
              disabled={true}
            />
            <Input
              label="Last name"
              id="lastname"
              name="lastname"
              value={lastName}
              disabled={true}
            />
          </div>
          <Input
            type="password"
            label="Password"
            id="password"
            name="password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            label="Confirm password"
            id="c_password"
            name="c_password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {isLoading && <p className="text-primary">Loading ...</p>}
          {isError && <p className="text-red-500">Something went wrong</p>}
          {password !== confirmPassword && (
            <p className="text-red-500">Passwords do not match</p>
          )}

          <div className="flex mt-4">
            <SubmitButton value="Submit" className="mr-8" />
            <button onClick={handleClose}>Cancel</button>
          </div>
        </form>
      </div>
    </Backdrop>
  );
};

export default ProfileModal;
