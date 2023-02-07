import styled from "@emotion/styled";
import React, { useRef } from "react";

const Banner = () => {
    const ref = useRef();
    const text = "위로하지 않기. 조언하지 않기.";
    const onClickDeleteBanner = () => {
        ref.current.style.animation = "fadeOut 1s forwards";
    };

    return (
        <MovingBanner ref={ref}>
            <MovingBannerText>
                <marquee scrolldelay="100" direction="right">
                    {text}
                </marquee>
            </MovingBannerText>
            <Xbox onClick={onClickDeleteBanner}>x</Xbox>
        </MovingBanner>
    );
};

export default Banner;

const MovingBanner = styled.div`
    width: 100%;
    height: 30px;
    bottom: 0px;
    position: fixed;
    background-color: black;
    @media screen and (max-width: 425px) {
        height: 20px;
    }
`;
const MovingBannerText = styled.div`
    color: white;
    width: 100%;
    & > marquee {
        height: 100%;
        line-height: 2;
        font-size: 0.8rem;
        font-family: sans-serif;
        @media screen and (max-width: 425px) {
            line-height: 2;
            font-size: 11px;
        }
    }
`;

const Xbox = styled.div`
    position: fixed;
    bottom: 3px;
    right: 15px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    color: white;
    text-align: center;
    font-size: 19px;
    line-height: 1;

    @media screen and (max-width: 425px) {
        bottom: 3.5px;
        right: 6px;
        width: 13px;
        height: 12px;
        border-radius: 50%;

        text-align: center;
        line-height: 0.7;
        font-size: 12px;
    }
`;
