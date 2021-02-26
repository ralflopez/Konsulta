import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios, { AxiosResponse, AxiosError } from 'axios';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
    user: userReducer
});


const store = createStore(reducer, applyMiddleware(thunk));

export default store;