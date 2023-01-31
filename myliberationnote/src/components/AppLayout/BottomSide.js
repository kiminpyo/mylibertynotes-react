import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LOG_OUT } from "../../reducers/user";

const BottomSide = (userInfo) => {
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
            <NavBarRight className="head-navbar-right">
                {!email ? (
                    <>
                        <div>
                            <Link style={{ color: "white" }} to="/login">
                                로그인
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div>{userInfo.email + "님 반갑습니다"}</div>
                        <div onClick={logout}>로그아웃</div>
                    </>
                )}
            </NavBarRight>
        </NavBar>
    );
};

export default BottomSide;

const NavBar = styled.div`
    padding: 1rem 0 1rem 0;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 425px) {
        display: none;
    }
`;

const NavBarLeft = styled.div`
    display: flex;
    width: 100%;
    font-size: 0.8rem;
`;

const NavBarRight = styled.div`
    color: white;
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
