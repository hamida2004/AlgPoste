import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SDA from "./screens/SDA";
import Idees from "./screens/Idees";
import Collaboration from "./screens/Collaboration";
import Reclamation from "./screens/Reclamation";
import Accueil from "./screens/Accueil";
import About from "./screens/About";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
