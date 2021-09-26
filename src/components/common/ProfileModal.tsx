import React from "react";
import Backdrop from "./Backdrop";
import Input from "./Input";
import { SubmitButton } from "./Button";

interface ProfileModalProps {
  handleClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ handleClose }) => {
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
        <Input type="email" label="Email" id="email" name="email" />
        <div className="flex">
          <Input
            label="First name"
            id="firstname"
            name="firstname"
            className="mr-4"
          />
          <Input label="Last name" id="lastname" name="lastname" />
        </div>
        <Input type="password" label="Password" id="password" name="password" />
        <Input
          type="password"
          label="Confirm password"
          id="c_password"
          name="c_password"
        />
        <div className="flex mt-4">
          <SubmitButton value="Submit" className="mr-8" />
          <button onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </Backdrop>
  );
};

export default ProfileModal;
