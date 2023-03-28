// Login Page
import "./pageCSS/Login.css";
import { Link } from "react-router-dom";

export default function Home() {
    return <div className="Login-body">
        <h1>Log in to begin booking</h1>
        <div style={{display:'flex', flexDirection:'column', minWidth:"15rem"}}>
            <text className="textboxHeader" style={{marginTop: '1rem', display: 'flex', justifySelf:'left'}}>Email:</text>
            <input></input>
            <text className="textboxHeader" style={{marginTop: '1rem', display: 'flex', justifySelf:'left'}}>Password:</text>
            <input></input>
        <Link to="/bookroom" className="login-button">Login</Link>
        </div>
    </div>
}