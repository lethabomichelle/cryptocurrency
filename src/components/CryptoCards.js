import React, { useEffect, useState } from "react";
import './dashboard.css'

import btc from '../assets/dashboard/btc.png'
import ADA from '../assets/dashboard/ADA.png'
import ITL from '../assets/dashboard/ITL.png'
import ETH from '../assets/dashboard/ETH.png'

export default function CryptoCards() {

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

    return (
        <div className="cards" >

            {coinList.map((coin) =>
                <div className="card-body">
                    <div>
                        <img src={coin.image} alt="icon" style={{ width: '52px', height: '52px' }} />
                        <div>
                            <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0099 4.48505L8.60243 2.07755L7.13243 0.600054C6.50993 -0.0224463 5.49743 -0.0224463 4.87493 0.600054L0.989931 4.48505C0.479932 4.99505 0.847431 5.86505 1.55993 5.86505H5.76743H10.4399C11.1599 5.86505 11.5199 4.99505 11.0099 4.48505Z" fill="#1ECB4F" />
                            </svg>

                            <span>{coin.name}</span>
                        </div>
                    </div>
                    <h3>${coin.current_price.toFixed(3)}</h3>
                    <span>{coin.id} - {coin.symbol}</span>
                </div>
            )}
        </div>
    )
}