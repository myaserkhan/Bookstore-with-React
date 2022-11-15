import React from 'react';
import { useSelector } from 'react-redux';
import BookList from '../components/BookList';
import Form from '../components/Form';

function Home() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <BookList books={books} />
      <Form />
    </>
  );
}

export default Home;
