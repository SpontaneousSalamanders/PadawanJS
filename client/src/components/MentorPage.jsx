import React, { Component } from 'react';
import ResourceBoard from '../containers/ResourceBoard.jsx';
import MentorCard from '../containers/MentorCard.jsx';
import EventBoard from '../containers/EventBoard.jsx';
import MentorPostMenu from './MentorPostMenu.jsx';
import MyForm from './formdemo.jsx'

const MentorPage = function (props) {  
  return (
    <div className="container" style={{marginTop: 150}}>
      <div className="row">
        <div className="col-lg-4" >
          <MentorCard />
        </div>
        <div className="col-lg-8">
          <MyForm />
        </div>
      </div>
    </div>
  )
}

export default MentorPage;