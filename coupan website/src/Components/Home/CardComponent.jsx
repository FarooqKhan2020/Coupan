import React, { useState } from "react";
import "./CardComponent.css";
import expediaLogo from "../../assets/cardsImg/expedia.webp";
import adLogo from "../../assets/cardsImg/logo-ad.webp";
import smartboxLogo from "../../assets/cardsImg/smartbox.webp";
import boohooLogo from "../../assets/cardsImg/boohoo.webp";
import rakuten from "../../assets/cardsImg/rakuten.webp";
import klein from "../../assets/cardsImg/klein.webp";
import hplogo from "../../assets/cardsImg/hp-logo.webp";
import hilfiger from "../../assets/cardsImg/hilfiger.webp";
import crucial from "../../assets/cardsImg/crucial.webp";
import dyson from "../../assets/cardsImg/dyson.webp";
import shadow from "../../assets/cardsImg/shadow.webp";
import wish from "../../assets/cardsImg/wish.webp";
import lafayette from "../../assets/cardsImg/lafayette.webp";
import tyrwhitt from "../../assets/cardsImg/tyrwhitt.webp";
import bazarchic from "../../assets/cardsImg/bazarchic.webp";
import camper from "../../assets/cardsImg/camper.webp";
import aircaraibes from "../../assets/cardsImg/aircaraibes.webp";
import locasun from "../../assets/cardsImg/locasun.webp";
import opodo from "../../assets/cardsImg/opodo.webp";
import { Link } from "react-router-dom";

import { FaStar, FaThumbsUp } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
// import { FaThumbsUp } from "react-icons/fa";
// import { FaStar, FaTags, FaLaptop, FaTshirt, FaPlane } from "react-icons/fa";
// Import other logos similarly

const cardData = {
  exclusives: [
    {
      icon: <FaStar />,
      label: "Exclusive",
      logo: expediaLogo,
      title: "7%",
      description: "EXCLUSIVE: 7% off your stays with the Expedia promo code",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Exclusive",
      logo: smartboxLogo,
      title: "15%",
      description: "Exclusive coupon: 15% off when ordering with Smartbox!",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Exclusive",
      logo: boohooLogo,
      title: "20%",
      description:
        "EXCLUSIVE CODE: 20% off your boohoo orders! Take advantage now!",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Exclusive",
      logo: adLogo,
      title: "15€",
      description:
        "15€ offered on your AD Auto services, using your exclusive code!",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: bazarchic,
      title: "€10",
      description:
        "WELCOME: Benefit from an exceptional €10 reduction thanks to this Bazarchic promo code!",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: camper,
      title: "5€",
      description: "By using this Wish promo code you benefit from 5€ offered",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: shadow,
      title: "€5",
      description:
        "EXCLUSIVE: Save €5 on your order by applying this Shadow promo code",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: wish,
      title: "5€",
      description: "By using this Wish promo code you benefit from 5€ offered",
      button: "View code",
      url: "/brand",
    },
    // add more cards as needed
  ],
  bestPromotions: [
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: rakuten,
      title: "€30",
      description: "DON'T MISS: €30 off your order",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: klein,
      title: "50%",
      description: "SUMMER SALE: Save up to 50% on your Calvin Klein orders",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: hplogo,
      title: "12%",
      description: "EXCLUSIVE CODE: Get up to 12% off with this HP promo code",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: hilfiger,
      title: "50%",
      description:
        "Tommy Hilfiger Summer Sale: Up to 50% off your favorite looks",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: crucial,
      title: "€30",
      description: "DON'T MISS: €30 off your order",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: dyson,
      title: "Good Plan",
      description: "Order the Dyson Airwrap long hair now for just €549",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: aircaraibes,
      title: "€30",
      description: "DON'T MISS: €30 off your order",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: locasun,
      title: "Good Plan",
      description: "Order the Dyson Airwrap long hair now for just €549",
      button: "View code",
      url: "/brand",
    },
  ],
  highTech: [
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: crucial,
      title: "€30",
      description: "DON'T MISS: €30 off your order",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: dyson,
      title: "Good Plan",
      description: "Order the Dyson Airwrap long hair now for just €549",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: shadow,
      title: "€5",
      description:
        "EXCLUSIVE: Save €5 on your order by applying this Shadow promo code",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: wish,
      title: "5€",
      description: "By using this Wish promo code you benefit from 5€ offered",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: crucial,
      title: "€30",
      description: "DON'T MISS: €30 off your order",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: tyrwhitt,
      title: "Good Plan",
      description:
        "Your order is delivered in 5 days with Charles Tyrwhitt, no need to travel!",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: shadow,
      title: "€5",
      description:
        "EXCLUSIVE: Save €5 on your order by applying this Shadow promo code",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: wish,
      title: "5€",
      description: "By using this Wish promo code you benefit from 5€ offered",
      button: "View code",
      url: "/brand",
    },
  ],
  fashion: [
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: lafayette,
      title: "€10",
      description:
        "Enjoy a €10 reduction with this Galeries Lafayette promo code",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: dyson,
      title: "Good Plan",
      description: "Order the Dyson Airwrap long hair now for just €549",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: bazarchic,
      title: "€10",
      description:
        "WELCOME: Benefit from an exceptional €10 reduction thanks to this Bazarchic promo code!",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: camper,
      title: "5€",
      description: "By using this Wish promo code you benefit from 5€ offered",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: lafayette,
      title: "€10",
      description:
        "Enjoy a €10 reduction with this Galeries Lafayette promo code",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: dyson,
      title: "Good Plan",
      description: "Order the Dyson Airwrap long hair now for just €549",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: bazarchic,
      title: "€10",
      description:
        "WELCOME: Benefit from an exceptional €10 reduction thanks to this Bazarchic promo code!",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: camper,
      title: "5€",
      description: "By using this Wish promo code you benefit from 5€ offered",
      button: "View code",
      url: "/brand",
    },
  ],
  travels: [
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: aircaraibes,
      title: "€30",
      description: "DON'T MISS: €30 off your order",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: locasun,
      title: "Good Plan",
      description: "Order the Dyson Airwrap long hair now for just €549",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: opodo,
      title: "€5",
      description:
        "EXCLUSIVE: Save €5 on your order by applying this Shadow promo code",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: aircaraibes,
      title: "5€",
      description: "By using this Wish promo code you benefit from 5€ offered",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: aircaraibes,
      title: "€30",
      description: "DON'T MISS: €30 off your order",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaThumbsUp />,
      label: "Recommended",
      logo: locasun,
      title: "Good Plan",
      description: "Order the Dyson Airwrap long hair now for just €549",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: opodo,
      title: "€5",
      description:
        "EXCLUSIVE: Save €5 on your order by applying this Shadow promo code",
      button: "View code",
      url: "/brand",
    },
    {
      icon: <FaStar />,
      label: "Recommended",
      logo: aircaraibes,
      title: "5€",
      description: "By using this Wish promo code you benefit from 5€ offered",
      button: "View code",
      url: "/brand",
    },
  ],
};

