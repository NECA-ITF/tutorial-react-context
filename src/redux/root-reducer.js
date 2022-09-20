import { combineReducers } from "redux";
import countReducer from "./counter/counterReducer";


const rootReducer = combineReducers({
  count: countReducer
});

export default rootReducer;