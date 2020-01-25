import { createStore, combineReducers } from 'redux';
import { testReducer } from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      testReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
