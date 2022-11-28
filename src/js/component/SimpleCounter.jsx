import React from "react";
import PropTypes, { element } from "prop-types"

function SimpleCounter(props) { 
    return ( <div className="bigCounter">
        <div className="Reloj">
            ¨{element}
        </div>
        <div className=""><h1>0</h1></div>
        <div><h1>0</h1></div>
        <div><h1>0</h1></div>
        <div><h1>0</h1></div>
        <div><h1>0</h1></div>
        <div className="seconds"></div>

    </div>);
};

export default SimpleCounter;

