
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
  const [reload, setReload] = useState();

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
    var dateData = date.toISOString().substring(0, 10) 
    await axios(
      `http://localhost:3002/api/meetings/selectDay?day=${dateData}`,
    ).then(response => {setMeetings(response.data)})
    
    };
  
  // Connect to the db and perform fetches that will get unique room names as well as information pertaining to each booking
  useEffect(() => {
    connectToDB();
    fetchRoom();
    fetchMeetings();
  }, [date]);

  return (
    <div className="Book-body">
      {/* Map the name data gathered from the db to a temporary array that gets passed to the Availability tag */}
      {
        room.map((el) => {
          tempName.push(el.room)
        })
      }
      <Calendar className='react-Calendar' onChange={setDate} value={date} />
      <p style={{display:"flex", flexDirection:"row", justifyContent:"center", minHeight:"120rem", gap:"5rem"}}>  
        {/* Create aspects of UI */}
        <Availability meetings = {meetings} setMeetings = {setMeetings}/>
        <ConfirmButton meetings = {meetings}/>
        {console.log(meetings)}
      </p>
    </div>
    )
}