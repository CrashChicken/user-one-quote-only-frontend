import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { getMyQuote, postMyQuote, updateMyQuote } from "../../api/quotesApi";
import { useAuth } from "../../contexts/AuthContext";
import Backdrop from "./Backdrop";
import { SubmitButton } from "./Button";

interface CreateModalProps {
  handleClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ handleClose }) => {
  const { jwt } = useAuth();
  const [quote, setQuote] = useState("");
  const [isLoadingError, setIsLoadingError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    getMyQuote(jwt)
      .then(({ quote }) => setQuote(quote))
      .catch((error: AxiosError) => {
        if (error.response?.status === 404) setIsNew(true);
        else setIsLoadingError(true);
      });
  }, [jwt]);

  function quoteSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);
    setIsError(false);

    if (isNew) {
      postMyQuote({ quote }, jwt)
        .then(() => {
          handleClose();
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    } else {
      updateMyQuote({ quote }, jwt)
        .then(() => {
          handleClose();
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }

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
        <form onSubmit={quoteSubmit}>
          <textarea
            className="rounded-2xl border-2 border-primary text-dark outline-none w-full resize-none px-4 py-2 h-40"
            id="quote"
            name="quote"
            cols={6}
            maxLength={300}
            onChange={(e) => setQuote(e.target.value)}
            value={quote}
          />
          {isLoadingError && (
            <p className="text-red-500 mt-2">Couldn't load current quote</p>
          )}
          {isLoading && <p className="text-primary mt-2">Loading ...</p>}
          {isError && (
            <p className="text-red-500 mt-2">Couldn't save your quote</p>
          )}
          <div className="flex mt-6">
            <SubmitButton value="Submit" className="mr-8" />
            <button onClick={handleClose}>Cancel</button>
          </div>
        </form>
      </div>
    </Backdrop>
  );
};

export default CreateModal;
