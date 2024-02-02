import { useEffect, useRef } from "react";
import { Anime } from "../components/Anime";
import { ScrollToSection } from "../components/ScrollToSection"

export const Character02 = () => {
    const characterRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
            window.requestAnimationFrame(() => {
                const element = characterRef.current;
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                    const triggerPoint = windowHeight * 0.1;
    
                    if (rect.top < triggerPoint) {
                        Anime("character02");
                    }
                }
            });
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (

        <div ref={characterRef} id="character02" className="character character02 ">
            <div className="container container-character-title">
                <h1 className="title">Welcome</h1>
            </div>
            <div className="container container-character-image">
                <img
                    className="character-image"
                    src="./assets/character2/character2.png"
                    alt=""
                />
            </div>
            <div className="container container-vector-plano-01">
                <img
                    className="vector-plano-01"
                    src="./assets/character2/ume4.png"
                ></img>
            </div>
            <div className="container-text-description">
                <p className="text-description">
                    Welcome to Neo Tokyo, a captivating futuristic setting where
                    technology intertwines with the darkness of the night.
                    Immerse yourself in a cyberpunk universe filled with bright
                    neon lights, imposing skyscrapers, and shadowy alleyways. In
                    this game, you will become a fearless inhabitant of Neo
                    Tokyo, an individual forged by the fusion of high technology
                    and counterculture. Your destiny is woven between the
                    threads of virtual reality and decadent alleys as you
                    confront ruthless corporations, master hackers, and defiant
                    street gangs. Are you ready to delve into the depths of Neo
                    Tokyo and leave your mark on this cyberpunk city?
                </p>
            </div>
            <div className="container container-vector-plano-02">
                <img
                    className="vector-plano-02"
                    src="./assets/character2/Vectorletter-4.png"
                ></img>
                <img
                    className="vector-plano-02"
                    src="./assets/character2/Vectorletter-3.png"
                ></img>
                <img
                    className="vector-plano-02"
                    src="./assets/character2/Vectorletter-1.png"
                ></img>
                <img
                    className="vector-plano-02"
                    src="./assets/character2/Vectorletter-2.png"
                ></img>

                <img
                    className="vector-plano-02"
                    src="./assets/character2/Vectorletter.png"
                ></img>
            </div>
            <div className="container container-vector-plano-03">
                <img
                    className="vector-plano-03 ume-one"
                    src="./assets/character2/ume4.png"
                ></img>
                <img
                    className="vector-plano-03 ume-two"
                    src="./assets/character2/ume4.png"
                ></img>
            </div>
            <div className="container-button-discover">
            <button className="button-discover" onClick={() => ScrollToSection("character03")}>MORE INFO</button>

            </div>
        </div>

    );
};
