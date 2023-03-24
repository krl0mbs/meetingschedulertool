import Table from '../table.js';
import { Times } from './Times';
import { Room } from './Room.js';

 
 // Custom tag that will create the table
 export const Availability = ({meetings, setMeetings}) => (
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
    alignItems: 'left',
    justifyContent: 'left'
}