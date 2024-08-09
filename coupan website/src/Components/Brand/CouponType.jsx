import React from "react";
import "./CouponType.css";

const CouponType = ({ selectedType, handleRadioChange, counts }) => {
  return (
    <div className="main-coupon">
      <div className="coupon-type">
        <h3>Coupon Type:</h3>
        <label
          className={`radio-label ${selectedType === "all" ? "selected" : ""}`}
        >
          <input
            type="radio"
            value="all"
            checked={selectedType === "all"}
            onChange={() => handleRadioChange("all")}
          />
          All ({counts.all})
        </label>
        <label
          className={`radio-label ${selectedType === "code" ? "selected" : ""}`}
        >
          <input
            type="radio"
            value="code"
            checked={selectedType === "code"}
            onChange={() => handleRadioChange("code")}
          />
          Codes ({counts.code})
        </label>
        <label
          className={`radio-label ${
            selectedType === "offer" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            value="offer"
            checked={selectedType === "offer"}
            onChange={() => handleRadioChange("offer")}
          />
          Offers ({counts.offer})
        </label>
        <label
          className={`radio-label ${
            selectedType === "refunded" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            value="refunded"
            checked={selectedType === "refunded"}
            onChange={() => handleRadioChange("refunded")}
          />
          Refunded ({counts.refunded})
        </label>
      </div>
    </div>
  );
};

export default CouponType;
