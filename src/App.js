//import logo from './logo.svg';
import './App.css';
//import '../server/index'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3002/api/meetings/all',
      )
      console.log(result);
      setData(result.data);
    };
    fetchData();
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
      <h1>{data.toString()}</h1>
    </div>
    
  );
}

export default App;


/*
{homes.map(home => <div>{home.name}</div>)}
*/