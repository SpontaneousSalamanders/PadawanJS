import { GET_MENTORS } from '../actions/mentorActions.jsx';
import { intersection } from 'lodash';

const MENTORS = [
  {name: 'Beth Johnson', location: ['San Francisco'], role: ['Full Stack'], techStack: ['React', 'Express', 'Node.js'], picture: 'http://imgur.com/xEUUtut.jpg'},
  {name: 'Benji Marinacci', location: ['San Francisco'], role: ['Full Stack'], techStack: ['React', 'Express', 'Node.js', 'Mocha/Chai', 'Angular', 'Backbone', 'Redux'], picture: 'http://imgur.com/iwn6mV5.jpg'},
  {name: 'Fred Zirdung', location: ['San Francisco'], role: ['Full Stack'], techStack: ['React', 'Express', 'Node.js', 'Mocha/Chai'], picture: 'http://imgur.com/9awfsn2.jpg'},
  {name: 'Eric Brown', location: ['Palo Alto'], role: ['Full Stack'], techStack: ['React', 'Node.js'], picture: 'http://imgur.com/adDa5JU.jpg'},
  {name: 'Tyler Arbus', location: ['San Jose'], role: ['Back-end'], techStack: ['Angular', 'Node.js', 'TDD'], picture: 'http://imgur.com/ohFukM2.jpg'},
  {name: 'Paul Mills', location: ['San Francisco'], role: ['Back-end'], techStack: ['React', 'Node.js'], picture: 'http://imgur.com/9eJRSav.jpg'},
  {name: 'Alison Zhang', location: ['Palo Alto'], role: ['Front-end'], techStack: ['React', 'Node.js'], picture: 'http://imgur.com/uz1C3om.jpg'},
  {name: 'Jong Kim', location: ['San Jose'], role: ['Front-end'], techStack: ['React', 'Backbone', 'Node.js'], picture: 'http://imgur.com/yTpcGqk.jpg'},
]
export default function(state = [], action) {
  switch (action.type) {
    case GET_MENTORS:
    return state.concat(action.payload.data);
  }
  return state;
}

export default function(state = MENTORS, action = {}) {
  const { type } = action;
  switch (type) {
    case 'FILTER_MENTORS':
      const { techStacks, roles, locations } = action.payload;
      if (techStacks.includes('Nothing selected') && roles.includes('Nothing selected') && locations.includes('Nothing selected')) {
        return MENTORS;
      } else if (!techStacks.includes('Nothing selected')) {
        return MENTORS.filter((mentor) => {
          const matchingTechStacks = intersection(techStacks, mentor.techStack);
          return matchingTechStacks.length > 0 && matchingTechStacks.length === techStacks.length;
        });
      } else if (!roles.includes('Nothing selected')) {
        return MENTORS.filter((mentor) => {
          const matchingRoles = intersection(roles, mentor.role);
          return matchingRoles.length > 0 && matchingRoles.length === roles.length;
        });
      } else if (!locations.includes('Nothing selected')) {
        return MENTORS.filter((mentor) => {
          const matchingLocations = intersection(locations, mentor.location);
          return matchingLocations.length > 0 && matchingLocations.length === locations.length;
        })
      }
    default:
      return state;
  };
}
