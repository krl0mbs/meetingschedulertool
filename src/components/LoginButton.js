// This file is used to create the login button seen after logging out

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../pages/pageCSS/Logout.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button 
      style={
        {
          backgroundColor:'#e0e0e0',
          color:'#6f48eb',
          fontSize:'16pt',
          display:'flex',
          textDecoration:'none',
          gap:'0',
          marginTop:'2rem',
          border:'5rem',
          borderRadius:'4px',
          padding:'.5rem',
          justifyContent:'center'
        }
      } 
      // loginWithRedirect is included in the Auth0 library
      onClick={() => loginWithRedirect()}>
      Log In
    </button>
  )
};

export default LoginButton;