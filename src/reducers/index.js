import { combineReducers } from "redux";
import selectSongReducer from "./selectSongReducer";
import songListReducer from "./songListReducer";

const allReducers = combineReducers({
  selectSongReducer,
  songListReducer,
});

export default allReducers;
