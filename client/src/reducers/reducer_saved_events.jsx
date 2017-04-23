import { GET_SAVED_EVENTS } from '../actions/savedEventsActions.jsx';

export default function(state = {savedEventsData:[]}, action) {
  switch (action.type) {
    case GET_SAVED_EVENTS:
    return Object.assign({}, state, {savedEventsData: action.payload.data})
  }

  return state;
}
