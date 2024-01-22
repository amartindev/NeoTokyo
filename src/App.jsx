import { useEffect } from "react";
import "./App.scss";
import { Character } from "./components/Character";

function App() {
useEffect(() => {

  return () => {
    // document.querySelector('.grid.top-left').addEventListener('mouseover', function() {
    //     document.querySelector('.card').style.transform = 'rotateY(-15deg) rotateX(15deg)';
    //   });
    //   document.querySelector('.grid.top-right').addEventListener('mouseover', function() {
    //     document.querySelector('.card').style.transform = 'rotateY(15deg) rotateX(15deg)';
    //   });
    //   document.querySelector('.grid.bottom-left').addEventListener('mouseover', function() {
    //     document.querySelector('.card').style.transform = 'rotateY(-15deg) rotateX(-15deg)';
    //   });
    //   document.querySelector('.grid.bottom-right').addEventListener('mouseover', function() {
    //     document.querySelector('.card').style.transform = 'rotateY(15deg) rotateX(-15deg)';
    //   });
      
    //   document.querySelector('.grid.top-left').addEventListener('mouseout', function() {
    //     document.querySelector('.card').style.transform = 'none';
    //   });
    //   document.querySelector('.grid.top-right').addEventListener('mouseout', function() {
    //     document.querySelector('.card').style.transform = 'none';
    //   });
    //   document.querySelector('.grid.bottom-left').addEventListener('mouseout', function() {
    //     document.querySelector('.card').style.transform = 'none';
    //   });
    //   document.querySelector('.grid.bottom-right').addEventListener('mouseout', function() {
    //     document.querySelector('.card').style.transform = 'none';
    //   });
  }
}, [])




    return (
        <>

            <div className="card">
                <div className="grid-container">
                    <div className="grid top-left"></div>
                    <div className="grid top-right"></div>
                    <div className="grid bottom-left"></div>
                    <div className="grid bottom-right"></div>
                </div>
                <Character></Character>
            </div>
        </>
    );
}

export default App;
