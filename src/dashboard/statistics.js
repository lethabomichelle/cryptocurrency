import React from "react";
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

export default function Statistic() {
    const data = {
        labels: ['January', 'March', 'May', 'June', 'September', 'November'],
        datasets: [{
            label: 'BTC Prices',
            data: [0, 200, 400, 600, 800],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1
        }],
        type: 'spline'
    };
    return (
        <div id="statistics">
            <Line data={data} />
        </div >

    )
}