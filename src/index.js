import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import authReducer from './store/reducers/authReducer'
import subredditsReducer from './store/reducers/subredditsReducer'

import { BrowserRouter } from 'react-router-dom';
import './index.css';

const rootReducer = combineReducers({
  auth: authReducer,
  subreddits: subredditsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

