import React, {Component} from "react";
import './Pagination.css'

class Pagination extends Component {

    render() {
        return (
            <div className='pagination-wrapper'>
                <a onClick={() => this.props.getPrevPage()}>
                    <div className="page-back">
                        BACK
                    </div>
                </a>
                <div className="page-stat">
                    {this.props.currentPage}
                </div>
                <a onClick={() => this.props.getNextPage()}>
                    <div className="page-next">
                        NEXT
                    </div>
                </a>
            </div>

        )
    }
}

export default Pagination;
