import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../HOC/auth";
import LibertyChart from "../components/LibertyChart";
import { LOAD_ME } from "../reducers/user";
import LibertyStatus from "../components/LibertyStatus";
import LibertyCalendar from "../components/LibertyCalendar";
import styled from "@emotion/styled";

const MyPage = () => {
    const [options, setOptions] = useState("liberty-calender");
    const dispatch = useDispatch();
    const { posts, email } = useSelector((state) => ({
        posts: state.user?.userInfo?.Posts,
        email: state.user?.userInfo?.email,
    }));
    const averating =
        posts?.reduce((acc, { rating }) => acc + Number(rating), 0) /
        posts?.length;
    const events = posts?.map(
        ({ createdAt, content, rating, drink, smoke, id }) => ({
            date: createdAt?.slice(0, 10),
            title: content?.slice(0, 10),
            rating: Number(rating),
            drink: Number(drink),
            smoke: Number(smoke),
            id,
            length: posts?.length,
        })
    );
    console.log(events);
    useEffect(() => {
        dispatch({
            type: LOAD_ME,
        });
    }, []);
    const handleOptionChange = (e) => setOptions(e.target.value);
    return (
        <MypageWrap>
            {email && (
                <h1 style={{ fontSize: "0.7rem", textAlign: "center" }}>
                    {email}님의 기록
                </h1>
            )}
            <MypageSelect
                name="liberty-mypage-option"
                onChange={handleOptionChange}>
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
    margin: 10px 0 10px 0;
    color: white;
    background-color: black;
    padding: 2px;
    border-radius: 10px;
    font-size: 0.8rem;
`;

const MypageOption = styled.option``;
