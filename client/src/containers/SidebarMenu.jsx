import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { filter } from 'lodash';
import { filterMentors } from '../actions/index.jsx'
import MentorList from '../containers/mentor_list.jsx';
import { Divider } from 'semantic-ui-react';

const techStackItems = [
  'React',
  'Angular',
  'Backbone',
  'React Native',
  'Express',
  'Node.js',
  'TDD',
  'Mocha/Chai',
  'Redux'
];

const rolesItems = [
  'Full Stack',
  'Front end',
  'Back end'
];

const locationItems = [
  'SF',
  'San Jose',
  'Palo Alto'
];

class SidebarMenu extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedTechStacksItems: ['Nothing selected'],
      selectedRolesItems: ['Nothing selected'],
      selectedLocationItems: ['Nothing selected'],
    }
    this.createTechStackCheckboxes = this.createTechStackCheckboxes.bind(this);
    this.handleTechStackChange = this.handleTechStackChange.bind(this);
    this.createRolesCheckboxes = this.createRolesCheckboxes.bind(this);
    this.handleRolesChange = this.handleRolesChange.bind(this);
    this.createLocationsCheckboxes = this.createLocationsCheckboxes.bind(this);
    this.handleLocationsChange = this.handleLocationsChange.bind(this);
  }

  createTechStackCheckboxes() {
    const isAllChecked = false;
    return techStackItems.map((item) => (
      <div key={item}>
        <input
          key={item}
          id={item}
          type="checkbox"
          checked={isAllChecked || this.state.selectedTechStacksItems.includes(item)}
          value={item}
          onChange={this.handleTechStackChange} />
        <label htmlFor={item}>{item}</label>
      </div>
    ));
  }

  handleTechStackChange(event) {
    const selectedTechStack = event.target.value;
    let techStacks = this.state.selectedTechStacksItems;

    if (techStacks.includes('Nothing selected')) {
      techStacks.splice(techStacks.indexOf('Nothing selected'), 1);
      techStacks.push(selectedTechStack);
    } else {
      if (techStacks.includes(selectedTechStack)) {
        techStacks.splice(techStacks.indexOf(selectedTechStack), 1);
        if (techStacks.length === 0) {
          techStacks = ['Nothing selected'];
        }
      } else {
        techStacks.push(selectedTechStack);
      }
    }
    this.setState({
      selectedTechStacksItems: techStacks
    }, () => {
      console.log('techstack after setstate looks like:', techStacks);
      this.props.actions.filterMentors({
        techStacks: this.state.selectedTechStacksItems,
        roles: this.state.selectedRolesItems,
        locations: this.state.selectedLocationItems,
      });
    })
  }

  createRolesCheckboxes() {
    const isAllChecked = false;
    return rolesItems.map((item) => (
      <div key={item}>
        <input
          key={item}
          id={item}
          type="checkbox"
          checked={isAllChecked || this.state.selectedRolesItems.includes(item)}
          value={item}
          onChange={this.handleRolesChange} />
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

  createLocationsCheckboxes() {
    const isAllChecked = false;
    return locationItems.map((item) => (
      <div key={item}>
        <input
          key={item}
          id={item}
          type="checkbox"
          checked={isAllChecked || this.state.selectedLocationItems.includes(item)}
          value={item}
          onChange={this.handleLocationsChange} />
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
    const dispatch = this.props.dispatch;
    // const { loggedIn } = this.props.data;


    return (
      <div>
          <div className="sidebar-container">
            <form>
              <h4 style={{textAlign: 'center'}} >Tech Stacks</h4>
              <Divider/>
              <div>
                {this.createTechStackCheckboxes()}
              </div>
              <br />
              <h4 style={{textAlign: 'center'}} >Roles</h4>
              <Divider/>
              <div>
                {this.createRolesCheckboxes()}
              </div>
              <br />
              <h4 style={{textAlign: 'center'}} >Location</h4>
              <Divider/>
              <div>
                {this.createLocationsCheckboxes()}
              </div>
            </form>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      filterMentors,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);