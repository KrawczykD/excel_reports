import { combineReducers } from "redux";
import addExcelFile from "./addExcelFile";
import displayDataReducer from "./displayDataReducer";
import changeWarningStateReducer from "./changeWarningStateReducer";
import addWeekNumberReducer from "./addWeekNumberReducer";

const rootReducer = combineReducers({
  addExcelFile,
  displayDataReducer,
  changeWarningStateReducer,
  addWeekNumberReducer,
});

export default rootReducer;
