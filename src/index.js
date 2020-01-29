import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  GlobalStyleElement,
  ContainerElement,
} from './styles';
import configureStore from './store/configureStore';
import { App, TransactionList, AddTransaction } from './components';
import { addTransaction, removeTransaction, setRate } from './actions';

const store = configureStore();

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(addTransaction({ name: 'dispatch test', amount: 10000 }));
// store.dispatch(removeTransaction({ name: 'default' }));

const jsx = (
  <Provider store={store}>
    <ContainerElement>
      <GlobalStyleElement />
      <App />
      <AddTransaction />
      <TransactionList />
    </ContainerElement>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
