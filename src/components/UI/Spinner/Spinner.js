import React from "react";
import spinnerGif from "../../../assets/images/loader.gif";
const spinner = () => (
    <div className="spinner_container">
        <img src={spinnerGif} alt="spinner" />
    </div>
);
export default spinner;
