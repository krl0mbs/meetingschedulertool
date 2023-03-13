import "./pageCSS/Book.css";
import "./pageCSS/Calendar.css";
import { CheckFilter } from "../components/CheckFilter";
import { ConfirmButton } from "../components/ConfirmButton";
import { Availability } from "../components/Availability";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Calendar } from "react-calendar";

export default function Book() {
  // Various arrays that will be used to store db information
  const [meetings, setMeetings] = useState([]);
  const [room, setRoom] = useState([]);
  const tempName = [];
  const [date, setDate] = useState(new Date());
  const [filtered, setFiltered] = useState([]);
  // const [reload, setReload] = useState();

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
    <div style={{display:"flex", flexDirection:"row"}}>
      <div className="sidebar">
        <p style={{display:"flex", flexDirection:"column", alignItems:"left", gap:"3px", padding:"10px",  margin:"0"}}>

          <h style={{display:"flex", flexDirection:"row"}}>
            <button className="keyBoxes" style={{backgroundColor:"#1f97e5"}}></button>
            <div className="keyName">Open</div>
          </h>

          <h style={{display:"flex", flexDirection:"row"}}>
            <button className="keyBoxes" style={{backgroundColor:"purple"}}></button>
            <div className="keyName">Booked</div>
          </h>

          <h style={{display:"flex", flexDirection:"row"}}>
            <button className="keyBoxes" style={{backgroundColor:"gray"}}></button>
            <div className="keyName">Selected</div>
          </h>

        </p>
        <Calendar className='react-Calendar' calendarType="US" onChange={setDate} value={date} />
        <CheckFilter setFiltered = {setFiltered}/>
      </div>
      <div className="Book-body">
        {/* Map the name data gathered from the db to a temporary array that gets passed to the Availability tag */}
        {
          room.map((el) => {
            tempName.push(el.room)
          })
        }
        <p style={{display:"flex", flexDirection:"column", justifyContent:"top", minHeight:"120rem", gap:"1.5rem", paddingLeft:"1rem"}}>  
          <ConfirmButton meetings = {meetings}/>
          <Availability meetings = {meetings} setMeetings = {setMeetings}/>
          
          {console.log(filtered)}
        </p>
      </div>
    </div>
    )
}