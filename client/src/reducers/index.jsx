import { combineReducers } from 'redux';
import MentorsReducer from './reducer_mentors.jsx';
import SelectedMentor from './reducer_selected_mentor.jsx';
import Resources from './reducer_resources.jsx';
import { reducer as formReducer } from 'redux-form';
import EventsReducer from './reducer_events.jsx';
import AuthReducer from './reducer_auth.jsx';
import MessageReducer from './reducer_messages.jsx';
import SavedResourcesReducer from './reducer_saved_resources.jsx';
import SavedEventsReducer from './reducer_saved_events.jsx';
import ConversationsReducer from './reducer_conversations.jsx';
import DirectMessagesReducer from './reducer_direct_messages.jsx'




// The initial application state for form
const initialState = {
  formState: {
    username: '',
    password: ''
  },
  currentlySending: false,
  // loggedIn: auth.loggedIn(),
  errorMessage: '',
};

// Takes care of changing the application state
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return assign({}, state, {
        formState: action.newState
      });
      break;
    case SENDING_REQUEST:
      return assign({}, state, {
        currentlySending: action.sending
      });
      break;
    case SET_ERROR_MESSAGE:
      return assign({}, state, {
        errorMessage: action.message
      });
    default:
      return state;
  }
}



const RootReducer = combineReducers({
  mentors: MentorsReducer,
  selectedMentor: SelectedMentor,
  resources: Resources,
  form: formReducer,
  events: EventsReducer,
  auth: AuthReducer,
  messages: MessageReducer,
  savedResources: SavedResourcesReducer,
  savedEvents: SavedEventsReducer,
  conversations: ConversationsReducer,
  directMessages: DirectMessagesReducer,

});

export default RootReducer;