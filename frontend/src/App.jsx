import "./css/App.css";
import backgroundImage from "./assets/background.jpg";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Therapists from "./pages/Therapists";

function App() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/therapist" element={<Therapists />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
