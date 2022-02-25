import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';
import '../Styles/AddBook.css';

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
    <section className="form-section">
      <h2 className="form-title">Add New Book</h2>
      <form onSubmit={submitBookToStore}>
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
          <option value="science">Science</option>
          <option value="economy">Economy</option>
          <option value="technology">Technology</option>
          <option value="games">Games</option>
        </select>

        <button className="add-btn" type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
