import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BiLogoLinkedin, BiSolidFlame } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="fs-small bg-light sticky-top" data-testid="navbar">
      <Row className="px-4 py-3">
        <Col>
          <Link
            to={"https://wa.me/+39XXXXXXXXX"}
            target="_blank"
            aria-label="Link to whatsapp page"
            className="text-decoration-none "
          >
            <BsWhatsapp className="me-4 green-text" />
          </Link>
          <Link
            to={"https://www.linkedin.com/LimitFootprintCalculator"}
            target="_blank"
            aria-label="Link to Linkedin page"
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
                {t("navbar.features")}
              </Link>
              <Link className="nav-link me-2" to="/pricing">
                {t("navbar.pricing")}
              </Link>
              <Link className="nav-link me-2" to="/">
                {t("navbar.carbonTest")}
              </Link>
              <Link className="nav-link me-2" to="/contactUs">
                {t("navbar.contactUs")}
              </Link>
              <Link className="nav-link me-2" to="/aboutUs">
                {t("navbar.aboutUs")}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavbarComponent;
