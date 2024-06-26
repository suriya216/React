import React from "react";
import '../App.css';

function ColorChanger(){
    return(
        <>
        <div className="arrow">
            <div className="arrow-container">
                <div className="arrow-mark">
                    <img src="arrow.svg" alt="arrow-icon" className="arrow-icon"></img>
                </div>
            </div>
            <div className="revarrow-container">
                <div className="revarrow-mark">
                    <img src="revarrow.svg" alt="revarrow-icon" className="revarrow-icon"></img>
                </div>
            </div>
        </div>
        </>
    );
}

export default ColorChanger;