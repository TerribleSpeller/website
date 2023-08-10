import Time from "./components/App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css"; //!!Uses !important so overrides everything.
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/AboutUs";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Worlds from "./components/pages/Worlds";
import KaisarverseMain from "./components/pages/kaisarverse-main";

function App() {
  return (
    <Router>
      <div className="flex-column">
        <div className="page-content">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="*" element={<Error />} />
              <Route path="/website/" element={<Home />} />
              <Route path="/website/about" element={<About />} />
              <Route path="/website/worlds" element={<Worlds />} />
              <Route path="/website/worlds/kaisarverse" element={<KaisarverseMain />}/>

            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
