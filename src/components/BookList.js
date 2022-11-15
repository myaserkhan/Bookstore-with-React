import React from 'react';
// import '../scss/BookList.scss';
import PropTypes from 'prop-types';

import BookCard from './BookCard';

function BookList(props) {
  const {
    books,
  } = props;
  const headerStyle = {
    color: '#888',
    textAlign: 'center',
  };
  if (!books.length) return <h1 style={headerStyle}>There are no books to view.</h1>;
  return (
    <div className="bookListContainer">
      {books.map((book) => <BookCard key={book.item_id} book={book} />)}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
      completed: PropTypes.number,
    }),
  ).isRequired,
};

export default BookList;
