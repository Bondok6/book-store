import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const BookItem = (props) => {
  // prettier-ignore
  const {
    id,
    title,
    category,
  } = props;

  const dispatch = useDispatch();

  const removeHandler = () => {
    console.log(id);
    dispatch(deleteBook(id));
  };

  return (
    <li>
      <span>{category}</span>
      <h3>{title}</h3>
      <h5>Kyrillos Hany</h5>
      <button type="button" onClick={removeHandler}>
        Remove
      </button>
    </li>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
