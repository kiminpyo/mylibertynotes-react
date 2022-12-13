import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Title,
    Legend,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Tooltip,
    Title,
    Legend
);
const LibertyChart = ({ events }) => {
    const chartRef = useRef();

    const barOptions = {
        responsive: true,
    };
    console.log(events);
    const barData = {
        labels: events?.map((v) => v.date),
        datasets: [
            {
                data: events?.map((v) => v.rating),
                backgroundColor: function (context) {
                    const index = context.dataIndex;
                    const value = context.dataset.data[index];
                    return "purple";
                },
            },
        ],
    };

    return (
        <>
            {" "}
            <Bar ref={chartRef} options={barOptions} data={barData} />{" "}
        </>
    );
};

export default LibertyChart;
