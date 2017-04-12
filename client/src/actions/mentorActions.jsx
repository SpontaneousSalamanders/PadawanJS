import axios from 'axios';

export const GET_MENTORS = 'GET_MENTORS';

export function getMentors() {
  const request = axios.get('/getMentors');

  return {
    type: GET_MENTORS,
    payload: request
  }
}