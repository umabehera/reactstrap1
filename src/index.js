import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router, Switch, Routes,
  Route, Redirect
} from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes';
import Error from './Error';
import Demo from './Demopage';
import { NavLink } from 'react-router-dom';
import Navbar1 from './Navbar1';
import Sidebar from './SIdebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    


    <Router>

      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Dashboard />} path='/dashboard' />
          <Route element={<Demo />} path='/demo' />
        </Route>
        <Route path='/' element={<App />} />
        <Route path='/*' element={<Error />} />

      </Routes>


    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// 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
// asd


