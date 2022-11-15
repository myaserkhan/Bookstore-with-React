import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
// import '../scss/Header.scss';

function Header() {
  return (
    <section className="headerWrapper">
      <div className="headerContainer">
        <span className="Bookstore-CMS">Bookstore CMS</span>
        <NavLink
          to="/"
          className={(isActive) => `nav-link${!isActive ? ' unselected' : ''}`}
        >
          <span className="books">BOOKS</span>
        </NavLink>
        <NavLink
          to="/categories"
          className={(isActive) => `nav-link${!isActive ? ' unselected' : ''}`}
        >
          <span className="categories">CATEGORIES</span>
        </NavLink>
      </div>
      <button type="submit" aria-label="User" className="oval"><FaUser /></button>
    </section>
  );
}

export default Header;
