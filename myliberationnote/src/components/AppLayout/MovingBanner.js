import styled from "@emotion/styled";
import React from "react";

const Banner = () => {
    const text = "위로하지 않기. 조언하지 않기.";
    return (
        <MovingBanner>
            <MovingBannerText>
                <marquee scrolldelay="200" direction="right">
                    {text}
                </marquee>
            </MovingBannerText>
            <Xbox>x</Xbox>
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
    line-height: 1;
    color: white;
    width: 100%;
    & > marquee {
        font-family: sans-serif;
        @media screen and (max-width: 425px) {
            font-size: 0.5rem;
        }
    }
`;

const Xbox = styled.div`
    position: fixed;
    bottom: 2px;
    right: 4px;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    background-color: white;
    text-align: center;
    line-height: 0.6;
`;
