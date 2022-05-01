import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import './styles/index.scss';
import Wrapper from './Wrapper';
import { Provider } from 'react-redux';
import rootStore from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={rootStore}>
    <Router>
      <Wrapper>
        <App />
      </Wrapper>
    </Router>
  </Provider>,
  // </React.StrictMode>,
);
