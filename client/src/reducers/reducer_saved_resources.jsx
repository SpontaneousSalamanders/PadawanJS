import { GET_SAVED_RESOURCES } from '../actions/savedResourcesActions.jsx';

export default function(state = {savedResourcesData:[]}, action) {
  switch (action.type) {
    case GET_SAVED_RESOURCES:
    return Object.assign({}, state, {savedResourcesData: action.payload.data})
  }

  return state;
}