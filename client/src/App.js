import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SDA from "./screens/SDA";
import Idees from "./screens/Idees";
import Collaboration from "./screens/Collaboration";
import Reclamation from "./screens/Reclamation";
import Accueil from "./screens/Accueil";
import About from "./screens/About";
import { Profile } from "./screens/Profile";
import Navbar from "./components/Navbar";
import FAQ from "./screens/FAQ";
import Abonner from "./screens/Abonner";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Idées" element={<Idees />} />
          <Route path="/Collaboration" element={<Collaboration />} />
          <Route path="/Réclamations" element={<Reclamation />} />
          <Route path="/SDA" element={<SDA />} />
          <Route path="/About" element={<About />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/abonner" element={<Abonner />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
