import React, {Component} from "react";
import stickybits from "stickybits";
import "./Coinlist.css";

class Coinlist extends Component {
    componentDidUpdate() {
        stickybits(".all-coin-header");
        console.log(this.props);
    }

    render() {

        return (
            <div className="all-coin-wrapper">
                {console.log(this.props)}
                <div className="all-coin-header">
                    <div className="crypto">CRYPTOCURRENCY</div>
                    <div className="price">PRICE</div>
                    <div className="market-cap">MARKET-CAP</div>
                    <div className="change">CHANGE</div>
                </div>
                {this.props.coin &&
                this.props.coin.map((coin, index) => (
                    <div key={index} className="coin-row">
                        <div className="coin-rank">{coin.rank}</div>
                        <div className="coin-name-wrapper">
                            <div className="coin-icon-wrapper">
                                <img
                                    className="coin-icon"
                                    src={coin.iconUrl}
                                    alt={coin.name}
                                />
                            </div>
                            <div className="coin-name">{coin.name}</div>
                        </div>

                        <div className="coin-price">
                            $ {Number(coin.price).toFixed(4)}
                        </div>
                        <div className="coin-market-cap">{` $${coin.marketCap} `}</div>
                        {coin.change >= 0 && (
                            <div className={`coin-change positive`}>
                                <i className="material-icons positive">arrow_upward</i>
                                <span className="number">{` ${coin.change}%`}</span>
                            </div>
                        )}
                        {coin.change < 0 && (
                            <div className={`coin-change negative`}>
                                <i className="material-icons negative">arrow_downward</i>
                                <span className="number">{` ${coin.change}%`}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}

export default Coinlist;
