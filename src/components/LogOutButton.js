import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Navbar.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
      <button className="logout" onClick={() => logout({ logoutParams: { returnTo: "http://localhost:3000/logout" } })}>
        Log Out
      </button>
  );
};

export default LogoutButton;