import React, { useEffect, useState } from "react";
import './dashboard.css'
import BTCPriceGraph from "./BTCPriceGraph";

import inc from '../assets/dashboard/inc.png'
import dec from '../assets/dashboard/dec.png'
import whiteAda from '../assets/dashboard/whiteada.png'
import whitebtc from '../assets/dashboard/whitebtc.png'
import whiteEth from '../assets/dashboard/whiteEth.png'
import whiteLtc from '../assets/dashboard/whiteltc.png'
import adaGraph from '../assets/dashboard/adaGraph.png'
import btcGraph from '../assets/dashboard/btcGraph.png'
import ethGraph from '../assets/dashboard/ethGraph.png'
import itcGraph from '../assets/dashboard/ltcGraph.png'

const images = {
    'ada': whiteAda,
    'btc': whitebtc,
    'eth': whiteEth,
    'ltc': whiteLtc
}

const graphs = {
    'ada': adaGraph,
    'btc': btcGraph,
    'eth': ethGraph,
    'ltc': itcGraph
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
                                <td className="graph"><img src={graphs[coin.symbol]} alt="" /></td>
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
                        {coinList.map((coin) => {
                            const type = Math.random() < 0.5 ? 'Buy' : 'Received';
                            const img = type === 'Received' ? arrows.up : arrows.down;
                            const price = Math.random() * 5_000;

                            return (<tr key={coin.id}>
                                <td><img className="cryptoLogo" src={img} alt="" /></td>
                                <td >
                                    <h3>{coin.name}</h3>
                                    <span>{type}</span>
                                </td>
                                <td >
                                    <p>${price.toFixed(2)}</p>
                                    <span>{new Date().toDateString()}</span>
                                </td>
                            </tr>)
                        }
                        )}

                    </tbody>
                </table>

            </div>
        </div>
    )
}