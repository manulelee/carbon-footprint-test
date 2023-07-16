import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FeaturePage = () => {
  const { t } = useTranslation();
  return (
    <Container className="page-container" data-testid="featuresPage">
      <span className="ms-3">
        <h1 className="fw-bold">{t("featuresPage.title")}</h1>
        <p className="blueGreen-text text">{t("featuresPage.firstP")}</p>
        <Row className="mt-5">
          <Col xs={12} md={6} xl={3} className="mt-2">
            <div className="features-card px-3 pt-5 rounded-4">
              <h4 className="green-text fw-bold">
                CO<sub>2</sub> {t("featuresPage.cards.first.title")}
              </h4>
              <p className="text-dark">{t("featuresPage.cards.first.description")}</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3} className="mt-2">
            <div className="features-card px-3 pt-5 rounded-4">
              <h4 className="green-text fw-bold">{t("featuresPage.cards.second.title")}</h4>
              <p className="text-dark">{t("featuresPage.cards.second.description")}</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3} className="mt-2">
            <div className="features-card px-3 pt-5 rounded-4">
              <h4 className="green-text fw-bold">{t("featuresPage.cards.third.title")}</h4>
              <p className="text-dark">{t("featuresPage.cards.third.description")}</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3} className="mt-2">
            <div className="features-card px-3 pt-5 rounded-4">
              <h4 className="green-text fw-bold"> {t("featuresPage.cards.fourth.title")}</h4>
              <p className="text-dark">{t("featuresPage.cards.fourth.description")}</p>
            </div>
          </Col>
        </Row>
      </span>
    </Container>
  );
};
export default FeaturePage;
