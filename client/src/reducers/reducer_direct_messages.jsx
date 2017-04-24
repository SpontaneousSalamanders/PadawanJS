import {
  GET_DIRECT_MESSAGES

} from '../actions/directMessageActions.jsx';

export default function(state = {directMessages: []}, action) {
  switch (action.type) {
    case GET_DIRECT_MESSAGES:
      return { ...state, directMessages: action.payload };
  }
    return state;
}
