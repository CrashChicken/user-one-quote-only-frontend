import React, { useState } from "react";
import Backdrop from "../Backdrop";
import { SubmitButton } from "../button";

interface CreateModalProps {
  handleClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div
        className="bg-white md:w-6/12 w-full m-4 p-6 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-dark text-4xl mb-4">
          Are you felling <span className="text-primary">inspired?</span>
        </h1>
        <p className="mb-6">
          You can post one quote. You can delete it on your profile or edit in
          this window.
        </p>
        <textarea
          className="rounded-2xl border-2 border-primary text-dark outline-none w-full resize-none px-4 py-2 mb-6 h-40"
          id="quote"
          name="quote"
          cols={6}
          maxLength={300}
        />
        <div className="flex">
          <SubmitButton value="Submit" className="mr-8" />
          <button onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </Backdrop>
  );
};

export default CreateModal;
