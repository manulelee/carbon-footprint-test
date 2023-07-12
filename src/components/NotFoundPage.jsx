import { Container } from "react-bootstrap";
import { RiEmotionUnhappyLine } from "react-icons/ri";
const NotFoundPage = () => {
  return (
    <Container className="page-container">
      <span className="ms-3">
        <h1 className="fw-bold text-center">404 - Page not found</h1>
        <p className="blueGreen-text text text-center">
          This page does not exist <RiEmotionUnhappyLine />
        </p>
      </span>
    </Container>
  );
};

export default NotFoundPage;
