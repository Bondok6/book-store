import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const DUMMYDATA = [
    {
      id: 1,
      title: 'The Hunger Game',
      author: 'Suzanne Collins',
      category: 'action',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'science fiction',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'economy',
    },
  ];

  const books = useSelector((state) => state.booksReducer);

  return (
    <div>
      <ul>
        {[...DUMMYDATA, ...books].map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
