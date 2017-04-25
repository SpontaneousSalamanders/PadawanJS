import React, { Component } from 'react';
// import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { selectMentor } from '../actions/index.jsx'
import { Button } from 'semantic-ui-react';

function MentorListCard (props) {
  console.log('mentor list card', props)
  return (
    <div className="rotating-card-container">
      <div className="rotating-card">
        <div className="front" style={{width: 290}}>
          <div className="cover">
            <img src={props.mentor.image}/>
          </div>
            <div className="user">
              <img className="img-circle" src={props.mentor.picture}/>
            </div>
            <div className="content">
              <div className="main">
                <h3 className="name">{props.mentor.name}</h3>
                    <p className="profession">{props.mentor.location}</p>
                    <p className="text-center">{props.mentor.description}</p>
              </div>
              <div className="footer">
                <i className="fa fa-mail-forward"></i> 
              </div>
            </div>
          </div> 
            <div className="back" style={{width: 290, textAlign: 'center'}}>
              <div className="header">
                <h5 className="motto">{props.mentor.role + ' developer'}</h5>
              </div>
              <div className="content">
                <div className="main">
                  <h4 className="text-center">Technology Expertise:</h4>
                    <p >{props.mentor.techStack.join(', ')}</p>
                <div className="stats-container">
                  <div className="stats">
                    <h4>5</h4>
                    <p>
                      Events
                    </p>
                  </div>
                  <div className="stats">
                    <h4>14</h4>
                      <p>
                        Padawans
                      </p>
                  </div>
                  <div className="stats">
                      <h4>15</h4>
                      <p>
                          Resources
                      </p>
                  </div>
                </div>
                  <div className= 'profile-btn-container'>
                    <Link
                      to={"/profile/" + props.mentor.id}
                      onClick={()=> props.selectMentorAction.selectMentor(props.mentor)}>
                      <Button basic color='blue'>View Profile</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="footer">
                <div className="social-links text-center">
                  <a target="_blank"  href={props.mentor.github} className="facebook"><i className="fa fa-github"></i></a>
                  <a target="_blank" href={props.mentor.linkedIn} className="google"><i className="fa fa-linkedin"></i></a>
              </div>
          </div>
        </div> 
      </div> 
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    selectMentorAction: bindActionCreators({selectMentor: selectMentor}, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(MentorListCard)