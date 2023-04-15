import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';
import AddBook from './AddBook';
import Book from './Books';

const DisplayBooks = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
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
