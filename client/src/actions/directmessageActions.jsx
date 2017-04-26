import axios from 'axios';

export const GET_DIRECT_MESSAGES = 'GET_DIRECT_MESSAGES';
export const MESSAGE_SENT = 'MESSAGE_SENT'
export const FIELD_INPUT = 'FIELD_INPUT'

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

export function startConversation (user_profile_id) {
  const request = axios.get('/startConversation/', user_profile_id, { headers: {
    authorization: localStorage.getItem('token') }
  })

  return {
    type: MESSAGE_SENT,
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