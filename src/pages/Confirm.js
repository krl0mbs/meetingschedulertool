import "./pageCSS/Confirm.css";
import { Room } from "../components/Room";
import {useEffect, useState} from 'react';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import React from 'react';

export default function Confirm(){
    // Function for connecting to the db
    const connectToDB = async () => {
        const result = await axios(
            'http://localhost:3002/api/meetings/connect',
        )
    };

    useEffect(() => {
        connectToDB();
    }, []);

    let location = useLocation();

    /* This is where the webpage will pass its data to the database.
       It will work very similarly to the section above (break data into rows, then attributes in the row).
    */
    const updateData = () => {
        /* Constant that will extract each individual time slot from the current row (object).
           This constant will take in the availability of each timeslot as well as the name of each timeslot
           so that it may check if they have been modified (have a value of 2).
           This constant will update the databse to reflect modified timeslots.
        */
        const ExtractRowUpdate = (row) => {
            // Breaking the row object into an array of timeslots
            const tempTimesUpdate = [
                row['7'],  
                row['7.5'], 
                row['8'], 
                row['8.5'], 
                row['9'], 
                row['9.5'], 
                row['10'], 
                row['10.5'],
                row['11'], 
                row['11.5'],
                row['12'], 
                row['12.5'],
                row['13'], 
                row['13.5'],
                row['14'], 
                row['14.5'],
                row['15'], 
                row['15.5'],
                row['16'], 
                row['16.5'],
                row['17'],
                row['17.5']
            ];
    
            // If the row has new bookings (any timeslot has a value of 2) then map the timeslots to find which one has been changed
            if(tempTimesUpdate.includes(2)){
                // did some slight reareanging to allow for the buttons to be at the bottom and for the times to be row aligned
                {tempTimesUpdate.forEach((e, idx) => {
                    if (e == 2){
                        
                        const idxMod = idx*.5;
                        idx += 7-idxMod;
                        
                        fetch("http://localhost:3002/api/meetings/updateMeetings", {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify( {
                                "room" : row.ID,
                                "time" : idx
                            })
                        })
                    }
                })}
            }    
        }
    
        // Begins process of breaking down object array for databse update
        location.state.data.meetings.forEach((booking) =>  ExtractRowUpdate(booking));
    }


    // Begins search for new bookings at the row (Room) level
    // This is where the Cancel and Sumbit buttons are rendered
    return(
        <body className="Confirm-body">   
            {location.state.data.meetings.map((booking) => <Room meeting = {booking} returnType = {2}/>)}  
            <div className="row-align">
                <Link to="/bookroom" className="button-style" onClick={updateData}>Submit</Link>
                <Link to="/bookroom" className="button-style">Cancel</Link>
            </div> 
        </body>
    )  
}