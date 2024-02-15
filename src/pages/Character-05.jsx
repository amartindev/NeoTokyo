import { useEffect, useRef } from "react";
import { Gallery } from "../components/Gallery";
import { gsap } from "gsap";
import { ScrollToSection } from "../components/ScrollToSection";
import { Anime } from "../components/Anime";

export const Character05 = () => {
    const characterRef = useRef(null);
    useEffect(() => {
        gsap.to(".character05", {
            scrollTrigger: {
                trigger: ".character05",
                start: "top center",
                scrub: true,
            },
            onStart: function () {
                Anime("character05");
                Gallery();
            },
        });
    }, []);
    return (
        <div ref={characterRef} id="character05" className="character05">
            <div className="container-carousel">
                <section className="slide">
                    <div className="slide__outer">
                        <div className="slide__inner">
                            <div className="slide__content">
                                <div className="slide__container">
                                    <h2 className="slide__heading">SCROLL</h2>
                                    <figure className="slide__img-cont">
                                        <img
                                            className="slide__img"
                                            src="./assets/character5/Char01.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="slide">
                    <div className="slide__outer">
                        <div className="slide__inner">
                            <div className="slide__content">
                                <div className="slide__container">
                                    <h2 className="slide__heading">SWIPE</h2>
                                    <figure className="slide__img-cont">
                                        <img
                                            className="slide__img"
                                            src="./assets/character5/Char02.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="slide">
                    <div className="slide__outer">
                        <div className="slide__inner">
                            <div className="slide__content">
                                <div className="slide__container">
                                    <h2 className="slide__heading">SCROLL</h2>
                                    <figure className="slide__img-cont">
                                        <img
                                            className="slide__img"
                                            src="./assets/character5/Char03.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="slide">
                    <div className="slide__outer">
                        <div className="slide__inner">
                            <div className="slide__content">
                                <div className="slide__container">
                                    <h2 className="slide__heading">SWIPE</h2>
                                    <figure className="slide__img-cont">
                                        <img
                                            className="slide__img"
                                            src="./assets/character5/Char04.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="overlay">
                    <div className="overlay__content">
                        <p className="overlay__count">
                            0<span className="count">1</span>
                        </p>
                        <figure className="overlay__img-cont">
                            <img
                                className="image"
                                src="./assets/character5/background01.jpg"
                            />
                            <img
                                className="image"
                                src="./assets/character5/background02.jpg"
                            />
                            <img
                                className="image"
                                src="./assets/character5/background03.jpg"
                            />
                            <img
                                className="image"
                                src="./assets/character5/background04.jpeg"
                            />
                        </figure>
                    </div>
                </section>
            </div>
            <div className="container-button-discover">
                <button
                    className="button-discover "
                    onClick={() => ScrollToSection("character06")}
                >
                    CONTINUE
                </button>
            </div>
        </div>
    );
};
