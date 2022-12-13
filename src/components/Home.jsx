import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstPic from '../img/1.png';
import SecondPic from '../img/2.png';
const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-50 mx-auto xs-w100'
            src={FirstPic}
            alt='First slide'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-50 mx-auto xs-w100'
            src={SecondPic}
            alt='Second slide'
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
