import axios from 'axios';

export const FETCH_MENTORS = 'FETCH_MENTORS';

export function fetchMentors() {
  const request = axios.get('/getMentors');

  return {
    type: FETCH_MENTORS,
    payload:
  }
}