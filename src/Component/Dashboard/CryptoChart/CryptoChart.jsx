import React from "react";

import { Line } from "react-chartjs-2";
import "chart.js/auto";

import { randomColor } from "../../../Services/randomColor";

export const CryptoChart = ({ data }) => {
    const chartData = {
        labels: Array.from(
            { length: data[0]?.sparkline?.length },
            (_i, i) => i + 1
        ),
        datasets: data.map((crypto) => ({
            label: crypto.name,
            data: crypto.sparkline,
            fill: false,
            backgroundColor: randomColor(),
            borderColor: randomColor(),
            tension: 0.1,
        })),
    };
    const options = {
        scales: {
            y: {
                beginAtZero: false,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
        },
    };
    return (
        <div className="w-full h-full">
            <Line data={chartData} options={options} />
        </div>
    );
};
