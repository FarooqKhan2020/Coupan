import React from 'react';
import './Brandinfo.css';
const BrandInfo = ({storeName,bannerImage}) => {
  return (
    <div className="brand-info d-flex align-items-center pb-3">
      <div className="bd-img me-3">
        <img src={bannerImage} alt="" />
      </div>
      <div>
      <h1>Your valid {storeName} promo code</h1>
      <p>Amazon Discount Code for July 2024 - 30 Online Deals</p>
      </div>
    </div>
  );
};

export default BrandInfo;
