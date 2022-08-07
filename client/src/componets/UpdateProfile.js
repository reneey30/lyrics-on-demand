import React, { useRef, useState, useContext } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import NavBarTop from "./NavBarTop";
import { OurAuthContext } from "../contexts/OurAuthContext";
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory()
  const { update, setCurrentUser } = useContext(OurAuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      // await signup(emailRef.current.value, passwordRef.current.value)
      console.log("perform update");
      const res = await update(emailRef.current.value, passwordRef.current.value);
      console.log(res);
      if (res.member_email){
        setCurrentUser(res.member_email);
        localStorage.setItem("savedUser", res.member_email);
        history.push("/");
      }
      else if (res.error){
        setError(res.error);
      }
      // history.push("/")
    } catch {
      setError("Failed to update details");
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
