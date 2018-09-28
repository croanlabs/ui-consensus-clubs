import React, { Component } from "react";
import infoIcon from "../../assets/icons/info-icon.png";
import "./Merits.scss";

const Merits = () => {
  return (
    <div className="merits">
        <p className="info">
            <i><img src={infoIcon} alt="Info" /></i><span>The default merit points are set to 50, do you want to change below?</span>
        </p>
        <div className="slider">
            <p>Slider goes here!</p>
            <div className="merits-box">
                <span className="large-text">50</span> <span className="small-text">Merits</span>
            </div>
        </div>
        <button>I oppose @melt_Dem</button>
    </div>
  );
};

export default Merits;
