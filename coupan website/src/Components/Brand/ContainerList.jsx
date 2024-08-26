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
import Loader from "../Loader/Loader";
// import NotFound from "../NotFound/NotFound";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const ContainerList = ({ containers, bannerImage, storeName, popupModal, simlarcoupons }) => {
  // State for main containers
  const [openDetailsMain, setOpenDetailsMain] = useState(null);
  
  // State for similar coupons
  const [openDetailsSimilar, setOpenDetailsSimilar] = useState(null);
  
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [selectedCodeOffer, setSelectedCodeOffer] = useState(null);

  const toggleDetailsMain = (id) => {
    setOpenDetailsMain(openDetailsMain === id ? null : id);
  };

  const toggleDetailsSimilar = (id) => {
    setOpenDetailsSimilar(openDetailsSimilar === id ? null : id);
  };

  const renderIcon = (container) => {
    if (!container) return null;

    if (container.highlight === "verified") {
      return container.iconType === "van" ? (
        <FaTruck style={{ fontSize: "24px" }} />
      ) : (
        <FaGift style={{ fontSize: "24px" }} />
      );
    }
    return container.offer;
  };

  const handleViewOffer = (container) => {
    if (!container.expired) {
      if (container.code === null) {
        setSelectedOffer(container);
      } else {
        setSelectedCodeOffer(container);
      }
    }

    // Toggle details for main containers only
    if (containers.some(c => c.id === container.id)) {
      setOpenDetailsMain(openDetailsMain === container.id ? null : container.id);
    }
  };

  const handleClosePopup = () => {
    setSelectedOffer(null);
    setSelectedCodeOffer(null);
  };

  const today = new Date();

  const activeContainers = containers.filter((container) => {
    const expireDate = new Date(container.expire_date);
    return expireDate >= today;
  });

  const expiredContainers = containers.filter((container) => {
    const expireDate = new Date(container.expire_date);
    return expireDate < today;
  });

  // if (!containers || containers.length === 0) {
  //   return <NotFound />;
  // }
  if (!containers || containers.length === 0) {
    return <Loader />;
  }

  return (
    <div className="container-list">
      {/* Active Containers */}
      {activeContainers.map((container) => (
        <div key={`main-${container.id}`} className={`container-items ${container.highlight}`}>
          <div className="row d-flex align-items-center">
            <div className="col-sm-2 col-md-2 col-lg-2">
              <div className="container-header">
                <div className="container-type-percentage">
                  <div className="container-image">
                    <img src={apiUrl + container.banner} alt="add image" />
                  </div>
                  <div className="container-type">
                    {container.highlight === 1
                      ? "Featured"
                      : container.highlight === 2
                      ? "Verified"
                      : container.highlight === 3
                      ? "Exclusive"
                      : "All"}
                  </div>
                  <div className="container-percentage">
                    {renderIcon(container) && <>{renderIcon(container)}%</>}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-7 col-md-7 col-lg-7 a-main">
              <div className="container-main">
                <p>{container.title}</p>
                <div className="container-info">
                  {container.code === null ? (
                    <button
                      className="card-button"
                      onClick={() => handleViewOffer(container)}
                    >
                      See the promo
                    </button>
                  ) : (
                    <button
                      className="coupon-code-button"
                      onClick={() => handleViewOffer(container)}
                    >
                      <span className="coupon-inner-text">{container.code}</span>
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
                  onClick={() => toggleDetailsMain(container.id)}
                >
                  Details {openDetailsMain === container.id ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
            </div>
          </div>
          {openDetailsMain === container.id && (
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
                <p>{container.description}</p>
                <hr />
                {container.updated_at && (
                  <div className="last-updated">
                    <span>Last updated: </span>
                    <span>{new Date(container.updated_at).toLocaleDateString()}</span>
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
            <div key={`expired-${container.id}`} className={`container-items ${container.highlight}`}>
              <div className="row d-flex align-items-center">
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <div className="container-header">
                    <div className="container-type-percentage">
                      <div className="container-image">
                        <img src={apiUrl + container.banner} alt="add image" />
                      </div>
                      <div className="container-type">
                        {container.highlight === 1
                          ? "Featured"
                          : container.highlight === 2
                          ? "Verified"
                          : container.highlight === 3
                          ? "Exclusive"
                          : "All"}
                      </div>
                      <div className="container-percentage">
                        {renderIcon(container) && <>{renderIcon(container)}%</>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7 col-md-7 col-lg-7">
                  <div className="container-main">
                    <p>{container.title}</p>
                    <div className="container-info">
                      {container.code === null ? (
                        <button className="card-button">See the promo</button>
                      ) : (
                        <button className="coupon-code-button">
                          <span className="coupon-inner-text">{container.code}</span>
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
                      onClick={() => toggleDetailsMain(container.id)}
                    >
                      Details {openDetailsMain === container.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                </div>
              </div>
              {openDetailsMain === container.id && (
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
                <p>{container.description}</p>
                <hr />
                {container.updated_at && (
                  <div className="last-updated">
                    <span>Last updated: </span>
                    <span>{new Date(container.updated_at).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Similar Coupons */}
      {simlarcoupons && simlarcoupons.length > 0 && (
        <div className="similar-coupons">
          <h4>Similar Coupons</h4>
          {simlarcoupons.map((coupon) => (
            <div key={`similar-${coupon.id}`} className={`container-items ${coupon.highlight}`}>
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
                      onClick={() => toggleDetailsSimilar(coupon.id)}
                    >
                      Details {openDetailsSimilar === coupon.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                </div>
              </div>

              {openDetailsSimilar === coupon.id && (
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
      )}

      {/* Offer Popups */}
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
