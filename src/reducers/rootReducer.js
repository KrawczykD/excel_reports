import { combineReducers } from "redux";
import addExcelFile from "./addExcelFile";
import displayDataReducer from "./displayDataReducer";
import changeWarningStateReducer from "./changeWarningStateReducer";
import addWeekNumberReducer from "./addWeekNumberReducer";
import loadedCustomersReducer from "./loadedCustomersReducer";

const rootReducer = combineReducers({
  addExcelFile,
  displayDataReducer,
  changeWarningStateReducer,
  addWeekNumberReducer,
  loadedCustomersReducer,
});

export default rootReducer;
