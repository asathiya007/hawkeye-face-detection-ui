import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
    return (    
        <div className="ma2 mt0">
            <p className="f3 pa2 mb1">HawkEye uses the power of AI and computer vision to detect faces in your photos. Give it a try!</p>
            <div className="pa3">
                <div className="form pa4 br3 shadow-5 center">
                    <input className="f4 pa2 w-70" type="text" placeholder="insert image URL" onChange={onInputChange}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onPictureSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm; 