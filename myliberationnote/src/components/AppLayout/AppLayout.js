import React from "react";
import { Outlet } from "react-router-dom";
import { scrollEvent } from "../../utils/scrollEvent";
import { onClickBackToTop } from "../../utils/backToTop";
import styled from "@emotion/styled";
import UpperSide from "./UpperSide";

const AppLayout = () => {
    window.addEventListener("scroll", (e) => {
        scrollEvent(e);
        return () => window.removeEventListener("scroll", scrollEvent(e));
    });
    return (
        <div>
            <HeadContainer>
                <UpperSide />
            </HeadContainer>
            <BackToTop id="backToTop" onClick={onClickBackToTop} />
            <Outlet />
        </div>
    );
};

export default AppLayout;

const HeadContainer = styled.div`
    background-color: black;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid gray;
    @media screen and (max-width: 425px) {
        padding: 5px 0 5px 0;
    }
`;
const BackToTop = styled.div``;
