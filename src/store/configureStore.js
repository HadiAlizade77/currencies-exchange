import { createStore, combineReducers } from 'redux';
import { transactionReducer } from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      transaction: transactionReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
