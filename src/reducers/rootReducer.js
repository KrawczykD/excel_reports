import { combineReducers } from "redux";
import addExcelFile from "./addExcelFile";
import displayDataReducer from "./displayDataReducer";
import changeWarningStateReducer from "./changeWarningStateReducer";
import addWeekNumberReducer from "./addWeekNumberReducer";
import loadedCustomersReducer from "./loadedCustomersReducer";
import spinerReducer from "./spinerReducer";

const rootReducer = combineReducers({
  addExcelFile,
  displayDataReducer,
  changeWarningStateReducer,
  addWeekNumberReducer,
  loadedCustomersReducer,
  spinerReducer,
});

export default rootReducer;
