import React, { useState } from "react";
import { ChallengesData } from "./ChallengesData"

function Challenges({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <>
            <div id='box1'>
                <div id='challenges'>Challenges & Prizes</div>
                <div className='container'>
                    {ChallengesData.map((challenges, index) => {
                        return (
                            <div className={index === current ? "challenge right-slide" : "challenge"} key={index}>
                                {index === current && (
                                    <>
                                        <div className="title">{challenges.title}</div>
                                        <div id='line'></div>
                                        <img className="c-image" src={challenges.image} alt="" />
                                        <div id='line'></div>
                                        <div className="content">{challenges.content}</div>
                                        <div id='line'></div>
                                        <div className="prizes">Prizes: {challenges.prizes}</div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                <button id="prev" onClick={prevSlide}>&#10094;</button>
                <button id="next" onClick={nextSlide}>&#10095;</button>
            </div>
        </>
    );
};
export default Challenges; 