import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook, addBook } from '../../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: Date.now(),
      title,
      author,
      category: 'Nonfiction',
    };
    dispatch(addBook(newBook));
    dispatch(addNewBook(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="add-book-title">ADD NEW BOOK</h2>
      <input
        id="title"
        type="text"
        name="Add"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book title"
        required
        className="title-input"
      />
      <input
        id="author"
        type="text"
        name="Add"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
        className="author-input"
      />
      <button type="submit" className="add-book-btn">ADD BOOK</button>
    </form>
  );
};

export default AddBook;
