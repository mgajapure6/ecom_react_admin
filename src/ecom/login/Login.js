import React, { useEffect } from "react";
import CIcon from "@coreui/icons-react";
import Spinner from "react-bootstrap/Spinner";
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const [usernameOrEmail, setUsernameOrEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginUrl = "https://mgg-ecomm-api.herokuapp.com/api/auth/signin";


  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      // if form is valid
      console.log("usernameOrEmail", usernameOrEmail);
      console.log("password", password);

      axios.post(loginUrl, { usernameOrEmail: usernameOrEmail, password: password }).then(res => {
        console.log("res", res);
        localStorage.setItem("authUser", res.data.fullToken);
        history.push("/dashboard");
        setLoading(false);
      }).catch(err => {
        console.log("err", err);
        setLoading(false);
        setAlert(true);
      });

    } else {
      setValidated(true);
      setLoading(false);
    }
  };


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="4">
            <Card className="p-4">
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <CIcon name="cil-user" />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username or Email"
                      autoComplete="off"
                      required
                      onChange={(e) => { setUsernameOrEmail(e.target.value); setAlert(false) }}
                    />
                    <Form.Control.Feedback type="invalid">Please enter username or email</Form.Control.Feedback>
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroup.Text>
                      <CIcon name="cil-lock-locked" />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                      required
                      onChange={(e) => { setPassword(e.target.value); setAlert(false); }}
                    />
                    <Form.Control.Feedback type="invalid">Please enter password</Form.Control.Feedback>
                  </InputGroup>
                  <Row>
                    <Col xs="6">
                      <Button variant="primary" className="px-3" type="submit">
                        {loading ? <Spinner
                          animation="border"
                          variant="light"
                          size="sm"
                          className="mr-2"
                        /> : null}
                        Login
                      </Button>
                    </Col>
                    <Col xs="6" className="text-right align-self-center">
                      <Link className="px-0 link" to="/fpassword">
                        Forgot password?
                      </Link>
                    </Col>
                  </Row>
                  <Alert show={alert} variant="danger" className="mt-3" dismissible onClose={() => setAlert(false)}>
                    <Alert.Heading>Error !</Alert.Heading>
                    <hr />
                    <p>
                      Invalid login credentials.
                    </p>
                  </Alert>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
