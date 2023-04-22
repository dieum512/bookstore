import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  category, title, author, remove,
}) => (
  <>
    <div className="books-container">
      <div className="books-section">
        <p className="book-category">{category}</p>
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <div className="buttons">
          <button type="button">Comment</button>
          <button type="button" onClick={remove}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="completed-section">
        <div className="circle" />
        <div>
          <h2 className="percantage">100%</h2>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="information">
        <h3>CURRENT CHAPTER</h3>
        <p>Introduction</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
