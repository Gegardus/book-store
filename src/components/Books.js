import React from 'react';
import AddForm from './bookComponents/AddForm';
import BookList from './bookComponents/BookList';

const Books = () => (
  <main>
    <BookList />
    <h2 className="add-book">ADD NEW BOOK</h2>
    <AddForm />
  </main>
);

export default Books;
