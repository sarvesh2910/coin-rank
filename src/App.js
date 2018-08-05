import React, { Component } from 'react'
import './App.css'
import * as API from './API'
import Coinlist from './Components/Coinlist/Coinlist'
import Pagination from './Components/Pagination/Pagination'
import PageHeader from './Components/PageHeader/PageHeader'

class App extends Component {
  state = {
    data: [],
    currentPage: 0,
    totalPages: 0,
    limit: 30,
    offset: 0,
    sort: 'coinranking',
    currency: 'USD',
    loading: true
  }

  componentDidMount () {
    this.getCoinList(this.state.currency, this.state.limit, 0)
  }

  changeSort = (sort) => {
    this.setState({
      sort,
      limit: this.state.limit,
      offset: 0,
      currentPage: 0
    }, () => {
      this.getCoinList(this.state.currency, this.state.limit, 0)
    })
  }

  getCoinList = (base, limit, offset) => {
    this.setState({
      loading: true,
    })
    if(this.state.offset!==0){}
    API.getAllCoins(base, limit, offset, this.state.sort).then(data => {
      let _totalPages = Math.ceil(data.stats.total / this.state.limit)
      let _currentPage = (offset / limit) + 1
      this.setState({
        data: data.coins,
        totalPages: _totalPages,
        offset,
        currentPage: _currentPage,
        loading:!this.state.loading
      })
    })
  }

  getNextPage = () => {
    this.getCoinList(this.state.currency, this.state.limit, (this.state.offset + this.state.limit))
  }
  getPrevPage = () => {
    this.getCoinList(this.state.currency, this.state.limit, (this.state.offset - this.state.limit))
  }

  render () {
    return (
      <div className="App ">
        <PageHeader/>
        <Pagination
          currentPage={this.state.currentPage}
          getNextPage={this.getNextPage} getPrevPage={this.getPrevPage}
          totalPages={this.state.totalPages} coin={this.state.data}/>
        <Coinlist
          limit={this.state.limit}
          loading={this.state.loading}
          changeSort={this.changeSort}
          coin={this.state.data}/>
        <Pagination
          currentPage={this.state.currentPage}
          getNextPage={this.getNextPage} getPrevPage={this.getPrevPage}
          totalPages={this.state.totalPages} coin={this.state.data}/>
      </div>
    )
  }
}

export default App
