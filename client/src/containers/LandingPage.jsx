import React, { Component } from 'react';
import { Link } from 'react-router';
import MentorList from '../containers/MentorList.jsx';


class LandingPage extends Component {
  render() {
    return (
     <div>
     	<div>
	     	<img className="placeholder" src="/787215.jpg"/>
	     	<h2 className="welcome_padawan">
	     		Meet our favorite mentors!
	     		<br />
	     	</h2>
     		<MentorList />
     	</div>
     </div>
    )
  }
}

export default LandingPage;