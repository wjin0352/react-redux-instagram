// reducer needs action and copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!");
      const idx = action.index;
      return [
        ...state.slice(0,idx), // before the one we are updating
        {...state[idx], likes: state[idx].likes + 1},
        ...state.slice(idx + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

export default posts;
