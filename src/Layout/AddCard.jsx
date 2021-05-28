import React from "react";
import { Link } from "react-router-dom";

function AddCard() {
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
          <h2>Name: Add Card</h2>
          <form>
          <div className="form-group">
              <label for="Description">Front</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Front side of the card"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="Description">Back</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Back side of the card"
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
            <button type="button" className="btn btn-info ml-2">
              Submit
            </button>
          </Link>
        </div>
      );
}

export default AddCard;