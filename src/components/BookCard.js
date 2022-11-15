import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
// import '../scss/BookCard.scss';

function BookCard({ book }) {
  return (
    <section className="bookCardWrapper">
      <div className="bookCardContainer">
        <span className="genre">{book.category}</span>
        <span className="title">{book.title}</span>
        <span className="author">{book.author}</span>
        <div className="options">
          <span className="comments">Comments</span>
          {' '}
          |
          <span className="remove">Remove</span>
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
          Chapter 01
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
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    completed: PropTypes.number,
  }).isRequired,
};

export default BookCard;
