import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import "./CarouselComponent.css";

// Importing images
import amazon from "../../assets/images/amazon.webp";
import booking from "../../assets/images/booking.webp";
import hm from "../../assets/images/h&m.webp";
import korner from "../../assets/images/korner.webp";
import levis from "../../assets/images/levis.webp";
import prismashop from "../../assets/images/prismashop.webp";
import dockers from "../../assets/images/dockers.webp";
import zooplus from "../../assets/images/a.webp";
import lounge from "../../assets/images/c.webp";
import christ from "../../assets/images/d.webp";
import migros from "../../assets/images/e.webp";
import shein from "../../assets/images/f.webp";
import { Link } from "react-router-dom";
const CarouselComponent = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brands = [
    { id: 1, name: "Amazon", imgSrc: amazon, link: "/brand" },
    { id: 2, name: "Booking", imgSrc: booking, link: "/brand" },
    { id: 3, name: "H&M", imgSrc: hm, link: "/brand" },
    { id: 4, name: "Korner", imgSrc: korner, link: "/brand" },
    { id: 5, name: "Levis", imgSrc: levis, link: "/brand" },
    { id: 6, name: "Prisma Shop", imgSrc: prismashop, link: "/brand" },
    { id: 7, name: "Dockers", imgSrc: dockers, link: "/brand" },
    { id: 8, name: "Zooplus", imgSrc: zooplus, link: "/brand" },
    { id: 9, name: "Lounge", imgSrc: lounge, link: "/brand" },
    { id: 10, name: "Christ", imgSrc: christ, link: "/brand" },
    { id: 11, name: "Migros", imgSrc: migros, link: "/brand" },
    { id: 12, name: "Shein", imgSrc: shein, link: "/brand" },
    // Add more brands as needed
  ];

  return (
    <div className="main">
      <div className="carousel-container">
        <h1 className="pt-5 heading">
          Get your promo code and discount with 20 minutes!{props?.title}
        </h1>
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id} className="carousel-item">
               <Link to={brand.link} target="_blank" rel="noopener noreferrer">
              <img
                src={brand.imgSrc}
                alt={brand.name}
                className="brand-image"
              />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <FaCircleChevronRight style={{ fontSize: "50px" }} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <FaCircleChevronLeft style={{ fontSize: "50px" }} />
  </div>
);

export default CarouselComponent;
