import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  category, title, author, remove,
}) => (
  <>
    <p>{category}</p>
    <h2>{title}</h2>
    <p>{author}</p>
    <button type="button" onClick={remove}>Delete</button>
  </>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
