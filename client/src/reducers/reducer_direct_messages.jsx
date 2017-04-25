import {
  GET_DIRECT_MESSAGES,
  MESSAGE_SENT,
  FIELD_INPUT
} from '../actions/directMessageActions.jsx';

const initialState = {
  directMessages: [],
  fetchingInbox: false,
  messageError: null,
  messageText: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DIRECT_MESSAGES:
      return Object.assign({}, state, { directMessages: action.payload.data });
    case MESSAGE_SENT:
      return Object.assign({}, state, {
        messageText: ''
      })
    case FIELD_INPUT:
    console.log('action.field', action.field)
      return Object.assign({}, state, {
        messageText: action.field
      })
  }
    return state;
}
