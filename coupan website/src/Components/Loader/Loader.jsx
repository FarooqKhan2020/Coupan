import React from "react";
import "./Loader.css"; // You can customize the styles

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div> {/* This can be your spinner or loading animation */}
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
