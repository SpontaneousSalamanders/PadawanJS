import React, { Component } from 'react';

class Roles extends Component {
	constructor(props) {
    super(props);
  }

	createRolesCheckboxes() {
	    const isAllChecked = false;
	    return this.props.rolesItems.map((item) => (
	      <div key={item}>
	        <input
	          key={item}
	          id={item}
	          type="checkbox"
	          checked={isAllChecked || this.props.selectedRolesItems.includes(item)}
	          value={item}
	          onChange={this.props.handleRolesChange} />
	        <label className="role_items" htmlFor={item}>{item}</label>
	      </div>
	    ));
	  }

	  render() {
	  	return(
	    <div>
	      {this.createRolesCheckboxes()}
	    </div>
	  	)
  }
}


export default Roles;