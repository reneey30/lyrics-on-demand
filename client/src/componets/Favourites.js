import React, { useContext, useEffect, useState } from "react";
import { OurAuthContext } from "../contexts/OurAuthContext";
import { Card, Container, Alert } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import NavBarTop from "./NavBarTop";

function Fav({ subject, index, deleteFavs, seeFavs }) {
  // function removeFav(index){

  // }
  // function seeLyrics(index){

  // }
  return (
    <li>
      <AiFillStar color="#964B00" size={32} />{" "}
      <span onClick={() => seeFavs(index)}>{subject}</span>{" "}
      <span onClick={() => deleteFavs(index)}>
        <BsTrash />
      </span>
    </li>
  );
}

function Favourites() {
  const { memberId } = useContext(OurAuthContext);
  const [favs, setFavs] = useState({});
  const route = `/favs/member/${memberId}`;

  async function fetchFavs(route) {
    await fetch(route)
      .then((r) => r.json())
      .then((data) => {
        setFavs(data);
        console.log(data);
        // return data;
      });
  }

  useEffect(() => {
    console.log("from useEffect: ");
    console.log(route);

    async function fetchFavsUE(route) {
      await fetch(route)
        .then((r) => r.json())
        .then((data) => {
          setFavs(data);
          console.log(data);
          // return data;
        });
    }

    fetchFavsUE(route);
  }, [memberId]);

  function seeFavs(id) {
    console.log("id from seeFavs");
    console.log(id);
  }
  async function deleteFavs(id) {
    console.log("id from deleteFavs");
    console.log(id);

    const route = `/favs/${id}`;
    await fetch(route, { method: "DELETE" })
      .then(fetchFavs(`/favs/member/${memberId}`));

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
                      key={fav.subject}
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
