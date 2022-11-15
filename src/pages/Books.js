import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

function Home() {
  const books = [
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      genre: 'Action',
      completed: '64',
      currentLesson: 'Chapter 17',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      completed: '8',
      currentLesson: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      genre: 'Economy',
      completed: '0',
      currentLesson: 'Introduction',
    },
  ];
  return (
    <>
      <Header />
      <BookList books={books} />
      <AddBook />
    </>
  );
}

export default Home;
