import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';

const PrivacyPolicy = () => {
    const [privacypolicy, setPrivacypolicy] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchPrivacypolicy = async () => {
            try {
                const response = await fetch(`${apiUrl}api/privacy-policy`);
                const data = await response.json();
                setPrivacypolicy(data);

            } catch (error) {
                console.error('Error fetching privacy policy:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrivacypolicy();
    }, [apiUrl]);

    if (loading) {
        return <Loader />;
    }

    if (!privacypolicy) {
        return <div>No content available.</div>;
    }

    return (
        <div className="about-us-container">
            <div 
                className="about-us-banner"
                style={{ backgroundImage: `url(${apiUrl + privacypolicy.privacy_banner})` }}
            >
                <div className="about-us-overlay">
                    <h1>Privacy Policy</h1>
                    <p className="about-us-breadcrumbs">
                        <Link to="/">Home</Link> ➜ <span>Privacy Policy</span>
                    </p>
                </div>
            </div>
            <div className="about-us-content">
                {privacypolicy && privacypolicy.privacy_policy ? (
                    <div dangerouslySetInnerHTML={{ __html: privacypolicy.privacy_policy }} />
                ) : (
                    <p>No content available</p>
                )}
            </div>
        </div>
    );
};

export default PrivacyPolicy;
