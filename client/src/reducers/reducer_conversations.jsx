import {
  GET_ALL_CONVERSATIONS,
  SELECT_CONVERSATION,

} from '../actions/conversationActions.jsx';

export default function(state = convoData: [], action) {
  switch (action.type) {
    case GET_ALL_CONVERSATIONS:
      return { ...state, conversations: action.payload };
    case SELECT_CONVERSATION:
      return { ...state, conversation:
        action.payload }
  }
    return state;
}
