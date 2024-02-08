import React,{useState} from 'react'
import './Carousel.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    return (
      <div className="carousel">
        <button onClick={handlePrev} className="carousel-button">
        <i class="arrow left"></i>
        </button>
        <img
          className={`carousel-image ${currentIndex !== 0 ? 'fade-out' : ''} carousel-next`}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
        <button onClick={handleNext} className="carousel-button">
          <i class="arrow right"></i>
        </button>
      </div>
    );
  };
  
  export default Carousel;
