import React from "react";
import PropTypes from 'prop-types';

 const Counter = (props) => {

    return (
       <div className="totalCounter">
            <div className="calendar">
                <i className="far fa-clock" />
            </div>
            <div className="six">{props.six}</div>
            <div className="five">{props.five}</div>
            <div className="four">{props.four}</div>
            <div className="three">{props.three}</div>
            <div className="two">{props.two}</div>
            <div className="one">{props.one}</div>
        </div>
    );
};

        Counter.propTypes = {
            six: PropTypes.number.isRequired,
            five: PropTypes.number.isRequired,
            four: PropTypes.number.isRequired,
            three: PropTypes.number.isRequired,
            two: PropTypes.number.isRequired,
            one: PropTypes.number.isRequired,
        };

export default Counter;