import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Script from "../components/Script";
import { useDispatch, useSelector } from "react-redux";
import { GET_NEWS } from "../reducers/news";
import Auth from "../HOC/auth";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugi

const MyPage = () => {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();
    const { post, email, created } = useSelector((state) => ({
        post: state.user.userInfo?.Posts,
        email: state.user.userInfo?.email,
        created: state.user.userInfo?.createdAt,
    }));
    const events = post?.map((item) => {
        const date = item.createdAt.slice(0, 10);
        const title = item.content;
        return { date, title };
    });
    console.log(events);
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
    return (
        <>
            {" "}
            <div>{email}님의 기록</div>
            <div style={{ width: "80%", marginLeft: "10%" }}>
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
            </div>
        </>
    );
};

export default Auth(MyPage, true);
