import { combineReducers } from 'redux';
import MentorsReducer from './reducer_mentors.jsx';
import SelectedMentor from './reducer_selected_mentor.jsx';
import Resources from './reducer_resources.jsx';
import { reducer as formReducer } from 'redux-form';
import MentorList from './reducer_mentor_list.jsx';

// The initial application state for form
const initialState = {
  formState: {
    username: '',
    password: ''
  },
  currentlySending: false,
  // loggedIn: auth.loggedIn(),
  errorMessage: ''
};

// Takes care of changing the application state
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return assign({}, state, {
        formState: action.newState
      });
      break;
    // case SET_AUTH:
    //   return assign({}, state, {
    //     loggedIn: action.newState
    //   });
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



const rootReducer = combineReducers({
  mentors: MentorsReducer,
<<<<<<< HEAD
  selectedMentor: SelectedMentor,
  resources: Resources,
  form: formReducer
=======
<<<<<<< HEAD
  selectedMentor: SelectedMentor
=======
  mentorList: MentorList
>>>>>>> (feat) Finished AJAX request to get mentors
>>>>>>> (feat) Finished AJAX request to get mentors
});

export default rootReducer;