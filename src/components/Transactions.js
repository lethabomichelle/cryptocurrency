import React, { useEffect, useState } from "react";
import './dashboard.css'
import BTCPriceGraph from "./BTCPriceGraph";

import inc from '../assets/dashboard/inc.png'
import dec from '../assets/dashboard/dec.png'
import whiteAda from '../assets/dashboard/whiteada.png'
import whiteBtc from '../assets/dashboard/whitebtc.png'
import whiteEth from '../assets/dashboard/whiteeth.png'
import whiteLtc from '../assets/dashboard/whiteltc.png'

const images = {
    'ada': whiteAda,
    'btc': whiteBtc,
    'eth': whiteEth,
    'ltc': whiteLtc
}

const arrows = {
    up: inc,
    down: dec
}

export default function Transactions() {
    const [coinList, setCoinList] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-tkgkpH5cDfLNJPiwc4c7RgQS' }
        };

        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
            .then(async response => {
                const res = await response.json();
                // console.log('resp', res);
                setCoinList(res.filter(coin => ['btc', 'ada', 'ltc', 'eth'].includes(coin.symbol)))
            }).catch(err => console.error(err));
    }, []);

    function format(n) {
        return n >= 0 ? '+' + n : n;
    }

    return (
        <div className="bottom-container">
            <div className="live-Market">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="tHeading" scope="col" colSpan={4}><h2>Live Market</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinList.map((coin) =>
                            <tr key={coin.id}>
                                <td><img className="cryptoLogo" src={images[coin.symbol]} alt={coin.symbol} /></td>
                                <td >
                                    <h3>{coin.name}</h3>
                                    <span>{coin.symbol.toUpperCase()} / USDT</span>
                                </td>
                                <td >
                                    <span>Change</span>
                                    <p className={parseFloat(coin.price_change_percentage_24h) >= 0 ? 'green' : 'red'}>{format(coin.price_change_percentage_24h)}</p>
                                </td>
                                <td >
                                    <span>Price</span>
                                    <p>{coin.current_price.toFixed(3)}</p>
                                </td>
                                <td className="graph"><img src={"../assets/dashboard/" + coin.symbol + "Graph.png"} alt="" /></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

            <div className="transactions">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="tHeading" scope="col" colSpan={4}><h2>Transactions</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinList.map((coin) =>
                            <tr key={coin.id}>
                                <td><img className="cryptoLogo" src={arrows.up} alt="" /></td>
                                <td >
                                    <h3>{coin.name}</h3>
                                    <span>Buy</span>
                                </td>
                                <td >
                                    <p>$25,00</p>
                                    <span>date</span>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>

            </div>
        </div>
    )
}