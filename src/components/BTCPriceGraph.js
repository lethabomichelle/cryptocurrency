import React, { useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import './dashboard.css'
Chart.register(CategoryScale);

export default function BTCPriceGraph() {
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-tkgkpH5cDfLNJPiwc4c7RgQS' }
        };

        fetch('https://api.coingecko.com/api/v3/coins/ethereum/contract/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/market_chart/range?vs_currency=usd&from= 1725228000&to=1725477716', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }, []);

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