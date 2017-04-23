import {
  GET_DIRECT_MESSAGE

} from '../actions/directMessageActions.jsx';

export default function(state = : [], action) {
  switch (action.type) {
    case GET_ALL_CONVERSATIONS:
      return { ...state, directMessage: action.payload };
    case SELECT_CONVERSATION:
      return { ...state, directMessage:
        action.payload }
  }
    return state;
}
