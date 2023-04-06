// This file contains the code for creating the meetings table from the data gathered

import Table from '../table';
import { Times } from './Times';
import { Room } from './Room';

 
 // Custom tag that will create the table
 export const Availability = ({meetings, setMeetings}) => (
    // for implementation details of Table, see table.js
    <Table container flexDirection = 'column' className='table-style'>
      {/* table below corresponds to the first row which is all headers */}
      <Table flex = {1} container flexDirection = 'row'>
          <h4 style={LeftColStyle}>Hours</h4>
          {/* for implementation details of Times, see Times.js */}
          <Times/>
      </Table>

      {/* Dynamically creates rows for table and passes through the meeting data gathered from the db */}
      {meetings.map(meeting => {
        return (
          <Table container flexDirection="row">
            {/* For more info on creating the room, go to "Room.js" */}
            <Room meeting={meeting} meetings = {meetings} setMeetings = {setMeetings} returnType = {1}/>
          </Table> 
        )
      })}
    </Table>
)

// styles for the left column
const LeftColStyle ={ 
    width: '7.5rem',
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'left'
}