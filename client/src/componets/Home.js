import { useRef, useState, useContext } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { DataContext } from "../contexts/DataContext";
import { useHistory } from "react-router-dom";
import NavBarTop from "./NavBarTop";

function Home() {
  const history = useHistory();
  const artistRef = useRef();
  const titleRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const [lyrics, setLyrics] = useState();
  const { setLyrics } = useContext(DataContext);

  async function getLyrics(artist, title) {
    const baseURL = "https://api.lyrics.ovh/v1/";
    artist = artistRef.current.value;
    title = titleRef.current.value;

    if (artist && title) {
      const artistAndTitle = [artist, title];
      const subject = artistAndTitle.join(" - ");
      const query = `${baseURL}/${artist}/${title}`;

      console.log(query);

      await fetch(query)
        .then((res) => res.json())
        .then((lyrics) => {
          // console.log(lyrics.lyrics)
          if (lyrics.error){
            console.error(lyrics.error);
            throw lyrics.error;
          }
          setLyrics({
            subject: subject,
            lyrics: lyrics.lyrics,
          });
          // redirect to lyrics
          history.push("/lyrics");
        });
      // console.log("lyrics are: " + lyrics);
      // return "success";
    }

    // return "fail";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // await signup(emailRef.current.value, passwordRef.current.value)
      console.log(
        "perform lyrics search of " +
          artistRef.current.value +
          " and " +
          titleRef.current.value
      );
      // const status = await getLyrics(artistRef.current.value, titleRef.current.value);
      await getLyrics(artistRef.current.value, titleRef.current.value);
      // console.log("status is: " + status);

      // history.push("/")
    } catch {
      setError("No lyrics found. Check spelling of artist or title");
    }

    setLoading(false);
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
              <Button
                variant="primary"
                disabled={loading}
                className="w-100 my-4"
                type="submit"
              >
                Search
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Home;
