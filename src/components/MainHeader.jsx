import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainHeader;
