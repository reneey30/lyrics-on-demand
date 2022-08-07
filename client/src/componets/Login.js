import React, { useRef, useState, useContext } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

import { OurAuthContext } from "../contexts/OurAuthContext";


import { Link, useHistory } from "react-router-dom";
import NavBarTop from "./NavBarTop";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { login } = useAuth();
  const { login, setCurrentUser } = useContext(OurAuthContext);
  

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // await signup(emailRef.current.value, passwordRef.current.value)
      console.log("perform login");
      const res = await login(emailRef.current.value, passwordRef.current.value);
      console.log(res);
      if (res.success){
        setCurrentUser(res.member_email);
        localStorage.setItem("savedUser", res.member_email);
        history.push("/");
      }
      else if (res.error){
        setError(res.error);
      }
      // history.push("/");
    } catch {
      setError("Failed to log in");
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
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button
                  variant="secondary"
                  disabled={loading}
                  className="w-100 my-4"
                  type="submit"
                >
                  Log In
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
            {/* Need an account? Sign Up */}
          </div>
        </div>
      </Container>
    </>
  );
}
