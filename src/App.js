// This file contain pages and routing information for all pages within the app

import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navbar from "./Navbar";

// Pages Imported for use when routing to new webpages
// To add a new page, in general create a new .js file and import it like below
import Book from './pages/Book';
import About from './pages/About';
import Confirm from './pages/Confirm';
import Logout from './pages/Logout';

import "./Navbar.css";
import './App.css';

// To make a page accessible via the navbar, add it as a Route like below,
// where path is appended to the URL to navigate to the page
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Container">
        <Routes> 
          <Route path="/" element={<Book/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/confirm" element={<Confirm/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;