const CardComponent = () => {
  const [activeGroup, setActiveGroup] = useState("exclusives");

  return (
    <div className="maincard">
      <div className="container card-container">
        <h1 className="card-heading">Promo codes and discounts of the week!</h1>
        <div className="group-buttons">
          <button
            className={activeGroup === "exclusives" ? "active" : ""}
            onClick={() => setActiveGroup("exclusives")}
          >
            <FaStar className="button-icon text-center" /> Exclusives
          </button>
          <button
            className={activeGroup === "bestPromotions" ? "active" : ""}
            onClick={() => setActiveGroup("bestPromotions")}
          >
            <FaTags className="button-icon" /> Our best promotions
          </button>
          <button
            className={activeGroup === "highTech" ? "active" : ""}
            onClick={() => setActiveGroup("highTech")}
          >
            <FaLaptop className="button-icon" /> High-tech
          </button>
          <button
            className={activeGroup === "fashion" ? "active" : ""}
            onClick={() => setActiveGroup("fashion")}
          >
            <FaTshirt className="button-icon" /> Fashion
          </button>
          <button
            className={activeGroup === "travels" ? "active" : ""}
            onClick={() => setActiveGroup("travels")}
          >
            <FaPlane className="button-icon" /> Travels
          </button>
        </div>
        <div className="cards-section">
          {cardData[activeGroup].map((card, index) => (
            <div key={index} className="card">
              <div className="card-icon">{card.icon}</div>
              <div className="card-label">{card.label}</div>
              <Link to ={card.url} rel="noopener noreferrer">
              <img src={card.logo} alt="logo" className="card-logoImg" />
              </Link>
              {/* <a href={card.url} rel="noopener noreferrer">
              <img src={card.logo} alt="logo" className="card-logoImg" />
              </a> */}
              {/* <img src={card.logo} alt="logo" className="card-logo" /> */}
              <div className="card-title">{card.title}</div>
              <div className="card-description">{card.description}</div>
              <Link to={card.url} rel="noopener noreferrer">
              <button className="card-button">
               
                {/* <a href={card.url} target="_blank" rel="noopener noreferrer"> */}
                  {card.button}
               
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
