import { GET_MENTORS } from '../actions/mentorActions.jsx';
import { intersection } from 'lodash';

const INITIAL_STATE = {
  index: [],
  filtered: [],
}

export default function(state = INITIAL_STATE, action = {}) {
  const { type } = action;
  switch (type) {
    case 'GET_MENTORS':
      return Object.assign({}, state, {
        index: action.payload.data,
        filtered: action.payload.data,
      });
    case 'FILTER_MENTORS':
      if (action.payload.techStacks.includes('Nothing selected') && action.payload.roles.includes('Nothing selected') && action.payload.locations.includes('Nothing selected')) {
        return Object.assign({}, state, {
          filtered: state.index,
        });
      } else if (!action.payload.techStacks.includes('Nothing selected')) {
        return Object.assign({}, state, {
          filtered: state.index.filter((mentor) => {
            const matchingTechStacks = intersection(action.payload.techStacks, mentor.techStack);
            return matchingTechStacks.length > 0 && matchingTechStacks.length === action.payload.techStacks.length;
          }),
        });
      } else if (!action.payload.roles.includes('Nothing selected')) {
        return Object.assign({}, state, {
          filtered: state.index.filter((mentor) => {
            const role = [mentor.role];
            const matchingRoles = intersection(action.payload.roles, role);
            console.log('this is matchingroles', matchingRoles);
            return matchingRoles.length > 0 && matchingRoles.length === action.payload.roles.length;
          }),
        });
      } else if (!action.payload.locations.includes('Nothing selected')) {
        return Object.assign({}, state, {
          filtered: state.index.filter((mentor) => {
            const location = [mentor.location];
            const matchingLocations = intersection(action.payload.locations, location);
            console.log('this is location', matchingLocations);
            return matchingLocations.length > 0 && matchingLocations.length === action.payload.locations.length;
          }),
        }); 
      }
    default:
      return state;
  };
}