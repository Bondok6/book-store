import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => (
  <header className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-5">
      <div className="container">
        <h1 className="display-4">BookStore CMS</h1>

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
      </div>
    </nav>
  </header>
);

export default MainHeader;
