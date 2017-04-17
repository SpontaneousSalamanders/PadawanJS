import React, { Component } from 'react';
import SidebarMenu from '../containers/SidebarMenu.jsx';
import MentorList from '../containers/mentor_list.jsx';

function HomePage() {
  return (
    <div >
      <SidebarMenu />
      <MentorList />
    </div>
  );
}


export default HomePage;