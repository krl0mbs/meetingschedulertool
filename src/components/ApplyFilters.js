import { useEffect, useState } from 'react';
import axios from "axios";

export const ApplyFilters = (filters) => {
    const [filteredRooms, setFilteredRooms] = useState([]);

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
        ).then(response => {setFilteredRooms(response.data)})
    };

    // Function for filtering rooms from db based on display
    const filterDisplay = async () => { 
        await axios(
            `http://localhost:3002/api/meetings/filterDisplay`,
        ).then(response => {setFilteredRooms(response.data)})
    };
    
    // Function for filtering rooms from db based on network
    const filterNetwork = async (network) => { 
        await axios(
            `http://localhost:3002/api/meetings/filterNetwork?net=${network}`,
        ).then(response => {setFilteredRooms(response.data)})
    };

    // Function for filtering rooms from db based on video/telecon capability
    const filterVidTel = async () => { 
        await axios(
            `http://localhost:3002/api/meetings/filterVidtelecon`,
        ).then(response => {setFilteredRooms(response.data)})
    };

    // Function for filtering rooms from db based on building
    const filterBuilding = async (building) => { 
        await axios(
            `http://localhost:3002/api/meetings/filterBuilding?build=${building}`,
        ).then(response => {setFilteredRooms(response.data)})
    };

    // Function for filtering rooms from db based on connectivity
    const filterConnectivity = async (connectivity) => { 
        await axios(
            `http://localhost:3002/api/meetings/filterConnectivity?con=${connectivity}`,
        ).then(response => {setFilteredRooms(response.data)})
    };

    const applyFilters = () => {
        /* This section is for finding the first selected filter and applying it to the database.
           Once the first check box is found, the corresponding section will execute.
           If the first checbox found has sub-options, the first of those will be selected and
           the corresponding function will be called with the respective value for that sub-option
        */
        for(var i = 0; i < filters.filters.length; i++){
            // Finds first selected checkbox
            if(filters.filters[i].selected){
               // Selects proper section of code, depending on which checkbox was found
               switch(filters.filters[i].filterItem){
                    case "Display":
                        filterDisplay();
                        break;
                    case "Network":
                        // Loops through sub-options to find which one was selected
                        for(var j = 0; j < filters.filters[i].values.length; j++){
                            if(filters.filters[i].values[j]){
                                filterNetwork(j);
                                break;
                            }
                        }
                        break;
                    case "Video/Telecom":
                        filterVidTel();
                        break;
                    case "Capacity":
                        // Loops through sub-options to find which one was selected
                        for(var j = 0; j < filters.filters[i].values.length; j++){
                            if(filters.filters[i].values[j]){
                                filterCapacity(filters.filters[i].subOptions[j]);
                                break;
                            }
                        }
                        break;
                    case "Building":
                        // Loops through sub-options to find which one was selected
                        for(var j = 0; j < filters.filters[i].values.length; j++){
                            if(filters.filters[i].values[j]){
                                filterBuilding(j);
                                break;
                            }
                        }
                        break;
                    case "Connectivity":
                        // Loops through sub-options to find which one was selected
                        for(var j = 0; j < filters.filters[i].values.length; j++){
                            if(filters.filters[i].values[j]){
                                filterConnectivity(j);
                                break;
                            }
                        }
                        break;
                    default:
                        break;
               }
               break;
            }
        }

        console.log(filteredRooms);
    }
    
    useEffect(() => {
        connectToDB();
    }, []);

    return(
        <div className="filter-box">
            <button className="apply-button" onClick={applyFilters.bind()}>Apply</button>
        </div>
    )
}