import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import './dashboard.css';

Chart.register(CategoryScale);

export default function BTCPriceGraph({ selectedCoin }) {
    const [dates, setDates] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        if (!selectedCoin) return;

        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-tkgkpH5cDfLNJPiwc4c7RgQS' }
        };

        // Fetch price history for the selected coin
        fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=365&interval=daily`, options)
            .then(async response => {
                const res = await response.json();

                // Filter the dates array to show only one label per month
                const filteredData = res.prices.reduce((acc, price) => {
                    const date = new Date(price[0]);
                    const monthYear = date.toLocaleString('en-US', { month: 'short', year: 'numeric' });

                    // Add the first occurrence of each month/year to the list
                    if (!acc.dates.includes(monthYear)) {
                        acc.dates.push(monthYear);
                        acc.prices.push(price[1]);  // Corresponding price for the first day of the month
                    }

                    return acc;
                }, { dates: [], prices: [] });

                setDates(filteredData.dates);
                setPrices(filteredData.prices);
            })
            .catch(err => console.error(err));
    }, [selectedCoin]);  // Re-fetch data whenever the selectedCoin changes

    const data = {
        labels: dates,
        datasets: [{
            label: `${selectedCoin.toUpperCase()} Prices`,
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
