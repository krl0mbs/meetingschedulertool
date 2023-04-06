// This file is for the logout page

import "./pageCSS/Logout.css";
import LoginButton from "../components/LoginButton"

export default function Logout() {
    return (
        <body className="Logout-body">
            <h1 className="text" style={{paddingBottom:"4rem"}}>{"Logout successful!"}</h1>
            <h1 className="text">{"Click 'Log In' to log back in"}</h1>
            <h1 className="text">{"or close the application."}</h1>
            {/* for implementation details of Availability, see Availability.js */}
            <LoginButton/>
        </body>
    )
}