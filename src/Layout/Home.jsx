import React from "react";
import Deck from "./Deck";

//  This page displays a preview of each of the available
//  study decks

function Home({ decks }) {
  //  loop through all the decks and create a card preview of each
  const deckList = decks.map((deck) => (
    <li key={deck.id}>
      <Deck
        deckId={deck.id}
        name={deck.name}
        description={deck.description}
        count={deck.cards.length}
      />
    </li>
  ));

  return (
    <>
        <main className="container">
          <section className="row">
            <ul className="list-unstyled">{deckList}</ul>
          </section>
        </main>
    </>
  );
}

export default Home;
