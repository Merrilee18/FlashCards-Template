import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { deleteDeck } from "../utils/api/index.js";
//Displays the deck name, count, and description.
//Has three buttons: view, study, delete

function Deck({ deckId, name, description, count }) {
  const { url } = useRouteMatch();

  function deleteHandler() {
    window.confirm("Are you sure you want to delete this deck?");
    deleteDeck(deckId);
  }

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5>{name}</h5>
            <h6>{count} cards</h6>
            <p>{description}</p>
            {/* This link takes you to "ViewDeck" */}
            <div className="row">
              <div className="col">
                <Link to={`${url}decks/${deckId}`}>
                  <button type="button" className="btn btn-secondary mr-1">
                  <i class="bi bi-eye"></i> View
                  </button>
                </Link>
                {/* This link takes you to Study */}
                <Link to={`${url}decks/${deckId}/study`}>
                  <button type="button" className="btn btn-info mr-1">
                  <i class="bi bi-book"></i> Study
                  </button>
                </Link>
              </div>
              <div className="col text-right">
                <Link to={`${url}decks/${deckId}`}>
                  <button
                    type="button"
                    onClick={deleteHandler}
                    className="btn btn-danger"
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deck;
