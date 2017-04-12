import { GET_MENTORS } from '../actions/mentorActions.jsx';

export default function(state = [], action) {
  switch (action.type) {
    case GET_MENTORS:
    // return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ];
  }

  return state;
}