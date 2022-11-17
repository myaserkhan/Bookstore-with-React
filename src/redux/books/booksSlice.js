import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Initial State
const initialState = [];

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/juyEYeKeTge7d2ZVOxXe/books';

// Async Action Creators
export const fetchBookApi = createAsyncThunk('fetchBookApi', async () => {
  const response = await axios.get(url);
  return response.data;
});

// Slice Reducer
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer: (state, action) => [action.payload],
      prepare: (value) => ({
        payload: {
          ...value,
          item_id: uuidv4(),
          completed: Math.floor(Math.random() * 100),
          currentLesson: `Chapter ${Math.floor(Math.random() * 15)}`,
        },
      }),
    },
    delBook: (state, action) => [
      ...state.filter((el) => el.item_id !== action.payload),
    ],
  },
  extraReducers: {
    [fetchBookApi.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload)
        .map((el) => ({
          item_id: el,
          completed: Math.floor(Math.random() * 100),
          currentLesson: `Chapter ${Math.floor(Math.random() * 15)}`,
          ...action.payload[el][0],
        }));
      return [books];
    },
  },
});

export const { addBook, delBook } = booksSlice.actions;
export default booksSlice.reducer;
