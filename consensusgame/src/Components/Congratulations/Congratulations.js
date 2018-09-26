import React, { Component } from "react";
import congratsIcon from "../../assets/icons/congrats-icon.png";
import "./Congratulations.scss";

const Congrats = () => {
  return (
    <div className="congratulations card yellow">
        <div className="card-container">
            <img src={congratsIcon} alt="Success" />
            <h2>Congratulations!</h2>
            <p>
                @kylesamani has been successfully added to the list
            </p>
        </div>
    </div>
  );
};

export default Congrats;
