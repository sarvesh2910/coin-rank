import React, { Component } from 'react'
import './Pagination.css'

//todo disable on last and first page
//todo go to top on page change
class Pagination extends Component {
  render () {
    return (
      <div className='pagination-wrapper'>
        <button disabled={this.props.currentPage===0||this.props.currentPage===1} onClick={() => this.props.getPrevPage()}
             className="page-back page-change">
          <i className="material-icons">
            navigate_before
          </i>
        </button>
        <div className="page-stat">
          {this.props.currentPage} of {this.props.totalPages}
        </div>
        <button disabled={this.props.currentPage===this.props.totalPages} onClick={() => this.props.getNextPage()}
             className="page-next page-change">
          <i className="material-icons">
            navigate_next
          </i>
        </button>
      </div>

    )
  }
}

export default Pagination
