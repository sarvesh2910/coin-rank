import React, { Component } from 'react'
import './Loading.css'

class Loading extends Component {
  loop = (limit) => {
    console.log(limit)
    let DummyLoader = []
    for (let x = 0; x < limit; x++) {
      DummyLoader.push(
        <div className="loading-row">
          {this.dummyRow()}
        </div>
      )
    }
    return DummyLoader
  }

  dummyRow = () => {
    return (
      <div className="coin-row">
        <div className="coin-rank">{this.placeHolderGenerator(10)}</div>
        <div className="coin-name-wrapper">
          <div className="coin-icon-wrapper">
            {this.placeHolderGeneratorRound(24)}

          </div>

          <div className="coin-name">{this.placeHolderGenerator(110)}</div>
        </div>

        <div className="coin-price">
          {this.placeHolderGenerator(60)}
        </div>
        <div className="coin-market-cap">{this.placeHolderGenerator(90)}</div>
        <div className='coin-change'>
          {this.placeHolderGenerator(70)}
        </div>

      </div>
    )
  }

  placeHolderGenerator = (wide) => {
    return (
      <div className='placeHolder' style={{minWidth: wide + 'px'}}>
      </div>
    )
  }
  placeHolderGeneratorRound = (radius) => {
    return (
      <div className='placeHolderRound' style={{minWidth: radius + 'px', minHeight: radius + 'px'}}>
      </div>
    )
  }

  render () {
    return (
      <div className='loading-wrapper'>
        {this.loop(this.props.limit)}
      </div>
    )
  }
}

export default Loading