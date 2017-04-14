// The initial application state for form
const CHANGE_FORM = 'CHANGE_FORM';
const SET_AUTH = 'SET_AUTH';
const SENDING_REQUEST = 'SENDING_REQUEST';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

const initialState = {
  formState: {
    username: '',
    password: ''
  },
  currentlySending: false,
  // loggedIn: auth.loggedIn(),
  errorMessage: ''
};

const assign = Object.assign;

// Takes care of changing the application state
export function FormReducer(state = initialState, action) {
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