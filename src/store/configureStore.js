import { createStore, combineReducers } from 'redux';
import {
  transactionReducer,
  configurationReducer,
} from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      transaction: transactionReducer,
      configuration: configurationReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
