// Book Room Page
import "./pageCSS/Book.css";
import Table from '../table.js';
import {useEffect, useState} from 'react';
import axios from "axios";
import { Component } from 'react';
import { Link } from "react-router-dom"

export default function Book() {
  // Various arrays that will be used to store db information
  const [meetings, setMeetings] = useState([]);
  const [room, setRoom] = useState([]);
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
            <Room meeting={meeting} />
          </Table> 
        )
      })}

    </Table>
  )

  /* This is a constant that will create a row of the booking table.
    It will take in an object array that contains the list of meeting data gathered from the db.
    It will return the created row (this will be different each time based on the meeting data).
  */
  const Room = ({meeting})  => { // block used to make new rooms, adds a row with buttons
    // Isolates the db columns that contain availabilities for each time block and puts them in an array
    const tempTimes = [
      meeting['7'], 
      meeting['8'], 
      meeting['9'], 
      meeting['10'], 
      meeting['11'], 
      meeting['12'], 
      meeting['13'], 
      meeting['14'], 
      meeting['15'], 
      meeting['16'], 
      meeting['17']
    ];
  
    /* This is a function that will create each individual button.
    It will take in an individual availability for a timeslot (provided by tempTimes in the Room function).
    It will return a completed button that will either be purple (not interactable) or blue (interactable).
    */
    const Button = ({availabilty, timeslot, name}) => { {/* custom button */}
      // Constant that will be used to flip blue buttons to gray (selected) and gray buttons to blue based on the availability
      const [isActive, setIsActive] = useState(availabilty == 2 ? true : false);

      const doPurp = availabilty;

      /* This click handler will duplicate the meeting info array and then find the room that corresponds to the current row.
         Then the duplicate array will find the current time slot for the current row and modify the value in the array (2 for gray, 0 for blue).
         Finally, the modified array gets duplicated back into the correct index in the meeting info object array.
      */
      const clickHandler = () => {
        let array2 = meetings.map(a => {return {...a}})
        array2.find(a => a['room'] == name)[timeslot.toString()] = isActive ? 0 : 2;

        setIsActive(!isActive);
        setMeetings(array2);
      }

      // Checks if timeslot for button is available. If no, make it purple. If yes, make it blue with a click handler
      if(doPurp == 1){
        return (
          <button style={ButtonTaken}></button>
        )
      }
        
      else if(doPurp != 1){ 
        // if the button is clicked, it will change from blue to grey and vice-versa
        return (
          <button style={(isActive ? ButtonSelected : ButtonStyle) } onClick = {clickHandler}></button>
        )
      }
    }

    /* This section returns the finished row by printing out the room name gathered from the db,
    then passing in the time availabilities to a mapping function that creates each individual button
    */
    return (
      <>
        <h4 style={LeftColStyle}>{meeting.room}</h4>
        {tempTimes.map((e, idx) => {
          return <Button availabilty = {e} timeslot = {idx + 7} name = {meeting.room}/>
        })}
      </>
    )
  }

  // Attempting to make a button class that has the capability to turn selected buttons purple
  // Will hoefully take in a set of integers and turn grays into purples (0 = blue, 1 = purple, 2 = gray)
  class ConfirmButton extends Component{
    //state = {grays: []};

    render(){
      return(
        <div className='right-side'>
          {/* <button className='button-style'>Confirm</button> */}
          <Link to="/confirm" state={{data: meetings}} className="button-style">Confirm</Link>
        </div>
      );
    }
  }

  return (
    <div className="Book-body">
      {/* Map the name data gathered from the db to a temporary array that gets passed to the Availability tag */}
      {
        room.map((el) => {
          tempName.push(el.room)
        })
      }

      {/* Create aspects of UI */}
      <Availability meetings = {meetings}/>
      <ConfirmButton/>
      {console.log(meetings)}
    </div>
    )
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
  justifyContent: 'left'
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