import { useEffect, useRef } from "react";
import { Anime } from "../components/Anime";
import { ScrollToSection } from "../components/ScrollToSection";
import { gsap } from "gsap";

export const Character04 = () => {
    const characterRef = useRef(null);

    useEffect(() => {
        gsap.to(".character04", {
            scrollTrigger: {
                trigger: ".character04",
                start: "top center",
                scrub: true,
            },
            onStart: function () {
                Anime("character04");
            },
        });
    }, []);
    return (
        <div ref={characterRef} id="character04" className="character04">
            <object
                className="background-neon"
                type="image/svg+xml"
                data="./assets/character6/background.svg"
            ></object>
            <div className="container-title">
                <h2 className="title">New Characters</h2>
            </div>
            <div className="container-cards">
                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide">
                            <img
                                className="character-image"
                                src="./assets/character4/character04-pj01.png"
                                alt=""
                            />
                        </div>
                        <div className="backSide">
                            <img
                                className="character-image"
                                src="./assets/character4/character04-pj01.png"
                                alt=""
                            />
                            <div className="container-description">
                                <p className="title">Arccan</p>
                                <p>Element: Dark</p>
                                <p>Weapon: Shooter</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide">
                            <img
                                className="character-image"
                                src="./assets/character4/character04-pj02.png"
                                alt=""
                            />
                        </div>
                        <div className="backSide">
                            <img
                                className="character-image"
                                src="./assets/character4/character04-pj02.png"
                                alt=""
                            />
                            <div className="container-description">
                                <p className="title">Sarx</p>
                                <p>Element: Tech</p>
                                <p>Weapon: Gun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide">
                            <img
                                className="character-image"
                                src="./assets/character4/character04-pj03.png"
                                alt=""
                            />
                        </div>
                        <div className="backSide">
                            <img
                                className="character-image"
                                src="./assets/character4/character04-pj03.png"
                                alt=""
                            />
                            <div className="container-description">
                                <p className="title">Nefis</p>
                                <p>Element: Light</p>
                                <p>Weapon: Artefact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-button-discover">
                <button
                    className="button-discover "
                    onClick={() => ScrollToSection("character05")}
                >
                    MAPS
                </button>
            </div>
        </div>
    );
};
