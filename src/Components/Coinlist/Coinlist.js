import React, { Component } from 'react'
import stickybits from 'stickybits'
import './Coinlist.css'
import Loading from '../Loading/Loading'

class Coinlist extends Component {
  componentDidUpdate () {
    stickybits('.all-coin-header-wrapper')
    console.log(this.props)
  }

  render () {

    return (
      <div>
        <div className="all-coin-wrapper">
          {/*coin list table header*/}
          <div className="all-coin-header-wrapper">

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

          </div>
          {/*coin list table header end*/}


          {/*coin list start*/}
          {!this.props.loading && this.props.coin &&
          this.props.coin.map((coin, index) => (
            <div key={index} className='coin-row-wrapper'>
              <div className="coin-row">
                <div className="coin-profile-wrapper">
                  <div className="coin-rank">
                    {coin.rank}
                  </div>
                  <div className="coin-icon-wrapper">
                    <img
                      className="coin-icon"
                      src={coin.iconUrl}
                      alt={coin.name}
                    />
                  </div>
                  <div className="coin-name">
                    <span>{coin.name}</span></div>
                </div>

                <div className="coin-price">

                   $ {Number(coin.price).toFixed(2)}
                </div>

                <div className="coin-market-cap">
                  $ {coin.marketCap}</div>
                {coin.change >= 0 && (
                  <div className={`coin-change positive`}>

                    <span className="number">{` ${coin.change}%`}</span>
                    <i className="material-icons positive">arrow_upward</i>
                  </div>
                )}
                {coin.change < 0 && (
                  <div className={`coin-change negative`}>

                    <span className="number">{` ${coin.change}%`}</span>
                    <i className="material-icons negative">arrow_downward</i>
                  </div>
                )}
              </div>
            </div>
          ))}
          {/*coin list end */}

          {this.props.loading && <Loading limit={this.props.limit}/>}

        </div>

      </div>
    )
  }
}

export default Coinlist
