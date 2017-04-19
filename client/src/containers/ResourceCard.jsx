import React, { Component } from 'react';
// import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ResourceBoard from './ResourceBoard.jsx'
import { Divider } from 'semantic-ui-react';

function ResourceCard (props) {
  return (
  <MuiThemeProvider>
  <Card >
    <CardHeader
      title='Recommended Resources'
    />
    <CardMedia>
      <ResourceBoard />
    </CardMedia>
  </Card>
  </MuiThemeProvider>
  )
}

function mapStateToProps(state) {
  return {
    mentor: state.selectedMentor,
  };
}

export default connect(mapStateToProps)(ResourceCard);