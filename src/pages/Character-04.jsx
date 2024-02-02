import { useEffect, useRef } from "react";
import { Anime } from "../components/Anime";
import { ScrollToSection } from "../components/ScrollToSection";



export const Character04 = () => {
    const characterRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = characterRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight =
                    window.innerHeight || document.documentElement.clientHeight;
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
    <div ref={characterRef} id="character04" className="character04 ">

    </div>
  )
}
