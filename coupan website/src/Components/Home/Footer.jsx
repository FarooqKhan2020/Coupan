import React from 'react';
import './Footer.css';
import { FaFacebook, FaEnvelope} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa6";




const Footer = ({footerLogo,footer}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Help</h4>
        <ul>
          <li><Link to="/store">All Stores</Link></li>
          <li><Link to="/Category">All Categories</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>

      </div>
      <div className="footer-section">
        <h4>Pursue</h4>
        <ul>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/categorycoupon/featured">Featured Coupons</Link></li>
          <li><Link to="/categorycoupon/exclusive">Exclusive Coupons</Link></li>
          <li><Link to="/categorycoupon/verified">Verified Coupons</Link></li>
        </ul>
      </div>

      <div className="footer-section footer-logo-section">
        <Link to="/"><img src={apiUrl+footerLogo} alt="Logo" className="footer-logo" /></Link>
        <p>
          <IoIosPhonePortrait />  {footer.phone}.<br />
           <CiMail /> {footer.email}.<br />
          <CiLocationOn /> {footer.address}.<br />
          <FaRegCopyright/> {footer.copyright}
        </p>
        <div className="footer-icons">
          <Link to="/" style={{color:'white'}}> <FaFacebook /></Link>
          <Link to="/" style={{color:'white'}}> <FaEnvelope /></Link>
          <Link to="/" style={{color:'white'}}> <FaXTwitter /></Link>
        </div>
        <div className="footer-links">
          <Link to="/">Privacy/Cookies</Link>
          <Link to="/">Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
