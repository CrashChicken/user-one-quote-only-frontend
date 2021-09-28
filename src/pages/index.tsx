import React, { useEffect, useState } from "react";
import { getList, QuoteRes } from "../api/quotesApi";
import { Button, LinkButton } from "../components/common/Button";
import QuotesGrid from "../components/common/QuotesGrid";
import TopRight from "../assets/topRight.svg";
import Left from "../assets/left.svg";
import Right from "../assets/right.svg";
import { useAuth } from "../contexts/AuthContext";
import VoteCard from "../components/common/VoteCard";

const FrontPage: React.FC = () => {
  const { jwt } = useAuth();

  const [mostLikedQuotes, setMostLikedQuotes] = useState<QuoteRes[]>([]);
  const [newestQuotes, setNewestQuotes] = useState<QuoteRes[]>([]);
  const [currentPageKarma, setCurrentPageKarma] = useState(1);
  const [currentPageNewest, setCurrentPageNewest] = useState(1);

  useEffect(() => {
    setCurrentPageKarma(1);
    getList("karma", currentPageKarma).then((quotes) => {
      setMostLikedQuotes(quotes);
      setCurrentPageKarma(currentPageKarma + 1);
    });
    if (jwt !== "") {
      setCurrentPageNewest(1);
      getList("newest", currentPageNewest).then((quotes) => {
        setNewestQuotes(quotes);
        setCurrentPageNewest(currentPageNewest + 1);
      });
    }
  }, [jwt]);

  function loadMore(list: string) {}

  if (jwt === "")
    return (
      <div className="flex flex-col items-center mx-6 md:mt-20 mt-4">
        <img
          src={TopRight}
          alt=""
          className="fixed top-0 right-0 md:visible invisible select-none pointer-events-none"
          style={{ zIndex: -1 }}
        />
        <img
          src={Left}
          alt=""
          className="fixed left-0 md:visible invisible select-none pointer-events-none"
          style={{ zIndex: -1 }}
        />
        <img
          src={Right}
          alt=""
          className="fixed right-0 md:visible invisible select-none pointer-events-none"
          style={{ zIndex: -1 }}
        />

        <div className="flex flex-col md:flex-row">
          <div className="max-w-xl md:mr-4 mb-10">
            <h1 className="md:text-7xl text-5xl mb-4">
              Welcome to <span className="text-primary">Quotastic</span>
            </h1>
            <p className="text-xl mb-8">
              Quotastic is free online platform for you to explore the quips,
              quotes, and proverbs. Sign up and express yourself.
            </p>
            <div className="inline-block">
              <LinkButton path="/register" text="Sign up" />
            </div>
          </div>
          <div className="md:ml-4">
            <img src="/quotes.png" alt="Quotes" />
          </div>
        </div>
        <h1 className="text-5xl max-w-lg text-center md:my-20 my-10">
          Explore the world of{" "}
          <span className="text-primary">fantastic quotes</span>
        </h1>
        <div className="max-w-lg text-center mb-6">
          <h2 className="text-primary text-3xl mb-2">Most upvoted quotes</h2>
          <p className="text-lg">
            Most upvoted quotes on the platform. Sign up or login to like the
            quotes and keep them saved in your profile
          </p>
        </div>
        <div className="w-full max-w-6xl mb-10">
          <QuotesGrid quotes={mostLikedQuotes} />
        </div>
        <LinkButton
          path="/register"
          text="Sign up to see more"
          alternative={true}
          className="mb-10"
        />
      </div>
    );
  else
    return (
      <div className="flex flex-col items-center mx-6 md:mt-20 mt-4">
        <img
          src={TopRight}
          alt=""
          className="fixed top-0 right-0 md:visible invisible select-none pointer-events-none"
          style={{ zIndex: -1 }}
        />
        <img
          src={Left}
          alt=""
          className="fixed left-0 md:visible invisible select-none pointer-events-none"
          style={{ zIndex: -1 }}
        />
        <img
          src={Right}
          alt=""
          className="fixed right-0 md:visible invisible select-none pointer-events-none"
          style={{ zIndex: -1 }}
        />

        <div className="max-w-lg text-center mb-6">
          <h2 className="text-primary text-3xl mb-2">Quote of the day</h2>
          <p className="text-lg">Quote of the day is randomly choosen quote.</p>
        </div>
        <div className="w-full max-w-lg">
          {newestQuotes.length > 0 && (
            <VoteCard
              userId={newestQuotes[0].user.id}
              quote={newestQuotes[0].quote}
              firstName={newestQuotes[0].user.firstName}
              lastName={newestQuotes[0].user.lastName}
              karma={newestQuotes[0].karma}
            />
          )}
        </div>

        <div className="max-w-lg text-center mb-6 mt-32">
          <h2 className="text-primary text-3xl mb-2">Most upvoted quotes</h2>
          <p className="text-lg">
            Most upvoted quotes on the platform. Give a like to the ones you
            like to keep them saved in your profile.
          </p>
        </div>
        <div className="w-full max-w-6xl mb-10">
          <QuotesGrid quotes={mostLikedQuotes} />
        </div>
        <Button
          text="Load more"
          alternative={true}
          onClick={() => loadMore("karma")}
        />

        <div className="max-w-lg text-center mb-6 mt-32">
          <h2 className="text-primary text-3xl mb-2">Most recent quotes</h2>
          <p className="text-lg">
            Recent quotes updates as soon user adds new quote. Go ahed show them
            that you seen the new quote and like the ones you like.
          </p>
        </div>
        <div className="w-full max-w-6xl mb-10">
          <QuotesGrid quotes={newestQuotes} />
        </div>
        <Button
          text="Load more"
          alternative={true}
          className="mb-32"
          onClick={() => loadMore("newest")}
        />
      </div>
    );
};

export default FrontPage;
