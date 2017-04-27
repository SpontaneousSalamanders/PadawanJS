import { browserHistory } from 'react-router';

export function selectMentor(mentor) {
  console.log('Action:', mentor);
  return {
    type: 'MENTOR_SELECTED',
    payload: mentor
  };
}

export function filterMentors({ techStacks, roles, locations }) {
	return {
		type: 'FILTER_MENTORS',
		payload: {
			techStacks,
			roles,
			locations,
		},
	}
}