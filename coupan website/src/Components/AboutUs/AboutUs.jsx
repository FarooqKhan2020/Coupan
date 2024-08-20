import React from 'react';
import './AboutUs.css'; // You will define styles here

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-banner">
                <div className="overlay">
                    <h1>About Us</h1>
                    <p className="breadcrumbs">
                        <a href="/">Home</a> ➜ <span>About Us</span>
                    </p>
                </div>
            </div>
            <div className="about-us-content">
                <p>Lorem ipsum dolor sit amet, nibh saperet te pri, at nam diceret disputationi...</p>
                <p>Consestetur definitionem cu mea, usu legere minimum ne...</p>
                <p>Pri tempor appareat no, eruditi repudiandae vix at...</p>
            </div>
        </div>
    );
}

export default AboutUs;
