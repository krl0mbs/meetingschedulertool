import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navbar from "./Navbar";

// Pages Imported for use when routing to new webpages
import Book from './pages/Book';
import Manage from './pages/Manage';
import About from './pages/About';
import Confirm from './pages/Confirm';
import Logout from './pages/Logout';
import "./pages/pageCSS/Login.css";

import "./Navbar.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Container">
        <Routes> 
          <Route path="/" element={<Book/>}/>
          {/* <Route path="/managebookings" element={<Manage/>}/> */}
          <Route path="/about" element={<About/>}/>
          <Route path="/confirm" element={<Confirm/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;