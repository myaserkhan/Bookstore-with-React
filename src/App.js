import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
