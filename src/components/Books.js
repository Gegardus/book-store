import React from 'react';
import AddForm from './bookComponents/AddForm';
import BookList from './bookComponents/BookList';

const Books = () => (
  <main>
    <BookList />
    <div className="hr">&nbsp;</div>
    <h2 className="add-book">ADD NEW BOOK</h2>
    <AddForm />
  </main>
);

export default Books;
