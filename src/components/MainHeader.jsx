import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => (
  <header className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-5">
      <h1 className="text-primary">Book Store</h1>

      <div className="navbar-collapse">
        <ul className="navbar-nav m-3">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-link">
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default MainHeader;
