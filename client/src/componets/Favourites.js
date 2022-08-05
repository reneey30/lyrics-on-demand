import React, {useState} from "react";
import { Card, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import NavBarTop from "./NavBarTop";

function Fav({ subject, index }) {
  // function removeFav(index){

  // }
  // function seeLyrics(index){
    
  // }
  return (
    <li>
      <AiFillStar color="#964B00" size={32} /> {subject} <BsTrash />
    </li>
  );
}

function Favourites() {
  // const [favIds, setFavIds] = useState([]);


  // replace favs with database results
  const favs = [
    {
      subject: "Bon Jovi - Clouds",
      lyrics: "abcd",
      fav_id: 81
    },
    {
      subject: "Patoranking - Suh Different",
      lyrics: "abcd",
      fav_id: 85
    },
    {
      subject: "Khaligraph Jones - Mbona",
      lyrics: "abcd",
      fav_id: 77
    },
    {
      subject: "Fully Focus x Bien - Dimension",
      lyrics: "abcd",
      fav_id: 34
    },
  ];

  // favs.map((fav, index)=>{
  //   const tempIds = [...favIds];
  //   tempIds.push(fav.fav_id);
  //   setFavIds(tempIds);
  //   console.log(tempIds);
  // });

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
                  <Fav subject={fav.subject} key={fav.subject} index={index}/>
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
