import React from "react";
import Random from "../Random";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const MiddleSide = () => {
    const onClickPageDown = () => {
        window.scrollTo({
            top: 1100,
            behavior: "smooth",
        });
    };
    return (
        <HeadMidlleSide>
            <Random />
            <ArrowDown onClick={onClickPageDown}>
                <svg
                    fill="rgb(255,255,255)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512">
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
            </ArrowDown>
            <FontAwesomeIcon icon={faEnvelope} color="white" />
        </HeadMidlleSide>
    );
};

export default MiddleSide;

const HeadMidlleSide = styled.div`
    padding: 30vh 0 60vh 0;
    text-align: center;
`;

const ArrowDown = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: godown 1s infinite alternate;
    position: absolute;
`;
