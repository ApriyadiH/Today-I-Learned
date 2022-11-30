import React from 'react';
import {BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import UsersList from './components/UsersList';
import CreateUser from './components/CreateeUser';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-brand navbar-dark bg-dark">
        <a href="/" className='navbar-brand'>Learning</a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <link to="/users" className='nav-link'>Users</link>
          </li>
          <li className='nav-item'>
            <link to="/create" className="nav-link">Create New</link>
          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <Routes>
          <Route exact path="/" element ={<UsersList />} />
          <Route exact path="/users" element ={<UsersList />} />
          <Route exact path="/create" element ={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  )
}
