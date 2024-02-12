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
            anime({
                targets:
                    ".character02 .container-vector-plano-02 .vector-plano-02",
                translateX: -270,
                delay: anime.stagger(100),
            });
            anime({
                targets:
                    ".character02 .container-character-image .character-image",
                translateX: 280,
            });
            anime({
                targets: ".character02 .container-text-description",
                translateX: -280,
            });
            break;
        case "character03":
            anime({
                targets:
                    ".character03 .container-character-image .character3-2",
                translateX: "28rem",
                translateY: 30,
                scale: 1.3,
                easing: "easeInOutQuad",
            });
            anime({
                targets:
                    ".character03 .container-character-image .character3-1",
                translateX: "-28rem",
                translateY: 30,
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
                targets: ".character03 .morphing .triangle",
                points: [
                    { value: "50,5 95,95 5,95" },
                    { value: "20,20 80,20 50,80" },
                    { value: "50,80 80,20 20,20" },
                    { value: "80,20 20,20 50,80" },
                    { value: "50,5 95,95 5,95" },
                    { value: "50,5 95,95 5,95" },
                ],
                easing: "easeInOutQuad",
                duration: 6000,
                loop: true,
            });
            anime({
                targets: ".character03 .triangle-left",
                translateX: "-31rem",
                scale: 2,
                delay: 1000,
                duration: 1000,
            });
            anime({
                targets: ".character03 .triangle-right",
                translateX: "31rem",
                scale: 2,
                delay: 1000,
                duration: 1000,
            });
            anime({
                targets:
                    ".character03 .container-button-discover .button-discover",
                duration: 3000,
                translateY: "-340px",
                delay: 1000,
            });
            break;
            case "character04":
            anime({
                targets:
                    ".character04 .container-button-discover .button-discover",
                duration: 3000,
                translateY: "-340px",
                delay: 1000,
            });
            anime({
                targets: '.character04 .container-cards .myCard',
                translateX: "-30rem",
                delay: anime.stagger(200)
              });
            break;
            case "navBar":
                anime({
                    targets: ".container-navegation-bar .navegation-bar",
                    duration: 2000,
                    translateX: "-900px",
                    delay: 100,
                });
            break
        default:
            break;
    }
};
