import React, { useEffect, useState } from "react";
import './dashboard.css'

// import adawhite from '../assets/dashboard/adawhite.png'
// import adaGraph from '../assets/dashboard/adaGraph.png'
import ethGraph from '../assets/dashboard/ethGraph.png'
import whitebtc from '../assets/dashboard/whitebtc.png'
// import btcGraph from '../assets/dashboard/btcGraph.png'
// import itcGraph from '../assets/dashboard/itcGraph.png'
import dec from '../assets/dashboard/dec.png'


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
                console.log('resp', res);
                setCoinList(res.filter(coin => ['btc', 'ada', 'ltc', 'eth'].includes(coin.symbol)))
            }).catch(err => console.error(err));
    }, []);

    return (
        <div className="bottom-container">
            <div className="live-Market">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" colSpan={4}><h2>Live Market</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinList.map((coin) =>
                            <tr>
                                <td><img className="cryptoLogo" src={`../assets/dashboard/white` + coin.symbol + '.png'} alt="" /></td>
                                <td >
                                    <h3>{coin.name}</h3>
                                    <span>{coin.symbol.toUpperCase()} / USDT</span>
                                </td>
                                <td >
                                    <p>Change</p>
                                    <span>{coin.price_change_percentage_24h}</span>
                                </td>
                                <td >
                                    <p>Price</p>
                                    <span>{coin.current_price.toFixed(3)}</span>
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
                            <th scope="col" colSpan={4}><h2>Transactions</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinList.map((coin) =>
                            <tr>
                                <td><img className="cryptoLogo" src={dec} alt="" /></td>
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