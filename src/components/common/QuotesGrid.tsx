import React from "react";
import { QuoteRes } from "../../api/quotesApi";
import VoteCard from "./VoteCard";

interface QuotesGridProps {
  quotes: QuoteRes[];
}

const QuotesGrid: React.FC<QuotesGridProps> = ({ quotes }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
      {quotes.map((value) => (
        <VoteCard
          key={value.user.id}
          userId={value.user.id}
          quote={value.quote}
          firstName={value.user.firstName}
          lastName={value.user.lastName}
          karma={value.karma}
        />
      ))}
    </div>
  );
};
export default QuotesGrid;
