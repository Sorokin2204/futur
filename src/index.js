import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import './styles/index.scss';
import Wrapper from './Wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Wrapper>
        <App />
      </Wrapper>
    </Router>
  </React.StrictMode>,
);
