import anime from "animejs";
import { useEffect } from "react";
import { ScrollToSection } from "./ScrollToSection";

export const NavBar = () => {
    useEffect(() => {
        return () => {
            anime({
                targets: ".container-navegation-bar .navegation-bar",
                duration: 2000,
                translateX: "-1200px",
                delay: 100,
            });
        };
    }, []);

    return (
        <div className="container-navegation-bar">
            <div className="navegation-bar">
                <ul>
                    <li>
                        <a href="">STORE</a>
                    </li>
                    <li>
                        <a onClick={() => ScrollToSection("character02")} >NEWS</a>
                    </li>
                    <li>
                        <a  onClick={() => ScrollToSection("character03")} >MEDIA</a>
                    </li>
                    <li>
                    <a  onClick={() => ScrollToSection("character04")} >STUDIOS</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
