// @flow

import { combineReducers } from "redux";
import { SET_SEARCH_TERM } from "./actions";

const searchTerm = (state = "", action: Action) => {
  // Object.assign({}, state, { searchTerm: action.payload });
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

// this function returns the new state of redux
// const rootReducer = (state = DEFAULT_STATE, action) => {
// switch (action.type) {
// case SET_SEARCH_TERM:
// return setSearchTerm(state, action);
// default:
// return state;
// }
// };

const rootReducer = combineReducers({ searchTerm });

export default rootReducer;
