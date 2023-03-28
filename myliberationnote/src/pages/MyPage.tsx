import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../HOC/auth";
import LibertyChart from "../components/LibertyChart";
import { LOAD_ME } from "../reducers/user";
import LibertyStatus from "../components/LibertyStatus";
import LibertyCalendar from "../components/LibertyCalendar";
import styled from "@emotion/styled";

const MyPage = () => {
      const dispatch = useDispatch();

    const [options, setOptions] = useState("liberty-calender");
    const { posts, email } = useSelector((state: any) => ({
        posts: state.user?.userInfo?.Posts,
        email: state.user?.userInfo?.email,
    }));
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
    const events: object[] = posts?.map(
        ({ createdAt, content, rating, drink, smoke, id }: any) => ({
            date: createdAt?.slice(0, 10),
            title: content?.slice(0, 10),
            rating: Number(rating),
            drink: Number(drink),
            smoke: Number(smoke),
            id,
            length: posts?.length,
        })
    );
    const handleOptionChange = (e: any) => setOptions(e.target.value);
    useEffect(() => {
        dispatch({
            type: LOAD_ME,
        });
    }, [dispatch]);

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
