import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/bookroom">
        Book Room
      </a>
      <a className="menu-item" href="/checkbookings">
        Check Bookings
      </a>
      <a className="menu-item" href="/managebookings">
        Manage Bookings
      </a>
    </Menu>
  );
};