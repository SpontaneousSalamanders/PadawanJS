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
      var filtered_by_techStacks = state.index.filter((mentor) => {
        const matchingTechStacks = intersection(action.payload.techStacks, mentor.techStack);
        return matchingTechStacks.length > 0 && matchingTechStacks.length === action.payload.techStacks.length;
      });
      var filtered_by_roles = state.index.filter((mentor) => {
        const role = [mentor.role];
        const matchingRoles = intersection(action.payload.roles, role);
        return matchingRoles.length > 0 && matchingRoles.length === action.payload.roles.length;
      });
      var filtered_by_locations = state.index.filter((mentor) => {
        const location = [mentor.location];
        const matchingLocations = intersection(action.payload.locations, location);
        return matchingLocations.length > 0 && matchingLocations.length === action.payload.locations.length; 
      });
      var filtered_by_techStacks_roles = intersection(filtered_by_techStacks, filtered_by_roles);
      var filtered_by_techStacks_locations = intersection(filtered_by_techStacks, filtered_by_locations);
      var filtered_by_roles_locations = intersection(filtered_by_roles, filtered_by_locations);
      var filtered_by_techStacks_roles_locations = intersection(filtered_by_techStacks_roles, filtered_by_locations);
      if (action.payload.techStacks.includes('Nothing selected') && action.payload.roles.includes('Nothing selected') && action.payload.locations.includes('Nothing selected')) {
        return Object.assign({}, state, {
          filtered: state.index,
        });
      } else if (!action.payload.techStacks.includes('Nothing selected') && !action.payload.roles.includes('Nothing selected') && !action.payload.locations.includes('Nothing selected')) {
        return Object.assign({}, state, {
          filtered: filtered_by_techStacks_roles_locations
        });
      } else if (!action.payload.techStacks.includes('Nothing selected')) {
        if (!action.payload.roles.includes('Nothing selected')) {
          return Object.assign({}, state, {
            filtered: filtered_by_techStacks_roles
          })
        } else if (!action.payload.locations.includes('Nothing selected')) {
          return Object.assign({}, state, {
            filtered: filtered_by_techStacks_locations
          })
        } else {
          return Object.assign({}, state, {
            filtered: filtered_by_techStacks
          });
        } 
      } else if (!action.payload.roles.includes('Nothing selected')) {
        if (!action.payload.techStacks.includes('Nothing selected')) {
          return Object.assign({}, state, {
            filtered: filtered_by_techStacks_roles
          })
        } else if (!action.payload.locations.includes('Nothing selected')) {
          return Object.assign({}, state, {
            filtered: filtered_by_roles_locations
          })
        } else {
          return Object.assign({}, state, {
            filtered: filtered_by_roles
          });
        }
      } else if (!action.payload.locations.includes('Nothing selected')) {
        if (!action.payload.techStacks.includes('Nothing selected')) {
          return Object.assign({}, state, {
            filtered: filtered_by_techStacks_locations
          })
        } else if (!action.payload.roles.includes('Nothing selected')) {
          var result_L_R = intersection(filtered_by_locations, filtered_by_roles);
          return Object.assign({}, state, {
            filtered: filtered_by_roles_locations
          })
        } else {
        return Object.assign({}, state, {
          filtered: filtered_by_locations
        }); 
      }
    }
    default:
      return state;
  };
}
