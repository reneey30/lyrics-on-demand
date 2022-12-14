import React, { useContext, useEffect, useState } from "react";
// import { OurAuthContext } from "../contexts/OurAuthContext";
import { DataContext } from "../contexts/DataContext";
import { useHistory } from "react-router-dom";
import { Card, Container, Alert } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import NavBarTop from "./NavBarTop";

function Fav({ subject, index, deleteFavs, seeFavs }) {

  return (
    <li>
      <AiFillStar color="#964B00" size={32} />{" "}
      <span className="click-fav clickable" onClick={() => seeFavs(index)}>{subject}</span>{" "}
      <span className="clickable" onClick={() => deleteFavs(index)}>
        <BsTrash />
      </span>
    </li>
  );
}

function Favourites() {
  // const { memberId } = useContext(OurAuthContext);
  const { setLyrics } = useContext(DataContext);
  const memberId = localStorage.getItem("savedId");
  const [favs, setFavs] = useState({});
  const route = `/favs/member/${memberId}`;
  const history = useHistory();

  async function fetchFavs(route) {
    await fetch(route)
      .then((r) => r.json())
      .then((data) => {
        setFavs(data);
        // return data;
      });
  }

  useEffect(() => {
    async function fetchFavsUE(route) {
      await fetch(route)
        .then((r) => r.json())
        .then((data) => {
          setFavs(data);

          // return data;
        });
    }

    fetchFavsUE(route);
  }, [route]);

  async function seeFavs(id) {
  
    const query = `/favs/${id}`;

    await fetch(query)
        .then((res) => res.json())
        .then((lyrics) => {
          // console.log(lyrics.lyrics)
          if (lyrics.error){
            console.error(lyrics.error);
            throw lyrics.error;
          }

          setLyrics({
            subject: lyrics.subject,
            lyrics: lyrics.lyrics,
          });

          // redirect to lyrics
          history.push("/lyrics");
        });
  }

  async function deleteFavs(id) {
    
    const route = `/favs/${id}`;
    await fetch(route, { method: "DELETE" })
      // .then(history.push("/"));
      .then(async ()=> await fetchFavs(`/favs/member/${memberId}`))

  }

  return (
    <>
      <NavBarTop />
      <Container
        className="d-flex justify-content-center mt-4"
        style={{ minHeight: "100vh" }}
      >
        <Card style={{ backgroundColor: "#D9D9D9", border: "none" }}>
          <Card.Body>
            <h2 className="text-center mb-4">FAVOURITE LYRICS</h2>
            <div>
              <ul style={{ listStyleType: "none" }}>
                {Array.isArray(favs) && favs.length ? (
                  favs.map((fav, index) => (
                    <Fav
                      subject={fav.subject}
                      key={fav.id}
                      index={fav.id}
                      deleteFavs={deleteFavs}
                      seeFavs={seeFavs}
                    />
                  ))
                ) : (
                  <div>
                    <Alert>No lyrics found</Alert>
                  </div>
                )}
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Favourites;
