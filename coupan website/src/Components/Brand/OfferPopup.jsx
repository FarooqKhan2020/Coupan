import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './OfferPopup.css';
// import { FaCheckCircle } from "react-icons/ai";
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

const OfferPopup = ({ containers, bannerImage,storeName, popupModal, offer, onClose,}) => {
  console.log(containers,"containerpopup")
  console.log(popupModal,"popupModal")
  // console.log(offer,"offer")
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="popup-header">
          <img src={apiUrl + containers.banner} alt="Logo" className="popup-logo" />
          <h2>{containers.title}</h2>
        </div>
        <div className="popup-body">
          <p>{containers.description}

          </p>
          <Link to={containers.link} className="popup-button">To Offer</Link>
          <p>Valid without coupon code.</p>
          <div className="popup-conditions">
            <h3>Redemption conditions</h3>
            <ul>
            <li> <FaCheckCircle />Valid without minimum purchase value</li>
            <li> <FaCheckCircle /> Can be used for new and existing customers</li>
            <li> <FaCheckCircle /> Expiry date: {containers.expire_date}</li>
            </ul>
          </div>
        </div>
        <div className="popup-footer">
          <h3>Redeem vouchers automatically with savably</h3>
          <button className="activate-button">Activate now for free</button>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
