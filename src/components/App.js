import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

class App extends Component  {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
      items: []
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.fetchFilters = this.fetchFilters.bind(this)
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render() {
    return (
      <FruitBasket filters={this.state.filters} selectedFilter={this.state.selectedFilter} handleFilterChange={this.handleFilterChange} items={this.state.items}/>
    )
  }

}

export default App;
