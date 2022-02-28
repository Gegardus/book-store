import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div>
      {books.length ? (
        books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))
      ) : (
        <h3 className="bookList">There is no books!</h3>
      )}
    </div>
  );
};

export default BookList;