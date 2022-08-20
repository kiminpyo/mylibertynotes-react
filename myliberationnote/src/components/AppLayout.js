import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mainImg from "../img/mainImg.png";

import Random from "./Random";
import Time from "./Time";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT } from "../reducers/user";
const AppLayout = () => {
    let i = 0;
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        const banner = document.getElementById("movingBanner");

        // banner.style.animation = "transform linear infinite";
        // banner.style.transform = `translateX(${window.innerWidth}px)`;
        const timer = setInterval(() => {
            // console.log("hi");
            // banner.style.animation = "transform linear infinite";
            // banner.style.transform = `translateX(${-window.innerWidth}px)`;
        }, 6000);

        return () => clearInterval(timer);
    }, [i]);
    window.addEventListener(
        "scroll",
        (e) => {
            scrollEvent();
        },
        []
    );
    const scrollEvent = () => {
        const backToTop = document.getElementById("backToTop");
        if (window.scrollY > 300) {
            backToTop.classList.add("show");

            backToTop.style.zIndex = 999;
        } else {
            backToTop.classList.remove("show");
        }
    };

    const onClickBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <div className='head-container' style={{ height: "250px" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    <div
                        className='head-left'
                        style={{ width: "200px", paddingTop: "20px" }}>
                        <Link to='/'>
                            <img
                                src={mainImg}
                                alt=''
                                style={{ width: "100%" }}
                            />
                        </Link>
                        <div
                            style={{
                                marginLeft: "13px",
                                marginTop: "-10px",
                                fontSize: "11px",
                            }}>
                            나의 해방일지
                        </div>
                    </div>

                    <div
                        className='head-right'
                        style={{
                            width: "95%",
                            margin: "10px 0 10px 10px ",
                            textAlign: "end",
                            marginRight: "20px",
                            position: "fixed",
                        }}>
                        <Time />
                    </div>
                </div>
                <div
                    style={{
                        marginTop: "20px",
                        textAlign: "center",
                        padding: "10px",
                        height: "110px",
                    }}>
                    <div>
                        <Random />
                    </div>
                    <div
                        style={{
                            color: "white",
                            fontSize: "1rem",
                            marginTop: "10px",
                        }}>
                        -나의 해방일지 中-
                    </div>
                </div>
                <div
                    className='head-navbar'
                    style={{
                        display: "flex",
                        margin: "20px",

                        marginBottom: "6px",
                        fontSize: "1.4rem",
                    }}>
                    {userInfo ? (
                        <div>
                            {" "}
                            <Link
                                to='/'
                                onClick={() => {
                                    alert(`반가웠어요. ${userInfo.email}님`);
                                    dispatch({
                                        type: LOG_OUT,
                                    });
                                }}>
                                로그아웃
                            </Link>{" "}
                        </div>
                    ) : (
                        <div>
                            {" "}
                            <Link to='/login'>로그인</Link>{" "}
                        </div>
                    )}

                    <div>
                        <Link to='/intro'>소개</Link>
                    </div>
                    {/* <div>
                        <Link to='/liberty'>혼자해방</Link>
                    </div> */}
                    <div>
                        <div
                            onClick={() => {
                                if (!userInfo) {
                                    alert("로그인 이후에 접속이 가능해요");
                                } else {
                                    navigate("/libertyself");
                                }
                            }}>
                            해방
                        </div>
                    </div>
                    <div>
                        <Link to='/scripts'>테스트</Link>
                    </div>
                    <div>
                        <Link to='/mbtitest'>진단</Link>
                    </div>
                </div>

                <div
                    className='moving-banner-wrapper'
                    style={{ width: "100%", height: "30px" }}>
                    <div
                        id='movingBanner'
                        className='moving-banner'
                        style={{
                            lineHeight: "2",
                            color: "white",
                            width: "100%",
                        }}>
                        <marquee scrolldelay='200' direction='right'>
                            위로하지 않기. &nbsp; &nbsp; 조언하지 않기.
                        </marquee>
                    </div>
                </div>
            </div>
            <div id='backToTop' onClick={onClickBackToTop}></div>
        </div>
    );
};

export default AppLayout;
