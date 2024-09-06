import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import './dashboard.css'

Chart.register(CategoryScale);

export default function BTCPriceGraph() {
    const [dates, setDates] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-tkgkpH5cDfLNJPiwc4c7RgQS' }
        };

        fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&interval=daily&precision=3', options)
            .then(async response => {
                const res = await response.json();

                // Filter dates to show only one date per month
                const filteredData = res.prices.reduce((acc, price) => {
                    const date = new Date(price[0]);
                    const month = date.toLocaleString('en-US', { month: 'short' });
                    const year = date.getFullYear();
                    const formattedDate = `${month} ${year}`;

                    // Add to acc if the current month/year doesn't exist in the acc
                    if (!acc.dates.includes(formattedDate)) {
                        acc.dates.push(formattedDate);
                        acc.prices.push(price[1]);
                    }

                    return acc;
                }, { dates: [], prices: [] });

                setDates(filteredData.dates);
                setPrices(filteredData.prices);
            })
            .catch(err => console.error(err));
    }, []);

    const data = {
        labels: dates,
        datasets: [{
            label: 'BTC Prices',
            data: prices,
            fill: false,
            tension: 0.5,
            pointStyle: false,
        }]
    };

    return (
        <div id="statistics">
            <Line data={data} className="graph" height={300} />
        </div>
    );
}
