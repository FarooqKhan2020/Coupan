import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';

const TermsCondition = () => {
    const [termscondition, setTermscondition] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchTermscondition = async () => {
            try {
                const response = await fetch(`${apiUrl}api/terms-and-conditions`);
                const data = await response.json();
                setTermscondition(data);
                // console.log(data, "termscondition data");
            } catch (error) {
                console.error('Error fetching privacy policy:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTermscondition();
    }, [apiUrl]);

    if (loading) {
        return <Loader />;
    }

    if (!termscondition) {
        return <div>No content available.</div>;
    }

    return (
        <div className="about-us-container">
            <div 
                className="about-us-banner"
                style={{ backgroundImage: `url(${apiUrl + termscondition.terms_condition_banner})` }}
            >
                <div className="about-us-overlay">
                    <h1>Terms & Conditions</h1>
                    <p className="about-us-breadcrumbs">
                        <Link to="/">Home</Link> ➜ <span>Terms & Conditions</span>
                    </p>
                </div>
            </div>
            <div className="about-us-content">
                {termscondition && termscondition.terms_and_condition ? (
                    <div dangerouslySetInnerHTML={{ __html: termscondition.terms_and_condition }} />
                ) : (
                    <p>No content available</p>
                )}
            </div>
        </div>
    );
};

export default TermsCondition;
