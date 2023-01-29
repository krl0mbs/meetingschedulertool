import { Button } from './Button';

/* This is a constant that will create a row of the booking table.
    It will take in an object array that contains the list of meeting data gathered from the db.
    It will return the created row (this will be different each time based on the meeting data).
*/
export const Room = ({meeting, meetings, setMeetings})  => { // block used to make new rooms, adds a row with buttons
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
    return (
      <>
        <h4 style={LeftColStyle}>{meeting.room}</h4>
        {tempTimes.map((e, idx) => {
          return <Button availabilty = {e} timeslot = {idx} name = {meeting.room} meetings = {meetings} setMeetings = {setMeetings} />
        })}
      </>
    )
}
  
  // styles for the left column
const LeftColStyle ={ 
  width: '10rem',
  display: 'flex', 
  alignItems: 'center',
}