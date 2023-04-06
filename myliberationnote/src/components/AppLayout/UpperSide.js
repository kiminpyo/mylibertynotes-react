import React, { useState, useEffect } from "react";
import ReactiveHeader from "./ReactiveHeader";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";
const UpperSide = () => {
    const email = useSelector((state) => state.user?.userInfo);

    const activeStyle = ({ active }) => {
        return active ? "underline" : undefined;
    };

    return (
        <HeadUpperSide>
            <NavStyle to="/">
                <MainLogo>
                    <SubLogo>Liberty Notes</SubLogo>
                </MainLogo>
            </NavStyle>
            <NavBar>
                <NavBarLeft className="head-navbar-left">
                    <NavBarCategory>
                        <NavStyle to="/intro" style={activeStyle}>
                            소개
                        </NavStyle>
                    </NavBarCategory>
                    <NavBarCategory>
                        <NavStyle to="/liberty">해방</NavStyle>
                    </NavBarCategory>
                    <NavBarCategory>
                        <NavStyle to="/mypage"> 마이페이지</NavStyle>
                    </NavBarCategory>
                </NavBarLeft>
            </NavBar>{" "}
            <NavBarRight>
                {!email ? (
                    <NavStyle data-testid="login" to="/login">
                        login
                    </NavStyle>
                ) : undefined}
            </NavBarRight>
            <ReactiveHeader />
        </HeadUpperSide>
    );
};

export default UpperSide;

const HeadUpperSide = styled.div`
    color: white;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 6px;
`;
const MainLogo = styled.div`
    @media screen and (max-width: 425px) {
        width: 50%;
    }
`;
const SubLogo = styled.div`
    color: white;
    font-weight: bold;
    margin-left: 8px;
    font-size: 0.9rem;
    text-align: center;
`;

//
const NavBar = styled.nav`
    display: flex;
    margin-right: 7%;
    @media screen and (max-width: 425px) {
        display: none;
    }
`;

const NavBarLeft = styled.div`
    display: flex;
    font-size: 0.8rem;
    > div {
        color: white;
    }
    > div > a {
        color: white;
    }
`;
const NavBarRight = styled.div`
    width: 80px;
    & > div {
        width: 100%;
        font-size: 0.7rem;
        padding: 0 10px 0 5px;
    }
    @media screen and (max-width: 425px) {
        width: 20%;
        text-align: end;
    }
`;
const NavBarCategory = styled.div`
    cursor: pointer;
    font-size: 0.7rem;
`;
const NavBarLogout = styled.div`
    font-weight: bold;
`;

const NavStyle = styled(NavLink)`
    font-size: 0.7rem;
    color: white;
    font-weight: bold;
    text-align: center;

    padding: 2px;
`;
