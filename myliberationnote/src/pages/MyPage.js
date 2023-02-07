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
    console.log(email);
    const averating =
        posts
            ?.map((v) => v.rating)
            .reduce((acc, cur) => {
                return parseFloat(acc) + parseFloat(cur);
            }) / posts?.length;
    console.log(averating);
    useEffect(() => {
        dispatch({
            type: LOAD_ME,
        });
    }, []);

    const events = posts?.map((item) => {
        const date = item?.createdAt?.slice(0, 10);
        const title = item?.content?.slice(0, 10);
        const rating = Number(item?.rating);
        const drink = Number(item?.drink);
        const smoke = Number(item?.smoke);
        const id = item?.id;
        const length = posts.length;
        return { date, title, rating, drink, smoke, id, length };
    });

    const onClickLibertyOption = (e) => {
        setOptions(e.target.value);
    };
    console.log(posts);
    return (
        <MypageWrap>
            <div
                style={{
                    width: "80%",
                    marginLeft: "10%",
                    paddingTop: "5%",
                    color: "white",
                }}>
                {email ? (
                    <div style={{ fontSize: "0.8rem" }}>{email}님의 기록</div>
                ) : undefined}
                <MypageSelect
                    name="liberty-mypage-option"
                    onChange={onClickLibertyOption}>
                    <MypageOption value="liberty-calender">
                        달력보기
                    </MypageOption>
                    <MypageOption value="liberty-graph">
                        그래프보기
                    </MypageOption>
                </MypageSelect>
                {options === "liberty-graph" ? (
                    <>
                        <LibertyStatus
                            total={events.length}
                            average={averating}
                        />
                        <LibertyChart events={events} />
                    </>
                ) : (
                    <LibertyCalendar events={events} />
                )}
            </div>
        </MypageWrap>
    );
};

export default Auth(MyPage);

const MypageWrap = styled.div`
    background-color: black;
    padding: 0 0 10vh 0;
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
