import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../redux/books/books';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          category={book.category}
        />
      ))}
    </ul>
  );
};

export default BookList;
