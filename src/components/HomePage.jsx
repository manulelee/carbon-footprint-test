import { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import TestResultComponent from "./TestResultcomponent";
import PreviousResultComponent from "./PreviousResultComponent";

const HomePage = () => {
  const [url, setUrl] = useState("");
  const [wrongUrl, setWrongUrl] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previousResult, setPreviousResult] = useState([]);

  const getWebsiteFootprint = async () => {
    setIsError(false);
    setIsLoading(true);
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      let response = await fetch(`/api/site?url=https%3A%2F%2F${url}%2F`, requestOptions);
      if (response.ok) {
        let result = await response.json();
        console.log(result);
        setResult(result);
        setIsLoading(false);
        document.getElementById("websiteForm").value = "";
      } else {
        setIsError(true);
        setWrongUrl(url);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    getWebsiteFootprint();
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  return (
    <Container className="page-container">
      <Row className="ms-3">
        <Col xs={12} md={8} xl={6}>
          {!isError && !result && (
            <>
              <h1 className="fw-bold">Your website footprint?</h1>
              <p className="blueGreen-text text">
                The internet consumes a lot of electricity. 416.2TWh per year to be precise, that's more than the entire
                United Kingdom.
              </p>
              <p className="blueGreen-text text">Do a quick scan of your website to understand its courrent impact.</p>
            </>
          )}

          {isError && (
            <>
              <h1 className="fw-bold">Ops...</h1>
              <p className="green-text text">
                It looks like we could not successfully calculate the carbon impact for
                <span className="fw-bold"> {wrongUrl}</span>.
              </p>
              <p className="green-text text">Please double check the page url or write a new one.</p>
            </>
          )}
          {!result && (
            <Form onSubmit={handleForm}>
              <Form.Group className="mb-3 w-75" controlId="websiteForm">
                <Form.Label className="blueGreen-text mt-1 fw-bold">
                  <small>Your website</small>
                </Form.Label>
                <span className="d-flex">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Write website url"
                    onChange={handleUrl}
                    className="blueGreen-border"
                  />
                  <Button type="submit" className="btn-dark blueGreen blueGreen-border text-light ms-3">
                    Calculate
                  </Button>
                </span>
              </Form.Group>
            </Form>
          )}
          {isLoading && (
            <div className="text-center green-text">
              <Spinner animation="border" role="status" />
            </div>
          )}
        </Col>
      </Row>
      <Row className="ms-3 ">
        {result && (
          <>
            <h3 className="fw-bold green-text">
              Your website footprint{" "}
              <span className="blueGreen-text fs-4">{result.url.slice(8, result.url.length - 1)}</span>
            </h3>
            <div className="bg-light p-4 rounded-5 mt-3">
              <TestResultComponent result={result}></TestResultComponent>
              <Row>
                <Col className="d-flex justify-content-end pt-4">
                  <p
                    className="blueGreen-text"
                    onClick={() => {
                      previousResult.unshift(result);
                      setResult("");
                      setUrl("");
                      console.log("Risultati precedenti:");
                      console.log(previousResult);
                    }}
                  >
                    Calculate other site
                  </p>
                </Col>
              </Row>
            </div>
          </>
        )}
      </Row>
      <Row className="ms-3 mt-5">
        {previousResult.map((previous, index) => (
          <PreviousResultComponent previous={previous} key={index}></PreviousResultComponent>
        ))}
      </Row>
    </Container>
  );
};
export default HomePage;
