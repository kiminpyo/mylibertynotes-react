import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Script from "../components/Script";
import { useDispatch, useSelector } from "react-redux";
import { GET_NEWS } from "../reducers/news";
import Auth from "../HOC/auth";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugi



import LibertyChart from "../components/LibertyChart";

const MyPage = () => {
    const [options, setOptions] = useState("liberty-calender");
    const { post, email } = useSelector((state) => ({
        post: state.user.userInfo?.Posts,
        email: state.user.userInfo?.email,
    }));
    const events = post?.map((item) => {
        const date = item.createdAt.slice(0, 10);
        const title = item.content;
        const rating = Number(item.rating);
        return { date, title, rating };
    });

    const handleDateClick = (arg) => {
        console.log(arg);
    };
    const handleDateSelect = (e) => {
        console.log(e);
    };
    const renderEventContent = (e) => {
        console.log(e);
    };
    const handleEvents = (e) => {
        console.log(e);
    };

    const onClickLibertyOption = (e) => {
        setOptions(e.target.value);
    };
    console.log(options);

    return (
        <>
            <div style={{ width: "80%", marginLeft: "10%", marginTop: "5%" }}>
                <div>{email}님의 기록</div>
                <select
                    name="liberty-mypage-option"
                    onChange={onClickLibertyOption}>
                    <option value="liberty-calender">달력보기</option>
                    <option value="liberty-graph">그래프보기</option>
                </select>
                {options === "liberty-graph" ? (
                    <LibertyChart events={events} />
                ) : (
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        events={events}
                        eventClick={handleDateClick}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateSelect}
                        eventContent={renderEventContent} // custom render function
                        eventsSet={handleEvents}
                    />
                )}
            </div>
        </>
    );
};

export default Auth(MyPage);
