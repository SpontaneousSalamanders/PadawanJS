import { GET_MESSAGES } from '../actions/messageActions.jsx';

export default function(state = {messageData: []}, action) {
  switch (action.type) {
    case GET_MESSAGES:
    return Object.assign({}, state, {messageData: action.payload.data});
  }
	return state;
}
