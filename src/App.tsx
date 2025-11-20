import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ServicesPage from "./pages/services/services";
import DetailServices from "./pages/services/detail";
export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <div className="bg-purple-700 p-5 text-white flex items-center justify-between">
        <h1 className="text-3xl font-bold">Mon Site</h1>
        <nav className=" space-x-5">
          <NavLink
            title="page d'acceuil"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="active:text-red-500 "
            title="page a propos"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="active:text-red-500 "
            title="page Services"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="active:text-red-500 "
            title="page a contact"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Routes */}
      <div className="container py-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Routes>
          <Route path="/services/service-one" element={<DetailServices />} />
          <Route path="/services/service-two" element={<DetailServices />} />
          <Route path="/services/service-three" element={<DetailServices />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

{
  /* <Header/>
  <Partenaires/>
  <PremierSection/>
  <What/>
  <Everything/> */
}

// import Everything from "./views/everything"
// import Header from "./views/header"
// import Partenaires from "./views/partenaires"
// import PremierSection from "./views/premier-section"
// import What from "./views/what"
