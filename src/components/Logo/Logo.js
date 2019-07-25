import React from "react";
import Tilt from 'react-tilt';
import eye from "./eye.png";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="ma4 mt0 split">
            <Tilt className="Tilt br3 shadow-5 pa1" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa1"> 
                    <img src={eye} alt="" height="135px" width="135px"/>
                </div>
            </Tilt>
            <div className="title-header">
                <h1 className="f1">HawkEye Face Detection</h1>
                <p>By Akshay Sathiya</p>
            </div>
        </div>
    );
};

export default Logo; 