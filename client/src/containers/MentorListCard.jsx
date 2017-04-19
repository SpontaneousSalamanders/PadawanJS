import React, { Component } from 'react';
// import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { selectMentor } from '../actions/index.jsx'
import { Button } from 'semantic-ui-react';

function MentorListCard (props) {

  return (
     <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="cover">
                    <img src={'https://images4.alphacoders.com/190/thumb-1920-19098.jpg'}/>
                </div>
                <div className="user">
                    <img className="img-circle" src={props.mentor.picture}/>
                </div>
                <div className="content">
                    <div className="main">
                        <h3 className="name">{props.mentor.name}</h3>
                        <p className="profession">{props.mentor.location}</p>
                        <p className="text-center">"I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"</p>
                    </div>
                    <div className="footer">
                        <i className="fa fa-mail-forward"></i> 
                    </div>
                </div>
            </div> 
            <div className="back">
                <div className="header">
                    <h5 className="motto">{props.mentor.role + ' developer'}</h5>
                </div>
                <div className="content">
                    <div className="main">
                        <h4 className="text-center">Job Description</h4>
                        <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>


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
                          onClick={()=> props.selectMentorAction.selectMentor(props.mentor)}
                          >
                            <Button basic color='yellow'>View Profile</Button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="social-links text-center">
                        <a href="http://creative-tim.com" className="facebook"><i className="fa fa-facebook fa-fw"></i></a>
                        <a href="http://creative-tim.com" className="google"><i className="fa fa-google-plus fa-fw"></i></a>
                        <a href="http://creative-tim.com" className="twitter"><i className="fa fa-twitter fa-fw"></i></a>
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