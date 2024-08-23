import React from 'react';
import './AboutUs.css'; // You will define styles here
import {Link} from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-banner">
                <div className="about-us-overlay">
                    <h1>About Us</h1>
                    <p className="about-us-breadcrumbs">
                        <Link to="/">Home</Link> ➜ <span>About Us</span>
                    </p>
                </div>
            </div>
            <div className="about-us-content">
                <p>Welcome to [Your Website Name], your ultimate destination for finding the best deals and discounts online. We are passionate about helping you save money on your favorite brands and products, making every shopping experience more affordable and enjoyable.</p>
                <p>At [Your Website Name], we believe that everyone deserves to shop smarter. That's why we work tirelessly to bring you the latest coupon codes, exclusive offers, and unbeatable discounts from top retailers. Our team is dedicated to searching the web for the most reliable deals, so you don't have to.</p>
                <p>Whether you're looking for discounts on fashion, electronics, beauty products, or travel, we've got you covered. Our goal is to be your go-to source for savings, making it easier than ever to find the best deals on the products you love.</p>
            </div>
        </div>
    );
}

export default AboutUs;
