import { Col, Container, Row } from "react-bootstrap";

const FeaturePage = () => {
  return (
    <Container className="page-container">
      <span className="ms-3">
        <h1 className="fw-bold">Limit Features</h1>
        <p className="blueGreen-text text">What can you calculate</p>
        <Row className="mt-5">
          <Col xs={8} md={6} xl={3} className="mt-2">
            <div className="features-card px-3 pt-5 rounded-4">
              <h4 className="green-text fw-bold">
                CO<sub>2</sub> produced
              </h4>
              <p className="text-dark">The approximate ammount of CO2 transferred on each page load in grams</p>
            </div>
          </Col>
          <Col xs={8} md={6} xl={3} className="mt-2">
            <div className="features-card px-3 pt-5 rounded-4">
              <h4 className="green-text fw-bold">Bytes per page</h4>
              <p className="text-dark">The ammount of bytes sent by this websites</p>
            </div>
          </Col>
          <Col xs={8} md={6} xl={3} className="mt-2">
            <div className="features-card px-3 pt-5 rounded-4">
              <h4 className="green-text fw-bold">Green site?</h4>
              <p className="text-dark">
                Understand if the site is using all green energy or is running on bot standard energy
              </p>
            </div>
          </Col>
          <Col xs={8} md={6} xl={3} className="mt-2">
            <div className="features-card px-3 pt-5 rounded-4">
              <h4 className="green-text fw-bold"> % Efficiency</h4>
              <p className="text-dark">
                Understand the efficiency rating of your website, learn hoy it stands out compared to the rest of the
                tested sites.
              </p>
            </div>
          </Col>
        </Row>
      </span>
    </Container>
  );
};
export default FeaturePage;
