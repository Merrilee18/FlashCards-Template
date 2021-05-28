import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function EditCard() {

    const { url } = useRouteMatch();

    return (
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to={`${url}`}>Deck Name</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Edit Card
              </li>
            </ol>
          </nav>
          <h2>Edit Card</h2>
          <form>
          <div className="form-group">
              <label for="Description">Front</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Brief description of the deck"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="Description">Back</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Brief description of the deck"
              ></textarea>
            </div>
          </form>
          <Link to="/">
            <button type="button" className="btn btn-secondary mr-2">
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

export default EditCard;