import "./Navbar.css";
import { Link, useMatch, useResolvedPath} from "react-router-dom" // this library helps with making routes to other pages, offers better functionality than using regular tags

export default function Navbar() {
    return (
    <nav>
        <Link to="/" className="mst-home">Meeting Scheduler</Link> {/*uses the Link tag from react-router-dom*/}
        <ul>
            <CustomLinks to="/bookroom">Book Room</CustomLinks>
            <CustomLinks to="/managebookings">Manage Bookings</CustomLinks> 
            <CustomLinks to="/about">About</CustomLinks>
        </ul>
    </nav>
    );
}

function CustomLinks({to, children, ...props}) { // this block handles updating the pages. need this to make the items in the Navbar highlight upon hover and become active on click
    const resolvedPath = useResolvedPath(to) // used in combination with the next line to tell the compiler what path should be used
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className= {isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link> {/*to is used instead of href for the Link tag*/}
        </li>
    )
}