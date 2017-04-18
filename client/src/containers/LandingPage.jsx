import React, { Component } from 'react';
import { Link } from 'react-router';
import MentorList from '../containers/MentorList.jsx';


class LandingPage extends Component {
  render() {
    return (
     <div>
     	<div>
	     	<img className="lightsaber" src="/lightsaber_grey_background.png"/>
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
