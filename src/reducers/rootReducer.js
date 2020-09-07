import {combineReducers} from 'redux';
import addExcelFile from './addExcelFile';
import displayDataReducer from './displayDataReducer';
import changeWarningStateReducer from './changeWarningStateReducer';

const rootReducer =  combineReducers({
    addExcelFile,
    displayDataReducer,
    changeWarningStateReducer,
    
})

export default rootReducer;