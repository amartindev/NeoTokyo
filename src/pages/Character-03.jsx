import { useEffect, useRef } from "react";
import { Anime } from "../components/Anime";

export const Character03 = () => {

    const characterRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = characterRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                const triggerPoint = windowHeight * 0.1;

                if (rect.top < triggerPoint) {
                    Anime("character03");
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={characterRef} id="character03" className="character03">
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
                <p className="text-description">Meet intriguing individuals who bring fresh perspectives to the cyberpunk narrative, each with unique abilities and stories that will shape the course of your journey. Explore enhanced game dynamics that challenge your skills and strategic thinking, offering a thrilling evolution in the ever-evolving landscape of Neo Tokyo`&apos;`s futuristic realm.</p>
            </div>
           
            {/* <div className="container container-vector-plano-03">
                <img
                    className="vector-plano-03 ume-one"
                    src="./assets/character3/ume4.png"
                ></img>
                <img
                    className="vector-plano-03 ume-two"
                    src="./assets/character3/ume4.png"
                ></img>
            </div> */}
            <div className="container-button-discover">
                <button className="button-discover ">EXPLORE NOW</button>
            </div>
        </div>
    );
};
