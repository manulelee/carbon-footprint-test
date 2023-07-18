import { useTranslation } from "react-i18next";
import TestResultComponent from "./TestResultComponent";
import { useState } from "react";
import { Button } from "react-bootstrap";

const PreviousResultComponent = ({ previous }) => {
  const { t } = useTranslation();
  const [collapse, setCollapse] = useState(true);
  return (
    /* Componente test precedenti */

    <div className="bg-light p-4 rounded-5 mt-3" data-testid="previousResult">
      <span className={`d-flex justify-content-between align-items-end ${!collapse && "mb-3"}`}>
        <p className={`green-text m-0`}>
          <span className={`${collapse && `fw-bold text-uppercase`}`}>{t("homePage.previousResult.title")}</span>
          <span className={`${!collapse && `fw-bold text-uppercase`}`}>
            {" " + previous.url.slice(8, previous.url.length - 1)}
          </span>
        </p>
        <Button
          role="button"
          className="bg-transparent border-0 blueGreen-text m-0"
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          {collapse ? t("homePage.previousResult.expand") : t("homePage.previousResult.collapse")}
        </Button>
      </span>
      <span className={collapse ? "d-none" : ""}>
        <TestResultComponent result={previous}></TestResultComponent>
      </span>
    </div>
  );
};
export default PreviousResultComponent;
