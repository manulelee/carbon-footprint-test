import { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import TestResultComponent from "./TestResultcomponent";
import PreviousResultComponent from "./PreviousResultComponent";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const [url, setUrl] = useState("");
  const [wrongUrl, setWrongUrl] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previousResult, setPreviousResult] = useState(
    localStorage.getItem("previousResult") ? JSON.parse(localStorage.getItem("previousResult")) : []
  );

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
          {/* Testo iniziale */}

          {!isError && !result && (
            <>
              <h1 className="fw-bold">{t("homePage.test.title")}</h1>
              <p className="blueGreen-text text">{t("homePage.test.firstP")}</p>
              <p className="blueGreen-text text">{t("homePage.test.secondP")}</p>
            </>
          )}

          {/* Test esito negativo */}

          {isError && (
            <>
              <h1 className="fw-bold">{t("homePage.testError.title")}</h1>
              <p className="green-text text">
                {t("homePage.testError.firstP")}
                <span className="fw-bold"> {wrongUrl}</span>.
              </p>
              <p className="green-text text">{t("homePage.testError.secondP")}</p>
            </>
          )}

          {/* Form test */}

          {!result && (
            <Form onSubmit={handleForm}>
              <Form.Group className="mb-3 w-75" controlId="websiteForm">
                <Form.Label className="blueGreen-text mt-1 fw-bold">
                  <small>{t("homePage.form.label")}</small>
                </Form.Label>
                <span className="d-flex">
                  <Form.Control
                    required
                    type="text"
                    placeholder={t("homePage.form.placeholder")}
                    onChange={handleUrl}
                    className="blueGreen-border"
                  />
                  <Button type="submit" className="btn-dark blueGreen blueGreen-border text-light ms-3">
                    {t("homePage.form.button")}
                  </Button>
                </span>
              </Form.Group>
              {isLoading && (
                <div className="text-center green-text w-75">
                  <Spinner animation="border" role="status" />
                </div>
              )}
            </Form>
          )}
        </Col>
      </Row>
      <Row className="ms-3 ">
        {/* Test esito positivo */}

        {result && (
          <>
            <h3 className="fw-bold green-text">
              {t("homePage.testSuccessfull.title")}
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
                      localStorage.setItem("previousResult", JSON.stringify(previousResult));
                      // console.log("Risultati precedenti:");
                      // console.log(previousResult);
                    }}
                  >
                    {t("homePage.testSuccessfull.link")}
                  </p>
                </Col>
              </Row>
            </div>
          </>
        )}
      </Row>

      {/* Risultati test precedenti */}

      <Row className="ms-3 mt-5">
        {previousResult.map((previous, index) => (
          <PreviousResultComponent previous={previous} key={index}></PreviousResultComponent>
        ))}
      </Row>
    </Container>
  );
};
export default HomePage;
