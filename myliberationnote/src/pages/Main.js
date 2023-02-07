import React from "react";
import MainContent from "../components/MainContent";
import Auth from "../HOC/auth";
import MiddleSide from "../components/AppLayout/MiddleSide";
import axios from "axios";
import styled from "@emotion/styled";
const Main = () => {
    return (
        <MainWrapper>
            <MiddleSide />
            <MainContent />
        </MainWrapper>
    );
};

export default Auth(Main);

const MainWrapper = styled.div`
    background-color: black;
`;
