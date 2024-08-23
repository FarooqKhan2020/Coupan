import React from 'react';
import './ContactUs.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Assuming you're using React Icons

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <div className="contact-us-header">
                <h1>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className="contact-info">
                <div className="contact-info-item">
                    <FaEnvelope className="contact-icon" />
                    <h3>Mail Address</h3>
                    <p>contact.us@gmail.com</p>
                </div>
                <div className="contact-info-item">
                    <FaPhone className="contact-icon" />
                    <h3>Phone Number</h3>
                    <p>123-343-4444</p>
                </div>
                <div className="contact-info-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <h3>Contact Address</h3>
                    <p>San Francisco City Hall, San Francisco, CA</p>
                </div>
            </div>

            <div className="contact-form">
                <h2>Send Us A Message</h2>
                <form className="form">
                    <div className="contact-form-group">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="contact-form-group">
                        <input type="tel" placeholder="Phone" />
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="contact-form-group">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <button className="contact-button" type="submit">Send Now</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
