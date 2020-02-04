import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  GlobalStyleElement,
  ContainerElement,
  HeaderElement,
} from './styles';
import configureStore from './store/configureStore';
import { Rate, TransactionList, AddTransaction } from './components';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <ContainerElement>
      <GlobalStyleElement />
      <HeaderElement>Currency Exchange App</HeaderElement>
      <Rate />
      <AddTransaction />
      <TransactionList />
    </ContainerElement>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
