import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/booksSlice';
// import '../scss/BookCard.scss';

function BookCard({ book }) {
  const dispatch = useDispatch();
  return (
    <section className="bookCardWrapper">
      <div className="bookCardContainer">
        <span className="category">{book.category}</span>
        <span className="title">{book.title}</span>
        <span className="author">{book.author}</span>
        <div className="options">
          <span className="comments">Comments</span>
          {' '}
          |
          <button type="button" className="remove" onClick={() => dispatch(delBook(book.item_id))}>Remove</button>
          {' '}
          |
          <span className="edit">Edit</span>
        </div>
      </div>
      <div className="progressContainer">
        <div className="progressCircle">
          <Progress
            type="circle"
            width={80}
            format={() => ''}
            strokeColor={{
              '0%': '#307bbe',
              '100%': '#379cf6',
            }}
            trailColor="#e8e8e8"
            percent={book.completed}
          />
        </div>
        <div className="progressPercent">
          <span className="percentComplete">
            {`${book.completed}%`}
          </span>
          <span className="completed">
            Completed
          </span>
        </div>
        <div className="line2" />
      </div>
      <div className="progressStatus">
        <span className="currentChapter">
          Current Chapter
        </span>
        <span className="currentLesson">
          {book.currentLesson}
        </span>
        <span className="updateProgress">
          Update progress
        </span>
      </div>
    </section>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    completed: PropTypes.number,
    currentLesson: PropTypes.string,
  }).isRequired,
};

export default BookCard;
