import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const HomePage = () => {
  const [url, setUrl] = useState("");
  const getWebsiteFootprint = async () => {
    try {
      let response = await fetch(
        `https://api.websitecarbon.com/site?url=https%3A%2F%2F${url}%2F
      `
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    getWebsiteFootprint();
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  return (
    <Container className="page-container">
      <Row className="ms-3">
        <Col xs={12} md={6}>
          <h1 className="fw-bold">Your website footprint?</h1>
          <p className="blueGreen-text text">
            The internet consumes a lot of electricity. 416.2TWh per year to be precise, that's more than the entire
            United Kingdom.
          </p>
          <p className="blueGreen-text text">Do a quick scan of your website to understand its courrent impact.</p>
          <Form onSubmit={handleForm}>
            <Form.Group className="mb-3 w-75" controlId="websiteForm">
              <Form.Label className="blueGreen-text mt-1 fw-bold">
                <small>Your website</small>
              </Form.Label>
              <span className="d-flex">
                <Form.Control
                  required
                  type="text"
                  placeholder="Write website url"
                  onChange={handleUrl}
                  className="blueGreen-border"
                />
                <Button type="submit" className="btn-dark blueGreen blueGreen-border text-light ms-3">
                  Calculate
                </Button>
              </span>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
