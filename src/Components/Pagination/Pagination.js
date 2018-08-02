import React, { Component } from 'react'
import './Pagination.css'

//todo disable on last and first page
//todo go to top on page change
class Pagination extends Component {
  render () {
    return (
      <div className='pagination-wrapper'>
        <div onClick={() => this.props.getPrevPage()}
             className="page-back page-change">
          <i className="material-icons">
            navigate_before
          </i>
        </div>
        <div className="page-stat">
          {this.props.currentPage} of {this.props.totalPages}
        </div>
        <div onClick={() => this.props.getNextPage()}
             className="page-next page-change">
          <i className="material-icons">
            navigate_next
          </i>
        </div>
      </div>

    )
  }
}

export default Pagination
