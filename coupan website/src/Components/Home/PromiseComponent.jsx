import React from "react";
import "./PromiseComponent.css";
import promiseBg from "../../assets/promiseImg/promisebg.webp";
import { Link } from "react-router-dom";

const PromiseComponent = () => {
  return (
    <div className="main-promise">
      <div className="mrgn-tp">
        <div className="promise-container">
          <div className="promise-background">
            <img
              src={promiseBg}
              alt="Background"
              className="background-image"
            />
            <div className="promise-label">PROMISE</div>
          </div>
          <div className="promise-content">
            <h2>Our “Best Coupon Promise”</h2>
            <p>
              Our goal is to always provide you with the best coupons. That's
              why we have launched the "Best Coupon Promise", with which we
              guarantee that you will not find a better coupon anywhere for
              offers marked accordingly. If this is not the case, we will donate
              €5 to a non-profit organization - promised!
            </p>
            <Link to="/" className="learn-more-link">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromiseComponent;
