import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return(
    <div className="navbar">
      <div className="logo"> E-commerce App</div>
      <div className="info"> 
        <a href="/"> 
          Favories
          <i className="fa fa-heart" />
        </a>
        <a href="/">
          Cart
          <i className="fa fa-shopping-cart" />
          </a>
      </div>
    </div>
  );
}