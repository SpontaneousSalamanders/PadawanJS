import {
  GET_DIRECT_MESSAGES

} from '../actions/directMessageActions.jsx';

export default function(state = : [], action) {
  switch (action.type) {
    case GET_DIRECT_MESSAGES:
      return { ...state, directMessage: action.payload };
    case SELECT_CONVERSATION:
      return { ...state, directMessage:
        action.payload }
  }
    return state;
}
