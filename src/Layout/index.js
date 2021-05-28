import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
  Link,
} from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateDeck from "./CreateDeck";
import { listDecks } from "../utils/api/index.js";
import Study from "./Study";
import ViewDeck from "./ViewDeck";
import EditDeck from "./EditDeck";
import Deck from "./Deck";
import EditCard from "./EditCard";
import AddCard from "./AddCard";

function Layout() {
  const [reRender, setReRender] = useState(false);
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({});

  const { url, path } = useRouteMatch();
  const history = useHistory();

  // const deckList = decks.find((deck) => (
  //   <li key={deck.id}>
  //     <Deck
  //       deckId={deck.id}
  //       name={deck.name}
  //       description={deck.description}
  //       count={deck.cards.length}
  //     />
  //   </li>
  // ));

  useEffect(() => {
    const abortController = new AbortController();

    const settingDecks = async () => {
      try {
        const data = await listDecks(abortController.signal);
        setDecks(() => {
          return data;
        });
      } catch (error) {
        if (error.name === "AbortError") {
          console.log(error);
        } else {
          throw error;
        }
      }
    };

    settingDecks();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Link to="/decks/new">
              <button type="button" className="btn btn-info mb-3  ">
                <i class="bi bi-plus-square"></i> Create Deck
              </button>
            </Link>
            <Home decks={decks} />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck
              deck={deck}
              setDeck={setDeck}
              reRender={reRender}
              setReRender={setReRender}
            />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study cards={cards} setCards={setCards} />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
