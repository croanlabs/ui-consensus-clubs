import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/rootReducer';
import { HashRouter } from 'react-router-dom';

const store = createStore(rootReducer);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
