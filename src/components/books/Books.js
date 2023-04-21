import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  category, title, author, remove,
}) => (
  <div className="books-section">
    <p className="book-category">{category}</p>
    <h2 className="book-title">{title}</h2>
    <p className="book-author">{author}</p>
    <button type="button" onClick={remove}>Delete</button>
  </div>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
