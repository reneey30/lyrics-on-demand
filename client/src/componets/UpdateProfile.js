import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import NavBarTop from "./NavBarTop";
// import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      // await signup(emailRef.current.value, passwordRef.current.value)
      console.log("perform signup");
      // history.push("/")
    } catch {
      setError("Failed to create an account");
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
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <Card>
            <Card.Body className="card-form">
              <h2 className="text-center mb-4">Update User Details</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>New Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button
                  variant="secondary"
                  disabled={loading}
                  className="w-100 my-4"
                  type="submit"
                >
                  Update
                </Button>
                <div className="text-center">
                  <a href="/">Cancel</a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
