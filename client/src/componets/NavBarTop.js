import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function NavBarTop() {
  return (
    <nav className="navbar justify-content-between">
      <h2 className="mx-4">Lyrics On Demand</h2>
      <Dropdown className="mx-4">
        <Dropdown.Toggle variant="outline" id="dropdown-basic">
            user@email.com
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Favourite List</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Edit User Details</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
}

export default NavBarTop;
