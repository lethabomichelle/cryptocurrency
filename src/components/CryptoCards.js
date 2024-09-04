import React, { useEffect, useState } from "react";
import './dashboard.css'

import btc from '../assets/dashboard/btc.png'
import ADA from '../assets/dashboard/ADA.png'
import ITL from '../assets/dashboard/ITL.png'
import ETH from '../assets/dashboard/ETH.png'

export default function CryptoCards() {

    const [coin, setCoin] = useState([])
    const [currency, setCurrrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const fetchAllCoins = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-tkgkpH5cDfLNJPiwc4c7RgQS' }
        };

        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
            .then(response => response.json())
            .then(response => {
                setCoin(response)
                console.log(coin);
            })
            .catch(err => console.error(err));
    }


    return (
        <div className="cards" >
            <div className="card-body">
                <div>
                    <img src={btc} alt="icon" style={{ width: '52px', height: '52px' }} />
                    {/* <i>arrow</i> */}
                    <div>
                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0099 4.48505L8.60243 2.07755L7.13243 0.600054C6.50993 -0.0224463 5.49743 -0.0224463 4.87493 0.600054L0.989931 4.48505C0.479932 4.99505 0.847431 5.86505 1.55993 5.86505H5.76743H10.4399C11.1599 5.86505 11.5199 4.99505 11.0099 4.48505Z" fill="#1ECB4F" />
                        </svg>

                        <span>+0.25%</span>
                    </div>
                </div>
                <h3>$40.291</h3>
                <span>Bitcoin - BTC</span>
            </div>

            <div className="card-body">
                <div>
                    <img src={ETH} alt="icon" style={{ width: '52px', height: '52px' }} />
                    {/* <i>arrow</i> */}
                    <div>
                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0099 4.48505L8.60243 2.07755L7.13243 0.600054C6.50993 -0.0224463 5.49743 -0.0224463 4.87493 0.600054L0.989931 4.48505C0.479932 4.99505 0.847431 5.86505 1.55993 5.86505H5.76743H10.4399C11.1599 5.86505 11.5199 4.99505 11.0099 4.48505Z" fill="#1ECB4F" />
                        </svg>

                        <span>+0.25%</span>
                    </div>
                </div>
                <h3>$40.291</h3>
                <span>Ethereum - ETH</span>
            </div>

            <div className="card-body">
                <div>
                    <img src={ITL} alt="icon" style={{ width: '52px', height: '52px' }} />
                    {/* <i>arrow</i> */}
                    <div>
                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0099 4.48505L8.60243 2.07755L7.13243 0.600054C6.50993 -0.0224463 5.49743 -0.0224463 4.87493 0.600054L0.989931 4.48505C0.479932 4.99505 0.847431 5.86505 1.55993 5.86505H5.76743H10.4399C11.1599 5.86505 11.5199 4.99505 11.0099 4.48505Z" fill="#1ECB4F" />
                        </svg>

                        <span>+0.25%</span>
                    </div>
                </div>
                <h3>$40.291</h3>
                <span>Litecoin - ITL</span>
            </div>

            <div className="card-body">
                <div>
                    <img src={ADA} alt="icon" style={{ width: '52px', height: '52px' }} />
                    {/* <i>arrow</i> */}
                    <div>
                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0099 4.48505L8.60243 2.07755L7.13243 0.600054C6.50993 -0.0224463 5.49743 -0.0224463 4.87493 0.600054L0.989931 4.48505C0.479932 4.99505 0.847431 5.86505 1.55993 5.86505H5.76743H10.4399C11.1599 5.86505 11.5199 4.99505 11.0099 4.48505Z" fill="#1ECB4F" />
                        </svg>

                        <span>+0.25%</span>
                    </div>
                </div>
                <h3>$40.291</h3>
                <span>Cardano - ADA</span>
            </div>

        </div>

    )
}