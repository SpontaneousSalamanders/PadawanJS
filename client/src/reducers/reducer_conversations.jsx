import { GET_ALL_CONVERSATIONS } from '../actions/conversationActions.jsx';

export default function(state = convoData: [], action) {
  switch (action.type) {
    case GET_ALL_CONVERSATIONS:
    return Object.assign({}, state, {conversations: action.payload.data})
  }

    return state;
}
