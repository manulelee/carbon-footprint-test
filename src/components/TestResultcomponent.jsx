import { Col, Row } from "react-bootstrap";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const TestResultComponent = ({ result }) => {
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
                    <small className="text-body-tertiary fs-small">Rating</small>
                    <br />
                    <span className="fs-4">{(result.cleanerThan * 100).toFixed(0)}%</span>
                  </div>
                }
              </CircularProgressbarWithChildren>
            </div>
          </Col>
          <Col xs={12} md={5} className=" mt-2">
            <h2 className="fw-bold blueGreen-text">Efficienty Rating</h2>
            <h4 className="fw-bold green-text w-75">
              {result.url.slice(8, result.url.length - 1)} is cleaner than {(result.cleanerThan * 100).toFixed(0)}% of
              web pages tested
            </h4>
          </Col>
        </Row>
      </div>
      <Row className="mt-1">
        <Col xs={8} md={6} xl={3} className="mt-3">
          <div className="result-card px-3 py-4 rounded-4">
            <h4 className="green-text fw-bold">Green site?</h4>
            {result.green ? (
              <>
                <p className="fs-1 fw-bold mb-0">YES</p>
                <small className="text-dark">This website's server runs on green energy</small>
              </>
            ) : (
              <>
                <p className="fs-1 fw-bold mb-0">NO</p>
                <small className="text-dark">This site's server doesn't run on green energy</small>
              </>
            )}
          </div>
        </Col>
        <Col xs={8} md={6} xl={3} className="mt-3">
          <div className="result-card px-3 py-4 rounded-4">
            <h4 className="green-text fw-bold">Bytes</h4>

            <p className="fs-1 fw-bold mb-0 d-flex ">
              {result.bytes}
              <span className="fs-5 fw-normal align-self-end">/page</span>
            </p>
            <small className="text-dark">The ammount of bytes sent by this websites</small>
          </div>
        </Col>

        <Col xs={8} md={6} xl={3} className="mt-3">
          <div className="result-card px-3 py-4 rounded-4">
            <h4 className="green-text fw-bold">
              CO<sub>2</sub> produced
            </h4>

            <p className="fs-1 fw-bold mb-0 d-flex">
              {result.statistics.co2.grid.grams.toString().slice(0, 4)}g
              <span className="fs-5 fw-normal align-self-end">/page load</span>
            </p>
            <small className="text-dark">The approximate ammount of CO2 transferred on eact page load in grams</small>
          </div>
        </Col>
        <Col xs={8} md={6} xl={3} className="mt-3">
          <div className="result-card px-3 py-4 rounded-4">
            <h4 className="green-text fw-bold">Energy in kw</h4>

            <p className="fs-1 fw-bold mb-0 d-flex">
              {result.statistics.energy.toString().slice(0, 6)}g
              <span className="fs-5 fw-normal align-self-end">/page load</span>
            </p>
            <small className="text-dark">The approximate ammount of energy transferred on each page load</small>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default TestResultComponent;
