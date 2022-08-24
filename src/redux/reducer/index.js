import { combineReducers } from "redux";
import peopleReducer from './peopleReducer';

const reducerIndex = combineReducers({
  people: peopleReducer,
})

export default reducerIndex;