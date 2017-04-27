import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import { Link } from 'react-router';
import { startConversation } from '../actions/directMessageActions.jsx'


function MentorCard (props) {
  return (
    <MuiThemeProvider>
      <Card >
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar={props.mentor.picture}
          />
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="images/nature-600-337.jpg" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
    </MuiThemeProvider>

  )
}

function mapStateToProps(state) {
  return {
    mentor: state.selectedMentor,
    directMessages: state.directMessages
  };
}

export default connect(mapStateToProps)(MentorCard);