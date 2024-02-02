import { useEffect } from "react";
import { ScrollToSection } from "../components/ScrollToSection";
import { Anime } from "../components/Anime";
export const Character01 = () => {
    useEffect(() => {
        Anime("character01");
    }, []);

    return (
        <>
            <div className="card">
                <div className="grid-container">
                    <div className="grid top-left"></div>
                    <div className="grid top-right"></div>
                    <div className="grid bottom-left"></div>
                    <div className="grid bottom-right"></div>
                </div>
            </div>
            <div id="character01" className="character character01">
                <div className="container-background-character">
                    <img
                        className="background-character"
                        src="./assets/character1/background01.jpg"
                        alt=""
                    />
                </div>
                <div className="container container-character-title">
                    <h1 className="character-name">Neo Tokyo</h1>
                </div>
                <div className="container container-character-image">
                    <img
                        className="character-image"
                        src="./assets/character1/character1.png"
                        alt=""
                    />
                </div>
                <div className="container container-vector-plano-01">
                    <object
                        className="vector-plano-01"
                        type="image/svg+xml"
                        data="./assets/character1/Vector01.svg"
                    ></object>
                </div>

                <div className="container container-vector-plano-02">
                    <object
                        className="vector-plano-02 vector-plano-02_1"
                        type="image/svg+xml"
                        data="./assets/character1/Vector02.svg"
                    ></object>
                    <object
                        className="vector-plano-02 vector-plano-02_2"
                        type="image/svg+xml"
                        data="./assets/character1/Vector02.svg"
                    ></object>
                </div>
                <div className="container container-vector-plano-03">
                    <object
                        className="vector-plano-03"
                        type="image/svg+xml"
                        data="./assets/character1/Vector03.svg"
                    ></object>
                </div>
                <div className="container container-vector-plano-04">
                    <object
                        className="vector-plano-04 vector-plano-04-left"
                        type="image/svg+xml"
                        data="./assets/character1/Vector04-left.svg"
                    ></object>
                    <object
                        className="vector-plano-04 vector-plano-04-left"
                        type="image/svg+xml"
                        data="./assets/character1/Vector04-left.svg"
                    ></object>
                    <object
                        className="vector-plano-04 vector-plano-04-left"
                        type="image/svg+xml"
                        data="./assets/character1/Vector04-left.svg"
                    ></object>
                    <object
                        className="vector-plano-04 vector-plano-04-right"
                        type="image/svg+xml"
                        data="./assets/character1/Vector04-right.svg"
                    ></object>
                    <object
                        className="vector-plano-04 vector-plano-04-right"
                        type="image/svg+xml"
                        data="./assets/character1/Vector04-right.svg"
                    ></object>
                    <object
                        className="vector-plano-04 vector-plano-04-right"
                        type="image/svg+xml"
                        data="./assets/character1/Vector04-right.svg"
                    ></object>
                </div>
            </div>
            <div className="character01">
                <div className="container-button-discover">
                    <button
                        className="button-discover "
                        onClick={() => ScrollToSection("character02")}
                    >
                        BUY NOW
                    </button>
                    <button
                        className="button-discover "
                        onClick={() => ScrollToSection("character02")}
                    >
                        PLAY
                    </button>
                </div>
            </div>
        </>
    );
};
