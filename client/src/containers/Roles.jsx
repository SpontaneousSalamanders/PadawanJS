import React, { Component } from 'react';

class Roles extends Component {
	constructor(props) {
    super(props);
    console.log(props);
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
	        <label htmlFor={item}>{item}</label>
	      </div>
	    ));
	  }

	  handleRolesChange(event) {
	    const selectedRole = event.target.value;
	    let roles = this.state.selectedRolesItems;
	    if (roles.includes('Nothing selected')) {
	      roles.splice(roles.indexOf('Nothing selected'), 1);
	      roles.push(selectedRole);
	    } else {
	      if (roles.includes(selectedRole)) {
	        roles.splice(roles.indexOf(selectedRole), 1);
	        if (roles.length === 0) {
	          roles = ['Nothing selected'];
	        }
	      } else {
	        roles.push(selectedRole);
	      }
	    }
	    this.setState({
	      selectedRolesItems: roles
	    }, () => {
	      this.props.actions.filterMentors({
	        techStacks: this.state.selectedTechStacksItems,
	        roles: this.state.selectedRolesItems,
	        locations: this.state.selectedLocationItems,
	      });
	    })
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