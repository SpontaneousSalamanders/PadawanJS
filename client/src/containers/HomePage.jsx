/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 * This component was previously App.jsx but this serves to be the page with mentor list and search filter. See new App.jsx for reason why.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../containers/Nav.jsx';
import { connect } from 'react-redux';

import MentorList from '../containers/mentor_list.jsx';
// import MentorDetail from '../containers/mentor_detail';

import Sidebar from 'react-sidebar';
import MentorList from '../containers/mentor_list.jsx';
import { filter } from 'lodash';

const mql = window.matchMedia(`(min-width: 800px)`);

const techStackItems = [
  'All',
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
  'All',
  'Full Stack',
  'Front-end',
  'Back-end'
];

const locationItems = [
  'All',
  'San Francisco',
  'San Jose',
  'Palo Alto'
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open,
      isChecked: false,
      selectedTechStacksItems: [],
      selectedRolesItems: [],
      selectedLocationItems: []
    }
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.createTechStackCheckboxes = this.createTechStackCheckboxes.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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


  handleInputChange(event) {
    const target = event.target;
    this.setState({
      isChecked: target
    });
  }

  createTechStackCheckboxes() {
    return (
      <form>
        {techStackItems.map((item, key) => {
          return (
            <div key={key}>
              <input
                key={key}
                id={key}
                type="checkbox"
                checked={this.state.isChecked[key]}
                onChange={this.handleInputChange} />
              <label htmlFor={key}>{item}</label>
            </div>
          )
        })}
      </form>
    );
  }

  createRolesCheckboxes() {
    return (
      <form>
        {rolesItems.map((item, key) => {
          return (
            <div key={key}>
              <input
                key={key}
                id={key}
                type="checkbox"
                checked={this.state.isChecked[key]}
                onChange={this.handleInputChange} />
              <label htmlFor={key}>{item}</label>
            </div>
          )
        })}
      </form>
    );
  }

  createLocationCheckboxes() {
    return (
      <form>
        {locationItems.map((item, key) => {
          return (
            <div key={key}>
              <input
                key={key}
                id={key}
                type="checkbox"
                checked={this.state.isChecked[key]}
                onChange={this.handleInputChange} />
              <label htmlFor={key}>{item}</label>
            </div>
          )
        })}
      </form>
    );
  }


  render() {
    var sidebarContent =
    (<div>
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
    </div>);


class HomePage extends Component {
  render() {
    return (
      const dispatch = this.props.dispatch;
      const { loggedIn } = this.props.data;
      <div>
        <Sidebar
          sidebar={sidebarContent}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}>
          <MentorList />
        </Sidebar>
      </div>
    );
  }
}

function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);