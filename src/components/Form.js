import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookApi } from '../redux/books/booksSlice';
import '../scss/Form.scss';

function Form() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const dispatch = useDispatch();

  const handleInputTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleInputAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const handleInputCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const checkValidity = () => {
    if (!bookTitle || !bookCategory || !bookCategory) return;
    const bookObj = {
      title: bookTitle,
      author: bookAuthor,
      category: bookCategory,
    };
    dispatch(addBookApi(bookObj));
    setBookTitle('');
    setBookAuthor('');
    setBookCategory('');
  };

  return (
    <section className="addBookContainer">
      <div className="line" />
      <span className="addNewBook">ADD NEW BOOK</span>
      <form className="formContainer">
        <input
          type="text"
          className="inputBookTitle"
          placeholder="Book Title"
          onChange={handleInputTitle}
          value={bookTitle}
          required
        />
        <input
          type="text"
          className="inputBookAuthor"
          placeholder="Book Author"
          onChange={handleInputAuthor}
          value={bookAuthor}
          required
        />
        <select
          className="selectCategory"
          onChange={handleInputCategory}
          value={bookCategory}
          required
        >
          <option value="">Select Category</option>
          <option value="Action">Action</option>
          <option value="Classic">Classic</option>
          <option value="Economy">Economy</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Unknown">Unknown</option>
        </select>
        <button type="submit" className="addBook" onClick={checkValidity}>
          ADD BOOK
        </button>
      </form>
    </section>
  );
}

export default Form;
