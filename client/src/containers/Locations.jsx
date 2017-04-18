import React, { Component } from 'react';

class Locations extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
        <label htmlFor={item}>{item}</label>
      </div>
    ));
  }

  handleLocationsChange(event) {
    const selectedLocation = event.target.value;
    let locations = this.state.selectedLocationItems;
    if (locations.includes('Nothing selected')) {
      locations.splice(locations.indexOf('Nothing selected'), 1);
      locations.push(selectedLocation);
    } else {
      if (locations.includes(selectedLocation)) {
        locations.splice(locations.indexOf(selectedLocation), 1);
        if (locations.length === 0) {
          locations = ['Nothing selected'];
        }
      } else {
        locations.push(selectedLocation);
      }
    }
    this.setState({
      selectedLocationItems: locations
    }, () => {
      console.log('locations after setstate looks like:', locations);
      this.props.actions.filterMentors({
        techStacks: this.state.selectedTechStacksItems,
        roles: this.state.selectedRolesItems,
        locations: this.state.selectedLocationItems,
      });
    })
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