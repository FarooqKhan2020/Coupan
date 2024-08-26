import React, { useState, useEffect } from "react";
import "./AboutUs.css"; // You will define styles here
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';

const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState(null); // Initialize as null since it's an object
    const [loading, setLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_API_URL;  // Ensure this is defined correctly
  
    useEffect(() => {
      const fetchAboutUs = async () => {
        try {
          const response = await fetch(`${apiUrl}api/about-us`);
          
          if (!response.ok) {  // Check if response is OK (status is in the range 200-299)
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
  
          if (data.aboutUs) {  // Ensure data has aboutUs
            setAboutUs(data.aboutUs);  // Update state with fetched data
          } else {
            console.error("Unexpected response format:", data);
          }
        } catch (error) {
          console.error("Error fetching about us content:", error);
        } finally {
          setLoading(false);  // Loading is complete, whether success or failure
        }
      };
  
      fetchAboutUs();
    }, []);
  
    if (loading) {
      return <Loader />;  // Display loading message while data is being fetched
    }
  
    if (!aboutUs) {
      return <div>No content available.</div>;  // Handle case when there's no data
    }
    


  return (
    <div className="about-us-container">
      <div className="about-us-banner"
      style={{ 
        backgroundImage: `url(${apiUrl + aboutUs.banner_image})`, 
        // backgroundSize: 'cover', 
        // backgroundPosition: 'center', 
        // height: '400px' 
      }}>
      
        <div className="about-us-overlay">
          <h1>About Us</h1>
          <p className="about-us-breadcrumbs">
            <Link to="/">Home</Link> ➜ <span>About Us</span>
          </p>
        </div>
      </div>
      <div className="about-us-content">
  {aboutUs && typeof aboutUs === 'object' && aboutUs.description ? (
    <div dangerouslySetInnerHTML={{ __html: aboutUs.description }} />
  ) : (
    <p>No content available</p>
  )}
</div>

    </div>
  );
};

export default AboutUs;
