import React from "react";
import { Link } from "react-router-dom";

function EditDeck() {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item">
            <Link to="#">Deck Name</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h2>Edit Deck</h2>
      <form>
        <div className="form-group">
          <label htmlfor="name">Name</label>
          <input
            type="name"
            className="form-control"
            id="deckName"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label for="Description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Brief description of the deck"
          ></textarea>
        </div>
      </form>
      <Link to="/">
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
      </Link>
      {/* Submit button should take the user to the deck screen */}
      <Link to="/">
        <button type="button" className="btn btn-info">
          Submit
        </button>
      </Link>
    </div>
  );
}

export default EditDeck;
