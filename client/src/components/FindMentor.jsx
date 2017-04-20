import React, { Component } from 'react';
import MentorListCard from '../containers/MentorListCard.jsx';
import MentorList from '../containers/MentorList.jsx';
import SidebarMenu from '../containers/SidebarMenu.jsx';

export default props => {
  return (
    <div >
      <SidebarMenu />
      <MentorList />
    </div>
  );
}
