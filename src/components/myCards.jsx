import { useMyCards } from "../hooks/useMyCards";
import PageHeader from "./common/pageHeader";
import LinkToButton from "./common/linkToButton";

import Card from "./card";

const MyCards = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />

      <div className="row">
        <LinkToButton btnColor= "primary" toLink="/create-card" btnName = "Create a New Card"/>
      </div>

      <div className="row">
        {!cards.length ? (
          <p>No Cards..</p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};

export default MyCards;
