import React from 'react';
import './CardLogoSection.css';
import Logo from "../../assets/cardsImg/expedia.webp";
import aLogo from "../../assets/cardsImg/logo-ad.webp";
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
const logos = [
  { href: '/brand', src: Logo, alt: 'eBay', text: '44 vouchers' },
  { href: '/brand', src: aLogo, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: boohooLogo, alt: 'eBay', text: '44 vouchers' },
  { href: '/brand', src: klein, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: hplogo, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: hilfiger, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: crucial, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: dyson, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: shadow, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: wish, alt: 'eBay', text: '44 vouchers' },
  { href: '/brand', src: smartboxLogo, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: tyrwhitt, alt: 'eBay', text: '44 vouchers' },
  { href: '/brand', src: bazarchic, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: camper, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: aircaraibes, alt: 'eBay', text: '44 vouchers' },
  { href: '/brand', src: lafayette, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: locasun, alt: 'eBay', text: '44 vouchers' },
  { href: '/brand', src: opodo, alt: 'OTTO', text: '18 vouchers' },
  // Add more logos here
  { href: '/brand', src: klein, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: hplogo, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: hilfiger, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: crucial, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: dyson, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: shadow, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: wish, alt: 'eBay', text: '44 vouchers' },
  { href: '/brand', src: lafayette, alt: 'OTTO', text: '18 vouchers' },
  { href: '/brand', src: rakuten, alt: 'eBay', text: '44 vouchers' },
];

const CardLogoSection = ({data}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <div className="mainLogo">
    <div className="card-logo-section">
      <h2>Where do you want to save?</h2>
      <div className="card-logo-container">
        {data.map((logo, index) => (
          <Link to={"/brand/"+logo.name} key={index} className="card-logo">
            <img src={apiUrl+logo.banner} alt={logo.alt} className="card-logo-image" />
            <p>{logo.coupons_count+" vouchers"}</p>
          </Link>
        ))}
      </div>
      <Link to="/store" className="card-logo-button">All Stores</Link>
    </div>
    </div>
  );
};

export default CardLogoSection;
