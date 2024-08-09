import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './OfferPopup.css';

const OfferPopup = ({ offer, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="popup-header">
          <img src={offer.logo} alt="Logo" className="popup-logo" />
          <h2>{offer.title}</h2>
        </div>
        <div className="popup-body">
          <p>{offer.description}</p>
          <a href={offer.url} className="popup-button">To Offer</a>
          <p>Valid without coupon code.</p>
          <div className="popup-conditions">
            <h3>Redemption conditions</h3>
            <ul>
              <li>Valid without minimum purchase value</li>
              <li>Can be used for new and existing customers</li>
              <li>Expiry date: {offer.expiryDate}</li>
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
