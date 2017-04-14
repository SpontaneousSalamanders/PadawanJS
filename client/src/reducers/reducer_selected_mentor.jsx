export default function (state = null, action) {
  console.log('Reducer:', action.payload)
  switch (action.type) {
  case 'MENTOR_SELECTED':
    return action.payload;
  }
  return state
}