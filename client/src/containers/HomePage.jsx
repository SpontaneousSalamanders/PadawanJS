/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 * This component was previously App.jsx but this serves to be the page with mentor list and search filter. See new App.jsx for reason why.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';

// import MentorDetail from '../containers/mentor_detail';
import Sidebar from 'react-sidebar';
import SideBarMenu from '../components/SideBarMenu.jsx';
import MentorList from '../containers/mentor_list.jsx';
import { filter } from 'lodash';
import Nav from '../components/Nav.jsx';
import MentorList from '../components/MentorList.jsx';
import { filterMentors } from '../actions/index.jsx'

const mql = window.matchMedia(`(min-width: 800px)`);

const techStackItems = [
  'Any',
  'React',
  'Angular',
  'Backbone',
  'React Native',
  'Express',
  'Node.js',
  'TDD',
  'JavaScript',
  'Mocha/Chai',
  'Redux'
];

const rolesItems = [
  'Any Role',
  'Full Stack',
  'Front-end',
  'Back-end'
];

const locationItems = [
  'Anywhere',
  'San Francisco',
  'San Jose',
  'Palo Alto'
];

class HomePage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open,
      selectedTechStacksItems: ['Any'],
      selectedRolesItems: ['Any Role'],
      selectedLocationItems: ['Anywhere'],
    }
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.createTechStackCheckboxes = this.createTechStackCheckboxes.bind(this);
    this.handleTechStackChange = this.handleTechStackChange.bind(this);
    this.createRolesCheckboxes = this.createRolesCheckboxes.bind(this);
    this.handleRolesChange = this.handleRolesChange.bind(this);
    this.createLocationCheckboxes = this.createLocationCheckboxes.bind(this);
    this.handleLocationsChange = this.handleLocationsChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  createTechStackCheckboxes() {
    const isAllChecked = this.state.selectedTechStacksItems.includes('Any');
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
    if (techStacks.includes('Any') && selectedTechStack !== 'Any') {
      techStacks.splice(techStacks.indexOf('Any'), 1);
      techStacks.push(selectedTechStack);
    } else if (selectedTechStack === 'Any'){
      techStacks = ['Any'];
    } else if (techStacks.includes(selectedTechStack)) {
      techStacks.splice(techStacks.indexOf(selectedTechStack), 1);
    } else {
      techStacks.push(selectedTechStack);
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

  createRolesCheckboxes() {
    const isAllChecked = this.state.selectedRolesItems.includes('Any Role');
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
    console.log(selectedRole);
    let roles = this.state.selectedRolesItems;
    if (roles.includes('Any Role') && selectedRole !== 'Any Role') {
      roles.splice(roles.indexOf('Any Role'), 1);
      roles.push(selectedRole);
    } else if (selectedRole === 'Any Role'){
      roles = ['Any Role'];
    } else if (roles.includes(selectedRole)) {
      roles.splice(roles.indexOf(selectedRole), 1);
    } else {
      roles.push(selectedRole);
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


  createLocationCheckboxes() {
    const isAllChecked = this.state.selectedLocationItems.includes('Anywhere');
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
    console.log(selectedLocation);
    let locations = this.state.selectedLocationItems;
    if (locations.includes('Anywhere') && selectedLocation !== 'Anywhere') {
      locations.splice(locations.indexOf('Anywhere'), 1);
      locations.push(selectedLocation);
    } else if (selectedLocation === 'Anywhere'){
      locations = ['Anywhere'];
    } else if (locations.includes(selectedLocation)) {
      locations.splice(locations.indexOf(selectedLocation), 1);
    } else {
      locations.push(selectedLocation);
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
    const { loggedIn } = this.props.data;

    var sidebarContent =
    (<div className="sidebar">
      <form>
        <div>Tech Stacks</div>
        <div>
          {this.createTechStackCheckboxes()}
        </div>
        <br />
        <div>Roles</div>
        <div>
          {this.createRolesCheckboxes()}
        </div>
        <br />
        <div>Location</div>
        <div>
          {this.createLocationCheckboxes()}
        </div>
      </form>
    </div>);

    return (
      <div>
        <Sidebar
          sidebar={sidebarContent}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}>
          <MentorList
            mentors={this.props.data.mentors}/>
        </Sidebar>
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

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);