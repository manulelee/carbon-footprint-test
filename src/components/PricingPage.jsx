import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BsCheck2Circle } from "react-icons/bs";

const PricingPage = () => {
  const { t } = useTranslation();
  return (
    <Container className="page-container" data-testid="pricingPage">
      <span className="ms-3">
        <h1 className="fw-bold">{t("pricingPage.title")}</h1>
        <p className="blueGreen-text text">{t("pricingPage.firstP")}</p>
        <Row className="mt-5">
          <Col xs={12} md={5} xl={4} className="mt-2 me-4">
            <div className="bg-light price-card px-3 pt-5 pb-2 rounded-4">
              <h3 className="green-text fw-bold">{t("pricingPage.cards.first.title")}</h3>
              <p className="text-dark fs-5">{t("pricingPage.cards.first.description")}</p>
              <p className="green-text fs-3 fw-bold">
                $0
                <span className="text-body-tertiary fw-normal fs-5"> {t("pricingPage.cards.first.unit")}</span>
              </p>
              <Button className="btn-dark green w-100 px-2 text-center mb-4">
                {t("pricingPage.cards.first.button")}
              </Button>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-dark">{t("pricingPage.cards.first.options.first")}</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-green">{t("pricingPage.cards.first.options.second")}</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">{t("pricingPage.cards.first.options.third")}</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">{t("pricingPage.cards.first.options.fourth")}</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">{t("pricingPage.cards.first.options.fifth")}</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">{t("pricingPage.cards.first.options.sixth")}</p>
              </span>
            </div>
          </Col>
          <Col xs={12} md={5} xl={4} className="mt-2 ">
            <div className="bg-light price-card px-3 pt-5 pb-2 rounded-4">
              <h3 className="green-text fw-bold">{t("pricingPage.cards.second.title")}</h3>
              <p className="text-dark fs-5">{t("pricingPage.cards.second.description")}</p>
              <p className="green-text fs-3 fw-bold">
                $180
                <span className="text-body-tertiary fw-normal fs-5"> {t("pricingPage.cards.second.unit")}</span>
              </p>
              <Button className="btn-dark green w-100 px-2 text-center mb-4">
                {t("pricingPage.cards.second.button")}
              </Button>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-dark">{t("pricingPage.cards.second.options.first")}</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-green">{t("pricingPage.cards.second.options.second")}</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">{t("pricingPage.cards.second.options.third")}</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">{t("pricingPage.cards.second.options.fourth")}</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">{t("pricingPage.cards.second.options.fifth")}</p>
              </span>
              <span className="d-flex ">
                <BsCheck2Circle className="align-self-start me-2" />
                <p className="fw-semibold fs-5 text-body-tertiary">{t("pricingPage.cards.second.options.sixth")}</p>
              </span>
            </div>
          </Col>
        </Row>
      </span>
    </Container>
  );
};

export default PricingPage;
