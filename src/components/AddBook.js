import React from 'react';
// import '../scss/AddBook.scss';

function AddBook() {
  const handleInputTitle = (e) => {
    console.log(e);
  };

  const handleInputAuthor = (e) => {
    console.log(e);
  };

  const handleAddBook = () => {
    alert('Book Added');
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
        />
        <input
          type="text"
          className="inputBookAuthor"
          placeholder="Book Author"
          onChange={handleInputAuthor}
        />
        <button type="button" className="addBook" onClick={handleAddBook}>ADD BOOK</button>
      </form>
    </section>
  );
}

export default AddBook;
