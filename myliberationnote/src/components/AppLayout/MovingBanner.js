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
        </MovingBanner>
    );
};

export default Banner;

const MovingBanner = styled.div`
    width: 100%;
    height: 30px;
    position: relative;
    background-color: black;
    @media screen and (max-width: 425px) {
        height: 20px;
    }
`;

const MovingBannerText = styled.div`
    line-height: 1.5;
    color: white;
    width: 100%;
    & > marquee {
        font-family: sans-serif;
        @media screen and (max-width: 425px) {
            font-size: 0.5rem;
        }
    }
`;
