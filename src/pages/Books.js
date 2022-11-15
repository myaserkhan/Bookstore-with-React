import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

function Home() {
  const books = [
    {
      item_id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      completed: '64',
    },
    {
      item_id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      completed: '8',
    },
    {
      item_id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      completed: '0',
    },
  ];
  return (
    <>
      <BookList books={books} />
      <AddBook />
    </>
  );
}

export default Home;
