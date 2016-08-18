import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

const middleware = compose(applyMiddleware(promise(), logger()), window.devToolsExtension ? window.devToolsExtension() : f => f);

export default createStore(reducer, middleware);
