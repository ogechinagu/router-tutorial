import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './main.css';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

let rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoices" element={<Invoices />} />
        <Route path="expenses" element={<Expenses />} />
      </Route>
    </Routes>
  </Router>,
  rootElement
);
