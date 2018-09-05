import React, { Component } from "react";
import profilePic from "../../assets/images/profile/Aripaul@2x.png";
import "./TwitterCard.css";

// Stateless functional component
const TwitterCard = () => {
  
    return (
        <div className="twitter-card">
            <div className="details">
                <div className="card-container">
                    <img src={profilePic} alt="Ari Paul" />
                    <div className="name">
                        <h2>Ari Paul</h2>
                        <p className="handle">@aridavidpaul</p>
                    </div>
                </div>
            </div>
            <div className="rating">
                <div className="card-container">
                   <div className="rating-up">
                        <span>arrow</span>
                        <span>15.1K</span>
                   </div>
                   <div className="rating-down">2.8K</div>
                </div>
            </div>
        </div>
    );
  };

export default TwitterCard;