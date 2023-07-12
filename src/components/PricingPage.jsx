import { Button, Col, Container, Row } from "react-bootstrap";
import { BsCheck2Circle } from "react-icons/bs";

const PricingPage = () => {
  return (
    <Container className="page-container">
      <span className="ms-3">
        <h1 className="fw-bold">Discover our pricing</h1>
        <p className="blueGreen-text text">What to make your website climate neutral? Let us help you out</p>
        <Row className="mt-5">
          <Col xs={12} md={5} xl={4} className="mt-2 me-4">
            <div className="bg-light price-card px-3 pt-5 pb-2 rounded-4">
              <h3 className="green-text fw-bold">FREE</h3>
              <p className="text-dark fs-5">For those who want to try our software with no committent</p>
              <p className="green-text fs-3 fw-bold">
                $0
                <span className="text-body-tertiary fw-normal fs-5"> /year</span>
              </p>
              <Button className="btn-dark green w-100 px-2 text-center mb-4">Buy</Button>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-dark">Advanced analytics and custom branding.</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-green">Access to exclusive content or resourecs</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">Increased storage or usage limits</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">Priority customer support</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">Customization options</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">No advertisments</p>
              </span>
            </div>
          </Col>
          <Col xs={12} md={5} xl={4} className="mt-2 ">
            <div className="bg-light price-card px-3 pt-5 pb-2 rounded-4">
              <h3 className="green-text fw-bold">BUSINESS</h3>
              <p className="text-dark fs-5">For those who want to try our software with no committent</p>
              <p className="green-text fs-3 fw-bold">
                $180
                <span className="text-body-tertiary fw-normal fs-5"> /year</span>
              </p>
              <Button className="btn-dark green w-100 px-2 text-center mb-4">Buy</Button>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-dark">Advanced analytics and custom branding.</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-green">Access to exclusive content or resourecs</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">Increased storage or usage limits</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">Priority customer support</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">Customization options</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">No advertisments</p>
              </span>
            </div>
          </Col>
        </Row>
      </span>
    </Container>
  );
};

export default PricingPage;
