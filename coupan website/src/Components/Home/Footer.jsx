import React from 'react';
import './Footer.css';
import uk from '../../assets/flagImg/ukflag.png'
import fr from '../../assets/flagImg/frflag.png'
import us from '../../assets/flagImg/usflag.png'
import ftlogo from '../../assets/flagImg/ftlogo.png'
import { FaFacebook, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Help</h4>
        <ul>
          <li><Link to="/">All shops from AZ</Link></li>
          <li><Link to="/">FAQ – Frequently Asked Questions</Link></li>
          <li><Link to="/">Partner FAQ</Link></li>
          <li><Link to="/">Contact & Feedback</Link></li>
        </ul>
        <div className="footer-flags">
          <div>
            <img src={uk} alt="UK Flag" />
            <Link to="/">Voucherbox (UK) <BsBoxArrowUpRight className="icon" /></Link>
          </div>
          <div>
            <img src={fr} />
            <Link to="/">Reduc (FR) <BsBoxArrowUpRight className="icon" /></Link>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h4>Pursue</h4>
        <ul>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/">How we work</Link></li>
          <li><Link to="/">Become a partner</Link></li>
          <li>
            <Link to="/">Jobs at Webgears <BsBoxArrowUpRight className="icon" style={{ width: '14px', color: 'gray' }} /></Link>
          </li>
        </ul>
        <div className="footer-flags">
          <div>
            <img src={us} />
            <Link to="/">Coupon Box (US) <BsBoxArrowUpRight className="icon" /></Link>
          </div>
        </div>
      </div>
      
      <div className="footer-section footer-logo-section">
        <Link to="/"><img src={ftlogo} alt="Logo" className="footer-logo" /></Link>
        <p>
          Exclusive vouchers may not be further published without written permission.<br />
          Copyright © 2010 - 2024 Voucher Collector - All rights reserved
        </p>
        <div className="footer-icons">
          <Link to="/" style={{color:'white'}}> <FaFacebook /></Link>
          <Link to="/" style={{color:'white'}}> <FaEnvelope /></Link>
          <Link to="/" style={{color:'white'}}> <FaTwitter /></Link> 
        </div>
        <div className="footer-links">
          <Link to="/">imprint</Link>
          <Link to="/">Privacy/Cookies</Link>
          <Link to="/">Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
