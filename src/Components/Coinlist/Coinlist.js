import React, { Component } from 'react'
import stickybits from 'stickybits'
import './Coinlist.css'
import Loading from '../Loading/Loading'

class Coinlist extends Component {
  componentDidUpdate () {
    stickybits('.all-coin-header')
    console.log(this.props)
  }

  render () {

    return (
      <div className="all-coin-wrapper">

        {/*coin list table header*/}
        <div tabIndex="-1" className="all-coin-header">
          <div onClick={() => {this.props.changeSort('coinranking')}} className="crypto ">
            <span className='change-sort'>CRYPTOCURRENCY</span>
          </div>
          <div onClick={() => {this.props.changeSort('price')}} className="price ">
            <span className='change-sort'>PRICE</span>
          </div>
          <div onClick={() => {this.props.changeSort('marketCap')}} className="market-cap ">
            <span className='change-sort'>MARKET-CAP</span>
          </div>
          <div onClick={() => {this.props.changeSort('change')}} className="change ">
            <span className='change-sort'>CHANGE</span>
          </div>
        </div>
        {/*coin list table header end*/}


        {/*coin list start*/}
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
        {/*coin list end */}

        <Loading/>

      </div>
    )
  }
}

export default Coinlist
