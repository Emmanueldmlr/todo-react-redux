import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './Store/reducers/index'
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
