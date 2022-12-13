import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import mainImg from "../img/mainImg.png";
import Random from "./Random";
import Time from "./Time";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT } from "../reducers/user";
import Footer from "./Footer";
import { scrollEvent } from "../utils/scrollEvent";
import { onClickBackToTop } from "../utils/backToTop";
import styled from "@emotion/styled";
const AppLayout = () => {
    let i = 0;
    const { userInfo } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    window.addEventListener(
        "scroll",
        (e) => {
            scrollEvent(e);
        },
        []
    );
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
    return (
        <div>
            <div className="head-container" style={{ height: "250px" }}>
                <HeadUpperSide>
                    {" "}
                    <Link to="/">
                        <MainLogo className="head-left">
                            <LogoImg src={mainImg} />
                            <SubLogo>나의 해방일지</SubLogo>
                        </MainLogo>
                    </Link>
                    <HeadRightDown className="head-right">
                        <Time />
                    </HeadRightDown>
                </HeadUpperSide>
                <HeadMidlleSide>
                    <Random />
                </HeadMidlleSide>
                <NavBar className="head-navbar-wrapper">
                    <NavBarLeft className="head-navbar-left">
                        <div>
                            <Link to="/intro">소개</Link>
                        </div>
                        <div
                            onClick={() => {
                                if (!userInfo) {
                                    alert("로그인 이후에 접속이 가능해요");
                                    return navigate("/login");
                                } else {
                                    navigate("/liberty");
                                }
                            }}>
                            해방
                        </div>
                        <div
                            onClick={() => {
                                if (!userInfo) {
                                    alert("로그인 이후에 접속이 가능해요");
                                    return navigate("/login");
                                } else {
                                    navigate("/mypage");
                                }
                            }}>
                            마이페이지
                        </div>
                    </NavBarLeft>
                    <NavBarRight className="head-navbar-right">
                        {userInfo ? (
                            <>
                                {userInfo ? (
                                    <div>
                                        {userInfo.email + "님 반갑습니다"}
                                    </div>
                                ) : null}

                                <div onClick={logout}>로그아웃</div>
                            </>
                        ) : (
                            <div>
                                <Link style={{ color: "white" }} to="/login">
                                    로그인
                                </Link>
                            </div>
                        )}
                    </NavBarRight>
                   
                </NavBar>

                <MovingBanner className="moving-banner-wrapper">
                    <div
                        id="movingBanner"
                        className="moving-banner"
                        style={{
                            lineHeight: "2",
                            color: "white",
                            width: "100%",
                        }}>
                        <marquee scrolldelay="200" direction="right">
                            위로하지 않기. &nbsp; &nbsp; 조언하지 않기.
                        </marquee>
                    </div>
                </MovingBanner>
            </div>

            <div id="backToTop" onClick={onClickBackToTop}></div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default AppLayout;

const HeadUpperSide = styled.div`
    display: flex;
    justify-content: space-between;
`;
const MainLogo = styled.div`
    width: 200px;
    padding-top: 20px;
`;

const LogoImg = styled.img`
    width: 200px;
    height: auto;
`;
const SubLogo = styled.div`
    margin-left: 13px;
    margin-top: -10px;
    font-size: 11px;
`;

const HeadRight = styled.div`
    color: white;
    padding: 20px;
`;
const HeadRightDown = styled.div`
    width: 95%;
    margin: 10px 0 10px 10px;
    text-align: end;
    margin-right: 20px;
    position: fixed;
`;
const HeadMidlleSide = styled.div`
    margin-top: 20px;
    text-align: center;
    padding: 10px;
    height: 110px;
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 28px;
`;

const NavBarLeft = styled.div`
    display: flex;
`;

const NavBarRight = styled.div`
    color: white;
    display: flex;
    & > div {
        padding-right: 30px;
        font-size: 1rem;
    }
`;

const MovingBanner = styled.div`
    width: 100%;
    height: 30px;
    background-color: black;
    border-radius: 30px;
`;
