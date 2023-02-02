import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const Time = () => {
    useEffect(() => {
        const timer = () => {
            const time = document.getElementById("time");
            const id = setInterval(() => {
                console.log(window.scrollY);
                // if (window.scrollY < 100) {
                //     time.style.display = "none";
                // } else {
                //     time.style.display = "block";
                // }
            }, 1000);
            return () => clearInterval(id);
        };

        timer();
    }, []);
    const TodayEmpty = () => {
        const today = new Date();
        const hours = [24 - today.getHours()] + "시";
        const minutes = [60 - today.getMinutes()] + "분";
        const seconds = [60 - today.getSeconds()] + "초";
        return <>{hours + minutes + seconds}</>;
    };

    return (
        <Timer id="time">
            <div>오늘 해방</div>
            <TodayEmpty />
        </Timer>
    );
};

export default Time;

const Timer = styled.div`
    font-size: 1.2rem;
    > div {
        font-size: 0.8rem;
    }
`;
