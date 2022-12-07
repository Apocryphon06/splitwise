import { combineReducers } from "redux";
import testReducer from "./testReducer";
import friendsReducer from "./friendsReducer";
import groupReducer from "./groupReducer";

const allReducers = combineReducers({
  test: testReducer,
  friend: friendsReducer,
  group: groupReducer,
});

export default allReducers;
