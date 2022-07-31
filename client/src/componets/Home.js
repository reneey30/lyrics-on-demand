import React , { useRef, useState }from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";

function Home() {
  const artistRef = useRef();
  const titleRef = useRef();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit (e) {
    e.preventDefault ()

    try {
      setError("")
      setLoading(true)
      // await signup(emailRef.current.value, passwordRef.current.value)
      console.log("perform lyrics search of " + artistRef.current.value + " and " + titleRef.current.value)
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