import axios from 'axios';
import { browserHistory } from 'react-router';

export const GET_DIRECT_MESSAGES = 'GET_DIRECT_MESSAGES';
export const MESSAGE_SENT = 'MESSAGE_SENT';
export const FIELD_INPUT = 'FIELD_INPUT';
export const GET_NEW_CONVERSATION = 'GET_NEW_CONVERSATION';

export function getConversation (conversation_id) {
  console.log('getconvo is being called', conversation_id);

  const request = axios.get('/conversation/' + conversation_id, { headers: {
    authorization: localStorage.getItem('token') }
  })

  return {
    type: GET_DIRECT_MESSAGES,
    payload: request
  }


}

export function startConversation (props) {

  console.log('inside Start Conversation', props);

  const request = axios.post('/startConversation/', props, { headers: {
    authorization: localStorage.getItem('token') }
  })

  return {
    type: GET_DIRECT_MESSAGES,
    payload: request
  }
}

export function sendMessage(props) {
  console.log('props in sendMessage being called', props)
  const request = axios.post('/directMessage/', props, { headers: {
    authorization: localStorage.getItem('token') }
  })

  return {
    type: GET_DIRECT_MESSAGES,
    payload: request
  }
}

export function fieldInput (field) {

  return {
    type: 'FIELD_INPUT',
    field
  }
}