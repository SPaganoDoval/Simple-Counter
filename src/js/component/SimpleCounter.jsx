import React from "react";
import PropTypes from "prop-types";

function SimpleCounter(props) { 
    return (<div className="bigCounter">
        <div className="calendar">
            <i className="far fa-clock"></i>
        </div>
        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne}</div>
    </div>);
};

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};


export default SimpleCounter;