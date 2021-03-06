import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({imageUrl, boxes}) => {
    return (
        <div className="center pa1">
            <div className="absolute mb4">
                <img id="inputimage" src={imageUrl} alt="" width="500px" height="auto" />
                {
                    boxes.map((box, i) => 
                        <div key={i} className="bounding-box" style={
                            {
                                top: box.topRow,
                                right: box.rightCol,
                                bottom: box.bottomRow,
                                left: box.leftCol
                            }
                        }></div>
                    )
                }
            </div>
        </div>
    );
};

export default FaceRecognition; 