import authReducer from './authReducer'
import todoReducer from './todoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
});

export default rootReducer;