import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/service.css";

import transition from "../transition";

function Digital() {
    return (
        <>
            <div className="service-hero-img digital"></div>
            <main>

                <h1 className="service-title">
                    Digital Branding
                </h1>
                <hr />
                <p className="service-description">
                    In today’s digital world, having a strong online presence is essential for businesses to succeed. Our digital branding services are designed to help businesses establish a strong and consistent brand identity across all digital platforms. From developing a cohesive brand strategy to creating engaging content and managing your social media presence, we work with you to build a brand that resonates with your target audience and drives success. Our team of experienced professionals is dedicated to delivering exceptional results and exceeding client expectations. Partner with us to take your digital branding to the next level and stand out in the crowded online marketplace.
                </p>
                <p className="text-start">
                    <Link to="/quote" className="quote-link">
                        Get a Quote
                    </Link>
                </p>
            </main>
        </>
    );
}

export default transition(Digital);
