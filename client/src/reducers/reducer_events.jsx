import { GET_EVENTS } from '../actions/eventActions.jsx';

export default function(state = [], action) {
  switch (action.type) {
    case GET_EVENTS:
    return state.concat(action.payload.data);
  }

  return state;
}
