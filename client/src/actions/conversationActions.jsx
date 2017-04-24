import axios from 'axios';

export const GET_ALL_CONVERSATIONS = 'GET_ALL_CONVERSATIONS';

export function getAllConversations() {
  console.log('getall is being called')
  const request = axios.get('/allConversations', { headers: { authorization: localStorage.getItem('token') }
    })


  return {
    type: GET_ALL_CONVERSATIONS,
    payload: request
  }
}

export function selectConversation() {

  const request = axios.get('/convo_selection', { headers: {
    authorization: localStorage.getItem('token') }
  })

  return {
    type: SELECT_CONVERSATION,
    payload: request
  }

}