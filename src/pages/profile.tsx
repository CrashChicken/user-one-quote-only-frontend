import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, QuoteRes } from "../api/quotesApi";
import QuotesGrid from "../components/common/QuotesGrid";
import VoteCard from "../components/common/VoteCard";
import NotFound from "./notFound";

const ProfilePage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [quote, setQuote] = useState("");
  const [karma, setKarma] = useState(0);
  const [isError, setIsError] = useState(false);
  const [userVotes, setUserVotes] = useState<QuoteRes[]>([]);

  /* @ts-ignore */
  const { id } = useParams();
  const userId = parseInt(id);

  useEffect(() => {
    getUser(userId)
      .then(({ quote, votes }) => {
        setFirstName(quote.user.firstName);
        setLastName(quote.user.lastName);
        setQuote(quote.quote);
        setKarma(quote.karma);
        setUserVotes(votes);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      });
  }, [userId]);

  if (isError) return <NotFound />;
  else
    return (
      <div className="mb-4">
        <div className="flex items-center flex-col bg-gradient-to-r from-primary to-secondary">
          <img src="/profile.png" alt="Profile" className="w-20 mt-6" />
          <h2 className="text-white text-4xl mt-6">
            {firstName} {lastName}
          </h2>
          <div
            style={{
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.15)",
            }}
            className="bg-white rounded-xl px-8 py-5 text-center mt-6 mb-4"
          >
            <p>Quotastic karma</p>
            <p className="text-lg">{karma}</p>
          </div>
          <div
            className="flex items-center flex-col w-full bg-white"
            style={{
              borderTopLeftRadius: "50% 25%",
              borderTopRightRadius: "50% 25%",
            }}
          >
            <div className="w-full max-w-lg mt-20 px-4">
              <h2 className="text-2xl text-primary mb-6">Quote</h2>
              <VoteCard
                userId={userId}
                quote={quote}
                firstName={firstName}
                lastName={lastName}
                karma={karma}
              />
            </div>

            <div className="mt-10 px-4 w-full max-w-6xl">
              <h2 className="text-2xl text-dark mb-6">Likes</h2>
              <QuotesGrid quotes={userVotes} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfilePage;
