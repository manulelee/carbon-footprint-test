import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin, BsMessenger, BsWhatsapp } from "react-icons/bs";
import { BiSolidFlame } from "react-icons/bi";
import { useTranslation } from "react-i18next";
const FooterComponent = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    console.log(email);
    //send form;
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <footer data-testid="footer">
      <Container fluid className="py-5 px-5 fs-small ">
        <Row className="pb-5 justify-content-between">
          <Col md={6} xs={12} className="text-light ">
            <span className="d-flex align-items-center mb-2">
              <BiSolidFlame className="fs-1" />
              <h4>LIMIT</h4>
            </span>
            <p className="pe-5">{t("footer.firstP")}</p>
          </Col>
          <Col md={4} xs={12}>
            <h4 className="fw-bold">Newsletter</h4>
            <p>{t("footer.secondP")}</p>
            <Form onSubmit={handleForm}>
              <Form.Group className="mb-3" controlId="footerForm">
                <Form.Label>
                  <small>{t("footer.form.label")}</small>
                </Form.Label>
                <span className="d-flex">
                  <Form.Control
                    required
                    type="email"
                    placeholder={t("footer.form.placeholder")}
                    onChange={handleEmail}
                    className="w-75 bg-transparent text-light"
                  />
                  <Button type="submit" className="btn-light green text-light ms-3">
                    {t("footer.form.button")}
                  </Button>
                </span>
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-end fs-3">
              <Link
                to={"https://www.linkedin.com/LimitFootprintCalculator"}
                target="_blank"
                aria-label="Link to linkedin page"
                className="text-decoration-none text-light"
              >
                <BsLinkedin className="me-2" />
              </Link>
              <Link
                to={"https://wa.me/+39XXXXXXXXX"}
                target="_blank"
                aria-label="Link to whatsapp page"
                className="text-decoration-none text-light"
              >
                <BsWhatsapp className="me-2" />
              </Link>
              <Link
                to={"https://www.instagram.com/LimitFootprintCalculator"}
                target="_blank"
                aria-label="Link to Instagram page"
                className="text-decoration-none text-light"
              >
                <BsInstagram className="me-2" />
              </Link>
              <Link
                to={"https://www.messenger.com/LimitFootprintCalculator"}
                target="_blank"
                aria-label="Link to messenger page"
                className="text-decoration-none text-light"
              >
                <BsMessenger className="me-2" />
              </Link>
              <Link
                to={"https://www.facebook.com/LimitFootprintCalculator"}
                target="_blank"
                aria-label="Link to facebook page"
                className="text-decoration-none text-light"
              >
                <BsFacebook className="me-2" />
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <Link to={"aboutUs"} className="text-decoration-none text-light me-4">
              {t("footer.links.aboutUs")}
            </Link>
            <Link to={"contactUs"} className="text-decoration-none text-light me-4">
              {t("footer.links.contact")}
            </Link>
            <Link to={"privacyPolicy"} className="text-decoration-none text-light me-4">
              {t("footer.links.privacy")}
            </Link>
          </Col>
          <Col xs={12} lg={6} className="text-end">
            {" "}
            &copy; 2000 - {new Date().getFullYear()}, {t("footer.copyright")}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default FooterComponent;
