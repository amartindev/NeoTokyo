import anime from "animejs";
import { useEffect } from "react";

export const Character = () => {
    useEffect(() => {
        anime({
            targets: ".container-character-title .character-name",
            translateY: "10px",
            fontSize: "4rem",
            scale: 1.5,
            easing: "easeInOutQuad",
        });
        anime({
            targets: ".container-character-image .character-image",
            scale: 2.2,
            translateX: "-25%",
            filter: `blur(0px)`,
            top: "240px",
            easing: "easeInOutQuad",
        });
        anime({
            targets: ".container-vector-plano-01 .vector-plano-01",
            scale: 0.6,
            filter: `blur(0px)`,
            easing: "easeInOutQuad",
        });
        anime({
            targets: ".container-laterals .vector-plano-02",
            opacity: 1,
            filter: `blur(0px)`,
            easing: "easeInOutQuad",
        });
        anime({
            targets: ".container-vector-plano-03 .vector-plano-03",
            scale: 1.5,
            filter: `blur(0px)`,
            top: "-800px",
            easing: "easeInOutQuad",
        });
    }, []);

    return (
        <div className="character">
            <div className="container container-character-title">
                <h1 className="character-name">Neferis</h1>
            </div>
            <div className="container container-character-image">
                <img
                    className="character-image"
                    src="./assets/character1.png"
                    alt=""
                />
            </div>
            <div className="container container-vector-plano-01">
                <object
                    className="vector-plano-01"
                    type="image/svg+xml"
                    data="./assets/Vector01.svg"
                ></object>
            </div>

            <div className="container container-laterals">
                <object
                    className="vector-plano-02 vector-plano-02_1"
                    type="image/svg+xml"
                    data="./assets/Vector02.svg"
                ></object>
                <object
                    className="vector-plano-02 vector-plano-02_2"
                    type="image/svg+xml"
                    data="./assets/Vector02.svg"
                ></object>
            </div>
            <div className="container container-vector-plano-03">
                <object
                    className="vector-plano-03"
                    type="image/svg+xml"
                    data="./assets/Vector03.svg"
                ></object>
            </div>
        </div>
    );
};
