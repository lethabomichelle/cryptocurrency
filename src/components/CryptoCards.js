import React, { useEffect, useState } from "react";
import './dashboard.css'

import inc from '../assets/dashboard/inc.png'
import dec from '../assets/dashboard/dec.png'
import whiteAda from '../assets/dashboard/ADA.png'
import whiteBtc from '../assets/dashboard/btc.png'
import whiteEth from '../assets/dashboard/ETH.png'
import whiteLtc from '../assets/dashboard/ITL.png'

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

export default function CryptoCards() {

    // const handleClick = (id) => {
    //     const url = `https://api.coingecko.com/api/v3/coins/id/market_chart?vs_currency=usd&days=365&interval=daily&precision=3?id=${id}`;
    //     window.location.href = url;
    // };

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
                setCoinList(res.filter(coin => ['btc', 'ada', 'eth', 'ltc'].includes(coin.symbol)))
                console.log('coinList', coinList)
            }).catch(err => console.error(err));
    }, []);

    function format(n) {
        return n >= 0 ? '+' + n : n;
    }


    return (

        <div className="cards" >

            {coinList.map((coin) =>
                <div key={coin.id} >
                    <button className="card-body" >
                        <div>
                            <img src={images[coin.symbol]} alt="icon" style={{ width: '52px', height: '52px' }} />
                            <div>
                                {
                                    parseFloat(coin.price_change_percentage_24h) >= 0 ?
                                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.0099 4.48505L8.60243 2.07755L7.13243 0.600054C6.50993 -0.0224463 5.49743 -0.0224463 4.87493 0.600054L0.989931 4.48505C0.479932 4.99505 0.847431 5.86505 1.55993 5.86505H5.76743H10.4399C11.1599 5.86505 11.5199 4.99505 11.0099 4.48505Z" fill="#1ECB4F" />
                                        </svg> :
                                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.990069 1.51495L3.39757 3.92245L4.86757 5.39995C5.49007 6.02245 6.50257 6.02245 7.12507 5.39995L11.0101 1.51495C11.5201 1.00495 11.1526 0.134947 10.4401 0.134947L6.23257 0.134946L1.56007 0.134946C0.840069 0.134946 0.480069 1.00495 0.990069 1.51495Z" fill="#FF8D4D" />
                                        </svg>
                                }

                                <span className={parseFloat(coin.price_change_percentage_24h) >= 0 ? 'green' : 'red'}>{format(coin.price_change_percentage_24h)}</span>
                            </div>
                        </div>
                        <h3>${coin.current_price.toFixed(3)}</h3>
                        <span>{coin.id.charAt(0).toUpperCase() + coin.id.slice(1)} - {coin.symbol.toUpperCase()}</span>
                    </button>
                </div>
            )
            }
        </div >
    )
}