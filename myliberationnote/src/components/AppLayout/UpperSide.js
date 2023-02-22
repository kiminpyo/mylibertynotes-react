import styled from "@emotion/styled";
import React from "react";
import mainImg from "../../img/mainImglogo.png";
import Time from "../Time";
import ReactiveHeader from "./ReactiveHeader";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LOG_OUT } from "../../reducers/user";

const UpperSide = (userInfo) => {
    console.log(userInfo);
    const { email } = userInfo;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
        if (window.confirm("로그아웃 하실래요?")) {
            dispatch({
                type: LOG_OUT,
            });
            return navigate("/");
        } else {
            return;
        }
    };
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
                    <NavBarCategory
                        onClick={() => {
                            return navigate("/liberty");
                        }}>
                        해방
                    </NavBarCategory>
                    <NavBarCategory
                        // className="mypage"
                        onClick={() => {
                            if (!userInfo) {
                                alert("로그인 이후에 접속이 가능해요");
                                return navigate("/login");
                            } else {
                                navigate("/mypage");
                            }
                            return navigate("/mypage");
                        }}>
                        마이페이지
                    </NavBarCategory>
                </NavBarLeft>
            </NavBar>{" "}
            <NavBarRight className="head-navbar-right">
                {!email ? (
                    <>
                        <div>
                            <NavStyle
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "0.9rem",
                                }}
                                to="/login">
                                Log in
                            </NavStyle>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            onClick={logout}
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "0.9rem",
                            }}>
                            로그아웃
                        </div>
                    </>
                )}
            </NavBarRight>
            {/* <ModeSelect /> */}
            <ReactiveHeader />
            {/* <HeadRightDown>
                <Time />
            </HeadRightDown> */}
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
    /* margin-left: 0.5rem;
    width: 100px; */

    @media screen and (max-width: 425px) {
        width: 50%;
    }
`;

const SubLogo = styled.div`
    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: bold;
    margin-left: 8px;
    font-size: 0.9rem;
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
    & > div {
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

const NavStyle = styled(NavLink)`
    font-size: 0.7rem;
`;

const ModeSelect = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
`;
