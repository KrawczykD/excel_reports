import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import { GlobalStyle } from './styles/inedx';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);