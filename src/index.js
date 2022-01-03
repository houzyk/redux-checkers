// react imports
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
import whiteTilesReducer from "./reducers/white_tiles_reducer";
import blackTilesReducer from "./reducers/black_tiles_reducer";
import selectedSquareReducer from "./reducers/selected_square_reducer";
import selectedPawnReducer from "./reducers/selected_pawn_reducer";

// redux store
const reducers = combineReducers({
  selectedPawn: selectedPawnReducer,
  selectedSquare: selectedSquareReducer,
  blackTiles: blackTilesReducer,
  whiteTiles: whiteTilesReducer
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
