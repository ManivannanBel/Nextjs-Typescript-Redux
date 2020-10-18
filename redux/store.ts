import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const initialState = {};
const middleware = [thunkMiddleware];

let store : Store;

store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store;