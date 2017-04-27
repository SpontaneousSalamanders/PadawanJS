import * as actions from '../client/src/actions/index.jsx';
import * as mentorActions from '../client/src/actions/mentorActions.jsx';

describe('mentor actions', () => {
  it('should create an action to select a mentor', () => {
    const text = 'Beth';
    const expectedMentorAction = {
      type: 'MENTOR_SELECTED',
      payload: text
    };
    expect(actions.selectMentor('Beth')).toEqual(expectedMentorAction);
  });
  it('should create an action to select  mentors based on filter', () => {
    const techStacks = ['Angular'];
    const expectedMentorsAction = {
      type: 'FILTER_MENTORS',
      payload: {
        techStacks: ['Angular'],
        roles: undefined,
        locations: undefined }
    };
    expect(actions.filterMentors({ techStacks })).toEqual(expectedMentorsAction);
  });
  // incomplete
  it('should create an action to get all mentors', () => {
    const mockFn = jest.fn(mentorActions.getMentors);
    const a = new mockFn();
    console.log('getMentors', a);
  });
});
