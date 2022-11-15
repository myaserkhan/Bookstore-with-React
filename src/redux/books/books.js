// Action Types
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

// Initial State
const initialState = [];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, action.payload];
    case REMOVED_BOOK:
      return [...state.filter((el) => el.id !== action.payload.id)];
    default:
      return state;
  }
};

// Action Creators
const addBook = () => ({
  type: ADDED_BOOK,
  payload: {
    id: 'bookId',
    title: 'bookTitle',
    author: 'bookAuthor',
  },
});

const remBook = () => ({
  type: REMOVED_BOOK,
  payload: {
    id: 'bookID',
  },
});

// Exports
export { addBook, remBook };
export default reducer;
