import React, { Component } from 'react';
import ResourceBoard from './ResourceBoard.jsx';
import Events from './Events.jsx';
import MentorCard from '../components/MentorCard.jsx';

const MentorProfile = function (props) {  
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



export default MentorProfile
