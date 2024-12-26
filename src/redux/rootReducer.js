import {combineReducers} from 'redux'
import  testSlice  from './slices/testSlice';
const rootReducer = combineReducers({
    test: testSlice
});

export default rootReducer