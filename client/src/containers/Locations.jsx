import React, { Component } from 'react';

class Locations extends Component {
  constructor(props) {
    super(props);
  }

	createLocationsCheckboxes() {
    const isAllChecked = false;
    return this.props.locationItems.map((item) => (
      <div key={item}>
        <input
          key={item}
          id={item}
          type="checkbox"
          checked={isAllChecked || this.props.selectedLocationItems.includes(item)}
          value={item}
          onChange={this.props.handleLocationsChange} />
        <label className="location_items"htmlFor={item}>{item}</label>
      </div>
    ));
  }

	render() {
    return (
      <div>
        {this.createLocationsCheckboxes()}
      </div>
    )
  }
}


export default Locations;