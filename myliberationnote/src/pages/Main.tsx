import React from "react";
import MainContent from "../components/MainContent";
import MiddleSide from "../components/AppLayout/MiddleSide";
import styled from "@emotion/styled";

const Main = () => {
    return (
        <MainWrapper test-id="mainPage">
            <MiddleSide />
            <MainContent />
        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled.div`
    background-color: black;
`;
