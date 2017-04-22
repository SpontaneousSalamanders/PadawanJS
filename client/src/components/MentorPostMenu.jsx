import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import ResourceForm from '../containers/ResourceForm.jsx';
import EventForm from '../containers/EventForm.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MentorPostMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'Resources' }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick (e, { name }){
    this.setState({ activeItem: name });
  } 
    

  render() {
    const { activeItem } = this.state
    if (this.state.activeItem === 'Resources') {
      return (
        <div>
          <Menu attached='top' tabular>
            <Menu.Item name='Resources' active={activeItem === 'Resources'} onClick={this.handleItemClick} />
            <Menu.Item name='Events' active={activeItem === 'Events'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
            </Menu.Menu>
          </Menu>

          <Segment attached='bottom'>
            <MuiThemeProvider>
              <ResourceForm style={{height: 500}}/> 
            </MuiThemeProvider>
          </Segment>
        </div>
      )
    }
    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='Resources' active={activeItem === 'Resources'} onClick={this.handleItemClick} />
          <Menu.Item name='Events' active={activeItem === 'Events'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          <MuiThemeProvider>
            <EventForm style={{height: 500}}/> 
          </MuiThemeProvider>
        </Segment>
      </div>
    )
  }
}

export default MentorPostMenu;