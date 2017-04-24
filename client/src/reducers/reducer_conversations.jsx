import {
  GET_ALL_CONVERSATIONS,
  SELECT_CONVERSATION,

} from '../actions/conversationActions.jsx';

export default function(state = {conversations: []}, action) {
  switch (action.type) {
    case GET_ALL_CONVERSATIONS:
      return Object.assign({}, state, { conversations: action.payload.data })
    case SELECT_CONVERSATION:
      return { ...state, conversation:
        action.payload.data }
  }
    return state;
}
