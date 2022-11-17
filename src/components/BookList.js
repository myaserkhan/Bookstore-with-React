import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import '../scss/BookList.scss';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from './BookCard';
import { fetchBookApi } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApi());
  }, []);

  const headerStyle = {
    color: '#888',
    textAlign: 'center',
  };
  if (!books.length) return <h1 style={headerStyle}>There are no books to view.</h1>;
  return (
    <div className="bookListContainer">
      {books.length > 0 && books[0].map((book) => <BookCard key={uuidv4()} book={book} />)}
    </div>
  );
}

export default BookList;
