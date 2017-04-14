import { intersection } from 'lodash';

const MENTORS = [
  {name: 'Beth Johnson', location: ['San Francisco'], role: ['Full Stack'], techStack: ['React', 'Express', 'Node.js', 'JavaScript'], picture: 'http://imgur.com/xEUUtut.jpg'},
  {name: 'Benji Marinacci', location: ['San Francisco'], role: ['Full Stack'], techStack: ['React', 'Express', 'Node.js', 'JavaScript', 'Mocha/Chai', 'Angular', 'Backbone', 'Redux'], picture: 'http://imgur.com/iwn6mV5.jpg'},
  {name: 'Fred Zirdung', location: ['San Francisco'], role: ['Full Stack'], techStack: ['React', 'Express', 'Node.js', 'JavaScript', 'Mocha/Chai'], picture: 'http://imgur.com/9awfsn2.jpg'},
  {name: 'Eric Brown', location: ['Palo Alto'], role: ['Full Stack'], techStack: ['React', 'Node.js', 'JavaScript'], picture: 'http://imgur.com/adDa5JU.jpg'},
  {name: 'Tyler Arbus', location: ['San Jose'], role: ['Back-end'], techStack: ['Angular', 'Node.js', 'JavaScript', 'TDD'], picture: 'http://imgur.com/ohFukM2.jpg'},
  {name: 'Paul Mills', location: ['San Francisco'], role: ['Back-end'], techStack: ['React', 'Node.js', 'JavaScript'], picture: 'http://imgur.com/9eJRSav.jpg'},
  {name: 'Alison Zhang', location: ['Palo Alto'], role: ['Front-end'], techStack: ['React', 'Node.js', 'JavaScript'], picture: 'http://imgur.com/uz1C3om.jpg'},
  {name: 'Jong Kim', location: ['San Jose'], role: ['Front-end'], techStack: ['React', 'Backbone', 'Node.js', 'JavaScript'], picture: 'http://imgur.com/yTpcGqk.jpg'},
]

export default function(state = MENTORS, action = {}) {
  const { type } = action;
  switch (type) {
    case 'FILTER_MENTORS':
      const { techStacks, roles, locations } = action.payload;
      if (techStacks.includes('Any') && roles.includes('Any Role') && locations.includes('Anywhere')) {
        return MENTORS;
      }
      return MENTORS.filter((mentor) => {
        const matchingTechStacks = intersection(techStacks, mentor.techStack);
        const matchingRoles = intersection(roles, mentor.role);
        const matchingLocations = intersection(locations, mentor.location);
        return matchingTechStacks.length > 0 || matchingRoles.length > 0 || matchingLocations.length > 0;
      })
    default:
      return state;
  };
}