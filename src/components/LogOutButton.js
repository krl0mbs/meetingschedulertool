// This file is used to create the logout button seen at the right of the navigation bar

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Navbar.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
      // To change the page that the logout button redirects to, change the URL in the line below
      // This URL must also be changed on the Auth0 website
      <button className="logout" onClick={() => logout({ logoutParams: { returnTo: "http://localhost:3000/logout" } })}>
        Log Out
      </button>
  );
};

export default LogoutButton;