import React, { useState } from "react";
import {
  FaTimes,
  FaCopy,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./CodePopup.css";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const apiUrl = import.meta.env.VITE_API_URL;
const CodePopup = ({ code, popupModal, onClose, storeData }) => {
  const [copied, setCopied] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);
  const { t } = useTranslation();
  const handleCopy = () => {
    navigator.clipboard.writeText(code.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const handleCopyAndVisit = () => {
    handleCopy();
    window.open(offer.url, "_blank");
  };

  const toggleRequirements = () => {
    setShowRequirements(!showRequirements);
  };

  return (
    <div className="code-popup-overlay">
      <div className="code-popup-content">
        <button className="code-popup-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="code-popup-header">
          <img
           src={apiUrl +(code?.store?.banner ? code.store.banner : storeData?.banner)}
          alt="Logo" className="popup-logo" />
          {/* <img src={apiUrl + code.store.banner} alt="Logo" className="popup-logo" /> */}
        </div>
        <div className="code-popup-body">
          <p>{code.title}</p>
          <div className="code-input-group">
            <input
              type="text"
              value={code.code}
              readOnly
              className="code-code-input"
            />
            <button className="code-copy-button" onClick={handleCopy}>
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? t("copied") : t("copy")}
              {/* {copied ? " Copied!" : " Copy"} */}
            </button>
          </div>
          <Link to={code.link}  target="_blank">
            <button className="code-popup-button" onClick={handleCopyAndVisit}>
             {t("copy_voucher_code")}
            </button>
          </Link>
          {/* <div className="code-additional-info">
            <p className="code-toggle-requirements" onClick={toggleRequirements}>
              All voucher requirements at a glance {showRequirements ? <FaChevronUp /> : <FaChevronDown />}
            </p>
            {showRequirements && <p>{offer.title}</p>}
          </div> */}
          <div className="code-popup-conditions">
            <h3>{t("details")}</h3>
            <ul>
              {code.highlight !==0 &&  (
                <li>
                  <FaCheckCircle /> Type of action:{" "}
                  {code.highlight === 1
                    ? t("featured")
                    : code.highlight === 2
                    ? t("verified")
                    : code.highlight === 3
                    ? t("exclusive")
                    : t("all")}
                </li>
              )}

              {code.offer !== null && (
                <li>
                  <FaCheckCircle /> {t('price_reduction')} {code.offer}%
                </li>
              )}
              {code.start_date && (
                <li>
                  <FaCheckCircle /> {t('start')}{" "}
                  {new Date(code.start_date).toLocaleDateString()}
                </li>
              )}
              {/* <li> <FaCheckCircle /> Can be used for new and existing customers</li> */}

              {code.expire_date && (
                <li>
                  <FaCheckCircle /> {t('expire')}{" "}
                  {new Date(code.expire_date).toLocaleDateString()}
                </li>
              )}
              <li> {code.description}</li>
            </ul>
          </div>
        </div>
        <div
          className="code-popup-footer"
          // style={{
          //   backgroundImage: `url(${apiUrl + popupModal.background_image})`, 
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
          style={{
            backgroundImage: `url(${popupModal?.background_image ? apiUrl + popupModal.background_image : 'default-image-url'})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <h3>Redeem vouchers automatically with savably</h3> */}
          <Link to={popupModal? popupModal.link : "/"} target="_blank"> 
            <button className="code-activate-button">
              {t("activate_now_for_free")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodePopup;
