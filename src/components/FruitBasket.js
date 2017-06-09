import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

Filter.defaultProps = {
  filters: [],
  handleChange: () => {}
}

export default (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleFilterChange} filters={props.filters}/>
      <FilteredFruitList filter={props.selectedFilter} items={props.items} />
    </div>
  )
}
