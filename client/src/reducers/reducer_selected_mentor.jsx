export default function (state = null, action) {
  switch (action.type) {
  case 'MENTOR_SELECTED':
    return action.payload;
  }
  return state
}