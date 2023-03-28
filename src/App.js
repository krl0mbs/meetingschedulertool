import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navbar from "./Navbar";

// Pages Imported for use when routing to new webpages
import Book from './pages/Book';
import Manage from './pages/Manage';
import Login from './pages/Login';
import About from './pages/About';
import Confirm from './pages/Confirm';

import "./pages/pageCSS/Login.css";
import "./Navbar.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Routes> 
          <Route path="/" element={<Login/>}/>
          <Route path="/bookroom" element={<Book/>}/>
          <Route path="/managebookings" element={<Manage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/confirm" element={<Confirm/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;