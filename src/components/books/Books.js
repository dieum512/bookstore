import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <h2>{title}</h2>
    <p>{author}</p>
    <button type="button">Delete</button>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
