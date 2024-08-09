import React, { useState } from "react";
import "./Carousel.css";
import image1 from "../../assets/carouseImg/booking-1.webp";
import image2 from "../../assets/carouseImg/dell.webp";
import image3 from "../../assets/carouseImg/levis.webp";
import image4 from "../../assets/carouseImg/maisons.webp";
import image5 from "../../assets/carouseImg/samsung.webp";
import image6 from "../../assets/carouseImg/hm1.webp";
import image7 from "../../assets/carouseImg/foot.webp";
import image8 from "../../assets/carouseImg/shein1.webp";
import image9 from "../../assets/carouseImg/disney-store.webp";
import image10 from "../../assets/carouseImg/zoo.webp";

import logo1 from "../../assets/images/booking.webp";
import logo2 from "../../assets/carouseImg/dell-logo.webp";
import logo3 from "../../assets/images/levis.webp";
import logo4 from "../../assets/carouseImg/maison-logo.webp";
import logo5 from "../../assets/carouseImg/samsung-logo.webp";
import logo6 from "../../assets/images/h&m.webp";
import logo7 from "../../assets/images/korner.webp";
import logo8 from "../../assets/images/f.webp";
import logo9 from "../../assets/images/disney.webp";
import logo10 from "../../assets/images/a.webp";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Carousel = () => {
  const slides = [
    {
      image: image1,
      header: "Promo Code",
      percentage: "30%",
      description: "Discount on the website",
      logo: logo1,
      buttonText: "See the offer >",
      href: '/brand',
    },
    {
      image: image2,
      header: "Sales Up To",
      percentage: "20%",
      description: "Discount on all items",
      logo: logo2,
      buttonText: "Shop now >",
      href: '/brand',
    },
    {
      image: image3,
      header: "Exclusive Offer",
      percentage: "50€",
      description: "Cashback on installation",
      logo: logo3,
      buttonText: "Learn more >",
      href: '/brand',
    },
    {
      image: image4,
      header: "Limited Time",
      percentage: "70%",
      description: "Discount on all products",
      logo: logo4,
      buttonText: "Shop now >",
      href: '/brand',
    },
    {
      image: image5,
      header: "New Customer",
      percentage: "15%",
      description: "Off on first purchase",
      logo: logo5,
      buttonText: "Sign up now >",
      href: '/brand',
    },
    {
      image: image6,
      header: "Summer Sale",
      percentage: "25%",
      description: "Off on summer collection",
      logo: logo6,
      buttonText: "Explore now >",
      href: '/brand',
    },
    {
      image: image7,
      header: "Winter Discount",
      percentage: "40%",
      description: "Off on winter wear",
      logo: logo7,
      buttonText: "Buy now >",
      href: '/brand',
    },
    {
      image: image8,
      header: "Flash Sale",
      percentage: "60%",
      description: "Limited stock available",
      logo: logo8,
      buttonText: "Sign up now >",
      href: '/brand',
    },
    {
      image: image9,
      header: "Mega Offer",
      percentage: "80%",
      description: "Discount on electronics",
      logo: logo9,
      buttonText: "See the offer >",
      href: '/brand',
    },
    {
      image: image10,
      header: "Festive Season",
      percentage: "50%",
      description: "Off on festive collection",
      logo: logo10,
      buttonText: "Learn more >",
      href: '/brand',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

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
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <Link to={slides[currentSlide].href} className="carousel-logo">
              <img src={slides[currentSlide].logo} alt="Logo" />
            </Link>
          </div>
          <div className="carousel-text">
            <div className="carousel-description">
              <p className="header">{slides[currentSlide].header}</p>
              <h1 className="percentage">{slides[currentSlide].percentage}</h1>
              <p className="description">{slides[currentSlide].description}</p>
              {/* <button>{slides[currentSlide].buttonText}</button> */}

              <Link to={slides[currentSlide].href}>
                <button>{slides[currentSlide].buttonText}</button>
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
