import React from 'react';

const AddBook = () => {
  const addBookHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={addBookHandler}>
      <input type="text" placeholder="Book Title" required />

      <select name="categories" id="category">
        <option value="action">Action</option>
        <option value="science">Science Fiction</option>
        <option value="economy">Economy</option>
      </select>

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
