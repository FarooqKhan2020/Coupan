import React from "react";
import "./CouponType.css";

const CouponType = ({ selectedType, handleRadioChange, counts, offer }) => {
  const buttonData = [
    { id: 0, label: "All", count: counts.all },
    { id: 1, label: "Featured", count: counts.featured },
    { id: 2, label: "Verified", count: counts.verified },
    { id: 3, label: "Exclusive", count: counts.exclusive },
    { id: 4, label: "Offer", count: offer },
  ];
  return (
    <div className="main-coupon">
      <div className="coupon-type">
        <h3>Coupon Type:</h3>
        {buttonData.map(
          (button) =>
            button.count > 0 && (
              <button
                key={button.id}
                className={`coupon-button ${
                  selectedType === button.id ? "selected" : ""
                }`}
                onClick={() => handleRadioChange(button.id)}
              >
                {button.label} ({button.count})
              </button>
            )
        )}

        {/* <button
          className={`coupon-button ${selectedType === 0 ? "selected" : ""}`}
          onClick={() => handleRadioChange(0)}
        >
          All ({counts.all})
        </button>
        {counts.featured > 0 && (
          <button
            className={`coupon-button ${selectedType === 1 ? "selected" : ""}`}
            onClick={() => handleRadioChange(1)}
          >
            Featured ({counts.featured})
          </button>
        )}
        {counts.verified > 0 && (
          <button
            className={`coupon-button ${selectedType === 2 ? "selected" : ""}`}
            onClick={() => handleRadioChange(2)}
          >
            Verified ({counts.verified})
          </button>
        )}
        {counts.exclusive > 0 && (
          <button
            className={`coupon-button ${selectedType === 3 ? "selected" : ""}`}
            onClick={() => handleRadioChange(3)}
          >
            Exclusive ({counts.exclusive})
          </button>
        )} */}
      </div>
    </div>
  );
};

export default CouponType;
