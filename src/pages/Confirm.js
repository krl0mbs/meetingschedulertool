import "./pageCSS/Confirm.css";
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
    
    /* Constant that will extract the row (each entry) from the object array.
       This constant will take the row itself as a parameter so that it may break the object up into its various times.
       This constant will return the rows that have new bookings.
    */
    const ExtractRow = ({row}) => {
        // Breaking the row object into an array of timeslots
        const tempTimes = [
            row['7'], 
            row['8'], 
            row['9'], 
            row['10'], 
            row['11'], 
            row['12'], 
            row['13'], 
            row['14'], 
            row['15'], 
            row['16'], 
            row['17']
        ];

        /* Constant that will extract each individual time slot from the current row (object).
           This constant will take in the availability of each timeslot as well as the name of each timeslot
           so that it may check if they have been modified (have a value of 2).
           This constant will return the timeslots that have been modified.
        */
        const ExtractTime = ({availability, timeslot}) => {
            if (availability == 2){
                return <p>{timeslot}</p>
            }
        }

        // If the row has new bookings (any timeslot has a value of 2) then map the timeslots to find which one has been changed
        if(tempTimes.includes(2)){
            return(
                // did some slight reareanging to allow for the buttons to be at the bottom and for the times to be row aligned
                <> 
                    <h4>You have booked {row.room} for the following times:</h4>
                    <div style={{display:"flex", justifyContent:"center",flexDirection:"row", gap:"2rem"}}>
                    {tempTimes.map((e, idx) => {
                        return <ExtractTime availability={e} timeslot = {idx + 7}></ExtractTime>
                    })}
                    </div>
                </>
            )
        }    
    }

    const updateData = (event) => {
        const ExtractRowUpdate = (row) => {
            // Breaking the row object into an array of timeslots
            const tempTimesUpdate = [
                row['7'], 
                row['8'], 
                row['9'], 
                row['10'], 
                row['11'], 
                row['12'], 
                row['13'], 
                row['14'], 
                row['15'], 
                row['16'], 
                row['17']
            ];
    
            /* Constant that will extract each individual time slot from the current row (object).
                This constant will take in the availability of each timeslot as well as the name of each timeslot
                so that it may check if they have been modified (have a value of 2).
                This constant will return the timeslots that have been modified.
            */
    
            // If the row has new bookings (any timeslot has a value of 2) then map the timeslots to find which one has been changed
            if(tempTimesUpdate.includes(2)){
                // did some slight reareanging to allow for the buttons to be at the bottom and for the times to be row aligned
                {tempTimesUpdate.forEach((e, idx) => {
                    console.log(row.ID);
                    if (e == 2){
                        fetch("http://localhost:3002/api/meetings/updateMeetings", {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify( {
                                "room" : row.ID,
                                "time" : idx + 7
                            })
                        })
                    }
                })}
            }    
        }
    
        location.state.data.forEach((booking) =>  ExtractRowUpdate(booking));
    }


    // Begins search for new bookings at the row (Room) level
    // This is where the Cancel and Sumbit buttons are rendered
    return(
        <body className="Confirm-body">   
            {location.state.data.map((booking) => <ExtractRow row = {booking}/>)}  
            <div className="row-align">
                <Link to="/bookroom" className="button-style" onClick={updateData}>Submit</Link>
                <Link to="/bookroom" className="button-style">Cancel</Link>
            </div> 
        </body>
    )  
}