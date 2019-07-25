import React from "react";
import Tilt from 'react-tilt';
import eye from "./eye.png";

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> 
                    <img src={eye} alt=""/>
                </div>
            </Tilt>
        </div>
    );
};

export default Logo; 