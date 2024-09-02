import React, { useState } from "react";
import {
  FaThumbsUp,
  FaChevronUp,
  FaChevronDown,
  FaGift,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import "./ContainerList.css";
import OfferPopup from "./OfferPopup";
import CodePopup from "./CodePopup";
// import amazonLogo from "../../assets/images/amazon.webp";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const sampleOffer = {
//   logo: amazonLogo,
  title: "Amazon",
  description: "Amazon offer: up to 70% off in the summer sale",
  url: "#",
  expiryDate: "31 August 2024",
};

const sampleCodeOffer = { 
  logo: amazonLogo,
  title: "Amazon",
  description: "33 percent voucher at Amazon",
  // code: "03SDDeal",
  url: "#",
  expiryDate: "30 September 2024",
  minimumPurchaseValue: "79€ minimum purchase value",
  additionalRequirements: "Valid for new and existing customers",
};

// const sampleRefundedOffer = {
//   logo: amazonLogo,
//   title: "Amazon",
//   description: "Refunded offer at Amazon",
//   url: "#",
//   expiryDate: "30 October 2024",
//   additionalRequirements: "Valid for selected items only",
// };

const ContainerList = ({ containers, bannerImage, storeName, popupModal, simlarcoupons }) => {



  const [openDetails, setOpenDetails] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [selectedCodeOffer, setSelectedCodeOffer] = useState(null);
  // const [selectedRefundedOffer, setSelectedRefundedOffer] = useState(null);

  // const toggleDetails = (id) => {
  //   setOpenDetails(openDetails === id ? null : id);
  // };
  const toggleDetails = (id) => {
    setOpenDetails(openDetails === id ? null : id);  // toggle open or close for the clicked item only
  };
  const renderIcon = (container) => {
    if (!container) return null;

    if (container.highlight == "verified") {
      return container.iconType === "van" ? (
        <FaTruck style={{ fontSize: "24px" }} />
      ) : (
        <FaGift style={{ fontSize: "24px" }} />
      );
    }
    return container.offer;
  };

  // const handleViewOffer = (container) => {
  //   if (!container.expired) {
  //     if (container.highlight == 2) {
  //       setSelectedOffer(sampleOffer); // Use sampleOffer data
  //     } else if (container.highlight == 1) {
  //       setSelectedCodeOffer(sampleCodeOffer); // Use sampleCodeOffer data
  //     } else if (container.highlight == 3) {
  //       setSelectedRefundedOffer(sampleRefundedOffer); // Use sampleRefundedOffer data
  //     }
  //   }
  // };

  const handleViewOffer = (container) => {
    // Log the container object to the consol

    // Check if the container is not expired
    if (!container.expired) {
      if (container.code === null) {
        // Pass the container object as a prop to the OfferPopup component
        setSelectedOffer(container); // This will now pass the entire container object
      } else {
        // Pass the container object as a prop to the CodePopup component
        setSelectedCodeOffer(container); // This will now pass the entire container object
      }
    }

    // Toggle the details view based on container ID
    setOpenDetails(openDetails === container ? null : container.id);
  };

  const handleClosePopup = () => {
    setSelectedOffer(null);
    setSelectedCodeOffer(null);
    // setSelectedRefundedOffer(null);
  };

  // const activeContainers = containers.filter((container) => !container.expired);
  // const expiredContainers = containers.filter((container) => container.expired);
  const today = new Date();

  const activeContainers = containers.filter((container) => {
    const expireDate = new Date(container.expire_date);
    return expireDate >= today;
  });

  const expiredContainers = containers.filter((container) => {
    const expireDate = new Date(container.expire_date);
    return expireDate < today;
  });

  if (!containers || containers.length === 0) {
    return <Loader />;
  }

  


  // if (!data || data.length === 0) {
  //   return <Loader />;
  // }
  return (
    <div className="container-list">
      {/* Active Containers */}
      {activeContainers.map((container) => (
        <div
          key={container.id}
          className={`container-items ${container.highlight}`}
        >
          <div className="row d-flex align-items-center">
            <div className="col-sm-2 col-md-2 col-lg-2">
              <div className="container-header">
                <div className="container-type-percentage">
                  <div className="container-image">
                    <img src={apiUrl + container.banner} alt="add image" />
                  </div>
                  <div className="container-type">
                    {container.highlight == 1
                      ? "Featured"
                      : container.highlight == 2
                      ? "Verified"
                      : container.highlight == 3
                      ? "Exclusive"
                      : "All"}
                  </div>
                  <div className="container-percentage">
                    {renderIcon(container) !== null &&
                      renderIcon(container) !== undefined && (
                        <>{renderIcon(container)}%</>
                      )}
                  </div>
                  {/* <button
                    className="container-details"
                    onClick={() => toggleDetails(container.id)}
                  >
                    {openDetails === container.id ? " Details " : " Details "}
                    {openDetails === container.id ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button> */}
                </div>
              </div>
            </div>

            <div
              to={container.link}
              target="_blank"
              className="col-sm-7 col-md-7 col-lg-7 a-main"
            >
              <div className="container-main">
                <p>{container.title}</p>
                <div className="container-info">
                  {container.code === null ? (
                    // <Link to={container.link} rel="noopener noreferrer" target="_blank">
                    <button
                      className="card-button"
                      onClick={() => handleViewOffer(container)}
                    >
                      See the promo
                    </button>
                  ) : (
                    // </Link>
                    // <Link to={container.link} rel="noopener noreferrer" target="_blank">
                    <button
                      className="coupon-code-button"
                      onClick={() => handleViewOffer(container)}
                    >
                      <span className="coupon-inner-text">
                        {container.code}
                      </span>
                      <span className="coupon-blue-wrap">
                        View code
                        <span className="coupon-fold"></span>
                      </span>
                    </button>
                    // </Link>
                  )}

                  {/* <button
                  className="view-button"
                  onClick={() => handleViewOffer(container)}
                >
                  {container.highlight == 1
                    ? "View Featured"
                    : container.highlight == 3
                    ? "View Exclusive offer"
                    : "View the offer"}
                </button> */}
                  {/* <div className="container-recommended">
                    <FaThumbsUp className="thumb-icon" /> Recommended
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-sm-3 col-md-3 col-lg-3 viewbutton">
              <div>
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
          {openDetails === container.id && (
            <div className="container-extra">
              <div className="redemption-conditions">
                <h3>Redemption conditions</h3>
                <ul>
                  {container.highlight !== null && (
                    <li>
                      <FaCheckCircle /> Type of action:{" "}
                      {container.highlight === 1
                        ? "Featured"
                        : container.highlight === 2
                        ? "Verified"
                        : container.highlight === 3
                        ? "Exclusive"
                        : "All"}
                    </li>
                  )}

                  {container.offer !== null && (
                    <li>
                      <FaCheckCircle /> Price reduction: {container.offer}%
                    </li>
                  )}

                  {/* <li>
                    <FaCheckCircle />{" "}
                    {container.expire_date
                      ? `Valid until ${container.expire_date}`
                      : "Valid until Revoked"}
                  </li> */}
                  {container.start_date && (
                    <li>
                      <FaCheckCircle /> Start:{" "}
                      {new Date(container.start_date).toLocaleDateString()}
                    </li>
                  )}

                  {container.expire_date && (
                    <li>
                      <FaCheckCircle /> Expire:{" "}
                      {new Date(container.expire_date).toLocaleDateString()}
                    </li>
                  )}
                </ul>
                {/* <div className="price-info">
                  {container.offer !== null && (
                    <>
                      <span>Price reduction: </span>
                      <span>{container.offer}%</span>
                    </>
                  )}
                </div> */}

                {/* <div className="type-action">
                  <span>Type of action: </span>
                  <span>
                    {" "}
                    {container.highlight == 1
                      ? "Featured"
                      : container.highlight == 2
                      ? "Verified"
                      : container.highlight == 3
                      ? "Exclusive"
                      : "All"}
                  </span>
                </div> */}
                {/* <div className="frequency">
                  <span>Likes: </span>
                  <span>{container.like}</span>
                </div> */}
                <p>{container.description}</p>
                <hr />
                {container.updated_at && (
                  <div className="last-updated">
                    <span>Last updated: </span>
                    <span>
                      {new Date(container.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Expired Containers */}
      {expiredContainers.length > 0 && (
        <div className="expired-section">
          <h3>These {storeName} promo codes seem to be expired, try them</h3>
          {expiredContainers.map((container) => (
            <div
              key={container.id}
              className={`container-items ${container.highlight}`}
            >
              <div className="row d-flex align-items-center">
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <div className="container-header">
                    <div className="container-type-percentage">
                      <div className="container-image">
                        <img src={apiUrl + container.banner} alt="add image" />
                      </div>
                      <div className="container-type">
                        {container.highlight == 1
                          ? "Featured"
                          : container.highlight == 2
                          ? "Verified"
                          : container.highlight == 3
                          ? "Exclusive"
                          : "All"}
                      </div>
                      <div className="container-percentage">
                        {/*{renderIcon(container)}*/}
                        {renderIcon(container) !== null &&
                          renderIcon(container) !== undefined && (
                            <>{renderIcon(container)}%</>
                          )}
                      </div>
                      {/* <button
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
                      </button> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-7 col-md-7 col-lg-7">
                  <div className="container-main">
                    <p>{container.title}</p>
                    <div className="container-info">
                      {container.code === null ? (
                        // <Link to={container.link} rel="noopener noreferrer" target="_blank">
                        <button
                          className="card-button"
                          // onClick={() => handleViewOffer(container)}
                        >
                          See the promo
                        </button>
                      ) : (
                        // </Link>
                        // <Link to={container.link} rel="noopener noreferrer" target="_blank">
                        <button
                          className="coupon-code-button"
                          // onClick={() => handleViewOffer(container)}
                        >
                          <span className="coupon-inner-text">
                            {container.code}
                          </span>
                          <span className="coupon-blue-wrap">
                            View code
                            <span className="coupon-fold"></span>
                          </span>
                        </button>
                        // </Link>
                      )}

                      {/* <button
                      className="view-button"
                      onClick={() => handleViewOffer(container)}
                    >
                      {container.highlight == 1
                        ? "View Featured"
                        : container.highlight == 3
                        ? "View Exclusive offer"
                        : "View the offer"}
                    </button> */}
                      {/* <div className="container-recommended">
                        <FaThumbsUp className="thumb-icon" /> Recommended
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3 viewbutton">
                  <div>
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

                    {/* <button
                      className="view-button"
                      onClick={() => handleViewOffer(container)}
                    >
                      {container.highlight == 1
                        ? "View Featured"
                        : container.highlight == 3
                        ? "View Exclusive offer"
                        : "View the offer"}
                    </button> */}
                  </div>
                </div>
              </div>
              {openDetails === container.id && (
                <div className="container-extra">
                  {/* <h5 className="pb-1">{container.title}</h5>
                  <p>
                    {container.description}
                  </p> */}

                  <div className="redemption-conditions">
                    <h3>Redemption conditions</h3>
                    <ul>
                      {container.highlight !== null && (
                        <li>
                          <FaCheckCircle /> Type of action:{" "}
                          {container.highlight === 1
                            ? "Featured"
                            : container.highlight === 2
                            ? "Verified"
                            : container.highlight === 3
                            ? "Exclusive"
                            : "All"}
                        </li>
                      )}

                      {container.offer !== null && (
                        <li>
                          <FaCheckCircle /> Price reduction: {container.offer}%
                        </li>
                      )}

                      {/* <li>
                    <FaCheckCircle />{" "}
                    {container.expire_date
                      ? `Valid until ${container.expire_date}`
                      : "Valid until Revoked"}
                  </li> */}
                      {container.start_date && (
                        <li>
                          <FaCheckCircle /> Start:{" "}
                          {new Date(container.start_date).toLocaleDateString()}
                        </li>
                      )}

                      {container.expire_date && (
                        <li>
                          <FaCheckCircle /> Expire:{" "}
                          {new Date(container.expire_date).toLocaleDateString()}
                        </li>
                      )}
                    </ul>
                    <div className="price-info">
                      {container.offer !== null && (
                        <>
                          <span>Price reduction: </span>
                          <span>{container.offer}%</span>
                        </>
                      )}
                    </div>

                    <div className="type-action">
                      <span>Type of action: </span>
                      <span>
                        {" "}
                        {container.highlight == 1
                          ? "Featured"
                          : container.highlight == 2
                          ? "Verified"
                          : container.highlight == 3
                          ? "Exclusive"
                          : "All"}
                      </span>
                    </div>
                    <div className="frequency">
                      <span>Likes: </span>
                      <span>{container.like}</span>
                    </div>
                    <p>{container.description}</p>
                    <hr />
                    {/* <div className="last-updated">
                      <span>Last updated: </span>
                      <span>{container.updated_at}</span>
                    </div> */}
                    {container.updated_at && (
                      <div className="last-updated">
                        <span>Last updated: </span>
                        <span>
                          {new Date(container.updated_at).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}


{/* {SimlarCoupons} */}

<div className="similar-coupons">
  {/* Add the heading for similar coupons */}
  <h4>Similar Coupons</h4> 
  
  {simlarcoupons.map((coupon) => (
    <div key={coupon.id} className={`container-items ${coupon.highlight}`}>
      <div className="row d-flex align-items-center">
        <div className="col-sm-2 col-md-2 col-lg-2">
          <div className="container-header">
            <div className="container-type-percentage">
              <div className="container-image">
                <img src={apiUrl + coupon.banner} alt="Coupon Banner" />
              </div>
              <div className="container-type">
                {coupon.highlight === 1
                  ? "Featured"
                  : coupon.highlight === 2
                  ? "Verified"
                  : coupon.highlight === 3
                  ? "Exclusive"
                  : "All"}
              </div>
              <div className="container-percentage">
                {renderIcon(coupon) && <>{renderIcon(coupon)}%</>}
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-7 col-md-7 col-lg-7 a-main">
          <div className="container-main">
            <p>{coupon.title}</p>
            <div className="container-info">
              {coupon.code === null ? (
                <button
                  className="card-button"
                  onClick={() => handleViewOffer(coupon)}
                >
                  See the promo
                </button>
              ) : (
                <button
                  className="coupon-code-button"
                  onClick={() => handleViewOffer(coupon)}
                >
                  <span className="coupon-inner-text">{coupon.code}</span>
                  <span className="coupon-blue-wrap">
                    View code
                    <span className="coupon-fold"></span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3 col-lg-3 viewbutton">
          <div>
            <button
              className="container-details"
              onClick={() => toggleDetails(coupon.id)}
            >
              {openDetails === coupon.id ? " Details " : " Details "}
              {openDetails === coupon.id ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>
      </div>

      {openDetails === coupon.id && (
        <div className="container-extra">
          <div className="redemption-conditions">
            <h3>Redemption conditions</h3>
            <ul>
              {coupon.highlight !== null && (
                <li>
                  <FaCheckCircle /> Type of action:{" "}
                  {coupon.highlight === 1
                    ? "Featured"
                    : coupon.highlight === 2
                    ? "Verified"
                    : coupon.highlight === 3
                    ? "Exclusive"
                    : "All"}
                </li>
              )}

              {coupon.offer !== null && (
                <li>
                  <FaCheckCircle /> Price reduction: {coupon.offer}%
                </li>
              )}

              {coupon.start_date && (
                <li>
                  <FaCheckCircle /> Start:{" "}
                  {new Date(coupon.start_date).toLocaleDateString()}
                </li>
              )}

              {coupon.expire_date && (
                <li>
                  <FaCheckCircle /> Expire:{" "}
                  {new Date(coupon.expire_date).toLocaleDateString()}
                </li>
              )}
            </ul>
            <p>{coupon.description}</p>
            <hr />
            {coupon.updated_at && (
              <div className="last-updated">
                <span>Last updated: </span>
                <span>{new Date(coupon.updated_at).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  ))}
</div>


 
      {selectedOffer && (
        <OfferPopup
          offer={selectedOffer}
          storeName={storeName}
          containers={containers}
          bannerImage={bannerImage}
          popupModal={popupModal}
          onClose={handleClosePopup}
        />
      )}

      {selectedCodeOffer && (
        <CodePopup
          code={selectedCodeOffer}
          onClose={handleClosePopup}
          popupModal={popupModal}
        />
      )}

  
    </div>
  );
};

export default ContainerList;
