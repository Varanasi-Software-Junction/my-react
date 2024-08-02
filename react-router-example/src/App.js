// import React from 'react';
// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Program from './Program';
import Inside from './components/Inside';
import Login from './Login';
import Logout from './Logout';
import './App.css';
import useToken from './useToken';




function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/components/inside">Inside</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/program">Program</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/about" element={<About />} />
          <Route path="/components/inside" element={<Inside />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
