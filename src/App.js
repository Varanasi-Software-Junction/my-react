import React, { useState, useEffect } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Define the initial state of the application.
const initialState = {
  count: 0,
};

// Create a reducer that updates the application state in response to user actions.
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create the Redux store.
const store = createStore(reducer, initialState);

// Create a React component that uses the Redux store.
const App = () => {
  const [count,setCount] = useState(store.getState().count);

  // Handle theINCREMENT and DECREMENT actions.
  const increment = () => {
    store.dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    store.dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};

// Render the React application.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);