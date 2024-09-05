import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { CategoryScale, scales, Ticks } from 'chart.js';
import Chart from 'chart.js/auto';
import './dashboard.css'
import { callback } from "chart.js/helpers";
Chart.register(CategoryScale);

export default function BTCPriceGraph() {
    const [dates, setDates] = useState([])
    const [prices, setPrices] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-tkgkpH5cDfLNJPiwc4c7RgQS' }
        };

        fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&interval=daily&precision=3', options)
            .then(async response => {
                const res = await response.json();
                const dates = res.prices.map(arr => new Date(arr[0]).toLocaleString('en-US', { month: 'short' }))
                const amounts = res.prices.map(arr => arr[1])
                setDates(dates)
                setPrices(amounts)
            })
            .catch(err => console.error(err));
    }, []);

    const data = {
        labels: dates,
        datasets: [{
            label: 'BTC Prices',
            data: prices,
            fill: false,
            // borderColor: 'rgb(75, 192, 192)',
            tension: 0.5,
            pointStyle: false,
        }
        ],
        // type: 'spline'
    };
    return (
        <div id="statistics">
            <Line data={data} className="graph" height={300} />
        </div >

    )
}