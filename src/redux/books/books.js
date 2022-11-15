import { v4 as uuidv4 } from 'uuid';
// Action Types
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

// Initial State
const initialState = [
  {
    item_id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    completed: '64',
  },
  {
    item_id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
    completed: '8',
  },
  {
    item_id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    completed: '0',
  },
];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, action.payload];
    case REMOVED_BOOK:
      return [...state.filter((el) => el.payload.item_id !== action.payload.item_id)];
    default:
      return state;
  }
};

// Action Creators
const addBook = () => ({
  type: ADDED_BOOK,
  payload: {
    item_id: uuidv4(),
    title: 'bookTitle',
    author: 'bookAuthor',
    completed: Math.floor(Math.random() * 100),
  },
});

const remBook = () => ({
  type: REMOVED_BOOK,
  payload: {
    test_id: 'bookID',
  },
});

// Exports
export { addBook, remBook };
export default reducer;
