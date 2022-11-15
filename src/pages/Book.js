// Book Room Page
import "./pageCSS/Book.css";
import Table from '../table.js';
import {useEffect, useState} from 'react';
import axios from "axios";
import { Component } from 'react';

export default function Book() {
  // Various arrays that will be used to store db information
  const [room, setRoom] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [text, setText] = useState('');
  const tempName = [];
  const tempBookingNames = [];
  const tempTimes = [];

  // Function for connecting to the db
  const connectToDB = async () => {
    const result = await axios(
      'http://localhost:3002/api/meetings/connect',
    )
  };

  // const handleClick = async(event) => {
  //   await axios.post("http://localhost:3002/api/meetings/post", {
  //     name: text
  //   })
  // }
  // const fetchData = async () => {
  //   const result = await axios(
  //     'http://localhost:3002/api/meetings/all',
  //   )
  //   setData(result.data);
  // };

  // Function that will get all of the unique room names
  const fetchRoom = async () => {
    const result = await axios(
      'http://localhost:3002/api/meetings/distinct',
    )
    setRoom(result.data);
  };

  // Function that will get the meeting data for each meeting 
  const fetchMeetings = async () => {
    const result = await axios(
      'http://localhost:3002/api/meetings/reservations',
    )
    setMeetings(result.data);
  };

  // Connect to the db and perform fetches that will get unique room names as well as information pertaining to each booking
  useEffect(() => {
    connectToDB();
    fetchRoom();
    fetchMeetings();
  }, []);

  
  return (
    <div className="Book-body">
      {/* Map the name data gathered from the db to a temporary array that gets passed to the Availability tag */}
      {
        room.map((el) => {
          tempName.push(el.room)
        })
      }

      <Availability meetings = {meetings}/>
      <ConfrimButton/>
    </div>
    )
}

// Custom tag that will create the table
const Availability = ({meetings}) => (
    <Table container flexDirection = 'column' className='table-style'>
      {/* table below corresponds to the first row which is all headers */}
      <Table flex = {1} container flexDirection = 'row'>
          <h4 style={LeftColStyle}>Hours</h4>
          <Times/>
      </Table>

    {/* Dynamically creates rows for table and passes through the meeting data gathered from the db */}
    {meetings.map(meeting => {
      return (
        <Table container flexDirection="row">
          <Room meetings={meeting} />
        </Table> 
      )
    })}

    </Table>

)

/* This is a function that will create a row of the booking table.
   It will take in an object array that contains the list of meeting data gathered from the db.
   It will return the created row (this will be different each time based on the meeting data).
*/
function Room({meetings}) { // block used to make new rooms, adds a row with buttons
  // Isolates the db columns that contain availabilities for each time block and puts them in an array
  const tempTimes = [
    meetings['7'], 
    meetings['8'], 
    meetings['9'], 
    meetings['10'], 
    meetings['11'], 
    meetings['12'], 
    meetings['13'], 
    meetings['14'], 
    meetings['15'], 
    meetings['16'], 
    meetings['17']
  ];

  /* This section returns the finished column by printing out the room name gathered from the db,
     then passing in the time availabilities to a mapping function that creates each individual button
  */
  return (
    <>
      <h4 style={LeftColStyle}>{meetings.room}</h4>
      {tempTimes.map((e) => {
        return <Button availabilty = {e}/>
      })}
      
    </>
  )
}
  
/* This is a function that will create each individual button.
   It will take in an individual availability for a timeslot (provided by tempTimes in the Room function).
   It will return a completed button that will either be purple (not interactable) or blue (interactable).
*/
function Button({availabilty}) { {/* custom button */}
    // Constant that will be used to flip blue buttons to gray (selected) and gray buttons to blue
    const [isActive, setIsActive] = useState(false);
  
    const doPurp = availabilty;
  
    // Checks if timeslot for button is available. If no, make it purple. If yes, make it blue with a click handler
    if(doPurp){
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
 
  // exclusively holds the values that belong in the first row, ie the times that meetings can be held
  const Times = () => ( 
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
  
  // styles for the items in the first row
  const TimeStyle ={ 
    width: '4rem', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
  
  // styles for when a particular time is available
  const ButtonStyle ={ 
    width: '4rem', 
    height: '4rem', 
    backgroundColor: '#1f97e5'
  }
  
  // styles for when a particular time is selected
  const ButtonSelected ={ 
    width: '4rem',
    height: '4rem',
    backgroundColor: 'gray'
  }
  
  // styles for when a particular time is taken
  const ButtonTaken ={ 
    width: '4rem',
    height: '4rem',
    backgroundColor: 'purple',
  }
  
  // styles for the left column
  const LeftColStyle ={ 
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