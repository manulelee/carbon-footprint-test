import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  return (
    <Container className="page-container ms-5 ps-5">
      <Row className="ms-3">
        <Col xs={12} md={8} lg={6}>
          <h1 className="fw-bold">{t("privacyPolicy.title")}</h1>
          <p className="blueGreen-text text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quos voluptatibus veritatis non rem quas
            ipsum assumenda debitis explicabo velit repudiandae maxime vitae minima nihil itaque beatae dicta odit hic
            et nesciunt dolores? Reiciendis voluptate, excepturi incidunt ducimus ex esse et doloribus sunt, harum quas
            modi voluptates. Aliquid voluptates officia, aspernatur dolore, blanditiis vel alias numquam laudantium
            doloremque hic sed deserunt distinctio. Iusto, ad placeat vero illum, eaque earum hic dolore reiciendis
            porro totam repudiandae nam debitis nisi possimus ratione suscipit odit et exercitationem. Quae assumenda
            veniam aperiam laudantium molestias repudiandae, nisi dolore nobis eius quo voluptas, doloribus culpa
            mollitia?.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicyPage;
