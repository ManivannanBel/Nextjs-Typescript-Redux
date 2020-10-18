import { combineReducers } from 'redux';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    ui : uiReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;