import { SET_SEARCH_TERM } from "./actions";

const DEFAULT_STATE = {
  searchTerm: ""
};

// you must return a new state object here
const setSearchTerm = (state, action) =>
  Object.assign({}, state, { searchTerm: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
  // here is where all the dispatch calls initially come
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
