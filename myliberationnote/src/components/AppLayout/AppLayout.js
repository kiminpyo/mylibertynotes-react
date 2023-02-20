import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { scrollEvent } from "../../utils/scrollEvent";
import { onClickBackToTop } from "../../utils/backToTop";
import styled from "@emotion/styled";
import UpperSide from "./UpperSide";
import Banner from "./MovingBanner";

const AppLayout = () => {
    const { userInfo } = useSelector((state) => state?.user);
    window.addEventListener("scroll", (e) => {
        scrollEvent(e);
    });
    return (
        <div>
            <HeadContainer>
                <UpperSide {...userInfo} />
            </HeadContainer>
            <BackToTop id="backToTop" onClick={onClickBackToTop} />
            <Outlet />
            {/* <Banner /> */}
        </div>
    );
};

export default AppLayout;

const HeadContainer = styled.div`
    background-color: black;
    padding: 10px 0 10px 0;

    @media screen and (max-width: 425px) {
        padding: 5px 0 5px 0;
    }
`;
const BackToTop = styled.div``;
