import React from "react";

const Navigation = ({route, onRouteChange}) => {
    if (route === "signin" || route === "register") {
        return (
            <nav style={{ display: "flex", justifyContent: "flex-end", paddingRight: "50px" }}>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange("signin")}>Sign In</p>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange("register")}>Register</p>
            </nav>
        );
    } else if (route === "home") {
        return (
            <nav style={{ display: "flex", justifyContent: "flex-end", paddingRight: "50px" }}>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange("signin")}>Sign Out</p>
            </nav>
        )
    }
};

export default Navigation; 