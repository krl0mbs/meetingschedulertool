// This file is used to create the confirm button that appears above the booking table

import { Link } from "react-router-dom";

// Attempting to make a button class that has the capability to turn selected buttons purple
// Will hopefully take in a set of integers and turn grays into purples (0 = blue, 1 = purple, 2 = gray)
export const ConfirmButton = (meetings) => {
    
    return(
    <div className='right-side'>
        {/* <button className='button-style'>Confirm</button> */}
        <Link to="/confirm" state={{data: meetings}} className="button-style">Confirm</Link>
    </div>
    );
}