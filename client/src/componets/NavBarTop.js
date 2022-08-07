import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import { OurAuthContext } from "../contexts/OurAuthContext";

function NavBarTop() {
  // const {currentUser} = useAuth();

  const { currentUser, logout } = useContext(OurAuthContext);

  return (
    <nav className="navbar justify-content-between">
      <h2 className="mx-4">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Lyrics On Demand
        </Link>
      </h2>
      {currentUser ? (
        <Dropdown className="mx-4">
          <Dropdown.Toggle variant="outline" id="dropdown-basic">
            {/* user@email.com */}
            {currentUser}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/favourites">Favourite List</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/updateprofile">Edit User Details</Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <div className="mx-4">
          Not Logged in
        </div>
      )}
    </nav>
  );
}

export default NavBarTop;
