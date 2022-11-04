import React, { Children } from 'react';
import './App.css';
import Table from './table';
import {useState} from 'react';
import { Component } from 'react';


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
      <div className="App-body">
        <Availability/>
        <ConfrimButton/>
      </div>
    </div>
  );
}

// Custom tag that will create the table
const Availability = () => (
  <Table container flexDirection = 'column' className='table-style'>
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

// TODO Once database is done, add a system for database requests to get the status of each individual button
// Ideas: Child value from room, that will tell us the row so we can modify only buttons from that row
//        This should allow us to change doPurp for each individual button on each row rather than all buttons

function Room({children}) { // block used to make new rooms, adds a row with buttons
  
  const arr = [0,1,2,3,4,5,6,7,8,9,10];
  return (
    <>
      <h4 style={LeftColStyle}>Room {children}</h4> {/* children here is the room number */}
        {arr.map((e) => {
          return <Button></Button>
        })}
    </>
  )
}

function Button() { {/* custom button object */}
  const [isActive, setIsActive] = useState(false);
  // const [isConfirmed, setIsConfirmed] = useState(false);
  
  // const aciveStyle = `.activeButton`;
  // const pendingStyle = ``;

  const doPurp = false;

  if(doPurp){ // checks is the buttons should be purple, will be modified later so not all buttons get changed
    return (
      <button style={ButtonTaken}></button>
    )
  }

  else if(!doPurp){ 
    return ( // if the button is clicked, it will change from blue to grey and vice versa
      <button style={(isActive ? ButtonSelected : ButtonStyle) } onClick = {() => {setIsActive(current => !current);}}></button>
    )
  }
}

const Times = () => ( // exclusively holds the values that belong in the first row, ie the times that meetings can be held
  <> 
    <h4 style={TimeStyle}> 7</h4>
    <h4 style={TimeStyle}> 8</h4>
    <h4 style={TimeStyle}> 9</h4>
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

const TimeStyle ={ // styles for the items in the first row
  width: '4rem', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'
}

const ButtonStyle ={ // styles for when a particular time is available
  width: '4rem', 
  height: '4rem', 
  backgroundColor: '#1f97e5'
}

const ButtonSelected ={ // styles for when a particular time is selected
  width: '4rem',
  height: '4rem',
  backgroundColor: 'gray'
}

const ButtonTaken ={ // styles for when a particular time is taken
  width: '4rem',
  height: '4rem',
  backgroundColor: 'purple',
}

const LeftColStyle ={ // styles for the left column
  width: '10rem',
  display: 'flex', 
  alignItems: 'center',
}

// Attempting to make a button class that has the capability to turn selected buttons purple
// Will hoefully take in a set of integers and turn grays into purples (0 = blue, 1 = gray, 2 = purple)
class ConfrimButton extends Component{
  state = {grays: []};

  async componentDidMount(){
    const grays = JSON.parse(localStorage.getItem("cart"));
    this.setState({grays});
  }

  render(){
    return(
      <div className='right-side'>
        <button className='button-style'>Confirm</button>
      </div>
    );
  }

  setPurp() {

  }
}

export default App;