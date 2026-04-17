import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/service.css";

import transition from "../transition";

function Brand() {
    return (
        <>
            <div className="service-hero-img brand"></div>
            <main>

                <h1 className="service-title">
                    Brand Support
                </h1>
                <hr />
                <p className="service-description">
                    At our company, we understand the importance of a strong brand. Our brand support services are designed to help businesses establish and maintain a compelling brand identity. Whether you need assistance with brand strategy, logo design, or brand messaging, our team of experts is here to help. We work closely with our clients to understand their unique brand goals and develop tailored solutions that align with their vision. With our brand support services, you can enhance your brand's visibility, credibility, and customer loyalty. To get more information and a quote, click here.
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

export default transition(Brand);