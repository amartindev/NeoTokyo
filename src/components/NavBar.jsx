import { Anime } from "../components/Anime";
import { useEffect } from "react";
import { ScrollToSection } from "./ScrollToSection";

export const NavBar = () => {

    useEffect(() => {
        Anime("navBar");
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
