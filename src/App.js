import React, {Component} from "react";
import "./App.css";
import * as API from "./api";
import Coinlist from "./Components/Coinlist/Coinlist";
import Pagination from "./Components/Pagination/Pagination";

class App extends Component {
    state = {
        data: [],
        currentPage: '0',
        totalPages: ''
    };

    componentDidMount() {
        this.getCoinList('USD', 30, 0);
    }
    getCoinList=(base,limit,offset)=>{
        API.getAllCoins(base, limit, offset).then(data => {
            console.log(data);
            this.setState((prevState, props) => {
                return ({
                        data: data.coins,
                        currentPage: prevState.currentPage + 1,
                        totalPages: data.stats.total
                    }
                )
            });
        });
    };

    getNextPage(){
        let _state = this.state
        this.getCoinList('USD', 30, ((_state.currentPage+1)*30));
    }
    getPrevPage(){
        let _state = this.state
        this.getCoinList('USD', 30, ((_state.currentPage-1))*30);
    }
    goToPage = (page) => {
        this.getCoinList('USD', 30, (page-1)*30);
    };

    render() {
        return (
            <div className="App">
                <Coinlist coin={this.state.data}/>
                <Pagination getNextPage={this.getNextPage} getPrevPage={this.getPrevPage} goToPage={this.goToPage} totalPages={this.state.totalPages} coin={this.state.data}/>
            </div>
        );
    }
}

export default App;
