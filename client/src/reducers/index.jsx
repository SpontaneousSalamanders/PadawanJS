import { combineReducers } from 'redux';
import MentorsReducer from './reducer_mentors.jsx';


const rootReducer = combineReducers({
  mentors: MentorsReducer,
});

export default rootReducer;