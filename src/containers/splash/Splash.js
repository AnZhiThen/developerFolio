import React from "react";
import "./Splash.css";

export default function Splash() {
    return (
        <div className="splash-main" id="splash">
            <div className="splash-main-div">
                <div className="splash-name-div-top-border"></div>
                <div className="splash-name-div-content">
                    <div className="splash-logo-div">
                        <img alt="Saad Working" src={require("../../assets/images/az-dp.svg")}></img>
                    </div>
                    <div className="splash-name-details">
                        <span className="splash-name-details-name">Then An Z hi</span>
                        <span className="splash-name-details-role">Frontend Developer</span>
                    </div>
                </div>
                <div className="splash-name-div-bottom-border"></div>
            </div>
        </div>
    );
}