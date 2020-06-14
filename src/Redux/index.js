import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import apiMiddleware from 'Redux/Middleware/api';
import {appReducer} from './Reducer';


export const storeCreator = () => {
  const middleware = composeWithDevTools(applyMiddleware(apiMiddleware));
  const store = createStore(
    appReducer,
    middleware
  );
  return store;
};
