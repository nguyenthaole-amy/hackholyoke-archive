import React from "react";
import "./Profile.css";
import linkedin from "./linkedin.png"


const ProfileItem = ({Image, Name,Team, ClassY, Major,Pronouns, LinkedIn}) => {
    console.log(Image)
  return (
    <div className="profile-column">
        <div className="proifle-card">
            <div className="flip-card-front">
                <img className="member-pic" src={require(`./member/${Image}.png`)} alt={Name} />
                    <strong>{Name}</strong><br /> {Team}
                        </div>
            <div className="flip-card-back">
                <div className="detail">
                <h3>{Pronouns}</h3>
                <p>{Major} Major</p>
                <p>Class of {ClassY}</p> 
                <a href={LinkedIn} target="_blank" rel="noopener noreferrer"><img className="linkedin" src={linkedin} alt="linkedin"/></a> 
                </div> 
            </div>
        </div>
    </div>
  );
};

export default ProfileItem;
