import "./css/App.css";
import backgroundImage from "./assets/background.jpg";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";
import Home from "./pages/Home";
import Services from "./pages/Services";
import TherapeuticApproach from "./pages/TherapeuticApproach";
import Contact from "./pages/Contact";
import Therapists from "./pages/Therapists";

function App() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/therapist" element={<Therapists />} />
        <Route path="/services" element={<Services />} />
        <Route path="/therapeutic-approach" element={<TherapeuticApproach />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
