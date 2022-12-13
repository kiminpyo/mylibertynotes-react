import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Script from "../components/Script";
import { useDispatch, useSelector } from "react-redux";
import { GET_NEWS } from "../reducers/news";
import Auth from "../HOC/auth";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugi
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Title,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Tooltip,
    Title,
    Legend
);

const MyPage = () => {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [options, setOptions] = useState("liberty-calender");
    const dispatch = useDispatch();
    const { post, email, created } = useSelector((state) => ({
        post: state.user.userInfo?.Posts,
        email: state.user.userInfo?.email,
        created: state.user.userInfo?.createdAt,
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
    const barOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "해방일지",
                color: "rgba(53, 162, 235, 0.5)",
            },
        },
    };
    const labels = [
        "01월",
        "02월",
        "03월",
        "04월",
        "05월",
        "06월",
        "07월",
        "08월",
        "09월",
        "10월",
        "11월",
        "12월",
    ];
    console.log(events);
    const barData = {
        labels,
        datasets: [
            {
                label: "좋은 감정",
                data: [
                    100, 300, 500, 600, 300, 200, 100, 300, 500, 100, 200, 5,
                ],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
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
                    <Bar options={barOptions} data={barData} />
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
