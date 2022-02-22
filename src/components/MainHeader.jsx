import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/bookstore/books">Books</Link>
        </li>
        <li>
          <Link to="/bookstore/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainHeader;
