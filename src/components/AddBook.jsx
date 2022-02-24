import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(addNewBook(newBook));

    // Clear Form Inputs
    setTitle('');
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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

      <button type="submit" onClick={submitBookToStore}>
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
