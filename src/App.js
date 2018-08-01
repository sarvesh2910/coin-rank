import React, {Component} from "react";
import "./App.css";
import * as API from "./API";
import Coinlist from "./Components/Coinlist/Coinlist";
import Pagination from "./Components/Pagination/Pagination";
import PageHeader from './Components/PageHeader/PageHeader'
class App extends Component {
    state = {
        data: [],
        currentPage: 0,
        totalPages: null,
        limit: 50,
        offset: 0
    };

    componentDidMount() {
        this.getCoinList("USD", this.state.limit, 0, 1); //first and only one time  call
    }


    getCoinList = (base, limit, offset, currentPage) => {
        API.getAllCoins(base, limit, offset).then(data => {
            this.setState({
                data: data.coins,
                totalPages: data.stats.total,
                offset,
                currentPage,
            });
        });
    };


    getNextPage = () => {
        this.getCoinList('USD', this.state.limit, (this.state.offset + this.state.limit), (this.state.currentPage + 1));
    };
    getPrevPage = () => {
        this.getCoinList('USD', this.state.limit, (this.state.offset - this.state.limit), (this.state.currentPage - 1));
    };
    goToPage = (page) => {
        this.getCoinList('USD', 30, (page - 1) * 30);
    };

    render() {
        return (
            <div className="App">
                <PageHeader/>
                <Coinlist coin={this.state.data}/>
                <Pagination
                    currentPage={this.state.currentPage}
                    getNextPage={this.getNextPage} getPrevPage={this.getPrevPage}
                            goToPage={this.goToPage} totalPages={this.state.totalPages} coin={this.state.data}/>
            </div>
        );
    }
}

export default App;
