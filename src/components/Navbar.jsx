import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>React MYSQL</h1>
      <ul>
        
        <li>
            <Link to="/">Home</Link>
        </li>

        <li>
        <Link to="/new">tasks</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;