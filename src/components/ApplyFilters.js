// This file contains the logic for applying filters upon clicking "Apply"

import { useEffect, useState } from 'react';
import axios from "axios";

export const ApplyFilters = ({filters, setFilteredRooms}) => {
    /* tmpRooms is made to be a list that represents all of the rooms that match the currently
       applied filters (gets updated iteratively). DBRooms is used to hold the results of a
       database query. Holds the result of the query and cross references it with tmpRooms to
       find the overlap (rooms that match both filters). firstFilter is a simple boolean to track
       if the current filter being applied is the first one.

       When adding a new filter, create a new function like the ones below to call the appropriate query.
    */
    const [tmpRooms, setTmpRooms] = useState([]);
    const [DBRooms, setDBRooms] = useState([]);
    var firstFilter = true;

    // Function for connecting to the db
    const connectToDB = async () => {
        const result = await axios(
            'http://localhost:3002/api/meetings/connect',
        )
    };

    // Function for filtering rooms from db based on capacity
    const filterCapacity = async (capacity) => { 
        await axios(
            `http://localhost:3002/api/meetings/filterCapacity?min=${capacity}`,
        ).then(response => {setFilteredRooms(response.data); setDBRooms(response.data)})
    };

    // Function for filtering rooms from db based on display
    const filterDisplay = async () => { 
        await axios(
            `http://localhost:3002/api/meetings/filterDisplay`,
        ).then(response => {setFilteredRooms(response.data); setDBRooms(response.data)})
    };
    
    // Function for filtering rooms from db based on network
    const filterNetwork = async (network) => { 
        await axios(
            `http://localhost:3002/api/meetings/filterNetwork?net=${network}`,
        ).then(response => {setFilteredRooms(response.data); setDBRooms(response.data)})
    };

    // Function for filtering rooms from db based on video/telecon capability
    const filterVidTel = async () => { 
        await axios(
            `http://localhost:3002/api/meetings/filterVidtelecon`,
        ).then(response => {setFilteredRooms(response.data); setDBRooms(response.data)})
    };

    // Function for filtering rooms from db based on building
    const filterBuilding = async (building) => { 
        await axios(
            `http://localhost:3002/api/meetings/filterBuilding?build=${building}`,
        ).then(response => {setFilteredRooms(response.data); setDBRooms(response.data)})
    };

    // Function for filtering rooms from db based on connectivity
    const filterConnectivity = async (connectivity) => { 
        await axios(
            `http://localhost:3002/api/meetings/filterConnectivity?con=${connectivity}`,
        ).then(response => {setFilteredRooms(response.data); setDBRooms(response.data)})
    };

    /* This function will be used to strip away unwanted rooms from tmpRooms by
       cross referencing it with the result of the current database query. The overlap
       between the two will represent the list of rooms that match ALL selected filters.
    */
    const thinHerd = () => {
        /* If the current filter is the first to be applied, tmpRooms should just
           be the same as the result of the database query. Finding the overlap would
           be bad since tmpRooms is empty (there is no overlap). If the current filter
           is not the first one to be applied, the overlap will be found and tmpRooms
           will be updated.
        */
        if(firstFilter){
            setTmpRooms(DBRooms);
        } else{
            // Uses the filter function on the two arrays to find their overlap
            const result = tmpRooms.filter(currentRoom => {
                let tmp = DBRooms.filter(item => item.room === currentRoom.room)
                return !(tmp.length === 0)
            });
            
            // Updated tmpRooms to have the overlap
            setTmpRooms(result);
        }
    }

    // Will update the list of rooms that matches the filters on the Book page when tmpRooms is changed
    useEffect(() => {
        setFilteredRooms(tmpRooms);
    }, [tmpRooms]);
    
    /* This is the click handler for the "Apply" button; it will apply the user selected filters.
       The function has been made asynchronous so that "await" can be used on each database query.
       This is to prevent the function from continuing onward while data is still being collected
       from the database. Without this DBRooms won't get updated as often as it should and some
       filters will not get applied.
    */
    const applyFilters = async () => {
        connectToDB();

        /* This section is for finding the selected filters and applying them to a list of rooms.
           Once a check box that has been selected is found, the corresponding section will execute.
           If the checkbox that was found has sub-options, the first of those will be selected and
           the corresponding function will be called with the respective value for that sub-option
        */
        for(var i = 0; i < filters.length; i++){
            // Finds all selected checkboxes
            if(filters[i].selected){
               // Selects proper section of code, depending on which checkbox was found

               // When adding a new filter, create a new case with the filter name, implemented the same as the ones below
               switch(filters[i].filterItem){
                    case "Display":
                        await filterDisplay();
                        break;
                    case "Network":
                        // Loops through sub-options to find which one was selected
                        for(var j = 0; j < filters[i].values.length; j++){
                            if(filters[i].values[j]){
                                await filterNetwork(j);
                            }
                        }
                        break;
                    case "Video/Telecom":
                        await filterVidTel();
                        break;
                    case "Capacity":
                        // Loops through sub-options to find which one was selected
                        for(var k = 0; k < filters[i].values.length; k++){
                            if(filters[i].values[k]){
                                await filterCapacity(filters[i].subOptions[k]);
                            }
                        }
                        break;
                    case "Building":
                        // Loops through sub-options to find which one was selected
                        for(var l = 0; l < filters[i].values.length; l++){
                            if(filters[i].values[l]){
                                await filterBuilding(l);
                            }
                        }
                        break;
                    case "Connectivity":
                        // Loops through sub-options to find which one was selected
                        for(var m = 0; m < filters[i].values.length; m++){
                            if(filters[i].values[m]){
                                await filterConnectivity(m);
                            }
                        }
                        break;
                    default:
                        break;
               }   
            }
        }
    }
    
    /* This will call the function that updates the tmpRooms array each time
       a database query is triggered.
    */
    useEffect(() => {
        thinHerd();
        // Sets firstFilter to false after the first filter has been applied
        if(firstFilter){
            firstFilter = false;
        }
    }, [DBRooms]);

    // Renders the "Apply" button
    return(
        <div className="filter-box">
            <button className="apply-button" onClick={() => applyFilters()}>Apply</button>
        </div>
    )
}