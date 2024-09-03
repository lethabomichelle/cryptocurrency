import React from "react";
import './dashboard.css'

import btc from '../assets/dashboard/btc.png';

export default function Card() {
    return (
        <div className="cards" >
            <div className="card-body">
                <div>
                    <img src={btc} alt="icon" />
                    {/* <i>arrow</i> */}
                    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0099 4.48505L8.60243 2.07755L7.13243 0.600054C6.50993 -0.0224463 5.49743 -0.0224463 4.87493 0.600054L0.989931 4.48505C0.479932 4.99505 0.847431 5.86505 1.55993 5.86505H5.76743H10.4399C11.1599 5.86505 11.5199 4.99505 11.0099 4.48505Z" fill="#1ECB4F" />
                    </svg>

                    <span>+0.25%</span>
                </div>
                <h3>$40.291</h3>
                <span>Bitcoin - BTC</span>
            </div>

            <div className="card-body">
                <h1> price</h1>
            </div>

            <div className="card-body">
                <h1> price</h1>
            </div>

            <div className="card-body">
                <h1> price</h1>
            </div>
        </div>

    )
}