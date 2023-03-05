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
        filterBuilding(0);
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