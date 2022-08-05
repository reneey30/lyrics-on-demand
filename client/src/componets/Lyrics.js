import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { DataContext } from "../contexts/DataContext";
import { Alert, Container } from "react-bootstrap";
import NavBarTop from './NavBarTop';

function Lyrics() {
  const { lyrics } = useContext(DataContext);

  const single = { ...lyrics };

  const isEmpty = Object.keys(single).length === 0;

  return (
    <>
      <NavBarTop/>
      <Container
          className="d-flex justify-content-center mt-4"
          style={{ minHeight: "100vh" }}
        >
      {isEmpty ? (
        <Alert variant="danger">
          "No lyrics selected, go to homepage or favourites to search"
        </Alert>
      ) : (
        <div className="overflow-scroll lyrics p-4">
          <div className="d-inline text-center m-4">
            <span style={{ fontSize: "36px" }}>{single.subject}</span>{" "}
            <AiFillStar color="#964B00" size={32} />{" "}
            <span style={{ color: "gray", fontSize: "18px" }}>
              Favourite this song
            </span>
          </div>
          <p className="mt-2">{single.lyrics}</p>
        </div>
      )}
      </Container>
    </>
  );
}

export default Lyrics;
