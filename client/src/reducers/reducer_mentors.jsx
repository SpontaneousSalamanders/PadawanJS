import { GET_MENTORS } from '../actions/mentorActions.jsx';
import { intersection } from 'lodash';

// const MENTORS = [
//   {name: 'Beth Johnson', location: 'San Francisco', role: 'Full Stack', techStack: ['React', 'Express', 'Node.js'], picture: 'http://imgur.com/xEUUtut.jpg'},
//   {name: 'Benji Marinacci', location: 'San Francisco', role: 'Full Stack', techStack: ['React', 'Express', 'Node.js', 'Mocha/Chai', 'Angular', 'Backbone', 'Redux'], picture: 'http://imgur.com/iwn6mV5.jpg'},
//   {name: 'Fred Zirdung', location: 'San Francisco', role: 'Full Stack', techStack: ['React', 'Express', 'Node.js', 'Mocha/Chai'], picture: 'http://imgur.com/9awfsn2.jpg'},
//   {name: 'Eric Brown', location: 'Palo Alto', role: 'Full Stack', techStack: ['React', 'Node.js'], picture: 'http://imgur.com/adDa5JU.jpg'},
//   {name: 'Tyler Arbus', location: 'San Jose', role: 'Back-end', techStack: ['Angular', 'Node.js', 'TDD'], picture: 'http://imgur.com/ohFukM2.jpg'},
//   {name: 'Paul Mills', location: 'San Francisco', role: 'Back-end', techStack: ['React', 'Node.js'], picture: 'http://imgur.com/9eJRSav.jpg'},
//   {name: 'Alison Zhang', location: 'Palo Alto', role: 'Front-end', techStack: ['React', 'Node.js'], picture: 'http://imgur.com/uz1C3om.jpg'},
//   {name: 'Jong Kim', location: 'San Jose', role: 'Front-end', techStack: ['React', 'Backbone', 'Node.js'], picture: 'http://imgur.com/yTpcGqk.jpg'},
// ]

export default function(state = [], action = {}) {
  const { type } = action;
  switch (action.type) {
    case GET_MENTORS:
    return state.concat(action.payload.data);
  }
  switch (type) {
    case 'FILTER_MENTORS':
      // console.log('this is action.payload', action.payload);
      // console.log('this is a state', state);
      if (action.payload.techStacks.includes('Nothing selected') && action.payload.roles.includes('Nothing selected') && action.payload.locations.includes('Nothing selected')) {
        return state;
      } else if (!action.payload.techStacks.includes('Nothing selected')) {
        return state.filter((mentor) => {
          const matchingTechStacks = intersection(action.payload.techStacks, mentor.techStack);
          return matchingTechStacks.length > 0 && matchingTechStacks.length === action.payload.techStacks.length;
        });
      } else if (!action.payload.roles.includes('Nothing selected')) {
        return state.filter((mentor) => {
          const role = [mentor.role];
          console.log('this is mentors role', role);
          const matchingRoles = intersection(action.payload.roles, role);
          return matchingRoles.length > 0 && matchingRoles.length === action.payload.roles.length;
        });
      } else if (!action.payload.locations.includes('Nothing selected')) {
        return state.filter((mentor) => {
          const location = [mentor.location];
          const matchingLocations = intersection(action.payload.locations, location);
          return matchingLocations.length > 0 && matchingLocations.length === action.payload.locations.length;
        })
      }
    default:
      return state;
  };
}
