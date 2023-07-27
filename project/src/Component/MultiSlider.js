import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = [
  { url: 'https://i.dummyjson.com/data/products/9/3.png' },
  { url: 'https://i.dummyjson.com/data/products/9/3.png' },
  { url: 'https://i.dummyjson.com/data/products/9/3.png' },
  { url: 'https://i.dummyjson.com/data/products/9/3.png' },
  { url: 'https://i.dummyjson.com/data/products/9/3.png' },
  { url: 'https://i.dummyjson.com/data/products/9/3.png' },
];

const ImageSlider = () => {
  // Carousel settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{  }}>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        {images.map((image, index) => (
              <img src={image.url} alt={`Slide ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
