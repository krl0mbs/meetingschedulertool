//import logo from './logo.svg';
import './App.css';
//import '../server/index'
import { useEffect, useState } from 'react';
import axios from 'axios';


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
      {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
      <header className="App-header"> {/*defines the header, use classname="App-header" to tell which class from App.css will be used on this tag*/}
        <a className="Home-button" href="/">Meeting Scheduler</a>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <a className="Header-item" href="/bookroom">Book Room</a>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <a className="Header-item" href="/checkbookings">Check Bookings</a>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <a className="Header-item" href="/managebookings">Manage Bookings</a>
      </header>
      {
        room.map((el) => {
          return <h1>{el.room}</h1>
        })
      }
      <button onClick={handleClick}>Push me!</button>
    </div>
    
  );
}

export default App;


/*
{homes.map(home => <div>{home.name}</div>)}
*/