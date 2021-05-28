import React from "react";
import { NavLink, Link, Route, useRouteMatch } from "react-router-dom";

function CreateDeck() {
  // navbar with home / Create Deck
  //Create Deck heading
  //form: name (Deck Name), Description (Brief description of the deck)
  // two buttons: cancel, submit
  const { url } = useRouteMatch();

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            id="deckName"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Brief description of the deck"
          ></textarea>
        </div>
      </form>
      <Link to="/">
        <button type="button" className="btn btn-secondary m-1">
          Cancel
        </button>
      </Link>
      {/* Submit button should take the user to the Viewdeck screen */}
      <Link to={`${url}decks`}>
        <button type="button" className="btn btn-info m-1">
          Submit
        </button>
      </Link>
    </div>
  );
}

export default CreateDeck;
