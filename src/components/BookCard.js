import React from 'react';
import PropTypes from 'prop-types';

// import '../scss/BookCard.scss';

function BookCard({ book }) {
  return (
    <section className="bookCardWrapper">
      <div className="bookCardContainer">
        <span className="genre">{book.genre}</span>
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
          <div className="outer">
            <div className="inner" />
          </div>
          <svg
            className="svgCircle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="80px"
            height="80px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#307bbe" />
                <stop offset="100%" stopColor="#379cf6" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="37.5" strokeLinecap="round" />
          </svg>
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
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    completed: PropTypes.string,
    currentLesson: PropTypes.string,
  }).isRequired,
};

export default BookCard;
