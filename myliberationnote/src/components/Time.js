import React, { useEffect, useState } from "react";

const Time = () => {
    const [now, setNow] = useState(new Date());

    // 시계

    useEffect(() => {
        const time = document.getElementById("time");
        const id = setInterval(() => {
            if (window.scrollY < 250) {
                time.style.display = "none";
            } else {
                time.style.display = "block";
            }
            setNow(new Date());
        }, 1000);

        return () => clearInterval(id);
    }, [now]);
    const today = new Date();
    const todayEmpty = [
        [24 - today.getHours()],
        [60 - today.getMinutes()],
        [60 - today.getSeconds()],
    ];

    return (
        <div
            id="time"
            style={{
                fontSize: "1.2rem",
            }}>
            <div style={{ fontSize: "0.6rem" }}>오늘 해방</div>
            {todayEmpty[0]}시{todayEmpty[1]}분{todayEmpty[2]}초
        </div>
    );
};

export default Time;
