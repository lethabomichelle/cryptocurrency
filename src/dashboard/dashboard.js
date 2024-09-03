import React from "react";
import Statistic from "./statistics";
import LiveMarket from "./liveMarket";
import Card from "./card";
import './dashboard.css'

export default function Dashboard() {
    return (
        <div className="main">
            <div className="top-container">
                <Card />
                <Statistic />
            </div>
            <div className="bottom-container">
                <LiveMarket />
                <div className="transactions">
                    <h1>transactions</h1>
                </div>
            </div>
        </div>
    )
}