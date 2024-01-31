import { useEffect } from "react";
import "./App.scss";
import { Character01 } from "./pages/Character-01";
import { Character02 } from "./pages/Character-02";
import { Character03 } from "./pages/Character-03";
import { ThreeD } from "./components/ThreeD";
import { NavBar } from "./components/NavBar";

function App() {
    useEffect(() => {
        ThreeD();
    }, []);

    return (
        <>
            <NavBar></NavBar>
            <div className="card">
                <div className="grid-container">
                    <div className="grid top-left"></div>
                    <div className="grid top-right"></div>
                    <div className="grid bottom-left"></div>
                    <div className="grid bottom-right"></div>
                </div>
            </div>
            <Character01></Character01>
            <Character02></Character02>
            <Character03></Character03>


        </>
    );
}

export default App;
