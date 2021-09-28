import React, { useEffect, useState } from "react";
import {
  deleteVote,
  downvoteUser,
  upvoteUser,
  voteCheck,
} from "../../api/quotesApi";
import { useAuth } from "../../contexts/AuthContext";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

interface VoteCardProps {
  userId: number;
  quote: string;
  firstName: string;
  lastName: string;
  karma: number;
}

const VoteCard: React.FC<VoteCardProps> = ({
  userId,
  quote,
  firstName,
  lastName,
  karma,
}) => {
  const [karmaState, setKarmaState] = useState(0);
  const [voteState, setVoteState] = useState(0);
  const [isError, setIsError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { jwt } = useAuth();

  useEffect(() => {
    setKarmaState(karma);
  }, [karma]);

  useEffect(() => {
    if (jwt !== "") {
      voteCheck(userId, jwt).then((check) => {
        setVoteState(check.vote);
      });
    }
  }, [jwt, userId]);

  function handleVote(voteType: number) {
    if (jwt === "") {
      setRedirect(true);
      return;
    }

    if (voteState !== voteType) {
      if (voteType === 1) {
        upvoteUser(userId, jwt)
          .then((vote) => {
            setVoteState(1);
            setKarmaState(vote.karma);
            setIsError(false);
          })
          .catch(() => {
            setIsError(true);
          });
      } else {
        downvoteUser(userId, jwt)
          .then((vote) => {
            setVoteState(-1);
            setKarmaState(vote.karma);
            setIsError(false);
          })
          .catch(() => {
            setIsError(true);
          });
      }
    } else {
      deleteVote(userId, jwt)
        .then((vote) => {
          setVoteState(0);
          setKarmaState(vote.karma);
          setIsError(false);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }

  return (
    <div
      style={{
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.15)",
      }}
      className="bg-white rounded-xl w-full flex p-5"
    >
      {redirect && <Redirect push to="/login" />}
      <div className="flex justify-center items-center flex-col mr-5">
        <button onClick={() => handleVote(1)} className="p-2">
          <svg
            width={13}
            height={7}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 6l5-5 5 5"
              stroke={voteState === 1 ? "#DE8667" : "black"}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="my-1">{karmaState}</span>
        <button onClick={() => handleVote(-1)} className="p-2">
          <svg
            width={13}
            height={7}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 1L6.5 6L1.5 0.999999"
              stroke={voteState === -1 ? "#DE8667" : "black"}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="w-full">
        <p>{quote}</p>
        <Link className="flex items-center mt-5" to={`/profile/${userId}`}>
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full h-8 mr-3"
          />
          <span>
            {firstName} {lastName}
          </span>
        </Link>
        {isError && (
          <p className="text-red-500 mt-4">Couldn't submit your vote</p>
        )}
      </div>
    </div>
  );
};

export default VoteCard;
