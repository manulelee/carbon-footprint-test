import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      message: message,
    };
    console.log("Form data:");
    console.log(data);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Container className="page-container">
      <Row className="ms-3">
        <Col xs={12} md={8} lg={6}>
          <h1 className="fw-bold">{t("contactPage.title")}</h1>
          <p className="blueGreen-text text">{t("contactPage.firstP")}</p>

          <Form onSubmit={handleForm}>
            <Form.Group className="mb-3 w-75">
              <Form.Label className="blueGreen-text mt-1 fw-bold" for="name">
                <small>{t("contactPage.form.name.label")}</small>
              </Form.Label>
              <Form.Control
                id="name"
                className="blueGreen-border w-75"
                required
                type="text"
                placeholder={t("contactPage.form.name.placeholder")}
                onChange={handleName}
                autoComplete="on"
              />
              <Form.Label className="blueGreen-text mt-1 fw-bold" for="email">
                <small>{t("contactPage.form.email.label")}</small>
              </Form.Label>
              <Form.Control
                id="email"
                className="blueGreen-border w-75"
                required
                type="email"
                placeholder={t("contactPage.form.email.placeholder")}
                onChange={handleEmail}
                autoComplete="on"
              />
              <Form.Label className="blueGreen-text mt-1 fw-bold" for="message">
                <small>{t("contactPage.form.message.label")}</small>
              </Form.Label>
              <Form.Control
                id="message"
                className="blueGreen-border w-75"
                required
                as="textarea"
                rows={4}
                placeholder={t("contactPage.form.message.placeholder")}
                onChange={handleMessage}
              />
              <Button type="submit" className="btn-dark blueGreen blueGreen-border text-light mt-3">
                {t("contactPage.form.button")}
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
