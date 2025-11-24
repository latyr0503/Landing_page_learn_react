import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ServicesPage from "./pages/services/services";
import DetailServices from "./pages/services/detail";
import Header from "./views/header";
export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Routes>
        <Route path="/services/:service" element={<DetailServices />} />
      </Routes>
    </BrowserRouter>
  );
}
