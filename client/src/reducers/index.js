import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth-reducer';
import businessList from './business-list-reducer';

export default combineReducers({
    auth,
    businessList,
    routing: routerReducer,
});
