import React from "react";
import { useParams, Link } from "react-router-dom";
import { listCards, readDeck } from "../utils/api";

function Study({ cards, setCards }) {
  const { deckId } = useParams();

  readDeck(deckId);
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>

      <h4>Study!</h4>
    </div>
  );
}

export default Study;
