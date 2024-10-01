

import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import './NavBar.css';
import Cart from "../Cart";

const NavBar = () => {
  const categories = ['Mate1', 'Mate2', 'Mate3'];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink 
          to="/" 
          style={{ textDecoration: 'none', color: 'white' }}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          <h1>Mates</h1>
        </NavLink>
      </div>
      <ul className="navbar-categories">
        {categories.map((category, index) => (
          <li key={index} className="navbar-item">
            <NavLink 
              to={`/category/${category.toLowerCase()}`} 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;

