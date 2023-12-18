// components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = ({ slides, parallaxIntensity, transitionSpeed }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: transitionSpeed || 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ParallaxProvider>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            {/* Image with Parallax Effect */}
            <Parallax y={[parallaxIntensity * -1, parallaxIntensity]}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </Parallax>

            {/* Content with Parallax Effect */}
            <div className="content-container">
              <Parallax y={[parallaxIntensity * 1, parallaxIntensity]}>
                <p>{slide.content}</p>
              </Parallax>
            </div>
          </div>
        ))}
      </Slider>
    </ParallaxProvider>
  );
};

export default ImageSlider;
