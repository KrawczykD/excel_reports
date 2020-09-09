import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import Dialog from './components/Dialog';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const warning = false;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
      {warning ?  <Dialog></Dialog> : null}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


