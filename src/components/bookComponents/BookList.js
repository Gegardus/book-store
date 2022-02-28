import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const books = [
    {
      title: 'The Hunger Games',
      id: 0,
    },
    {
      title: 'Dune',
      id: 1,
    },
    {
      title: 'Capital in the Twenty-First Century',
      id: 2,
    },
  ];
  return (
    <div>
      <h2 className="bookList"> </h2>
      {
        books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))
    }
    </div>
  );
};

export default BookList;
