import React, { useState, useEffect } from "react";
import "../assets/css/websites.css";

import { IoIosArrowRoundForward, IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import CobbAndJones from "../assets/images/cob&jones.png";
import NorthShore from "../assets/images/northshore.png";
import NCF from "../assets/images/ncf.png";
import Ontrad from "../assets/images/ontrad.png";

export default function SimpleCarousel() {
    const slides = [
        {
            img: CobbAndJones,
            title: "Cobb And Jones",
            desc: "This website was created for Cobb And Jones. They are a group of well renowned lawyers in the Norfolk area.",
            link: "https://northshoresoapworks.com/"
        },
        {
            img: NorthShore,
            title: "North Shore Soapworks",
            desc: "This website is a beautifully designed online store for North Shore Soapworks array of soaps they sell.",
            link: "https://northshoresoapworks.com/"
        },
        {
            img: NCF,
            title: "Norfolk Community Foundation",
            desc: "This website was built for the community of Norfolk County. It is a place where you can donate to people in your community.",
            link: "https://www.norfolkcommunityfoundation.com/"
        },
        {
            img: Ontrad,
            title: "Ontario Traditional Music",
            desc: "This website was built for traditional music lovers. It has hundreds of songs and videos.",
            link: "https://www.norfolkcommunityfoundation.com/"
        }
    ];

    const [index, setIndex] = useState(0);

    const visibleSlides = 3; // 👈 change how many you want visible

    const next = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // autoplay
    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="websites">
            <button className="prev" onClick={prev}>
                <IoIosArrowDropleftCircle />
            </button>

            <div className="carousel-window">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${index * (100 / visibleSlides)}%)`
                    }}
                >
                    {slides.map((slide, i) => (
                        <div className="carousel-slide" key={i}>
                            <div className="website-component">
                                <img src={slide.img} alt={slide.title} className="website-image" />
                                <h4 className="website-title">{slide.title}</h4>
                                <p className="website-description">{slide.desc}</p>
                                <a href={slide.link} target="_blank" rel="noreferrer" className="website-link">
                                    Visit <IoIosArrowRoundForward />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="next" onClick={next}>
                <IoIosArrowDroprightCircle />
            </button>
        </div>
    );
}