import React from "react";
import './dashboard.css'

import adawhite from '../assets/dashboard/adawhite.png'
import adaGraph from '../assets/dashboard/adaGraph.png'
import ethGraph from '../assets/dashboard/ethGraph.png'
import whiteEth from '../assets/dashboard/whiteEth.png'
import btcGraph from '../assets/dashboard/btcGraph.png'
import whiteBtc from '../assets/dashboard/whiteBtc.png'
import itcGraph from '../assets/dashboard/itcGraph.png'
import whiteItc from '../assets/dashboard/whiteItc.png'


export default function Transactions() {
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
                        <tr>
                            {/* <th scope="row" className="cryptoLogo"><img src={whiteEth} alt="" /></th> */}
                            <td><img className="cryptoLogo" src={whiteEth} alt="" /></td>
                            <td >
                                <h3>Ethereum</h3>
                                <span>ETH / USDT</span>
                            </td>
                            <td >
                                <p>Change</p>
                                <span>+14.02%</span>
                            </td>
                            <td >
                                <p>Price</p>
                                <span>39,786 USD</span>
                            </td>
                            <td className="graph"><img src={ethGraph} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img className="cryptoLogo" src={whiteBtc} alt="" /></td>
                            <td >
                                <h3>Bitcoin </h3>
                                <span>ETH / USDT</span>
                            </td>
                            <td >
                                <p>Change</p>
                                <span>+4.02%</span>
                            </td>
                            <td >
                                <p>Price</p>
                                <span>21,786 USD</span>
                            </td>
                            <td className="graph"><img src={btcGraph} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img className="cryptoLogo" src={whiteItc} alt="" /></td>
                            <td >
                                <h3>Litecoin </h3>
                                <span>ITC / USDT</span>
                            </td>
                            <td >
                                <p>Change</p>
                                <span>-4.02%</span>
                            </td>
                            <td >
                                <p>Price</p>
                                <span>9,786 USD</span>
                            </td>
                            <td className="graph"><img src={itcGraph} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img className="cryptoLogo" src={adawhite} alt="" /></td>
                            <td >
                                <h3>Cardano</h3>
                                <span>ADA / USDT</span>
                            </td>
                            <td >
                                <p>Change</p>
                                <span>+0.02%</span>
                            </td>
                            <td >
                                <p>Price</p>
                                <span>4,786 USD</span>
                            </td>
                            <td className="graph"><img src={adaGraph} alt="" /></td>
                        </tr>
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
                        <tr>
                            <td><img className="cryptoLogo" src={whiteEth} alt="" /></td>
                            <td >
                                <h3>Ethereum</h3>
                                <span>ETH / USDT</span>
                            </td>
                            <td >
                                <p>Change</p>
                                <span>+14.02%</span>
                            </td>
                        </tr>
                        <tr>
                            <td><img className="cryptoLogo" src={whiteEth} alt="" /></td>
                            <td >
                                <h3>Ethereum</h3>
                                <span>ETH / USDT</span>
                            </td>
                            <td >
                                <p>Change</p>
                                <span>+14.02%</span>
                            </td>
                        </tr>
                        <tr>
                            <td><img className="cryptoLogo" src={whiteEth} alt="" /></td>
                            <td >
                                <h3>Ethereum</h3>
                                <span>ETH / USDT</span>
                            </td>
                            <td >
                                <p>Change</p>
                                <span>+14.02%</span>
                            </td>
                        </tr>
                        <tr>
                            <td><img className="cryptoLogo" src={whiteEth} alt="" /></td>
                            <td >
                                <h3>Ethereum</h3>
                                <span>ETH / USDT</span>
                            </td>
                            <td >
                                <p>Change</p>
                                <span>+14.02%</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}