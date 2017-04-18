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
                <TechStacks 
                  techStackItems={techStackItems}
                  selectedTechStacksItems={this.state.selectedTechStacksItems}/>
              </div>
              <br />
              <h4 style={{textAlign: 'center'}} >Roles</h4>
              <Divider/>
              <div>
                <Roles 
                rolesItems={rolesItems}
                selectedRolesItems={this.state.selectedRolesItems}/>
              </div>
              <br />
              <h4 style={{textAlign: 'center'}} >Locations</h4>
              <Divider/>
              <div>
                <Locations 
                locationItems={locationItems}
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