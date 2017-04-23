import {
	GET_QUESTIONS,
	GET_MESSAGES_FOR_QUESTION,
} from '../actions/messageActions.jsx';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
    	return Object.assign({}, state, {
    		questions: action.payload.data,
    	});
    case GET_MESSAGES_FOR_QUESTION:
    	if (action.payload.data.length > 1) {
		  	return Object.assign({}, state, {
		  		questions: state.questions.map((question) => {
		  			if (question.id === action.payload.data[0].root_message_id) {
		  				return Object.assign({}, question, {
		  					messages: action.payload.data,
		  				});
		  			}
		  			return question;
		  		}),
		  	});
    	}
  }
	return state;
}
