import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'react-materialize';
import { selectMentor } from '../actions/index.jsx'
import { bindActionCreators } from 'redux';

class MentorList extends Component {
  renderList() {
    return this.props.mentors.map((mentor) => {
      return (
        <div key={mentor.name} className="list-group">
          <Card style={{width: 300}} header={<CardTitle reveal image={mentor.picture} waves='light'/>}
              title={mentor.name}
              reveal={
                <ul>
                  <br />
                  <li>Location: {mentor.location}</li>
                  <li>Expertise: {mentor.techStack.join(', ')}</li>
                </ul>
              }>
          </Card>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mentors: state.mentors
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectMentor: selectMentor}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorList)

// Tech: 
// {Object.keys(mentor.techStack).join(', ')}
