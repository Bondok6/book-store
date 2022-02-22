import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));

    // Clear Form Inputs
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <select
        name="categories"
        id="category"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="action">Action</option>
        <option value="science">Science Fiction</option>
        <option value="economy">Economy</option>
      </select>

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
