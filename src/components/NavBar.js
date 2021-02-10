import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <Link to="/">
          Home |
        </Link>
      </li>
      <li>
        <Link to="/calculator">
          Calculator |
        </Link>
      </li>
      <li>
        <Link to="/quote">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;