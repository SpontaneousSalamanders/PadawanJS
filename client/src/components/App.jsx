import React, { Component } from 'react';
import MentorList from '../containers/mentor_list.jsx';
// import MentorDetail from '../containers/mentor_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <MentorList />
      </div>
    )
  }
}