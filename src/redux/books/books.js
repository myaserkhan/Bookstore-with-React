// Action Types
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

// Initial State
const initialState = [];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, action.book];
    case REMOVED_BOOK:
      return [...state.filter((book) => book.id !== action.book.id)];
    default:
      return state;
  }
};

// Action Creators
const addedBook = (book) => ({
  type: ADDED_BOOK,
  book,
});

const removedBook = (book) => ({
  type: REMOVED_BOOK,
  book,
});

// Exports
export { addedBook, removedBook };
export default reducer;
