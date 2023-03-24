import {useEffect, useState} from 'react';

/* This is a function that will create each individual button.
    It will take in an individual availability for a timeslot (provided by tempTimes in the Room function).
    It will return a completed button that will either be purple (not interactable) or blue (interactable).
*/
    
export const Button = ({availabilty, timeslot, name, meetings, setMeetings}) => { {/* custom button */}
    // Constant that will be used to flip blue buttons to gray (selected) and gray buttons to blue based on the availability
    const [isActive, setIsActive] = useState(availabilty == 2 ? true : false);

    const indexMod = timeslot*.5;
    timeslot += 7-indexMod;

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

// styles for when a particular time is available
const ButtonStyle ={ 
    width: '2rem', 
    height: '4rem', 
    backgroundColor: '#1f97e5',
    border: '.05rem solid',
}
  
// styles for when a particular time is selected
const ButtonSelected ={ 
    width: '2rem',
    height: '4rem',
    backgroundColor: 'gray',
    border: '.05rem solid',
}
  
  // styles for when a particular time is taken
const ButtonTaken ={ 
    width: '2rem',
    height: '4rem',
    backgroundColor: 'purple',
    border: '.05rem solid',
}