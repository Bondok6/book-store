import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ title, author, category }) => (
  <li>
    <span>{category}</span>
    <h3>{title}</h3>
    <h5>{author}</h5>
    <button type="button">Remove</button>
  </li>
);

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
