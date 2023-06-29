import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import Reducers from './reducers';
import { DataProvider } from './pages/Auth/DataProvider';

// const store = createStore(Reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  // <Provider store={store}>
  <DataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataProvider>
  // </Provider>
  ,
  document.getElementById('root')
);

