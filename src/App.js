import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./components/HomePage";
import FooterComponent from "./components/FooterComponent";
import FeaturePage from "./components/FeaturesPage";
import PricingPage from "./components/PricingPage";
import ContactPage from "./components/ContactPage";
import NotFoundPage from "./components/NotFoundPage";
import AboutUsPage from "./components/AboutUsPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";

function App() {
  return (
    <Container fluid className="p-0">
      <div className="App">
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/features" element={<FeaturePage />}></Route>
            <Route path="/pricing" element={<PricingPage />}></Route>
            <Route path="/contactUs" element={<ContactPage />}></Route>
            <Route path="/aboutUs" element={<AboutUsPage />}></Route>
            <Route path="/privacyPolicy" element={<PrivacyPolicyPage />}></Route>
            <Route path="/*" element={<NotFoundPage />}></Route>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
