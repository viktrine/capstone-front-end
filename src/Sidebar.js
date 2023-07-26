import React, { useState } from 'react';
import './index';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <ul>
        <li onClick={toggleCollapse}>Guests
          <ul className={`sub-menu ${collapsed ? 'collapsed' : ''}`}>
            <li>Add Guest</li>
            <li>Edit Guest</li>
            <li>Delete Guest</li>
            <li>Get all Guests</li>
          </ul>
        </li>
        <li onClick={toggleCollapse}>Events
          <ul className={`sub-menu ${collapsed ? 'collapsed' : ''}`}>
            <li>Add Event</li>
            <li>Edit Event</li>
            <li>Delete Event</li>
            <li>Show all Events</li>
          </ul>
        </li>
        <li onClick={toggleCollapse}>Parking
          <ul className={`sub-menu ${collapsed ? 'collapsed' : ''}`}>
            <li>Book Parking</li>
            <li>Add Parking</li>
            <li>Delete Parking</li>
            <li>Reavail Parking</li>
            <li>Show all Parkings</li>
          </ul>
        </li>
        <li>Reports</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
