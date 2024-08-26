import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Assuming you're using React Icons
import AboutUs from "../AboutUs/AboutUs";

const ContactUs = () => {
  const [contactus, setContactus] = useState(null); // Initialize as null since it's an object
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL; // Ensure this is defined correctly

  useEffect(() => {
    const fetchContactus = async () => {
      try {
        const response = await fetch(`${apiUrl}api/contact-us`);

        if (!response.ok) {
          // Check if response is OK (status is in the range 200-299)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.contact) {
          // Ensure data has contact
          setContactus(data.contact); // Update state with fetched data
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching contact us content:", error);
      } finally {
        setLoading(false); // Loading is complete, whether success or failure
      }
    };

    fetchContactus();
  }, []);

  if (loading) {
    return <Loader />; // Display loading message while data is being fetched
  }

  if (!contactus) {
    return <div>No content available.</div>; // Handle case when there's no data
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: "Mail Address",
      detail: contactus.email,
    },
    {
      icon: <FaPhone className="contact-icon" />,
      title: "Phone Number",
      detail: contactus.phone,
    },
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: "Contact Address",
      detail: contactus.address,
    },
  ];

  return (
    <>
      <div
        className="about-us-banner"
        style={{
          backgroundImage: `url(${apiUrl + contactus.banner})`,
        }}
      >
        <div className="about-us-overlay">
          <h1>Terms & Conditions</h1>
          <p className="about-us-breadcrumbs">
            <Link to="/">Home</Link> ➜ <span>Contact Us</span>
          </p>
        </div>
      </div>
      <div className="contact-us-container">
        <div className="contact-us-header">
          <h1>{contactus.title}</h1>
          <p>{contactus.description}</p>
        </div>

        <div className="contact-info">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-info-item">
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
                    {/* form... */}
        {/* <div className="contact-form">
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
            <button className="contact-button" type="submit">
              Send Now
            </button>
          </form>
        </div> */}
    
      </div>
    </>
  );
};

export default ContactUs;
