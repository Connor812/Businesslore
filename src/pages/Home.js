import React from "react";
import { Link } from "react-router-dom";
import TechConsultant from "../assets/images/tech-consulting.jpg";
import BrandSupport from "../assets/images/brand-support.jpg";
import DigitalContent from "../assets/images/digital-content.jpg";
import { GiShakingHands } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { TfiLayoutCtaBtnLeft } from "react-icons/tfi";
import SwiperComponent from "../components/Swiper";

import "../assets/css/home.css";

import transition from "../transition";

function Home() {
    return (
        <main>
            <center>
                <h1 className="blue mt-3">
                    BIG ANSWERS FOR SMALL BUSINESS
                </h1>
                <p className="paragraph">
                    There are a variety of tools for online representation and marketing available to businesses that increase sales and customer engagement. They work best when they work together as part of a plan.
                    <br />
                    We help our clients with the big picture and take care of the details.
                </p>

                <section className="what-we-do">

                    <div className="card">
                        <div className="img-container">
                            <img src={TechConsultant} alt="Tech Consultant" />
                            <h2>Technology Consulting</h2>
                            <Link to="/technology" className="icon">
                                <GiShakingHands />
                            </Link>
                        </div>
                        <p>
                            Business Strategy <br />
                            Website Development <br />
                            Point of Sale Systems <br />
                            QR code Inventory <br />
                            Database Development <br />

                        </p>
                    </div>

                    <div className="card">
                        <div className="img-container">
                            <img src={BrandSupport} alt="Brand Support" />
                            <h2>Brand Support</h2>
                            <Link to="/brand" className="icon">
                                <MdContactSupport />
                            </Link>
                        </div>
                        <p>
                            Brand Strategy <br />
                            Online Marketing <br />
                            Target Marketing <br />
                            Assets & Messaging <br />
                            Content Strategy <br />
                        </p>
                    </div>

                    <div className="card">
                        <div className="img-container">
                            <img src={DigitalContent} alt="Digital Content" />
                            <h2>Digital Content</h2>
                            <Link to="/digital" className="icon">
                                <TfiLayoutCtaBtnLeft />
                            </Link>
                        </div>
                        <p>
                            Social Medial Management <br />
                            Content Creation <br />
                            Text - Audio - Video <br />
                            SEO Management <br />
                            Marketing Materials <br />
                        </p>
                    </div>

                </section>

                <section>
                    <h2 className="blue mt-4">DESIGN - DEVELOPMENT - DELIVERY - ANALYSIS</h2>
                    <p className="how-to-use paragraph my-3 blue">
                        How you use technology in your business affects work efficiency and job satisfaction.
                        <br />
                        You need to know all options in order to make a good decision.
                        <br />
                        Discuss and plan with experienced technical specialists.
                    </p>
                </section>

            </center>
            <div className="p-4 pt-0">
                <h1 className="text-center mb-1 blue">
                    Sampling Of Our Clients
                </h1>
                <SwiperComponent />
            </div>
        </main>
    );
}

export default transition(Home);
