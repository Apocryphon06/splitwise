import { combineReducers } from "redux";
import testReducer from "./testReducer";
import friendsReducer from "./friendsReducer";
import groupReducer from "./groupReducer";
import expenseReducer from "./expenseReducer";

const allReducers = combineReducers({
  test: testReducer,
  friend: friendsReducer,
  group: groupReducer,
  expense: expenseReducer,
});

export default allReducers;
