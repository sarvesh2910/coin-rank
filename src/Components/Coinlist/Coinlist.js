import React, { Component } from 'react'
import stickybits from 'stickybits'
import './Coinlist.css'
import Loading from '../Loading/Loading'
import DA from '../Assets/down-arrow.svg'
import UA from '../Assets/up-arrow.svg'
import {Line} from 'react-chartjs-2';
const data= {
  datasets: [{
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
}
class Coinlist extends Component {
  componentDidMount () {
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
                {this.props.sort === 'coinranking' && ((this.props.order === 'desc') ?
                  <img className='sort-indicator' src={DA} alt=""/> :
                  <img className='sort-indicator' src={UA} alt=""/>)}
              </div>
              <div onClick={() => {this.props.changeSort('price')}} className="price ">
                <span className='change-sort'>PRICE</span>
                {this.props.sort === 'price' && ((this.props.order === 'desc') ?
                  <img className='sort-indicator' src={DA} alt=""/> :
                  <img className='sort-indicator' src={UA} alt=""/>)}
              </div>
              <div onClick={() => {this.props.changeSort('marketCap')}} className="market-cap ">
                <span className='change-sort'>MARKET-CAP</span>
                {this.props.sort === 'marketCap' && ((this.props.order === 'desc') ?
                  <img className='sort-indicator' src={DA} alt=""/> :
                  <img className='sort-indicator' src={UA} alt=""/>)}
              </div>
              <div onClick={() => {this.props.changeSort('change')}} className="change ">
                <span className='change-sort'>CHANGE</span>
                {this.props.sort === 'change' && ((this.props.order === 'desc') ?
                  <img className='sort-indicator' src={DA} alt=""/> :
                  <img className='sort-indicator' src={UA} alt=""/>)}
              </div>
            </div>

          </div>
          {/*coin list table header end*/}
          < Line
            data={data}
            height={500}
            width={700}
          />          {/*coin list start*/}
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
                  ${coin.marketCap}
                </div>
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
