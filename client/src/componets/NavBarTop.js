import React, { useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useHistory } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import { OurAuthContext } from "../contexts/OurAuthContext";
import { Button } from "react-bootstrap";

function NavBarTop() {
  // const {currentUser} = useAuth();

  const {currentUser, login, logout } = useContext(OurAuthContext);
  const history = useHistory();

  return (
    <nav className="navbar justify-content-between">
      <h2 className="mx-4"><a href="/" style={{textDecoration: "none", color:"inherit"}}>Lyrics On Demand</a></h2>
      {currentUser ?
              (
                <Dropdown className="mx-4">
        <Dropdown.Toggle variant="outline" id="dropdown-basic">
            
             {/* user@email.com */}
             {currentUser}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="/favourites">Favourite List</Dropdown.Item>
            <Dropdown.Item href="/updateprofile">Edit User Details</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
              )
             :
             <Button className="mx-4" onClick={login}>Log In</Button>}
      
    </nav>
  );
}

export default NavBarTop;
