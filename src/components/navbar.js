/** @format */

import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import down from "../assets/images/icons/down-ar.png";

function Navbar() {
  const { pathname } = useLocation();
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay(!display);
  };
  return (
    <div className='App'>
      <div className='navB'>
        <div class='nav container'>
          <input type='checkbox' id='nav-check' />

          <div class='nav-header'>
            <div class='nav-title'>Madhuri Furnitures</div>
          </div>
          <div class='nav-btn'>
            <label for='nav-check'>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class='nav-links'>
            <NavLink
              exact
              to='/'
              className='category__nav'
              activeClassName='category__active'>
              Home
            </NavLink>

            <NavLink
              exact
              to='/category'
              isActive={() =>
                ["/category", "/almira", "/artwork", "/bed"].includes(pathname)
              }
              className='category__nav category__headerBlk'
              activeClassName='category__active'>
              <span className='cat__arr'>
                <p>Categories</p>

                <img src={down} alt='down' onClick={toggle} />
              </span>
              <div className='category__sub d-none-mob'>
                <ul>
                  <Link to='/almira'>Almirah</Link>
                  <Link to='/artwork'>Artwork</Link>
                  <Link to='/bed'>Bed</Link>
                  <Link to='/'>Chairs</Link>
                  <Link to='/'>Door</Link>
                  <Link to='/'>Dining Sets</Link>
                  <Link to='/'>Sculpture</Link>
                  <Link to='/'>Tables</Link>
                  <Link to='/'>Wood</Link>
                </ul>
              </div>
              {display == true ? (
                <ul className='d-none-desk'>
                  <Link to='/almira'>Almirah</Link>
                  <Link to='/artwork'>Artwork</Link>
                  <Link to='/bed'>Bed</Link>
                  <Link to='/'>Chairs</Link>
                  <Link to='/'>Door</Link>
                  <Link to='/'>Dining Sets</Link>
                  <Link to='/'>Sculpture</Link>
                  <Link to='/'>Tables</Link>
                  <Link to='/'>Wood</Link>
                </ul>
              ) : (
                <p></p>
              )}
            </NavLink>
            <NavLink
              exact
              to='/about'
              className='category__nav'
              activeClassName='active category__active'>
              About Us
            </NavLink>
            <NavLink
              exact
              to='/contact'
              className='category__nav'
              activeClassName='active category__active'>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
