import React from "react";
import "./LeadingPage.css";
import asset2 from "./Asset 2.png";
import envelope from "../../../img/envelope.png";
import styled, { keyframes } from 'styled-components';

class Animationtrigger extends React.Component {

    stretch = keyframes`
    0% {
        transform: scaleX(1.5);
    }

    50% {
        transform: scaleX(1);
    }

    100% {
        transform: scaleX(1.5);
    }
`

    Stretch = styled.div`
    animation-name: ${this.stretch};
    animation-duration: 2.65s;
    animation-iteration-count: infinite;
    animation-state: running;
`

    state = {
        classNames: "",
    }

    animation = (e) => {
        e.preventDefault();
        const { classNames } = this.state;
        this.setState({ classNames: classNames ? "" : "animation" });
        setTimeout(() => {
            window.open(`${process.env.PUBLIC_URL}/home`, "_self")
        }, 1000)
    }
    render() {
        return (
            <div className={`box ${this.state.classNames}`}>
                {/* <img className="enve" src={envelope} alt="" width="50%" /> */}
                <a href="/home" onClick={this.animation}><img className="enve" src={envelope} width="50%" alt="" /></a>
                <this.Stretch>
                    <div className="shadow"></div>
                </this.Stretch>
            </div>
        )
    }
}

export default Animationtrigger;