import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.portfolio.map(stock => <Stock key={stock.id} clickHandler={this.props.removeHandler} stock={stock} />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;