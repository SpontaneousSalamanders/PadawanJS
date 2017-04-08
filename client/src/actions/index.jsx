export function selectMentor(mentor) {
  return {
    type: 'MENTOR_SELECTED',
    payload: mentor
  };
}