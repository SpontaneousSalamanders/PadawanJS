import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import ResourcePost from '../containers/ResourcePost.jsx';
import EventPost from '../containers/EventPost.jsx';

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
            <ResourcePost /> 
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
          <EventPost /> 
        </Segment>
      </div>
    )
  }
}

export default MentorPostMenu;