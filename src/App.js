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
    sort:'coinranking',
    currency:'USD',
    loading:true
  }

  componentDidMount () {
    this.getCoinList(this.state.currency, this.state.limit, 0, 1)
  }

  changeSort=(sort)=>{
    this.setState({
      sort,
      limit:30,
      offset:0,
      currentPage:0
    },()=>{
      this.getCoinList(this.state.currency, this.state.limit, 0, 1)
    })
  }

  getCoinList = (base, limit, offset, currentPage) => {
    API.getAllCoins(base, limit, offset,this.state.sort).then(data => {
      this.setState({
        data: data.coins,
        totalPages: data.stats.total,
        offset,
        currentPage,
        loading:!this.state.loading
      })
    })
  }

  getNextPage = () => {
    this.getCoinList(this.state.currency, this.state.limit, (this.state.offset + this.state.limit), (this.state.currentPage + 1))
  }
  getPrevPage = () => {
    this.getCoinList(this.state.currency, this.state.limit, (this.state.offset - this.state.limit), (this.state.currentPage - 1))
  }

  render () {
    return (
      <div className="App">
        <PageHeader/>
        <Coinlist
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
