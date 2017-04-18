import React, { Component } from 'react';
import { Link } from 'react-router';
import MentorList from '../containers/MentorList.jsx';


class LandingPage extends Component {
  render() {
    return (
     <div>
     	<div>
     		<video className="video" src="/padawanjs.mov" autoPlay="true">
     		</video>
	     	<h2 className="welcome_padawan">
	     		Welcome, Padawan!
	     		<br />
	     	</h2>
     		<MentorList />
     	</div>
     </div>
    )
  }
}

export default LandingPage;
	     	// <img className="lightsaber" src="/lightsaber_grey_background.png"/>
