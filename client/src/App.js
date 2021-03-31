import { Router } from '@reach/router';
import './App.css';
import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className="App">
      <Router>
        <Login path = '/' />
        <Dashboard path ='/user/:username' />
        {/* <MadLib path = '/post/:username/' /> */}
      </Router>
    </div>
  );
}

export default App;
