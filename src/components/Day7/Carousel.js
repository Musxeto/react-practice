import React,{useState} from 'react'
import './Carousel.css';

function Carousel( {images} ) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

    return (
    <div className='carousel'>
      <button onClick={handlePrev} className='carousel-button'>Prev</button>
     <img className='carousel-image' src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={handleNext} className='carousel-button'>Next</button>
    </div>
  )
}

export default Carousel;
