import React, { Component } from 'react';
import MentorList from '../containers/MentorList.jsx';
import SidebarMenu from '../containers/SidebarMenu.jsx';

function HomePage() {
  return (
    <div >
      <SidebarMenu />
      <MentorList />
    </div>
  );
}


export default HomePage;