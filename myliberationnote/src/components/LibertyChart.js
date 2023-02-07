import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { useTabs } from "../hooks/useTabs";
import styled from "@emotion/styled";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Title,
    Legend,
    Decimation,
    PointElement,
    LineElement,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Decimation,
    PointElement,
    LineElement,
    Title,
    Legend
);

const LibertyChart = ({ events }) => {
    const chartRef = useRef();
    const sortedEvents = events?.sort((a, b) => a.id - b.id);
    const Tab = [
        {
            title: "week",
            ratingOptions: sortedEvents?.map((v) => v.rating).splice(-7),
            label: sortedEvents?.map((v) => v.date.slice(8, 10)).splice(-7),
            drinkOptions: sortedEvents?.map((v) => v.drink).splice(-7),
            smokeOptions: sortedEvents?.map((v) => v.smoke).splice(-7),
        },
        {
            title: "month",
            ratingOptions: sortedEvents?.map((v) => v.rating).splice(-30),
            label: sortedEvents?.map((v) => v.date.slice(8, 10)).splice(-30),
            drinkOptions: sortedEvents?.map((v) => v.drink).splice(-30),
            smokeOptions: sortedEvents?.map((v) => v.smoke).splice(-30),
        },
        {
            title: "total",
            ratingOptions: sortedEvents?.map((v) => v.rating),
            label: sortedEvents?.map((v) => v.date.slice(8, 10)),
            drinkOptions: sortedEvents?.map((v) => v.drink),
            smokeOptions: sortedEvents?.map((v) => v.smoke),
        },
    ];
    const { currentItem, changeItem } = useTabs(0, Tab);
    const barOptions = {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        stacked: false,
        scales: {
            x: {
                labels: currentItem.label,
                ticks: {
                    stepSize: 1,
                },
            },
            y: {
                ticks: {
                    stepSize: 1,
                },
                title: {
                    display: true,
                    text: "liberty proportion",
                    color: "#911",
                    font: {
                        family: "Comic Sans MS",
                        size: 10,
                        weight: "bold",
                        lineHeight: 1,
                    },
                },
                grid: {
                    color: function (context) {
                        if ((context.tick.value === 4) & 5) {
                            return "white ";
                        }
                        return "#DBD4D3 ";
                    },
                },
                display: true,

                // suggestedMin: 2,
                // suggestedMax: 5,
            },
        },
    };

    const barData = {
        datasets: [
            {
                label: "rating",
                data: currentItem.ratingOptions,
                backgroundColor: function (context) {
                    return "#FC1F00 ";
                },
                borderColor: "#FC1F00",
                borderWidth: 1,
            },
            {
                label: "drink",
                data: currentItem.drinkOptions,
                backgroundColor: function (context) {
                    return "green ";
                },
                borderColor: "green",
                borderWidth: 1,
            },
            {
                label: "smoke",
                data: currentItem.smokeOptions,
                backgroundColor: function (context) {
                    return "yellow";
                },
                borderColor: "yellow",
                borderWidth: 1,
            },
        ],
    };

    return (
        <LibertyChartWrap>
            {Tab.map((e, index) => (
                <LibertyChartOptions
                    key={index}
                    onClick={() => changeItem(index)}>
                    {e.title}
                </LibertyChartOptions>
            ))}
            <Line
                ref={chartRef}
                options={barOptions}
                data={barData}
                style={{ marginTop: "5vh" }}
            />
        </LibertyChartWrap>
    );
};

export default LibertyChart;

const LibertyChartWrap = styled.div`
    margin-top: 60px;
`;
const LibertyChartOptions = styled.button`
    background-color: black;
    margin: 3px;
    color: white;
    border-radius: 3px;
`;
