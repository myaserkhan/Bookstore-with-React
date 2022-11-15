import { v4 as uuidv4 } from 'uuid';
// Action Types
const ADDED_BOOK = 'ADDED_BOOK';
const REMOVED_BOOK = 'REMOVED_BOOK';

// Initial State
const initialState = [
  {
    item_id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    completed: 64,
    currentLesson: 'Chapter 17',
  },
  {
    item_id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
    completed: 8,
    currentLesson: 'Chapter 3: "A Lesson Learned"',
  },
  {
    item_id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    completed: 0,
    currentLesson: 'Introduction',
  },
];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, action.payload];
    case REMOVED_BOOK:
      return [...state.filter((el) => el.item_id !== action.payload.item_id)];
    default:
      return state;
  }
};

// Action Creators
const addBook = (obj) => ({
  type: ADDED_BOOK,
  payload: {
    item_id: uuidv4(),
    title: obj.title,
    author: obj.author,
    category: obj.category,
    completed: Math.floor(Math.random() * 100),
    currentLesson: `Chapter ${Math.floor(Math.random() * 15)}`,
  },
});

const remBook = (bookID) => ({
  type: REMOVED_BOOK,
  payload: {
    item_id: bookID,
  },
});

// Exports
export { addBook, remBook };
export default reducer;
