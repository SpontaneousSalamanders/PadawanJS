import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import EventBoard from '../containers/EventBoard.jsx';
import ChallengeThread from '../containers/ChallengeThread.jsx';
import ResourceBoard from '../containers/ResourceBoard.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MentorPageMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'Events' }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick (e, { name }){
    this.setState({ activeItem: name });
  }


  render() {
    const { activeItem } = this.state

    return this.state.activeItem === 'Events' ? (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='Events' active={activeItem === 'Events'} onClick={this.handleItemClick} />
          <Menu.Item name='Challenges' active={activeItem === 'Challenges'} onClick={this.handleItemClick} />
          <Menu.Item name='Resources' active={activeItem === 'Resources'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          <MuiThemeProvider>
            <EventBoard style={{height: 500}}/>
          </MuiThemeProvider>
        </Segment>
      </div>
    ) : this.state.activeItem === 'Challenges' ? (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='Events' active={activeItem === 'Events'} onClick={this.handleItemClick} />
          <Menu.Item name='Challenges' active={activeItem === 'Challenges'} onClick={this.handleItemClick} />
          <Menu.Item name='Resources' active={activeItem === 'Resources'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          <MuiThemeProvider>
            <ChallengeThread style={{height: 500}}/>
          </MuiThemeProvider>
        </Segment>
      </div>
      ) : (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='Events' active={activeItem === 'Events'} onClick={this.handleItemClick} />
          <Menu.Item name='Challenges' active={activeItem === 'Challenges'} onClick={this.handleItemClick} />
          <Menu.Item name='Resources' active={activeItem === 'Resources'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          <MuiThemeProvider>
            <ResourceBoard style={{height: 500}}/>
          </MuiThemeProvider>
        </Segment>
      </div>
    )
  }
}

export default MentorPageMenu;
