import React, { Component } from 'react';
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
      selectedTechStacksItems: [],
      selectedRolesItems: [],
      selectedLocationItems: []
    }
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.createTechStackCheckboxes = this.createTechStackCheckboxes.bind(this);
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
    return (
      techStackItems.map((item) => {
        return (
          <div key={item}>
            <input type="checkbox" />
            <label>{item}</label>
          </div>
        )
      })
    );
  }


  createRolesCheckboxes() {
  	return (
  		rolesItems.map((item) => {
  			return (
  				<div key={item}>
  					<input type="checkbox" />
  					<label>{item}</label>
  				</div>
  			)
  		})
		);
  }

  createLocationCheckboxes() {
  	return (
  		locationItems.map((item) => {
  			return (
  				<div key={item}>
  					<input type="checkbox" />
  					<label>{item}</label>
  				</div>
  			)
  		})
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


    return (
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
};

export default App;