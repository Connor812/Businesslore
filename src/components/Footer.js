import React from "react";
import { Row, Col } from "react-bootstrap";
import LightBulb from "../assets/images/lightbulb.jpg";

function Footer() {
    return (
        <footer>
            <div className="white-border">
                <Row style={{ width: "100%" }}>
                    <Col xl={3} md={0} className="footer-img-container">
                        <img src={LightBulb} alt="Light Bulb" className="footer-img" />
                    </Col>
                    <Col xl={6} md={6}>
                        <div className="d-flex justify-content-center">
                            <div className="p-4">
                                <h3 className="text-start mb-4">New ideas for your business and brand </h3>
                                <ul className="footer-bullet-points">
                                    <li>
                                        Upgrade your website SEO (search engine optimization)
                                    </li>
                                    <li>
                                        Digital marketing will help you find new customers
                                    </li>
                                    <li>
                                        Communicate and engage your clients.
                                    </li>
                                    <li>
                                        Install a new point of sale system like Square, Shopify, Monaris ext.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} md={6} className="contact-us">
                        <h3 className="text-center">
                            <h2 className="mb-0">Contact Us</h2>
                            For A Free
                            <br />
                            Consultation
                        </h3>
                        <h4 className="text-center">
                            <a href="mailto:dbowen@businesslore.com" className="white">dbowen@businesslore.com</a>
                            <br className="mb-2" />
                            <a href="tel:519-410-4989" className="white">519-410-4989</a>
                        </h4>
                    </Col>
                </Row>
            </div>
            <div className="text-center pt-4">
                <h5 className="mb-0">
                    CONSULTING - WEBSITE DESIGN & MANAGEMENT - SYSTEM DESIGN - SOFTWARE DEVELOPMENT- CONTENT CREATION
                </h5>
            </div>
        </footer>
    );
}

export default Footer;
