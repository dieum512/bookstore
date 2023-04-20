import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks, removeBook, deleteBook } from '../../redux/books/booksSlice';
import AddBook from './AddBook';
import Book from './Books';

const DisplayBooks = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <Book
              category={book.category}
              title={book.title}
              author={book.author}
              remove={() => handleRemove(book.item_id)}
            />
          </li>
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default DisplayBooks;
