import React from 'react';
// import '../scss/BookList.scss';
import PropTypes from 'prop-types';

import BookCard from './BookCard';

function BookList(props) {
  const {
    books,
  } = props;
  return (
    <div className="bookListContainer">
      {books.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      genre: PropTypes.string,
      completed: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
