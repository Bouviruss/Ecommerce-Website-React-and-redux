import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Login from './buttons/Login';
import Signup from './buttons/Signup';
import ButtonCard from './buttons/ButtonCard';

const Header = () => {
  return (
    <>
      <Nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <NavLink className='navbar-brand fw-bold' to='/'>
                BVS Shop
              </NavLink>
              <NavLink className='nav-link active' aria-current='page' to='/'>
                Home
              </NavLink>
              <NavLink className='nav-link' to='/product'>
                Product
              </NavLink>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
              <NavLink className='nav-link' to='/contact'>
                Contact
              </NavLink>
            </div>
          </div>
          <Login />
          <Signup />
          <ButtonCard />
        </div>
      </Nav>
    </>
  );
};

export default Header;
