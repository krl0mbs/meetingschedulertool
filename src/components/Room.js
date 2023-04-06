// This file isolates the rooms for creating the booking table and the corresponding message on the confirmation page.

import { Button } from './Button';
import { ExtractTime } from './ExtractTime';
import {useEffect, useState} from 'react';
import axios from "axios";

/* This is a constant that will create a row of the booking table.
    It will take in an object array that contains the list of meeting data gathered from the db.
    It will return the created row (this will be different each time based on the meeting data).
*/
export const Room = ({meeting, meetings, setMeetings, returnType})  => { // block used to make new rooms, adds a row with buttons
  // Function for connecting to the db
  const connectToDB = async () => {
    const result = await axios(
        'http://localhost:3002/api/meetings/connect',
    )
  };

  useEffect(() => {
    connectToDB();
  }, []);
  
  // Isolates the db columns that contain availabilities for each time block and puts them in an array
  const tempTimes = [
    meeting['7'], 
    meeting['7.5'], 
    meeting['8'], 
    meeting['8.5'], 
    meeting['9'], 
    meeting['9.5'], 
    meeting['10'],
    meeting['10.5'],
    meeting['11'],
    meeting['11.5'],
    meeting['12'],
    meeting['12.5'],
    meeting['13'],
    meeting['13.5'],
    meeting['14'],
    meeting['14.5'],
    meeting['15'],
    meeting['15.5'],
    meeting['16'],
    meeting['16.5'],
    meeting['17'],
    meeting['17.5'],
  ];

  /* This section returns the finished row by printing out the room name gathered from the db,
      then passing in the time availabilities to a mapping function that creates each individual button
  */
  if (returnType == 1){
    return (
      <>
        <h4 style={LeftColStyle}>{meeting.room}</h4>
        {tempTimes.map((e, idx) => {
          // For implementation details of Button, see Button.js
          return <Button availabilty = {e} timeslot = {idx} name = {meeting.room} meetings = {meetings} setMeetings = {setMeetings} />
        })}
      </>
    )
  } else if (returnType == 2) {
    // If the row has new bookings (any timeslot has a value of 2) then map the timeslots to find which one has been changed
    if(tempTimes.includes(2)){
      return(
        // did some slight reareanging to allow for the buttons to be at the bottom and for the times to be row aligned
        <> 
          <h4>You have booked {meeting.room} for the following times:</h4>
          <div style={{display:"flex", justifyContent:"center",flexDirection:"row", gap:"2rem"}}>
            {tempTimes.map((e, idx) => {
              // for implementation details of ExtractTime, see ExtractTime.js
              return <ExtractTime availability = {e} timeslot = {idx}></ExtractTime>
            })}
          </div>
        </>
      )
    }    
  } 
}
  
// styles for the left column
const LeftColStyle ={ 
  width: '8rem',
  display: 'flex', 
  alignItems: 'center',
}