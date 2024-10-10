import React, { useState, useEffect } from "react";
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
import NotFound from "../NotFound/NotFound";
import { useTranslation } from 'react-i18next';

const apiUrl = import.meta.env.VITE_API_URL;

const ContainerList = ({
  containers,
  bannerImage,
  storeName,
  popupModal,
  simlarcoupons,
  storeData,
}) => {
  // State for main containers
  const [openDetailsMain, setOpenDetailsMain] = useState(null);
  // State for similar coupons
  const [openDetailsSimilar, setOpenDetailsSimilar] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [selectedCodeOffer, setSelectedCodeOffer] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const { t } = useTranslation();
  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      try {
        // Simulate a delay for loading state
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Data has been loaded
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setLoading(false); // Ensure to stop loading even if there's an error
      }
    };

    fetchData();
  }, []);

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

  // const handleViewOffer = (container) => {
  //   if (!container.expired) {
  //     if (container.code === null) {
  //       setSelectedOffer(container);
  //     } else {
  //       setSelectedCodeOffer(container);
  //     }
  //   }

  //   // Toggle details for main containers only
  //   if (containers.some((c) => c.id === container.id)) {
  //     setOpenDetailsMain(
  //       openDetailsMain === container.id ? null : container.id
  //     );
  //   }
  // };

  const [isModalOpencode, setIsModalOpenCode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const modalState = localStorage.getItem("isModalOpens");
    
    let savedContainers;
    try {
      // Parse localStorage and ensure it's an array
      savedContainers = JSON.parse(localStorage.getItem("containers")) || [];
      if (!Array.isArray(savedContainers)) {
        savedContainers = [savedContainers]; // If it's not an array, set it to an empty array
      }
    } catch (error) {
      // Handle any parsing errors (e.g., invalid JSON format)
      console.error("Error parsing saved containers from localStorage:", error);
      savedContainers = []; // Default to an empty array
    }
  
  
    if (modalState === "true") {
      const savedContainer = savedContainers.find((container) => {
        return container.code;
      });
  
      if (savedContainer) {
        setSelectedCodeOffer(savedContainer);
        setIsModalOpenCode(true);
      } else {
        setIsModalOpen(true);
      }
    }
  }, []);
  


  const handleViewOffer = (container) => {
    localStorage.setItem("containers", JSON.stringify(container));
    localStorage.setItem("isModalOpens", "true");

    if (!container.code) {
      setSelectedOffer(container);
      setIsModalOpen(true);
    } else {
      setSelectedCodeOffer(container);
      setIsModalOpenCode(true);
    }

    if (containers.some((c) => c.id === container.id)) {
      setOpenDetailsMain(
        openDetailsMain === container.id ? null : container.id
      );
    }

    // Open a new tab
    let newTab = window.open(
      window.location.href,
      "_blank",
      "noopener,noreferrer"
    );
    if (newTab) {
      newTab.onload = () => {
        localStorage.setItem("isModalOpens", "true");
      };
    }

    // Redirect to the coupon link in the current window
    if (container.link) {
      window.location.href = container.link;
    } else {
      console.error("container link is missing or invalid");
    }
  };

  const handleOffer = (container) => {
    if (!container.code) {
      setSelectedOffer(container);
    }
  };

  const handleClosePopup = () => {
    setSelectedOffer(null);
    setSelectedCodeOffer(null);
    localStorage.setItem("isModalOpens", "false");
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

  if (loading) {
    return <Loader />; // Show loader while data is being fetched
  }
  if (!containers || containers.length === 0) {
    return (
      <div className="container-listNotfound">
        <NotFound />
      </div>
    );
  }

  return (
    <div className="container-list">
      {/* Active Containers */}
      {activeContainers.map((container) => (
        <div
          key={`main-${container.id}`}
          className={`container-items ${container.highlight}`}
        >
          <div className="row d-flex align-items-center">
            <div className="col-sm-2 col-md-2 col-lg-2">
              <div className="container-header">
                <div className="container-type-percentage">
                  <div className="container-image">
                    <img src={apiUrl + storeData.banner} alt="add image" />
                    {/* <img src={apiUrl + container.banner} alt="add image" /> */}
                  </div>
                  <div className="container-type">
                    {container.highlight === 1
                      ? t('featured')
                      : container.highlight === 2
                      ? t('verified') 
                      : container.highlight === 3
                      ? t("exclusive")
                      : ""}
                  </div>
                  <div className="container-percentage">
                    {renderIcon(container) && <>{renderIcon(container)}%</>}
                  </div>
                </div>
              <div className="mobile-container">
                <div className="container-main">
                <p>{container.title}</p>
              </div>
              <div className="container-info">
                {container.code === null ? (
                  <Link
                    to={container.link}
                    target="_blank"
                    style={{ width: "100%" }}
                  >
                    <button
                      className="card-button"
                      onClick={() => handleOffer(container)}
                      style={{ borderRadius: "5px" }}
                    >
                      {t('see_the_promo')}
                    </button>
                  </Link>
                ) : (
                  <button
                    className="coupon-code-button"
                    onClick={() => handleViewOffer(container)}
                    style={{ borderRadius: "5px" }}
                  >
                    <span className="coupon-inner-text">{container.code}</span>
                    <span
                      className="coupon-blue-wrap"
                      style={{ borderRadius: "0px" }}
                    >
                      {t('view_code')}
                      <span
                        className="coupon-fold"
                        style={{ borderRadius: "5px" }}
                      ></span>
                    </span>
                  </button>
                  // <Link
                  //   to={container.link}
                  //   target="_blank"
                  //   className="coupon-code-button-link"
                  //   style={{ width: "100%" }}
                  // >
                  //   <button
                  //     className="coupon-code-button"
                  //     onClick={(e) => {
                  //       e.preventDefault(); // Prevent default Link behavior

                  //       handleViewOffer(container); // Call your existing function to handle the offer view

                  //       // Create a synthetic MouseEvent to simulate Ctrl + Click (or Cmd + Click on macOS)
                  //       const newTabEvent = new MouseEvent("click", {
                  //         bubbles: true,
                  //         cancelable: true,
                  //         view: window,
                  //         ctrlKey: true, // For Windows/Linux to open the link in a new tab
                  //         metaKey: true, // For macOS to open the link in a new tab
                  //       });

                  //       // Create a temporary anchor element to simulate the click
                  //       const anchor = document.createElement("a");
                  //       anchor.href = container.link;
                  //       anchor.target = "_blank";
                  //       anchor.rel = "noopener noreferrer";
                  //       anchor.dispatchEvent(newTabEvent); // Dispatch the event

                  //       // The following ensures the link is opened correctly
                  //       anchor.click();
                  //     }}
                  //     style={{ borderRadius: "5px" }}
                  //   >
                  //     <span className="coupon-inner-text">
                  //       {container.code}
                  //     </span>
                  //     <span
                  //       className="coupon-blue-wrap"
                  //       style={{ borderRadius: "0px" }}
                  //     >
                  //       View code
                  //       <span
                  //         className="coupon-fold"
                  //         style={{ borderRadius: "5px" }}
                  //       ></span>
                  //     </span>
                  //   </button>
                  // </Link>
                )}
              </div>
              </div>

              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6 a-main">
              <div className="container-main">
                <p>{container.title}</p>
              </div>
            </div>

            <div className="col-sm-4 col-md-4 col-lg-4 viewbutton">
              <div className="container-info">
                {container.code === null ? (
                  <Link
                    to={container.link}
                    target="_blank"
                    style={{ width: "100%" }}
                  >
                    <button
                      className="card-button"
                      onClick={() => handleOffer(container)}
                      style={{ borderRadius: "5px" }}
                    >
                      {t('see_the_promo')}
                    </button>
                  </Link>
                ) : (
                  <button
                    className="coupon-code-button"
                    onClick={() => handleViewOffer(container)}
                    style={{ borderRadius: "5px" }}
                  >
                    <span className="coupon-inner-text">{container.code}</span>
                    <span
                      className="coupon-blue-wrap"
                      style={{ borderRadius: "0px" }}
                    >
                       {t('view_code')}
                      <span
                        className="coupon-fold"
                        style={{ borderRadius: "5px" }}
                      ></span>
                    </span>
                  </button>
                  // <Link
                  //   to={container.link}
                  //   target="_blank"
                  //   className="coupon-code-button-link"
                  //   style={{ width: "100%" }}
                  // >
                  //   <button
                  //     className="coupon-code-button"
                  //     onClick={(e) => {
                  //       e.preventDefault(); // Prevent default Link behavior

                  //       handleViewOffer(container); // Call your existing function to handle the offer view

                  //       // Create a synthetic MouseEvent to simulate Ctrl + Click (or Cmd + Click on macOS)
                  //       const newTabEvent = new MouseEvent("click", {
                  //         bubbles: true,
                  //         cancelable: true,
                  //         view: window,
                  //         ctrlKey: true, // For Windows/Linux to open the link in a new tab
                  //         metaKey: true, // For macOS to open the link in a new tab
                  //       });

                  //       // Create a temporary anchor element to simulate the click
                  //       const anchor = document.createElement("a");
                  //       anchor.href = container.link;
                  //       anchor.target = "_blank";
                  //       anchor.rel = "noopener noreferrer";
                  //       anchor.dispatchEvent(newTabEvent); // Dispatch the event

                  //       // The following ensures the link is opened correctly
                  //       anchor.click();
                  //     }}
                  //     style={{ borderRadius: "5px" }}
                  //   >
                  //     <span className="coupon-inner-text">
                  //       {container.code}
                  //     </span>
                  //     <span
                  //       className="coupon-blue-wrap"
                  //       style={{ borderRadius: "0px" }}
                  //     >
                  //       View code
                  //       <span
                  //         className="coupon-fold"
                  //         style={{ borderRadius: "5px" }}
                  //       ></span>
                  //     </span>
                  //   </button>
                  // </Link>
                )}
              </div>
              <div>
                <button
                  className="container-details"
                  onClick={() => toggleDetailsMain(container.id)}
                >
                  {t('details')}{" "}
                  {openDetailsMain === container.id ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
            </div>
          </div>
          {openDetailsMain === container.id && (
            <div className="container-extra">
              <div className="redemption-conditions">
                <h3>{t('redemption_conditions')}</h3>
                <ul>
                  {container.highlight !== null && (
                    <li>
                      <FaCheckCircle /> {t('type_of_action')}{" "}
                      {container.highlight === 1
                        ? t('featured')
                        : container.highlight === 2
                        ? t('verified')
                        : container.highlight === 3
                        ? t('exclusive')
                        : ""}
                    </li>
                  )}

                  {container.offer !== null && (
                    <li>
                      <FaCheckCircle /> {t('price_reduction')} {container.offer}%
                    </li>
                  )}

                  {container.start_date && (
                    <li>
                      <FaCheckCircle /> {t('start')}{" "}
                      {new Date(container.start_date).toLocaleDateString()}
                    </li>
                  )}

                  {container.expire_date && (
                    <li>
                      <FaCheckCircle /> {t('expire')}{" "}
                      {new Date(container.expire_date).toLocaleDateString()}
                    </li>
                  )}
                </ul>
                <p>{container.description}</p>
                <hr />
                {container.updated_at && (
                  <div className="last-updated">
                    <span>{t('last_updated')} </span>
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
          {/* <h3>These {storeName} promo codes seem to be expired, try them</h3> */}
          <h3>{t('expired_promo_codes', { storeName })}</h3>
          {expiredContainers.map((container) => (
            <div
              key={`expired-${container.id}`}
              className={`container-items ${container.highlight}`}
            >
              <div className="row d-flex align-items-center">
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <div className="container-header">
                    <div className="container-type-percentage">
                      <div className="container-image">
                        <img src={bannerImage} alt="add image" />
                        {/* <img src={apiUrl + container.banner} alt="add image" /> */}
                      </div>
                      <div className="container-type">
                        {container.highlight === 1
                          ? "Featured"
                          : container.highlight === 2
                          ? "Verified"
                          : container.highlight === 3
                          ? "Exclusive"
                          : ""}
                      </div>
                      <div className="container-percentage">
                        {renderIcon(container) && <>{renderIcon(container)}%</>}
                      </div>
                    </div>
                    <div className="mobile-container">
                    <div className="container-main">
                    <p className="mobile-container-title">{container.title}</p>
                  </div>

                  <div className="container-info">
                    {container.code === null ? (
                      <button
                        className="card-button"
                        style={{ borderRadius: "5px" }}
                      >
                        {t('see_the_promo')}
                      </button>
                    ) : (
                      <button
                        className="coupon-code-button"
                        style={{ borderRadius: "5px" }}
                      >
                        <span className="coupon-inner-text">
                          {container.code}
                        </span>
                        <span
                          className="coupon-blue-wrap"
                          style={{ borderRadius: "0px" }}
                        >
                           {t('view_code')}
                          <span
                            className="coupon-fold"
                            style={{ borderRadius: "5px" }}
                          ></span>
                        </span>
                      </button>
                    )}
                  </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 b-main">
                  <div className="container-main">
                    <p>{container.title}</p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 viewbutton">
                  <div className="container-info">
                    {container.code === null ? (
                      <button
                        className="card-button"
                        style={{ borderRadius: "5px" }}
                      >
                      {t('see_the_promo')}
                      </button>
                    ) : (
                      <button
                        className="coupon-code-button"
                        style={{ borderRadius: "5px" }}
                      >
                        <span className="coupon-inner-text">
                          {container.code}
                        </span>
                        <span
                          className="coupon-blue-wrap"
                          style={{ borderRadius: "0px" }}
                        >
                          {t('view_code')}
                          <span
                            className="coupon-fold"
                            style={{ borderRadius: "5px" }}
                          ></span>
                        </span>
                      </button>
                    )}
                  </div>
                  <div>
                    <button
                      className="container-details"
                      onClick={() => toggleDetailsMain(container.id)}
                    >
                      {t('details')}{" "}
                      {openDetailsMain === container.id ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              {openDetailsMain === container.id && (
                <div className="container-extra">
                  <div className="redemption-conditions">
                    <h3>{t('redemption_conditions')}</h3>
                    <ul>
                      {container.highlight !== null && (
                        <li>
                          <FaCheckCircle /> Type of action:{" "}
                          {container.highlight === 1
                            ? t('featured')
                            : container.highlight === 2
                            ? t('verified')
                            : container.highlight === 3
                            ? t('exclusive')
                            : ""}
                        </li>
                      )}

                      {container.offer !== null && (
                        <li>
                          <FaCheckCircle /> {t('price_reduction')} {container.offer}%
                        </li>
                      )}

                      {container.start_date && (
                        <li>
                          <FaCheckCircle /> {t('start')}{" "}
                          {new Date(container.start_date).toLocaleDateString()}
                        </li>
                      )}

                      {container.expire_date && (
                        <li>
                          <FaCheckCircle /> {t('expire')}{" "}
                          {new Date(container.expire_date).toLocaleDateString()}
                        </li>
                      )}
                    </ul>
                    <p>{container.description}</p>
                    <hr />
                    {container.updated_at && (
                      <div className="last-updated">
                        <span>{t('last_updated')} </span>
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

      {/* Similar Coupons */}
      {simlarcoupons && simlarcoupons.length > 0 && (
        <div className="similar-coupons">
          <h4>{t('similar_coupons')}</h4>
          {simlarcoupons.map((coupon) => (
            <div
              key={`similar-${coupon.id}`}
              className={`container-items ${coupon.highlight}`}
            >
              <div className="row d-flex align-items-center">
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <div className="container-header">
                    <div className="container-type-percentage">
                      <div className="container-image">
                        <img
                          src={apiUrl + coupon.store.banner}
                          alt="add image"
                        />
                        {/* <img src={apiUrl + coupon.banner} alt="Coupon Banner" /> */}
                      </div>
                      <div className="container-type">
                        {coupon.highlight === 1
                          ? t('featured')
                          : coupon.highlight === 2
                          ? t('verified')
                          : coupon.highlight === 3
                          ? t('exclusive')
                          : ""}
                      </div>
                      <div className="container-percentage">
                        {renderIcon(coupon) && <>{renderIcon(coupon)}%</>}
                      </div>
                    </div>

                    <div className="mobile-container">
                    <div className="container-main">
                    <p>{coupon.title}</p>
                  </div>

                  <div className="container-info">
                    {coupon.code === null ? (
                      <Link
                        to={coupon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ width: "100%" }}
                      >
                        <button
                          className="card-button"
                          onClick={() => handleOffer(coupon)}
                          style={{ borderRadius: "5px" }}
                        >
                       {t('see_the_promo')}
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="coupon-code-button"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default behavior to control manually

                          handleViewOffer(coupon); // Call your existing function to handle the offer view

                          // Create a synthetic MouseEvent to simulate Ctrl + Click (or Cmd + Click on macOS)
                          const newTabEvent = new MouseEvent("click", {
                            bubbles: true,
                            cancelable: true,
                            view: window,
                            ctrlKey: true, // For Windows/Linux to open the link in a new tab
                            metaKey: true, // For macOS to open the link in a new tab
                          });

                          // Create a temporary anchor element to simulate the click
                          const anchor = document.createElement("a");
                          anchor.href = coupon.link; // Use the `coupon.link` from your data
                          anchor.target = "_blank";
                          anchor.rel = "noopener noreferrer";
                          anchor.dispatchEvent(newTabEvent); // Dispatch the event

                          // The following ensures the link is opened correctly
                          anchor.click();
                        }}
                        style={{ borderRadius: "5px" }}
                      >
                        <span className="coupon-inner-text">{coupon.code}</span>
                        <span
                          className="coupon-blue-wrap"
                          style={{ borderRadius: "0px" }}
                        >
                           {t('view_code')}
                          <span
                            className="coupon-fold"
                            style={{ borderRadius: "5px" }}
                          ></span>
                        </span>
                      </button>
                    )}
                  </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6 a-main">
                  <div className="container-main">
                    <p>{coupon.title}</p>
                  </div>
                </div>

                <div className="col-sm-4 col-md-4 col-lg-4 viewbutton">
                  <div className="container-info">
                    {coupon.code === null ? (
                      <Link
                        to={coupon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ width: "100%" }}
                      >
                        <button
                          className="card-button"
                          onClick={() => handleOffer(coupon)}
                          style={{ borderRadius: "5px" }}
                        >
                     {t('see_the_promo')}
                        </button>
                      </Link>
                    ) : (
                      // <button
                      //   className="coupon-code-button"
                      //   onClick={() => handleViewOffer(coupon)}
                      //   style={{ borderRadius: "5px" }}
                      // >
                      //   <span className="coupon-inner-text">{coupon.code}</span>
                      //   <span
                      //     className="coupon-blue-wrap"
                      //     style={{ borderRadius: "0px" }}
                      //   >
                      //     View code
                      //     <span
                      //       className="coupon-fold"
                      //       style={{ borderRadius: "5px" }}
                      //     ></span>
                      //   </span>
                      // </button>
                      <button
                        className="coupon-code-button"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default behavior to control manually

                          handleViewOffer(coupon); // Call your existing function to handle the offer view

                          // Create a synthetic MouseEvent to simulate Ctrl + Click (or Cmd + Click on macOS)
                          const newTabEvent = new MouseEvent("click", {
                            bubbles: true,
                            cancelable: true,
                            view: window,
                            ctrlKey: true, // For Windows/Linux to open the link in a new tab
                            metaKey: true, // For macOS to open the link in a new tab
                          });

                          // Create a temporary anchor element to simulate the click
                          const anchor = document.createElement("a");
                          anchor.href = coupon.link; // Use the `coupon.link` from your data
                          anchor.target = "_blank";
                          anchor.rel = "noopener noreferrer";
                          anchor.dispatchEvent(newTabEvent); // Dispatch the event

                          // The following ensures the link is opened correctly
                          anchor.click();
                        }}
                        style={{ borderRadius: "5px" }}
                      >
                        <span className="coupon-inner-text">{coupon.code}</span>
                        <span
                          className="coupon-blue-wrap"
                          style={{ borderRadius: "0px" }}
                        >
                          {t('view_code')}
                          <span
                            className="coupon-fold"
                            style={{ borderRadius: "5px" }}
                          ></span>
                        </span>
                      </button>
                    )}
                  </div>
                  <div>
                    <button
                      className="container-details"
                      onClick={() => toggleDetailsSimilar(coupon.id)}
                    >
                      {t('details')}{" "}
                      {openDetailsSimilar === coupon.id ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {openDetailsSimilar === coupon.id && (
                <div className="container-extra">
                  <div className="redemption-conditions">
                    <h3>{t('redemption_conditions')}</h3>
                    <ul>
                      {coupon.highlight !== null && (
                        <li>
                          <FaCheckCircle /> {t('type_of_action')}{" "}
                          {coupon.highlight === 1
                            ? t("featured")
                            : coupon.highlight === 2
                            ? t('verified')
                            : coupon.highlight === 3
                            ? t("exclusive")
                            : ""}
                        </li>
                      )}

                      {coupon.offer !== null && (
                        <li>
                          <FaCheckCircle /> {t('price_reduction')} {coupon.offer}%
                        </li>
                      )}

                      {coupon.start_date && (
                        <li>
                          <FaCheckCircle /> {t('start')}{" "}
                          {new Date(coupon.start_date).toLocaleDateString()}
                        </li>
                      )}

                      {coupon.expire_date && (
                        <li>
                          <FaCheckCircle /> {t('expire')}{" "}
                          {new Date(coupon.expire_date).toLocaleDateString()}
                        </li>
                      )}
                    </ul>
                    <p>{coupon.description}</p>
                    <hr />
                    {coupon.updated_at && (
                      <div className="last-updated">
                        <span>{t('last_updated')} </span>
                        <span>
                          {new Date(coupon.updated_at).toLocaleDateString()}
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

      {/* Offer Popups */}
      {selectedOffer && (
        <OfferPopup
          offer={selectedOffer}
          storeName={storeName}
          containers={containers}
          bannerImage={bannerImage}
          popupModal={popupModal}
          onClose={handleClosePopup}
          storeData={storeData}
          simlarcoupons={simlarcoupons}
        />
      )}

      {isModalOpencode && selectedCodeOffer && (
        <CodePopup
          code={selectedCodeOffer}
          onClose={handleClosePopup}
          popupModal={popupModal}
          bannerImage={bannerImage}
          storeData={storeData}
        />
      )}
    </div>
  );
};

export default ContainerList;
