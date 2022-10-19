import logo from './logo.svg';
import './App.css'; 

function App() {
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
      <body className="App-body"></body>
    </div>
    
  );
}

export default App;
