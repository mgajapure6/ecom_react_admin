import React from "react";
import CIcon from "@coreui/icons-react";
import Spinner from "react-bootstrap/Spinner";
import { Button, Card, Col, Container, Form, InputGroup, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgetPassword = () => {

    const [loading, setLoading] = React.useState(false);
    const [validated, setValidated] = React.useState(false);
    const [alert, setAlert] = React.useState(true);

    const handleSubmit = (event) => {
        setLoading(true);
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            // if form is valid
            setAlert(true);
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
                                    <h3>Forget Password</h3>
                                    <p className="text-muted">Please enter your email to reset your password</p>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>
                                            <CIcon name="cil-user" />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            autoComplete="off"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">Please enter email</Form.Control.Feedback>
                                    </InputGroup>
                                    <Row>
                                        <Col xs="6">
                                            <Button variant="primary" className="px-2" type="submit">
                                                {loading ? <Spinner
                                                    animation="border"
                                                    variant="light"
                                                    size="sm"
                                                    className="mr-1"
                                                /> : null}
                                                Forget Password
                                            </Button>
                                        </Col>
                                        <Col xs="6" className="text-right align-self-center">
                                            <Link className="px-0 link" to="/login">
                                                Back to login
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Alert show={alert} variant="danger" className="mt-3" dismissible onClose={() => setAlert(false)}>
                                        <Alert.Heading>Error !</Alert.Heading>
                                        <hr />
                                        <p>
                                            Invalid email address.
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

export default ForgetPassword;
