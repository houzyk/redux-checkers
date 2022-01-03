import React from 'react';
import ReactDOM from 'react-dom';

// redux imports
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// styles
import './index.css';

// components
import App from './components/App';

// redux reducers
const reducers = combineReducers({
  selectedPawn: null,
  selectedSquare: null
});

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
    , root
  );
}
