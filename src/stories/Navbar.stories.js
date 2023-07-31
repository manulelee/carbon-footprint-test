import { BrowserRouter } from "react-router-dom";

import NavbarComponent from "../components/NavbarComponent";

export default {
  title: "Navbar",
  component: NavbarComponent,
};

export const Navbar = {
  render: () => (
    <BrowserRouter>
      <NavbarComponent />
    </BrowserRouter>
  ),
};
