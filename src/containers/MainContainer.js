import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks/'

class MainContainer extends Component {

  state = {
    api: [],
    portfolio: [],
    sort: "",
    filterArray: []
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json()).then(stocks => this.setState({ api:stocks, filterArray:stocks }))
  }

  buyStock = stock => {
    this.state.portfolio.includes(stock) ?
    null
    :
    this.setState(prevState => ({
      portfolio: prevState.portfolio.concat(stock)
    }))
  }

  removeFromPortfolio = stock => {
    let newArray = this.state.portfolio.filter(portfolioStock => portfolioStock.id !== stock.id);
    this.setState({
      portfolio: newArray
    })
  }

  sortHandler = sortType => {
    sortType === "Alphabetically" ?
    this.setState (prevState => ({
      sort: sortType,
      filterArray: prevState.api.sort((a, b) => {
        return (b.name > a.name) ? -1 : (a.name > b.name) ? 1 : 0
      })
    }))
    :
    this.setState( prevState => ({
      sort: sortType,
      filterArray: prevState.api.sort((a, b) => {
        return (a.price > b.price) ? -1 : (b.price > a.price) ? 1 : 0
      })
    }))
  }

  filterHandler = filterValue => {
    let newArray = this.state.api.filter(stock => stock.type === filterValue)
    this.setState({
      filterArray: newArray
    })
  }

  render() {

    return (
      <div>
        <SearchBar sortHandler={this.sortHandler} filter={this.filterHandler} sortType={this.state.sort} />

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.buyStock} stocks={this.state.filterArray} />

            </div>
            <div className="col-4">

              <PortfolioContainer removeHandler={this.removeFromPortfolio} portfolio={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;