import React, { Children } from 'react';
import './App.css';
import Table from './table'

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
  <Table container flexDirection = 'column'>
    {/* table below corresponds to the first row which is all headers */}
    <Table flex = {1} container flexDirection = 'row'>
        <h4 style={LeftColStyle}>Hours</h4>
        <Times/>
    </Table>
    
    {/* each Table past here is a new row. Right now these are just the titles */}
    <Table container flexDirection = "row">
      <Room>1</Room>
    </Table>

    <Table container flexDirection = "row"> {/* each of these adds a new row to the table, with the number being the room number*/}
      <Room>2</Room>
    </Table>
    
    <Table container flexDirection = "row">
      <Room>3</Room>
    </Table>

  </Table>
)

function Room({children}) { // block used to make new rooms, adds a row with buttons
  return (
    <>
      <h4 style={LeftColStyle}>Room {children}</h4> {/* children here is the room number */}
      <button style={ButtonStyle}></button>
      <button style={ButtonStyle}></button>
      <button style={ButtonStyle}></button>
      <button style={ButtonStyle}></button>
      <button style={ButtonStyle}></button>
      <button style={ButtonStyle}></button>
      <button style={ButtonStyle}></button>
      <button style={ButtonStyle}></button>
      <button style={ButtonStyle}></button>
      <button style={ButtonStyle}></button>
      <button style={ButtonStyle}></button>
    </>
  )
}

const Times = () => (
  <>
    <h4 style={TimeStyle}>7</h4>
    <h4 style={TimeStyle}>8</h4>
    <h4 style={TimeStyle}>9</h4>
    <h4 style={TimeStyle}>10</h4>
    <h4 style={TimeStyle}>11</h4>
    <h4 style={TimeStyle}>12</h4>
    <h4 style={TimeStyle}>13</h4>
    <h4 style={TimeStyle}>14</h4>
    <h4 style={TimeStyle}>15</h4>
    <h4 style={TimeStyle}>16</h4>
    <h4 style={TimeStyle}>17</h4>
  </>
)

const TimeStyle ={
  width: '4rem', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'
}

const ButtonStyle ={
  width: '4rem',
  height: '4rem',
  backgroundColor: '#1f97e5',
}

const LeftColStyle ={
  width: '10rem',
  display: 'flex', 
  alignItems: 'center',
}

export default App;