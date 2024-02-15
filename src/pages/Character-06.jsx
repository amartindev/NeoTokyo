import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Anime } from "../components/Anime";
import { ScrollToSection } from "../components/ScrollToSection";

export const Character06 = () => {
    const characterRef = useRef(null);
    useEffect(() => {
        gsap.to(".character05", {
            scrollTrigger: {
                trigger: ".character06",
                start: "top center",
                scrub: true,
            },
            onStart: function () {
                Anime("character06");
            },
        });
    }, []);
    return (
        <div ref={characterRef} id="character06" className="character06">
            <div className="container-button-discover">
                <button
                    className="button-discover "
                    onClick={() => ScrollToSection("character01")}
                >
                    CONTINUE
                </button>
            </div>
        </div>
    );
};
