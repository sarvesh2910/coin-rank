import React, {Component} from 'react';
import './PageHeader.css'
class PageHeader extends Component {
    render() {
        return (
            <div className='header-wrapper'>
                <h1 className='header-name'>
                    CoinRank
                </h1>
            </div>
        );
    }
}

export default PageHeader;