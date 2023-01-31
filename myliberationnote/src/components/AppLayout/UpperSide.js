import styled from "@emotion/styled";
import React from "react";
import mainImg from "../../img/mainImglogo.png";
import Time from "../Time";
import ReactiveHeader from "./ReactiveHeader";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LOG_OUT } from "../../reducers/user";

const UpperSide = (userInfo) => {
    const { id, email } = userInfo;
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
            <Link to="/">
                <MainLogo>
                    <LogoImg src={mainImg} alt="나의 해방일지" />
                    <SubLogo>나의 해방일지</SubLogo>
                </MainLogo>
            </Link>
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
                            <Link style={{ color: "black" }} to="/login">
                                로그인
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div>{userInfo.email}</div>
                        <div onClick={logout}>로그아웃</div>
                    </>
                )}
            </NavBarRight>
            <ReactiveHeader />
            {/* <HeadRightDown>
                <Time />
            </HeadRightDown> */}
        </HeadUpperSide>
    );
};

export default UpperSide;

const HeadUpperSide = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 6px;
`;
const MainLogo = styled.div`
    margin-left: 0.5rem;
    width: 100px;
`;

const HeadRightDown = styled.div`
    margin-right: 100px; ;
`;
const LogoImg = styled.img`
    width: 80px;
    height: auto;
`;
const SubLogo = styled.div`
    margin-left: 8px;
    margin-top: -10px;
    font-size: 15px;
`;

//

const NavBar = styled.nav`
    display: flex;
    @media screen and (max-width: 425px) {
        display: none;
    }
`;

const NavBarLeft = styled.div`
    display: flex;
    font-size: 0.8rem;

    > div {
        color: black;
    }
`;

const NavBarRight = styled.div`
    display: flex;
    & > div {
        padding-right: 30px;
        font-size: 1rem;
    }
`;

const NavBarCategory = styled.div`
    cursor: pointer;
`;

const NavStyle = styled(NavLink)`
    border-bottom: 1px solid black;
`;
