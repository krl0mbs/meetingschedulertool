import { View } from 'react-native-web';
import React from 'react';
import './App.css';
import Table from './table'
import './table.css'


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
      <body className="App-body">
        <Availability/>
      </body>
    </div>  
  );
}

// Custom tag that will create the table
const Availability = () => (
  <Table container flexDirection = 'column' alignItems = ''>
    {/* table below corresponds to the first row which is all headers */}
    <Table flex = {1} container flexDirection = 'row'>
        <h4 style={{width: '100px'}}>Hours</h4>
        <h4 style={{width: '50px'}}>7</h4>
        <h4 style={{width: '50px'}}>8</h4>
        <h4 style={{width: '50px'}}>9</h4>
        <h4 style={{width: '50px'}}>10</h4>
        <h4 style={{width: '50px'}}>11</h4>
        <h4 style={{width: '50px'}}>12</h4>
        <h4 style={{width: '50px'}}>13</h4>
        <h4 style={{width: '50px'}}>14</h4>
        <h4 style={{width: '50px'}}>15</h4>
        <h4 style={{width: '50px'}}>16</h4>
        <h4 >17</h4>
    </Table>
    {/* each Table past here is a new row. Right now these are just the titles */}
    <Table  container flexDirection = "row">
      <h4 style={{width: '100px'}}>Room 1</h4>
      <button style={BUTTON}></button>
      <button style={BUTTON}></button>
    </Table>
    <Table container flexDirection = "row">
      <h4>Room 2</h4>
    </Table>
  </Table>
)

const BUTTON ={
  width: '50px',
  height: '50px',
  backgroundColor: '#1f97e5',
}

export default App;
