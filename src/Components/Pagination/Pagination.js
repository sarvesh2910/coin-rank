import React, {Component} from "react";
import './Pagination.css'

class Pagination extends Component {
    render() {
        return (
            <div className='pagination-wrapper'>
                <div onClick={() => this.props.getPrevPage()}
                     className="page-back page-change">
                    BACK
                </div>
                <div className="page-stat">
                    {this.props.currentPage} of {this.props.totalPages}
                </div>
                <div onClick={() => this.props.getNextPage()}
                     className="page-next page-change">
                    NEXT
                </div>
            </div>

        )
    }
}

export default Pagination;
