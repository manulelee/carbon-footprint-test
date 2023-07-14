import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <Container className="page-container ">
      <Row className="ms-3">
        <Col xs={12} md={8} lg={6}>
          <h1 className="fw-bold">{t("aboutPage.title")}</h1>
          <p className="blueGreen-text text">{t("aboutPage.firstP")}</p>
          <p className="blueGreen-text text">{t("aboutPage.secondP")}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutUsPage;
