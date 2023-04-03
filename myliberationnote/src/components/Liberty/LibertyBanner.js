import styled from "@emotion/styled";
import React from "react";
import { useTyping } from "../../hooks/useTyping";

const LibertyBanner = () => {
    const message = "오늘은 무슨 일이 있었나요?";
    const $libertyClass = ".liberty-banner-text";
    
    useTyping(message, $libertyClass, 100);

    return (
        <BannerWrapper>
            <Banner className="liberty-banner-text" />
        </BannerWrapper>
    );
};

export default LibertyBanner;

const BannerWrapper = styled.div`
    padding: 20px 0 10px 0;
`;
const Banner = styled.div`
    text-align: center;
    color: white;
    justify-items: center;
    font-size: 3v;
    height: 8vh;
`;
