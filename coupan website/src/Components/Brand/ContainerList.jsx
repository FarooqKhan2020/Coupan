import React, { useState } from "react";
import {
  FaThumbsUp,
  FaChevronUp,
  FaChevronDown,
  FaGift,
  FaTruck,
} from "react-icons/fa";
import "./ContainerList.css";
import OfferPopup from "./OfferPopup";
import CodePopup from "./CodePopup";
import amazonLogo from "../../assets/images/amazon.webp";

const sampleOffer = {
  logo: amazonLogo,
  title: 'Amazon',
  description: 'Amazon offer: up to 70% off in the summer sale',
  url: '#',
  expiryDate: '31 August 2024'
};

const sampleCodeOffer = {
  logo: amazonLogo,
  title: 'Amazon',
  description: '33 percent voucher at Amazon',
  code: '03SDDeal',
  url: '#',
  expiryDate: '30 September 2024',
  minimumPurchaseValue: '79€ minimum purchase value',
  additionalRequirements: 'Valid for new and existing customers'
};

const sampleRefundedOffer = {
  logo: amazonLogo,
  title: 'Amazon',
  description: 'Refunded offer at Amazon',
  url: '#',
  expiryDate: '30 October 2024',
  additionalRequirements: 'Valid for selected items only'
};

const ContainerList = ({ containers ,storecoupons }) => {
  console.log('abc',storecoupons);
  const [openDetails, setOpenDetails] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [selectedCodeOffer, setSelectedCodeOffer] = useState(null);
  const [selectedRefundedOffer, setSelectedRefundedOffer] = useState(null);

  const toggleDetails = (id) => {
    setOpenDetails(openDetails === id ? null : id);
  };

  const renderIcon = (container) => {
    if (!container) return null;

    if (container.type === "offer") {
      return container.iconType === "van" ? (
        <FaTruck style={{ fontSize: "24px" }} />
      ) : (
        <FaGift style={{ fontSize: "24px" }} />
      );
    }
    return container.offer
  };

  const handleViewOffer = (container) => {
    if (!container.expired) {
      if (container.type === "offer") {
        setSelectedOffer(sampleOffer); // Use sampleOffer data
      } else if (container.type === "code") {
        setSelectedCodeOffer(sampleCodeOffer); // Use sampleCodeOffer data
      } else if (container.type === "refunded") {
        setSelectedRefundedOffer(sampleRefundedOffer); // Use sampleRefundedOffer data
      }
    }
  };

  const handleClosePopup = () => {
    setSelectedOffer(null);
    setSelectedCodeOffer(null);
    setSelectedRefundedOffer(null);
  };

  // const activeContainers = containers.filter((container) => !container.expired);
  // const expiredContainers = containers.filter((container) => container.expired);
  const today = new Date();

  const activeContainers = storecoupons.filter((container) => {
    const expireDate = new Date(container.expire_date);
    return expireDate >= today;
  });

  const expiredContainers = storecoupons.filter((container) => {
    const expireDate = new Date(container.expire_date);
    return expireDate < today;
  });

  return (
    <div className="container-list">
      {/* Active Containers */}
      {activeContainers.map((container) => (

        <div key={container.id} className={`container-items ${container.type}`}>
          <div className="row d-flex align-items-center">
            <div className="col-md-2 col-lg-2">
              <div className="container-header">
                <div className="container-type-percentage">
                  <div className="container-type">
                    {container.type === "code"
                      ? "Coded"
                      : container.type === "offer"
                      ? "Offer"
                      : "Refunded"}
                  </div>
                  <div className="container-percentage">
                    {renderIcon(container) !== null && renderIcon(container) !== undefined && (
                        <>
                          {renderIcon(container)}%
                        </>
                    )}
                  </div>
                  <button
                    className="container-details"
                    onClick={() => toggleDetails(container.id)}
                  >
                    {openDetails === container.id ? " Details " : " Details "}
                    {openDetails === container.id ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </div>
              </div>
            </div>


            <a href={container.link} className="col-md-7 col-lg-7 a-main">
              <div className="container-main">
                <p>{container.description}</p>
                <div className="container-info">
                  <div className="container-recommended">
                    <FaThumbsUp className="thumb-icon" /> Recommended
                  </div>
                </div>
              </div>
            </a>


            <div className="col-md-3 col-lg-3 viewbutton">
              <div>
                <button
                  className="view-button"
                  onClick={() => handleViewOffer(container)}
                >
                  {container.type === "code"
                    ? "View code"
                    : container.type === "refunded"
                    ? "View refunded offer"
                    : "View the offer"}
                </button>
              </div>
            </div>
          </div>
          {openDetails === container.id && (
            <div className="container-extra">
              <p>
                Valid today! <br /> Valid for new customers
              </p>
            </div>
          )}
        </div>

      ))}

      {/* Expired Containers */}
      {expiredContainers.length > 0 && (
        <div className="expired-section">
          <h3>These Amazon promo codes seem to be expired, try them</h3>
          {expiredContainers.map((container) => (
            <div
              key={container.id}
              className={`container-items ${container.type}`}
            >
              <div className="row d-flex align-items-center">
                <div className="col-lg-2">
                  <div className="container-header">
                    <div className="container-type-percentage">
                      <div className="container-type">
                        {container.type === "code"
                          ? "Coded"
                          : container.type === "offer"
                          ? "Offer"
                          : "Refunded"}
                      </div>
                      <div className="container-percentage">
                        {/*{renderIcon(container)}*/}
                        {renderIcon(container) !== null && renderIcon(container) !== undefined && (
                            <>
                              {renderIcon(container)}%
                            </>
                        )}
                      </div>
                      <button
                        className="container-details"
                        onClick={() => toggleDetails(container.id)}
                      >
                        {openDetails === container.id
                          ? " Details "
                          : " Details "}
                        {openDetails === container.id ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="container-main">
                    <p>{container.description}</p>
                    <div className="container-info">
                      <div className="container-recommended">
                        <FaThumbsUp className="thumb-icon" /> Recommended
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 viewbutton">
                  <div>
                    <button
                      className="view-button"
                      onClick={() => handleViewOffer(container)}
                    >
                      {container.type === "code"
                        ? "View code"
                        : container.type === "refunded"
                        ? "View refunded offer"
                        : "View the offer"}
                    </button>
                  </div>
                </div>
              </div>
              {openDetails === container.id && (
                <div className="container-extra">
                  <p>
                    Valid today! <br /> Valid for new customers
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {selectedOffer && (
        <OfferPopup offer={selectedOffer} onClose={handleClosePopup} />
      )}

      {selectedCodeOffer && (
        <CodePopup offer={selectedCodeOffer} onClose={handleClosePopup} />
      )}

      {selectedRefundedOffer && (
        <OfferPopup offer={selectedRefundedOffer} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default ContainerList;
