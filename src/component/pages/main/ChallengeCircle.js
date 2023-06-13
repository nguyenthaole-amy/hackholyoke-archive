import React from "react";
import "./ChallengeCircle.css";

export default function ChallengeCircle({ name, img }) {
  return (
    <div className="circle">
      <img className="challeng-img" src={img} alt="challenge-img" />
      <p className="challeng-name">{name}</p>
    </div>
  );
}
