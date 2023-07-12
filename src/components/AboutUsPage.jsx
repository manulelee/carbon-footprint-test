import { Col, Container, Row } from "react-bootstrap";

const AboutUsPage = () => {
  return (
    <Container className="page-container ">
      <Row className="ms-3">
        <Col xs={12} md={8} lg={6}>
          <h1 className="fw-bold">Limit team</h1>
          <p className="blueGreen-text text">We are dedicated to make a difference.</p>
          <p className="blueGreen-text text">
            You can see in an instant which pages uses the most energy and how much CO2 you've emitted and compensated
            this month. Recive tips on hou to reduce the carbon fottprint of the pages on your websites.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutUsPage;
