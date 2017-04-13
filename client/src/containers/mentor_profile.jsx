import React, { Component } from 'react';
import { connect } from 'react-redux';

class MentorProfile extends Component {
  render () {
    return (

      <div style={{marginTop: 100}}>
        <img
          style={{width: 300}}
          src={this.props.mentor.picture} />          
        <h5>{this.props.mentor.name}</h5>
        <div>Location: {this.props.mentor.location}</div>
        <div>Tech Stacks: {this.props.mentor.techStack.map((stack)=>{return(<div>{stack}</div>)})}</div>
        <div>Projects</div>
        <div>Video Group</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mentor: state.selectedMentor
  }
}

export default connect(mapStateToProps)(MentorProfile);