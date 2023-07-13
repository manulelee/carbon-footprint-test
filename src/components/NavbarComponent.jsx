import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { BiLogoLinkedin, BiSolidFlame } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Container fluid className="fs-small bg-light sticky-top">
      <Row className="px-4 py-3">
        <Col>
          <Link to={"https://wa.me/+39XXXXXXXXX"} target="_blank" className="text-decoration-none ">
            <BsWhatsapp className="me-4 green-text" />
          </Link>
          <Link
            to={"https://www.linkedin.com/LimitFootprintCalculator"}
            target="_blank"
            className="text-decoration-none green-text"
          >
            <BiLogoLinkedin className="me-4" />
          </Link>
        </Col>
      </Row>
      <Navbar expand="lg">
        <Container className="pb-2">
          <Navbar.Brand>
            <BiSolidFlame className="fs-2 green-text" />
            <span className="fs-5 fw-bold green-text">LIMIT</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link me-2" to="/features">
                Features
              </Link>
              <Link className="nav-link me-2" to="/pricing">
                Pricing
              </Link>
              <Link className="nav-link me-2" to="/">
                Carbon test
              </Link>
              <Link className="nav-link me-2" to="/contactUs">
                Contact us
              </Link>
              <Link className="nav-link me-2" to="/aboutUs">
                About us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavbarComponent;
