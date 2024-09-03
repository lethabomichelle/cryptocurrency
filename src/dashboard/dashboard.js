import React from "react";
import Statistic from "./statistics";
import Card from "./card";
import './dashboard.css'

export default function Dashboard() {
    return (
        <div className="container">
            <div className="crypto-cards">
                <div className="crypto-card">
                    <Card />
                </div>
            </div>

            <section className="statistics">
                <div className="statistic">
                    <Statistic />
                </div>
            </section>

            <section className="live-market-transactions">
                <h3>liveMArket and transactions</h3>
            </section>
        </div>
    )
}