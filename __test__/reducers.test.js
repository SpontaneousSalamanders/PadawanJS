import EventsReducer from '../client/src/reducers/reducer_events.jsx';
import MentorsReducer from '../client/src/reducers/reducer_mentors.jsx';
import MessageReducer from '../client/src/reducers/reducer_messages.jsx';
import ResourcesReducer from '../client/src/reducers/reducer_resources.jsx';
import SavedEventsReducer from '../client/src/reducers/reducer_saved_events.jsx';
import SavedResourcesReducer from '../client/src/reducers/reducer_saved_resources.jsx';
import SelectedMentorReducer from '../client/src/reducers/reducer_selected_mentor.jsx';


test('Event Reducer', () => {
  it('Events has a default state', () => {
    expect(EventsReducer(undefined, { type: 'unexpected' })).toEqual({ eventData: [] });
  });
});

test('Mentors Reducers', () => {
  it('Mentors has a default state', () => {
    expect(MentorsReducer(undefined, { type: 'unexpected' })).toEqual({ index: [], filtered: [] });
  });
});

test('Reducers', () => {
  it('Message has a default state', () => {
    expect(MessageReducer(undefined, { type: 'unexpected' })).toEqual({});
  });
});

test('Resources Reducers', () => {
  it('Resources has a default state', () => {
    expect(ResourcesReducer(undefined, { type: 'unexpected' })).toEqual({ resourceData: [] });
  });
});

test('Saved Events Reducers', () => {
  it('Saved Events has a default state', () => {
    expect(SavedEventsReducer(undefined, { type: 'unexpected' })).toEqual({ savedEventsData: [] });
  });
});

test('Saved Resources Reducers', () => {
  it('Saved Resources has a default state', () => {
    expect(SavedResourcesReducer(undefined, { type: 'unexpected' })).toEqual({ savedResourcesData: [] });
  });
});
test('Selected Mentor Reducers', () => {
  it('Selected Mentor has a default state', () => {
    expect(SelectedMentorReducer(undefined, { type: 'unexpected' })).toEqual(null);
  });
});
  