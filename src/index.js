import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  GlobalStyleElement,
  ContainerElement,
} from './styles';
import configureStore from './store/configureStore';
import { App } from './components'
import { addAction } from './actions'

const store = configureStore();

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(addAction({ payload: 'dispatch test' }));

const jsx = (
  <Provider store={store}>
    <ContainerElement>
      <GlobalStyleElement />
      <App />
    </ContainerElement>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
