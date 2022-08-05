import React from "react";
import { Card, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import NavBarTop from "./NavBarTop";

function Fav({ subject, removeFav }) {
  return (
    <li>
      <AiFillStar color="#964B00" size={32} /> {subject} <BsTrash />
    </li>
  );
}

function Favourites() {
  const favs = [
    {
      subject: "Bon Jovi - Clouds",
      lyrics: "abcd",
    },
    {
      subject: "Patoranking - Suh Different",
      lyrics: "abcd",
    },
    {
      subject: "Khaligraph Jones - Mbona",
      lyrics: "abcd",
    },
    {
      subject: "Fully Focus x Bien - Dimension",
      lyrics: "abcd",
    },
  ];

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
                {favs.map((fav, index) => (
                  <Fav subject={fav.subject} />
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Favourites;
