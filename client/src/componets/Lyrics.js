import React, { useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { DataContext } from "../contexts/DataContext";
import { Alert, Container } from "react-bootstrap";
import NavBarTop from "./NavBarTop";

function Lyrics() {
  const { lyrics } = useContext(DataContext);
  const [notification, setNotification] = useState();
  const [savedFlag, setSavedFlag] = useState(false);


  const single = { ...lyrics };

  const isEmpty = Object.keys(single).length === 0;

  async function favsFetch(payload) {
    const route = "/favs";
    return await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((r) => {
      return r.json();
    });
  }

  async function saveFav() {
    setNotification("Saving lyrics to favourites ");
    console.log("Saving lyrics to favourites ");
    const [artist, title] = single.subject.split(" - ");

    const memberId = localStorage.getItem("savedId");

    const payload = {
      artist: artist,
      title: title,
      lyrics: single.lyrics,
      member_id: memberId,
    };

    const result = await favsFetch(payload);
    if (result.id) {
      setNotification(`Saved lyrics to favourites list successfully`);
      console.log("saved successfully!");
      setSavedFlag(true);
    }
  }

  return (
    <>
      <NavBarTop />

      {isEmpty ? (
        <Alert variant="danger">
          "No lyrics selected, go to homepage or favourites to search"
        </Alert>
      ) : (
        <Container
          className="d-flex justify-content-center mt-4"
          style={{ minHeight: "100vh" }}
        >
          <div className="overflow-scroll lyrics p-4">
            {notification && <Alert variant="success">{notification}</Alert>}
            <div className="d-inline text-center m-4">
              <span style={{ fontSize: "36px" }}>{single.subject}</span>{" "}
              <AiFillStar color="#964B00" size={32} />{" "}
              {savedFlag
              ?
              <span> Lyrics available in favourites list </span>
              :
              <span
                className="click-fav clickable"
                style={{ color: "gray", fontSize: "18px" }}
                onClick={() => saveFav()}
              >
                Favourite this song
              </span>}
            </div>
            <p className="mt-2">{single.lyrics}</p>
          </div>
        </Container>
      )}
    </>
  );
}

export default Lyrics;
