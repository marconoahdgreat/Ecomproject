import React from "react";
import "./Categories.css";

import { Link } from "react-router-dom";

function Catergories() {
  return (
    <div className="CategoryContainer">
      <div className="navlinksC">
        <div>
          <ul>
            <li>
              <Link to="/">Fasion</Link>
            </li>
            <li>
              <Link to="/">Gadgets</Link>
            </li>

            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/">Pets</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Catergories;
