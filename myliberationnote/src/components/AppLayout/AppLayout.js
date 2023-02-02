import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ME } from "../../reducers/user";
import { scrollEvent } from "../../utils/scrollEvent";
import { onClickBackToTop } from "../../utils/backToTop";
import styled from "@emotion/styled";

import UpperSide from "./UpperSide";
import Banner from "./MovingBanner";
const AppLayout = () => {
    const { userInfo } = useSelector((state) => state?.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_ME,
        });
    }, []);
    window.addEventListener("scroll", (e) => {
        scrollEvent(e);
    });

    return (
        <div>
            <HeadContainer>
                <UpperSide {...userInfo} />
                {/* <BottomSide /> */}
                <Banner />
            </HeadContainer>
            <div id="backToTop" onClick={onClickBackToTop}></div>
            <Outlet />
        </div>
    );
};

export default AppLayout;

const HeadContainer = styled.div`
    z-index: 2;
   
    background-color: whitesmoke;
    padding-top: 10px;
    @media screen and (max-width: 425px) {
        background: rgb(106 76 98 / 12%);
    }
`;
