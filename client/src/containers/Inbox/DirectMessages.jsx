import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class DirectMessage extends Component {
  componentDidMount() {
    this.props.getDirectMessages();
  }

}
