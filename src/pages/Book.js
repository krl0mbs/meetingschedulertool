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

      {/* Map the booking info that will be used by the table (room name, start time, and end time for each booking) */}
      {/* {
        meetings.map(({ID, room, date, start, end}) => {
          tempBookingNames.push(room)
          tempTimes.push(room, start, end)
        })
      } */}

      {console.log(meetings)}
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
      
      {/* each Table past here is a new row. Right now these are just the titles */}
      {/* <Table container flexDirection = "row">
        <Room>{children[0]}</Room>
      </Table> */}
  
    {/* each of these adds a new row to the table, with the number being the room number*/}
      {/* <Table container flexDirection = "row">
        <Room>{children[1]}</Room>
      </Table> */}

    {meetings.map(meeting => {
      return (
        <Table container flexDirection="row">
          <Room meetings={meeting} />
        </Table> 
      )
    })}

    </Table>

)
  
// TODO Once database is done, add a system for database requests to get the status of each individual button
// Ideas: Child value from room, that will tell us the row so we can modify only buttons from that row
//        This should allow us to change doPurp for each individual button on each row rather than all buttons

function Room({meetings}) { // block used to make new rooms, adds a row with buttons
  const tempTimes = [meetings['7'], meetings['8'], meetings['9'], meetings['10'], meetings['11'], meetings['12'], meetings['13'], meetings['14'], meetings['15'], meetings['16'], meetings['17']];
  const arr = [0,1,2,3,4,5,6,7,8,9,10];
  console.log(tempTimes);
  return (
    <>
      <h4 style={LeftColStyle}>{meetings.room}</h4> {/* children here is the room number */}
      {tempTimes.map((e) => {
        return <Button availabilty = {e}/>
      })}
      
    </>
  )
}
  
function Button({availabilty}) { {/* custom button */}
    const [isActive, setIsActive] = useState(false);
    // const [isConfirmed, setIsConfirmed] = useState(false);
    
    // const aciveStyle = `.activeButton`;
    // const pendingStyle = ``;
  
    const doPurp = availabilty;
  
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