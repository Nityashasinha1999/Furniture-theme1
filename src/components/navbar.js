/** @format */

import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import down from "../assets/images/icons/down-ar.png";

function Navbar() {
  const { pathname } = useLocation();
  const [display, setDisplay] = useState(false);
  const [nav, setNav] = useState(false);

  const toggle = () => {
    setDisplay(!display);
  };
  const navD = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [nav]);
  return (
    <div className='App'>
      <div className='navB'>
        <div class='nav container'>
          <input type='checkbox' id='nav-check' />

          <div class='nav-header'>
            <div class='nav-title'>Madhuri Furnitures</div>
          </div>
          <div class='nav-btn' onClick={navD}>
            <label for='nav-check'>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          {nav === true ? (
            <div class='nav-links'>
              <NavLink
                exact
                to='/'
                className='category__nav'
                activeClassName='category__active'
                onClick={navD}>
                Home
              </NavLink>

              <NavLink
                exact
                to='/'
                isActive={() =>
                  [
                    "/almira",
                    "/artwork",
                    "/bed",
                    "/chair",
                    "/door",
                    "dining",
                    "/sculpture",
                    "/tables",
                  ].includes(pathname)
                }
                className='category__nav category__headerBlk'
                activeClassName='category__active'>
                <span className='cat__arr'>
                  <p>Categories</p>

                  <img src={down} alt='down' onClick={toggle} />
                </span>

                {display == true ? (
                  <ul className='d-none-desk'>
                    <Link to='/almira' onClick={navD}>
                      Almirah
                    </Link>
                    <Link to='/artwork' onClick={navD}>
                      Artwork
                    </Link>
                    <Link to='/bed' onClick={navD}>
                      Bed
                    </Link>
                    <Link to='/chair' onClick={navD}>
                      Chairs
                    </Link>
                    <Link to='/door' onClick={navD}>
                      Door
                    </Link>
                    <Link to='/dining' onClick={navD}>
                      Dining Sets
                    </Link>
                    <Link to='/sculpture' onClick={navD}>
                      Sculpture
                    </Link>
                    <Link to='/tables' onClick={navD}>
                      Tables
                    </Link>
                  </ul>
                ) : (
                  <p></p>
                )}
              </NavLink>
              <NavLink
                exact
                to='/about'
                className='category__nav'
                activeClassName='active category__active'
                onClick={navD}>
                About Us
              </NavLink>
              <NavLink
                exact
                to='/contact'
                className='category__nav'
                activeClassName='active category__active'
                onClick={navD}>
                Contact Us
              </NavLink>
            </div>
          ) : (
            <p></p>
          )}

          {/* laptop view */}

          <div class='nav-links nav-desk'>
            <NavLink
              exact
              to='/'
              className='category__nav'
              activeClassName='category__active'>
              Home
            </NavLink>

            <NavLink
              exact
              to='/'
              isActive={() =>
                [
                  "/almira",
                  "/artwork",
                  "/bed",
                  "/chair",
                  "/door",
                  "dining",
                  "/sculpture",
                  "/tables",
                ].includes(pathname)
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
                  <Link to='/chair'>Chairs</Link>
                  <Link to='/door'>Door</Link>
                  <Link to='/dining'>Dining Sets</Link>
                  <Link to='/sculpture'>Sculpture</Link>
                  <Link to='/tables'>Tables</Link>
                </ul>
              </div>
            </NavLink>
            <NavLink
              exact
              to='/about'
              className='category__nav'
              activeClassName='active category__active'
              onClick={toggle}>
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
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
