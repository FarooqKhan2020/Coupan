import React, { useState } from 'react';
import { FaTimes, FaCopy, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './CodePopup.css';

const CodePopup = ({ offer, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(offer.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCopyAndVisit = () => {
    handleCopy();
    window.open(offer.url, '_blank');
  };

  const toggleRequirements = () => {
    setShowRequirements(!showRequirements);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="popup-header">
          <img src={offer.logo} alt="Logo" className="popup-logo" />
        </div>
        <div className="popup-body">
          <p>{offer.description}</p>
          <div className="input-group">
            <input type="text" value={offer.code} readOnly className="code-input" />
            <button className="copy-button" onClick={handleCopy}>
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? ' Copied!' : ' Copy'}
            </button>
          </div>
          <button className="popup-button" onClick={handleCopyAndVisit}>
            Copy voucher & visit shop
          </button>
          <div className="additional-info">
            <p className="toggle-requirements" onClick={toggleRequirements}>
              All voucher requirements at a glance {showRequirements ? <FaChevronUp /> : <FaChevronDown />}
            </p>
            {showRequirements && <p>{offer.additionalRequirements}</p>}
          </div>
          <div className="popup-conditions">
            <h3>Redemption conditions</h3>
            <ul>
              <li>{offer.minimumPurchaseValue}</li>
              <li>Can be used for new and existing customers</li>
              <li>Valid until {offer.expiryDate}</li>
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

export default CodePopup;
