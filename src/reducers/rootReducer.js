import {combineReducers} from 'redux';
import addExcelFile from './addExcelFile';
import displayDataReducer from './displayDataReducer';

const rootReducer =  combineReducers({
    addExcelFile,
    displayDataReducer,
})

export default rootReducer;