// This file creates the navigation bar

import "./Navbar.css";
import LogoutButton from "./components/LogoutButton";
import { Link, useMatch, useResolvedPath} from "react-router-dom" // this library helps with making routes to other pages, offers better functionality than using regular tags

export default function Navbar() {
    return (
    <nav>
        <h1 className="mst-home">Meeting Scheduler</h1>
        <ul>
            {/* To add a new button to the navbar, create a new CustomLinks like below where 'to' is appended to the URL to get to that page */}
            <CustomLinks to="/">Book Room</CustomLinks>
            <CustomLinks to="/about">About</CustomLinks>
            {/* The logout button is a special case and does not need a CustomLinks component.
                For implementation details for LogoutButton, see LogoutButton.js */}
            <LogoutButton/>
        </ul>
    </nav>
    );
}
// this block handles updating the pages. need this to make the items in the Navbar highlight upon hover and become active on click
function CustomLinks({to, children, ...props}) { 
    // used in combination with the next line to tell the compiler what path should be used
    const resolvedPath = useResolvedPath(to) 
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className= {isActive ? "active" : ""}>
            {/*to is used instead of href for the Link tag*/}
            <Link to={to} {...props}>{children}</Link> 
        </li>
    )
}