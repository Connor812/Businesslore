import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/service.css";

import transition from "../transition";

function Technology() {
    return (
        <>
            <div className="service-hero-img tech"></div>
            <main>

                <h1 className="service-title">
                    Technology Consulting
                </h1>
                <hr />
                <p className="service-description">
                    At our company, we provide comprehensive technology consulting services to help businesses leverage the power of technology for their growth and success. With our expertise in the latest technologies and industry best practices, we offer strategic guidance, solution design, and implementation support to address our clients' unique technology challenges. Whether it's optimizing existing systems, adopting new technologies, or developing custom software solutions, we work closely with our clients to understand their business objectives and deliver tailored technology solutions that drive innovation and efficiency. Our team of experienced consultants is dedicated to delivering exceptional results and exceeding client expectations. Partner with us for all your technology consulting needs and unlock the full potential of your business.
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

export default transition(Technology);
