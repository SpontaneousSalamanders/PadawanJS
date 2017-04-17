import React, { Component } from 'react';
import MentorList from '../containers/mentor_list.jsx';
import SidebarMenu from '../containers/SidebarMenu.jsx';
import Events from '../containers/Events.jsx';

function HomePage() {
  return (
    <div >
      <SidebarMenu />
      <MentorList />
      <Events />
    </div>
  );
}


export default HomePage;