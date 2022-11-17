import React, { useEffect } from 'react';
import '../scss/BookList.scss';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from './BookCard';
import { fetchBookApi } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApi());
  }, [books.length, dispatch]);

  if (books.length) {
    return (
      <div className="bookListContainer">
        {books[0].map((book) => <BookCard key={book.item_id} book={book} />)}
      </div>
    );
  }

  return (<h1 className="headerStyle">There are no books to view.</h1>);
}

export default BookList;
