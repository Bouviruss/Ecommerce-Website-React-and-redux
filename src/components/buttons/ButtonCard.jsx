import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonCard = () => {
  return (
    <>
      <NavLink to='/cart' className='btn btn-outline-primary ms-3'>
        <span className='fa fa-shopping-cart me-1'></span>
        Cart (0)
      </NavLink>
    </>
  );
};

export default ButtonCard;
