import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { scrollEvent } from "../../utils/scrollEvent";
import { onClickBackToTop } from "../../utils/backToTop";
import styled from "@emotion/styled";
import UpperSide from "./UpperSide";
import { LOAD_ME } from "../../reducers/user";

const AppLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_ME,
        });
    }, [dispatch]);
    const { userInfo } = useSelector((state) => state?.user);
    window.addEventListener("scroll", (e) => {
        scrollEvent(e);
        return () => window.removeEventListener("scroll", scrollEvent(e));
    });
    const onScroll = (e) => {
        console.log(e);
    };
    return (
        <div onScroll={onScroll}>
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
    border-bottom: 1px solid gray;
    @media screen and (max-width: 425px) {
        padding: 5px 0 5px 0;
    }
`;
const BackToTop = styled.div``;
