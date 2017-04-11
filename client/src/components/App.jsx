import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import MentorList from '../containers/mentor_list.jsx';
import Checkbox from './Checkbox.jsx';

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
	'Front-end',
	'Back-end'
];

const locationItems = [
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
      open: props.open
    }
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createCheckbox = this.createCheckbox.bind(this);
    this.createTechStackCheckboxes = this.createTechStackCheckboxes.bind(this);
    this.createRolesCheckboxes = this.createRolesCheckboxes.bind(this);
    this.createLocationCheckboxes = this.createLocationCheckboxes.bind(this);
  }

	onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
    // this.createTechStackCheckboxes = new Set();
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

	toggleCheckbox(label) {
    if (this.createTechStackCheckboxes.has(label)) {
      this.createTechStackCheckboxes.delete(label);
    } else {
      this.createTechStackCheckboxes.add(label);
    }
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    for (const checkbox of this.createTechStackCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox(label) {
  	return (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}/>
    )
  }
   
  createTechStackCheckboxes() {
  	return (
    techStackItems.map(this.createCheckbox)
    )
  }

  createRolesCheckboxes() {
  	return (
    rolesItems.map(this.createCheckbox)
    )
  }

  createLocationCheckboxes() {
  	return (
    locationItems.map(this.createCheckbox)
    )
  }

  render() {
    var sidebarContent = 
    (<div>
	    <div>Tech Stacks</div>
			<form onSubmit={this.handleFormSubmit}>
        {this.createTechStackCheckboxes()}
      </form>
      <div>Roles</div>
      <form onSubmit={this.handleFormSubmit}>
        {this.createRolesCheckboxes()}
      </form>
      <div>Location</div>
      <form onSubmit={this.handleFormSubmit}>
        {this.createLocationCheckboxes()}
      </form>
    </div>);


    return (
    	<div>
	      <Sidebar sidebar={sidebarContent}
	               open={this.state.sidebarOpen}
	               docked={this.state.sidebarDocked}
	               onSetOpen={this.onSetSidebarOpen}>
	      </Sidebar>
	      <MentorList />
      </div>
    );
  }
};

export default App;

// 1) creating filter component in App.jsx, (o)
// 2) creating actual filter checkboxes (o)
// 3) linking checkboxes’ inputs with function, 
// 4) triggering findSubset function based on the input arguments

// sidebar: {
//     zIndex: 2,
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     transition: 'transform .3s ease-out',
//     WebkitTransition: '-webkit-transform .3s ease-out',
//     willChange: 'transform',
//     overflowY: 'auto',
//   },
//   content: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     overflowY: 'scroll',
//     WebkitOverflowScrolling: 'touch',
//     transition: 'left .3s ease-out, right .3s ease-out',
//   },
//   overlay: {
//     zIndex: 1,
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     opacity: 0,
//     visibility: 'hidden',
//     transition: 'opacity .3s ease-out, visibility .3s ease-out',
//     backgroundColor: 'rgba(0,0,0,.3)',
//   },