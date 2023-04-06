// This file is for the Booking page which acts as the main page for the application

import "./pageCSS/Book.css";
import "./pageCSS/Calendar.css";
import { CheckFilter } from "../components/FilterMenu";
import { ConfirmButton } from "../components/ConfirmButton";
import { Availability } from "../components/Availability";
import { TableKey } from "../components/TableKey";
import { useEffect, useState } from 'react';
import { Calendar } from "react-calendar";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function Book() {
  // Various arrays that will be used to store db information
  const [meetings, setMeetings] = useState([]);
  const [room, setRoom] = useState([]);
  const tempName = [];
  const [date, setDate] = useState(new Date());
  const [filtered, setFiltered] = useState([]);

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
    ).then(response => {setMeetings(response.data); setFiltered(response.data)})
  };
  
  // Connect to the db and perform fetches that will get unique room names as well as information pertaining to each booking
  useEffect(() => {
    connectToDB();
    fetchRoom();
    fetchMeetings();
  }, [date]);

  // Uncomment this function when comparison logic is ready to be implemented
  useEffect(() => {
    if(filtered.length != 0){
      const result = meetings.filter(meeting => {
        let tmp = filtered.filter(item => item.room === meeting.room)
        return !(tmp.length === 0)
      })

      setMeetings(result);
    }
  }, [filtered]);

  // Constants to track if the user is logged in and if the page is loading
  const {isLoading, loginWithRedirect, isAuthenticated} = useAuth0();

  // Will check if the user is logged in every time the page loads. If not, they will be prompted to do so
  // Put this use effect on every page where you wish for this to happen
  useEffect(() => {
    (async function login() {
        if (!isLoading && !isAuthenticated) {
            await loginWithRedirect();
        }
    })();
  }, [isLoading]);
  
  return (
      <div style={{display:"flex", flexDirection:"row"}}>
        {/* This div is for the sidebar which contains the key, calendar, and filter menu */}
        <div className="sidebar">
          {/* for implementation details of TableKey, see TableKey.js */}
          <TableKey/>
          <Calendar className='react-Calendar' calendarType="US" onChange={setDate} value={date} />
          {/* for implementation details of CheckFilter, see CheckFilter.js */}
          <CheckFilter setFiltered = {setFiltered}/>
        </div>
        {/* This div is for the main display of the page. Includes booking table and confirm button */}
        <div className="Book-body">
          {/* Map the name data gathered from the db to a temporary array that gets passed to the Availability tag */}
          {
            room.map((el) => {
              tempName.push(el.room)
            })
          }
          <p style={{display:"flex", flexDirection:"column", justifyContent:"top", minHeight:"120rem", gap:"1.5rem", paddingLeft:"1rem"}}>  
            {/* for implementation details of ConfirmButton, see ConfirmButton.js */}
            <ConfirmButton meetings = {meetings}/>
            {/* for implementation details of Availability, see Availability.js */}
            <Availability meetings = {meetings} setMeetings = {setMeetings}/>
          </p>
        </div>
      </div>
    )
}