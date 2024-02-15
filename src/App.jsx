import { useEffect } from "react";
import "./App.scss";
import { Character01 } from "./pages/Character-01";
import { Character02 } from "./pages/Character-02";
import { Character03 } from "./pages/Character-03";
import { Character04 } from "./pages/Character-04";
import { Character05 } from "./pages/Character-05";
import { Character06 } from "./pages/Character-06";
import { ThreeD } from "./components/ThreeD";
import { NavBar } from "./components/NavBar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scroller: ".characters-container",
    });

    useEffect(() => {
        ThreeD();
    }, []);

    return (
        <>
            <NavBar></NavBar>
            <div className="characters-container">
                <section className="panel">
                    <Character01></Character01>
                    <Character02></Character02>
                    <Character03></Character03>
                    <Character04></Character04>
                    <Character05></Character05>
                    <Character06></Character06>
                </section>
                <section className="panel"></section>
                <section className="panel"></section>
                <section className="panel"></section>
                <section className="panel panel-character05"></section>
                <section className="panel"></section>
            </div>
        </>
    );
}

export default App;
