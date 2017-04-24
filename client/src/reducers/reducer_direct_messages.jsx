import {
  GET_DIRECT_MESSAGES

} from '../actions/directMessageActions.jsx';

export default function(state = {directMessages: []}, action) {
  switch (action.type) {
    case GET_DIRECT_MESSAGES:
      return Object.assign({}, state, { directMessages: action.payload.data })
  }
    return state;
}
