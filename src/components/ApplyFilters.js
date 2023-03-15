import { useEffect, useState } from 'react';
import axios from "axios";

export const ApplyFilters = ({filters, setFilteredRooms}) => {
    const [tmpRooms, setTmpRooms] = useState([]);
    const [DBRooms, setDBRooms] = useState([]);

    // Function for connecting to the db
    const connectToDB = async () => {
        const result = await axios(
            'http://localhost:3002/api/meetings/connect',
        )
    };

    // Function for filtering rooms from db based on capacity
    const filterCapacity = async (capacity) => {
        var dateData = '12'; 
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

    const thinHerd = () => {
        if(tmpRooms.length == 0){
            setTmpRooms(DBRooms);
        } else{
            const result = tmpRooms.filter(currentRoom => {
                let tmp = DBRooms.filter(item => item.room === currentRoom.room)
                return !(tmp.length === 0)
            })

            setTmpRooms(result);
            setFilteredRooms(tmpRooms);
        }
    }

    const applyFilters = () => {
        connectToDB();

        /* This section is for finding the first selected filter and applying it to the database.
           Once the first check box is found, the corresponding section will execute.
           If the first checbox found has sub-options, the first of those will be selected and
           the corresponding function will be called with the respective value for that sub-option
        */
        for(var i = 0; i < filters.length; i++){
            // Finds first selected checkbox
            if(filters[i].selected){
               // Selects proper section of code, depending on which checkbox was found
               switch(filters[i].filterItem){
                    case "Display":
                        filterDisplay();
                        break;
                    case "Network":
                        // Loops through sub-options to find which one was selected
                        for(var j = 0; j < filters[i].values.length; j++){
                            if(filters[i].values[j]){
                                filterNetwork(j);
                            }
                        }
                        break;
                    case "Video/Telecom":
                        filterVidTel();
                        break;
                    case "Capacity":
                        // Loops through sub-options to find which one was selected
                        for(var j = 0; j < filters[i].values.length; j++){
                            if(filters[i].values[j]){
                                filterCapacity(filters[i].subOptions[j]);
                            }
                        }
                        break;
                    case "Building":
                        // Loops through sub-options to find which one was selected
                        for(var j = 0; j < filters[i].values.length; j++){
                            if(filters[i].values[j]){
                                filterBuilding(j);
                            }
                        }
                        break;
                    case "Connectivity":
                        // Loops through sub-options to find which one was selected
                        for(var j = 0; j < filters[i].values.length; j++){
                            if(filters[i].values[j]){
                                filterConnectivity(j);
                            }
                        }
                        break;
                    default:
                        break;
               }
               thinHerd();
            }
        }
    }

    useEffect(() => {
        console.log(tmpRooms);
    }, [tmpRooms]);

    return(
        <div className="filter-box">
            <button className="apply-button" onClick={() => applyFilters()}>Apply</button>
        </div>
    )
}