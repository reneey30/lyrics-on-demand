import React , { useRef, useState }from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";

function Home() {
  const artistRef = useRef();
  const titleRef = useRef();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [lyrics, setLyrics] = useState();


  async function getLyrics (artist, title) {
    const baseURL = "https://api.lyrics.ovh/v1/";
    artist = artistRef.current.value;
    title = titleRef.current.value;

    if (artist && title) {
      const query = `${baseURL}/${artist}/${title}`;

      console.log(query);

      await fetch(query)
      .then((res) => res.json())
      .then((lyrics) => {
        // console.log(lyrics.lyrics)
        setLyrics(lyrics.lyrics);
      });
      console.log("lyrics are: " + lyrics);
      return "success";

    }

    return "fail";
  }

  async function handleSubmit (e) {
    e.preventDefault ()

    try {
      setError("")
      setLoading(true)
      // await signup(emailRef.current.value, passwordRef.current.value)
      console.log("perform lyrics search of " + artistRef.current.value + " and " + titleRef.current.value)
      const status = await getLyrics(artistRef.current.value, titleRef.current.value);
      console.log("status is: " + status);
      
      // history.push("/")
    } catch {
      setError("Check spelling of artist or title")
    }

    setLoading(false)
  }
  return (
    <>
      <Card style={{ backgroundColor: '#D9D9D9', border: 'none' }}>
        <Card.Body>
          <h2 className="text-center mb-4">SEARCH LYRICS</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="artist">
              <Form.Label>Artist</Form.Label>
              <Form.Control type="text" ref={artistRef} required />
            </Form.Group>
            <Form.Group id="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" ref={titleRef} required />
            </Form.Group>
            <Button variant="primary" disabled={loading} className="w-100 my-4" type="submit">
              Search
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default Home