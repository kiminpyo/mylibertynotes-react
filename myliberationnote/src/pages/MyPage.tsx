import React, { ReducerState, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../HOC/auth";
import LibertyChart from "../components/Liberty/LibertyChart";
import LibertyStatus from "../components/Liberty/LibertyStatus";
import LibertyCalendar from "../components/Liberty/LibertyCalendar";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { LOG_OUT } from "../reducers/user";
import MyPageHeader from "../components/MyPageHeader";

import { PostData } from "../@types/Post";
const MyPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [options, setOptions] = useState("liberty-calender");
    const posts = useSelector((state: any) => state.user.userInfo?.Posts);
    console.log(posts);
    /**
     * @rating 게시글의 별점
     *
     * 이때까지 작성한 글의 총 rating을 더해 / 전체 갯수 나눠 평균 값을 보여줌
     */
    const averating: number =
        posts?.reduce((acc: any, { rating }: any) => acc + Number(rating), 0) /
        posts?.length;

    /**
     * 내가 작성한 총 게시글들의 날짜와 inputs들을 변환시킴
     */

    const events: PostData[] = posts?.map(
        ({ createdAt, content, rating, drink, smoke, id }: PostData) => ({
            date: createdAt?.slice(0, 10),
            title: content?.slice(0, 10),
            rating: Number(rating),
            drink: Number(drink),
            smoke: Number(smoke),
            id,
            length: posts?.length,
        })
    );
    /**
     * 로그아웃
     */
    const logout = () => {
        if (window.confirm("로그아웃?")) {
            dispatch({
                type: LOG_OUT,
            });
            return navigate("/");
        } else return null;
    };
    const handleOptionChange = (e: any) => setOptions(e.target.value);

    return (
        <MypageWrap>
            <MyPageHeader />
            <MypageSelect onChange={handleOptionChange}>
                <MypageOption value="liberty-calender">달력보기</MypageOption>
                <MypageOption value="liberty-graph">그래프보기</MypageOption>
            </MypageSelect>
            {options === "liberty-graph" ? (
                <>
                    <LibertyStatus
                        total={events?.length}
                        average={averating ? averating : null}
                    />
                    <LibertyChart events={events} />
                </>
            ) : (
                <LibertyCalendar events={events} />
            )}
            <MyPageLogout onClick={logout}>로그아웃</MyPageLogout>
        </MypageWrap>
    );
};

export default Auth(MyPage, true);

const MypageWrap = styled.div`
    background-color: black;
    padding: 5vh 0 10vh 0;
    width: 80%;
    margin-left: 10%;
    color: white;
`;
const MypageSelect = styled.select`
    color: white;
    background-color: black;
    border-radius: 10px;
    font-size: 0.6rem;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

const MypageOption = styled.option``;

const MyPageLogout = styled.div`
    cursor: pointer;
    padding-top: 10px;
    text-align: center;
    font-size: 0.8rem;
`;
