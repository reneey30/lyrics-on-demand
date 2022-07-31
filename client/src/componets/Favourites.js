import React from 'react';
import { Card } from "react-bootstrap";
import { AiFillStar } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

function Fav({ subject, removeFav }) {
  return (
    <li >
      <AiFillStar color="#964B00" size={32}/> {subject} <BsTrash/>
    </li>
  )
  
}

function Favourites() {

  const favs = [ 
    {
      subject: "Bon Jovi - Clouds",
      lyrics: "abcd"
    },
    {
      subject: "Patoranking - Suh Different",
      lyrics: "abcd"
    },
    {
      subject: "Khaligraph Jones - Mbona",
      lyrics: "abcd"
    },
    {
      subject: "Fully Focus x Bien - Dimension",
      lyrics: "abcd"
    }
  ]


  return (
    <>
      <Card style={{ backgroundColor: '#D9D9D9', border: 'none' }}>
        <Card.Body>
          <h2 className="text-center mb-4">FAVOURITE LYRICS</h2>
          <div>
            <ul style={{listStyleType: "none"}}>
              {favs.map((fav, index) => (
                <Fav subject={fav.subject}/>
              ))}
            </ul>
          </div>
        </Card.Body>

      </Card>
    </>
  )
}

export default Favourites