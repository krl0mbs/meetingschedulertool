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
import Test from './pages/Test';

function App() {

  const [room, setRoom] = useState([]);
  const [text, setText] = useState('');

  const handleClick = async(event) => {
    await axios.post("http://localhost:3002/api/meetings/post", {
      name: text
    })
  }
  // const fetchData = async () => {
  //   const result = await axios(
  //     'http://localhost:3002/api/meetings/all',
  //   )
  //   setData(result.data);
  // };
  const fetchRooms = async () => {
    const result = await axios(
      'http://localhost:3002/api/meetings/distinct',
    )
    setRoom(result.data);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <div className="Container">
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/bookroom" element={<Book/>}/>
          <Route path="/managebookings" element={<Manage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;