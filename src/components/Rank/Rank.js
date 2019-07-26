import React from "react";

const Rank = ({name, entries}) => {
    return (
        <div>
            <p className="f3">{name}, your entry count is...</p>
            <p className="f1 mt1 mb2">{entries}</p>
        </div>
    );
};

export default Rank;