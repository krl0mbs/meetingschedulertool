
import "./pageCSS/Book.css";
import "./pageCSS/Calendar.css";
import { ConfirmButton } from "../components/ConfirmButton";
import { Availability } from "../components/Availability";
import {useEffect, useState} from 'react';
import axios from "axios";
import Calendar from "react-calendar";

export default function Book() {
  // Various arrays that will be used to store db information
  const [meetings, setMeetings] = useState([]);
  const [room, setRoom] = useState([]);
  const tempName = [];
  const [date, setDate] = useState(new Date());

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

  // {console.log(date.toISOString().substring(0, 10))} {/* USE THIS TO GET THE DATE FROM THE CALENDAR */}

  // Function that will get the meeting data for each meeting 
  const fetchMeetings = async () => {
    const result = await axios(
      'http://localhost:3002/api/meetings/selectDay/:day', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {
          "day" : (date.toISOString().substring(0, 10))
        })
      })
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
      <Calendar className='react-Calendar' onChange={setDate} value={date} />
      {/* {console.log(date.toDateString().substring(0, 10))} */}
      <p style={{display:"flex", flexDirection:"row", justifyContent:"center", minHeight:"120rem", gap:"5rem"}}>  
        {/* Create aspects of UI */}
        <Availability meetings = {meetings} setMeetings = {setMeetings}/>
        <ConfirmButton meetings = {meetings}/>
        {console.log(meetings)}
      </p>
    </div>
    )
}