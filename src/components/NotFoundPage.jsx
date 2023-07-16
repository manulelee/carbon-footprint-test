import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { RiEmotionUnhappyLine } from "react-icons/ri";
const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Container className="page-container" data-testid="notFoundPage">
      <span className="ms-3">
        <h1 className="fw-bold text-center">{t("notFoundPage.title")}</h1>
        <p className="blueGreen-text text text-center">
          {t("notFoundPage.firstP")} <RiEmotionUnhappyLine />
        </p>
      </span>
    </Container>
  );
};

export default NotFoundPage;
