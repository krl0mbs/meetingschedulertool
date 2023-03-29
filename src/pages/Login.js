// Login Page
import "./pageCSS/Login.css";
import LoginButton from "../components/LoginButton";
import LogOutButton from "../components/LogOutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export default function Home() {
    const {isLoading, loginWithRedirect, isAuthenticated} = useAuth0();

    useEffect(() => {
        (async function login() {
            if (!isLoading && !isAuthenticated) {
                await loginWithRedirect();
            }
        })();
    }, []);

    return <div className="Login-body">
        <h1>Log in to begin booking</h1>
        <div style={{display:'flex', flexDirection:'column', minWidth:"15rem"}}>
            <text className="textboxHeader" style={{marginTop: '1rem', display: 'flex', justifySelf:'left'}}>Email:</text>
            <input></input>
            <text className="textboxHeader" style={{marginTop: '1rem', display: 'flex', justifySelf:'left'}}>Password:</text>
            <input></input>
        {/* <Link to="/bookroom" className="login-button">Login</Link> */}
            <LoginButton/>
            <LogOutButton/>
        </div>
    </div>
}