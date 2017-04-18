import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { filter } from 'lodash';
import { filterMentors } from '../actions/index.jsx'
import MentorList from '../containers/MentorList.jsx';
import { Divider } from 'semantic-ui-react';
import TechStacks from './TechStacks.jsx';
import Roles from './Roles.jsx';
import Locations from './Locations.jsx';

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
    this.handleTechStackChange = this.handleTechStackChange.bind(this);
    this.handleRolesChange = this.handleRolesChange.bind(this);
    this.handleLocationsChange = this.handleLocationsChange.bind(this);
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
      this.props.actions.filterMentors({
        techStacks: this.state.selectedTechStacksItems,
        roles: this.state.selectedRolesItems,
        locations: this.state.selectedLocationItems,
      });
    })
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
              <h4 className="tech_stack" style={{textAlign: 'center'}} >Tech Stacks</h4>
              <Divider/>
              <div>
                <TechStacks 
                  techStackItems={techStackItems}
                  handleTechStackChange={this.handleTechStackChange}
                  selectedTechStacksItems={this.state.selectedTechStacksItems}
                />
              </div>
              <br />
              <h4 className="roles" style={{textAlign: 'center'}} >Roles</h4>
              <Divider/>
              <div>
                <Roles 
                rolesItems={rolesItems}
                handleRolesChange={this.handleRolesChange}
                selectedRolesItems={this.state.selectedRolesItems}/>
              </div>
              <br />
              <h4 className="locations" style={{textAlign: 'center'}} >Locations</h4>
              <Divider/>
              <div>
                <Locations 
                locationItems={locationItems}
                handleLocationsChange={this.handleLocationsChange}
                selectedLocationItems={this.state.selectedLocationItems}/>
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