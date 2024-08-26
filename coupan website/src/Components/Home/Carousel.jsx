import React, { useState } from "react";
import "./Carousel.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Carousel = ({data}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
    // Find the initial slide based on serial
  const initialSlide = data.findIndex(slide => slide.serial === 1); // Adjust the serial value as needed

  const [currentSlide, setCurrentSlide] = useState(initialSlide >= 0 ? initialSlide : 0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + data.length) % data.length);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <div className="mainCarousel">
      <div className="carousel">
        <div className="carousel-arrow left" onClick={prevSlide}>
          <FaAngleLeft
            className="faleft"
            style={{ fontSize: "larger", color: "gray" }}
          />
        </div>
        <div className="carousel-content">
          <div
            className="carousel-background"
            style={{ backgroundImage: `url(${apiUrl+data[currentSlide].image})` }}
          >
            <Link to={data[currentSlide].link} target={"_blank"} className="carousel-logo">
              <img src={apiUrl+data[currentSlide].image} alt="Logo" />
            </Link>
          </div>
          <div className="carousel-text">
            <div className="carousel-description">
              <p className="header">{data[currentSlide].title}</p>
              <h1 className="percentage">{data[currentSlide].offer}</h1>
              <p className="description">{data[currentSlide].description}</p>
              {/* <button>{slides[currentSlide].buttonText}</button> */}

              <Link target={"_blank"}  to={data[currentSlide].link}>
                <button> See The Offers <MdKeyboardArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-arrow right" onClick={nextSlide}>
          <FaAngleRight
            className="faright"
            style={{ fontSize: "larger", color: "gray" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
