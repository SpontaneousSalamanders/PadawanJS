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
// import SideBarMenu from '../components/SideBarMenu.jsx';
import { filter } from 'lodash';
import Nav from '../components/Nav.jsx';
import { filterMentors } from '../actions/index.jsx'
import MentorList from '../components/MentorList.jsx';
import { selectMentor } from '../actions/index.jsx'
import { getMentors } from '../actions/mentorActions.jsx'
import { Divider } from 'semantic-ui-react';


const mql = window.matchMedia(`(min-width: 800px)`);

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

class HomePage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open,
      selectedTechStacksItems: ['Nothing selected'],
      selectedRolesItems: ['Nothing selected'],
      selectedLocationItems: ['Nothing selected'],
    }
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.createTechStackCheckboxes = this.createTechStackCheckboxes.bind(this);
    this.handleTechStackChange = this.handleTechStackChange.bind(this);
    this.createRolesCheckboxes = this.createRolesCheckboxes.bind(this);
    this.handleRolesChange = this.handleRolesChange.bind(this);
    this.createLocationsCheckboxes = this.createLocationsCheckboxes.bind(this);
    this.handleLocationsChange = this.handleLocationsChange.bind(this);
  }

  componentDidMount() {
    console.log('to begin with, techstack is:', this.state.selectedTechStacksItems);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
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

  // checkboxes created for tech stacks
  createTechStackCheckboxes() {
    // starts with unchecked box
    const isAllChecked = false;
    // map out techStackItems and crate input boxes for each item
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

  // event handler for tech stack input boxes
  handleTechStackChange(event) {
    // selected tech stack is saved
    const selectedTechStack = event.target.value;
    // created a new variable as this.state.selectedTechStacksItems is too long
    let techStacks = this.state.selectedTechStacksItems;

    // conditions
    // 1) default is to show all mentors
    // 2) if a user clicks any tech stack, it should remove 'Nothing selected'
    //    and add that clicked tech stack
    if (techStacks.includes('Nothing selected')) {
      techStacks.splice(techStacks.indexOf('Nothing selected'), 1);
      techStacks.push(selectedTechStack);
    // 3) if the user clicks already added tech stack, it de-selects the box
    //    and removes that tech stack
    } else {
      if (techStacks.includes(selectedTechStack)) {
        techStacks.splice(techStacks.indexOf(selectedTechStack), 1);
        // 4) if techStacks does not include anything due to this removal, 
        //    'Nothing selected' is added to return the default state
        if (techStacks.length === 0) {
          techStacks = ['Nothing selected'];
        }
      // 5) none of the above -> add the new techStack
      } else {
        techStacks.push(selectedTechStack);
      }
    }
    // set the existing state of 'selectedTechStacksItems' to the newly filtered stacks
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
    const { loggedIn } = this.props.data;


    return (
      <div>
          <div className="sidebar-container">
            <form>
              <h4>Tech Stacks</h4>
              <Divider/>
              <div>
                {this.createTechStackCheckboxes()}
              </div>
              <br />
              <h4>Roles</h4>
              <Divider/>
              <div>
                {this.createRolesCheckboxes()}
              </div>
              <br />
              <h4>Location</h4>
              <Divider/>
              <div>
                {this.createLocationsCheckboxes()}
              </div>
            </form>
          </div>

          <MentorList
            actions={this.props.actions}
            mentors={this.props.data.mentors.filtered}/>
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
      getMentors,
      selectMentor,
    }, dispatch),
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);