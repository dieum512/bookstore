import AddBook from './AddBook';
import Book from './Books';

const DisplayBooks = () => {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Dieum',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Akonkwa',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Lwabag',
    },
    {
      id: 4,
      title: 'Book 4',
      author: 'Kuji',
    },
  ];

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default DisplayBooks;
