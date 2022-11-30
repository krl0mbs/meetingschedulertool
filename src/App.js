import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import "./Navbar.css";
import {Route, Routes} from "react-router-dom";
import "./pages/pageCSS/Home.css";

// Pages Imported for use when routing to new webpages
import Book from './pages/Book';
import Manage from './pages/Manage';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Container">
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/bookroom" element={<Book/>}/>
          <Route path="/managebookings" element={<Manage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;