import anime from "animejs";

export const Anime = (value) => {
    switch (value) {
        case "character01":
            anime({
                targets:
                    ".character01 .container-character-title .character-name",
                translateY: "10px",
                fontSize: "4rem",
                scale: 1.5,
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character01 .container-character-image .character-image",
                scale: 2.2,
                translateX: "-25%",
                filter: `blur(0px)`,
                top: "240px",
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character01 .container-vector-plano-01 .vector-plano-01",
                scale: 0.6,
                filter: `blur(0px)`,
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character01 .container-vector-plano-02 .vector-plano-02",
                opacity: 1,
                filter: `blur(0px)`,
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character01 .container-vector-plano-03 .vector-plano-03",
                scale: 1.5,
                filter: `blur(0px)`,
                top: "-800px",
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character01 .container-vector-plano-04 .vector-plano-04-right",
                translateX: 1850,
                translateY: -1000,
                scale: 10,
                rotate: "90deg",
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character01 .container-vector-plano-04 .vector-plano-04-left",
                translateX: -1850,
                translateY: -1000,
                scale: 10,
                rotate: "-90deg",
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character01 .container-button-discover .button-discover",
                duration: 3000,
                translateY: "-340px",
                delay: 1000,
            });
            break;
        case "character02":
            anime({
                targets:
                    ".character02 .container-button-discover .button-discover",
                duration: 3000,
                translateY: "-340px",
                delay: 1000,
            });
            break;
        case "character03":
            anime({
                targets:
                    ".character03 .container-character-image .character3-2",
                translateX: "23rem",
                scale: 1.3,
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character03 .container-character-image .character3-1",
                translateX: "-23rem",
                scale: 1.3,
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character03 .container-text-description .text-description",
                opacity: 1,
                scale: 1.3,
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character03 .container-button-discover .button-discover",
                duration: 3000,
                translateY: "-340px",
                delay: 1000,
            })
            break;

        default:
            break;
    }
};
