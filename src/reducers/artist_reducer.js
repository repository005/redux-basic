export default function artist_reducer(state={}, action) {
  switch (action.type) {
    case 'GET_ARTISTS_ALL':
      return {...state, artistList: action.payload}
      break;
  
    default:
      return state;
      break;
  }
}
