import { useEffect, useRef } from "react";
import { Anime } from "../components/Anime";
import { ScrollToSection } from "../components/ScrollToSection";
import { gsap } from "gsap";


export const Character03 = () => {
    const characterRef = useRef(null);

    useEffect(() => {
        gsap.to(".character03", {
            scrollTrigger: {
                trigger: ".character03",
                start: "top center",
                scrub: true,
            },
            onStart: function () {
                Anime("character03");

            },
        });
    }, []);

    return (
        <div
            ref={characterRef}
            id="character03"
            className="character character03 "
        >
            <div className="container container-character-image">
                <img
                    className="character-image character3-1"
                    src="./assets/character3/character3-1.png"
                    alt=""
                />
                <img
                    className="character-image character3-2"
                    src="./assets/character3/character3-2.png"
                    alt=""
                />
            </div>
            <div className="container-text-description">
                <p className="text-description">
                    Meet intriguing individuals who bring fresh perspectives to
                    the cyberpunk narrative, each with unique abilities and
                    stories that will shape the course of your journey. Explore
                    enhanced game dynamics that challenge your skills and
                    strategic thinking, offering a thrilling evolution in the
                    ever-evolving landscape of Neo Tokyo`&apos;`s futuristic
                    realm.
                </p>
            </div>
            <div className="morphing triangle-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <polygon className="triangle" points="50,5 95,95 5,95" />
                </svg>
            </div>
            <div className="morphing triangle-left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <polygon className="triangle" points="50,5 95,95 5,95" />
                </svg>
            </div>
            <div className="container-button-discover">
                <button
                    className="button-discover "
                    onClick={() => ScrollToSection("character04")}
                >
                    EXPLORE NOW
                </button>
            </div>
        </div>
    );
};
