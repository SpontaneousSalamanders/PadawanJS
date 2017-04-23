import axios from 'axios';

export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_MESSAGES_FOR_QUESTION = 'GET_MESSAGES_FOR_QUESTION';

export function getMessages(user_id) {
  const response = axios.get('/getMessages/' + user_id);

  return {
    type: GET_MESSAGES,
    payload: response
  };
}


export function getQuestions(user_id) {
	const response = axios.get('/getQuestions/' + user_id);

	return {
		type: GET_QUESTIONS,
		payload: response,
	};
}

export function getMessagesForQuestion(message_id) {
	const response = axios.get('/getMessagesForQuestion/' + message_id);

	return {
		type: GET_MESSAGES_FOR_QUESTION,
		payload: response,
	}
}