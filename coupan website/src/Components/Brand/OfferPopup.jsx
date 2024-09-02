import React from "react";
import { FaTimes } from "react-icons/fa";
import "./OfferPopup.css";
// import { FaCheckCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const OfferPopup = ({ storeName, popupModal, offer, onClose }) => {

  return (
    <div className="offer-popup-overlay">
      <div className="offer-popup-content">
        <button className="offer-popup-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="offer-popup-header">
          <img src={apiUrl + offer.banner} alt="Logo" className="popup-logo" />
        </div>
        <div className="offer-popup-body">
          <h2>{offer.title}</h2>
          {/* <p>{offer.description}</p> */}

          <Link to={offer.link} className="offer-popup-button" target="_blank">
            To The Offer
          </Link>
          <p>Valid without coupon code.</p>
          <div className="offer-popup-conditions">
            <h3>Details</h3>
            <ul>
              {offer.highlight !== null && (
                <li>
                  <FaCheckCircle /> Type of action:{" "}
                  {offer.highlight === 1
                    ? "Featured"
                    : offer.highlight === 2
                    ? "Verified"
                    : offer.highlight === 3
                    ? "Exclusive"
                    : "All"}
                </li>
              )}

{offer.highlight !== null && (
                <li>
                  <FaCheckCircle /> Type of action:{" "}
                  {offer.highlight === 1
                    ? "Featured"
                    : offer.highlight === 2
                    ? "Verified"
                    : offer.highlight === 3
                    ? "Exclusive"
                    : "All"}
                </li>
              )} 

              {/* <li> <FaCheckCircle />Start: {offer.expire_date}</li> */}

              {offer.start_date && (
                <li>
                  <FaCheckCircle /> Start:{" "}
                  {new Date(offer.start_date).toLocaleDateString()}
                </li>
              )}
              {/* <li> <FaCheckCircle /> Can be used for new and existing customers</li> */}
              {/* <li> <FaCheckCircle /> Expiry: {offer.expire_date}</li> */}

              {offer.expire_date && (
                <li>
                  <FaCheckCircle /> Expire:{" "}
                  {new Date(offer.expire_date).toLocaleDateString()}
                </li>
              )}
              <li> {offer.description}</li>
            </ul>
          </div>
        </div>
        <div
          className="offer-popup-footer"
          // style={{
          //   backgroundImage: `url(${apiUrl + popupModal.background_image})`, // Set background image from API
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
          style={{
            backgroundImage: `url(${popupModal?.background_image ? apiUrl + popupModal.background_image : 'default-image-url'})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
>
          <Link to={popupModal.link} target="_blank">
            <button className="offer-activate-button">
              Activate now for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
