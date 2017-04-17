import React, { Component } from 'react';
import ResourceBoard from '../containers/ResourceBoard.jsx';
import Events from '../containers/Events.jsx';
import MentorCard from '../containers/MentorCard.jsx';

const MentorPage = function (props) {  
  return (
    <div className="container" style={{marginTop: 100}}>
      <div className="row">
        <div className="col-lg-4" >
          <MentorCard />
        </div>
        <div className="col-lg-8">
          <ResourceBoard />
          <Events />
      </div>
        </div>
    </div>
  )
} 



export default MentorPage;
