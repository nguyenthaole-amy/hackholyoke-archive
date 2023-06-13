import React, { useEffect } from "react";
import "./LeadingPage.css";
import Animationtrigger from "./Animation-trigger";
import styled, { keyframes } from 'styled-components';



function LeadingPage() {

    useEffect(() => {
        document.title = "HackHolyoke 2022";
    }, []);

    const floatTest = keyframes`
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-20px);
        }

        100% {
            transform: translateY(0px);
        }
    `

    const Float = styled.div`
        animation-name: ${floatTest};
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        animation-state: running;
    `

    return (
        <>
            <div className="page">
                <div id="instruction">Click our Rose to Receive the Invitation</div>
                <Float>
                    <Animationtrigger />
                </Float>
            </div>
        </>
    )
}

export default LeadingPage;