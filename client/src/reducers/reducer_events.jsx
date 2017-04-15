import { GET_EVENTS } from '../actions/eventActions.jsx';

export default function(state = {eventData: []}, action) {
  switch (action.type) {
    case GET_EVENTS:
    return Object.assign({}, state, {eventData: action.payload.data});
  }

  return state;
}
