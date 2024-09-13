import React, { useState, useEffect } from 'react';
import './Slider.scss';
import cross from '../../assets/cross.png';
import arrow from '../../assets/arrow-slider.png';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diffX = e.clientX - startX;
    if (diffX > 50) {
      prevSlide();
      handleMouseUp();
    } else if (diffX < -50) {
      nextSlide();
      handleMouseUp();
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diffX = e.touches[0].clientX - startX;
    if (diffX > 50) {
      prevSlide();
      handleTouchEnd();
    } else if (diffX < -50) {
      nextSlide();
      handleTouchEnd();
    }
  };

  const handleSlideClick = () => {
    setAutoPlay(false);
    setIsFullScreen(true);
    document.querySelector('body').style.overflowY = 'hidden';
  };

  const handleClose = () => {
    setIsFullScreen(false);
    setCurrentIndex(0);
    setAutoPlay(true);
    document.querySelector('body').style.overflowY = 'auto';
  };

  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(nextSlide, 3000);
      return () => clearInterval(intervalId);
    }
  }, [autoPlay]);

  return (
    <div>
      <div
        className={`slider ${isFullScreen ? 'fullscreen' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%) ` }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index} onClick={handleSlideClick}>
              <img
                className="slide__img"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button className="arrow left" onClick={prevSlide}>
          <img
            className=" arrow-slider-main arrow__left-img"
            src={arrow}
            alt=""
          />
        </button>
        <button className="arrow right" onClick={nextSlide}>
          <img className="arrow-slider-main" src={arrow} alt="" />
        </button>
        <div className="pagination">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {isFullScreen && (
        <div
          style={{ overflowY: isFullScreen ? 'scroll' : 'hidden' }}
          onClick={handleClose}
          className="fullscreen-slider"
        >
          <button className="close" onClick={handleClose}>
            <img src={cross} alt="" className="close__img" />
          </button>
          <div className="slider-wrap">
            <div
              className="fullscreen-slides"
              style={{ transform: ` translateX(-${currentIndex * 100}%) ` }}
            >
              {images.map((image, index) => (
                <div className="fullscreen-slide" key={index}>
                  <img
                    onClick={(event) => event.stopPropagation()}
                    className="fullscreen-img"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="arrow left"
            onClick={(event) => {
              event.stopPropagation();
              prevSlide();
            }}
          >
            <img className="arrow-slider arrow__left-img" src={arrow} alt="" />
          </button>
          <button
            className="arrow right"
            onClick={(event) => {
              event.stopPropagation();
              nextSlide();
            }}
          >
            <img className="arrow-slider " src={arrow} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
