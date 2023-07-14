import { Col, Row } from "react-bootstrap";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTranslation } from "react-i18next";
const TestResultComponent = ({ result }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="lightGray p-4 rounded-5 ">
        <Row className="align-items-center">
          <Col xs={12} md={6} lg={2}>
            <div className="w-90">
              <CircularProgressbarWithChildren
                value={result.cleanerThan * 100}
                strokeWidth={10}
                styles={buildStyles({
                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,
                  // Colors
                  pathColor: `#255350`,
                  trailColor: "#2c8680",
                })}
              >
                {
                  <div className="text-center text-dark ">
                    <small className="text-body-tertiary fs-small">{t("homePage.resultComponent.rating")}</small>
                    <br />
                    <span className="fs-4">{(result.cleanerThan * 100).toFixed(0)}%</span>
                  </div>
                }
              </CircularProgressbarWithChildren>
            </div>
          </Col>
          <Col xs={12} md={5} className=" mt-2">
            <h2 className="fw-bold blueGreen-text">{t("homePage.resultComponent.title")}</h2>
            <h4 className="fw-bold green-text w-75">
              {result.url.slice(8, result.url.length - 1)} {t("homePage.resultComponent.subtitle1")}
              {(result.cleanerThan * 100).toFixed(0)}
              {t("homePage.resultComponent.subtitle2")}
            </h4>
          </Col>
        </Row>
      </div>
      <Row className="mt-1">
        <Col xs={8} md={6} xl={3} className="mt-3">
          <div className="result-card px-3 py-4 rounded-4">
            <h4 className="green-text fw-bold">{t("homePage.resultComponent.cards.first.title")}</h4>
            {result.green ? (
              <>
                <p className="fs-1 fw-bold mb-0">{t("homePage.resultComponent.cards.first.true")}</p>
                <small className="text-dark">{t("homePage.resultComponent.cards.first.trueDescription")}</small>
              </>
            ) : (
              <>
                <p className="fs-1 fw-bold mb-0">{t("homePage.resultComponent.cards.first.false")}</p>
                <small className="text-dark">{t("homePage.resultComponent.cards.first.falseDescription")}</small>
              </>
            )}
          </div>
        </Col>
        <Col xs={8} md={6} xl={3} className="mt-3">
          <div className="result-card px-3 py-4 rounded-4">
            <h4 className="green-text fw-bold">{t("homePage.resultComponent.cards.second.title")}</h4>

            <p className="fs-1 fw-bold mb-0 d-flex ">
              {result.bytes}
              <span className="fs-5 fw-normal align-self-end">{t("homePage.resultComponent.cards.second.unit")}</span>
            </p>
            <small className="text-dark">{t("homePage.resultComponent.cards.second.description")}</small>
          </div>
        </Col>

        <Col xs={8} md={6} xl={3} className="mt-3">
          <div className="result-card px-3 py-4 rounded-4">
            <h4 className="green-text fw-bold">
              CO<sub>2</sub> {t("homePage.resultComponent.cards.third.title")}
            </h4>

            <p className="fs-1 fw-bold mb-0 d-flex">
              {result.statistics.co2.grid.grams.toString().slice(0, 4)}g
              <span className="fs-5 fw-normal align-self-end">{t("homePage.resultComponent.cards.third.unit")}</span>
            </p>
            <small className="text-dark">{t("homePage.resultComponent.cards.third.description")}</small>
          </div>
        </Col>
        <Col xs={8} md={6} xl={3} className="mt-3">
          <div className="result-card px-3 py-4 rounded-4">
            <h4 className="green-text fw-bold">{t("homePage.resultComponent.cards.fourth.title")}</h4>

            <p className="fs-1 fw-bold mb-0 d-flex">
              {result.statistics.energy.toString().slice(0, 6)}g
              <span className="fs-5 fw-normal align-self-end">{t("homePage.resultComponent.cards.fourth.unit")}</span>
            </p>
            <small className="text-dark">{t("homePage.resultComponent.cards.fourth.description")}</small>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default TestResultComponent;
